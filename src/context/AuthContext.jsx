import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for session in localStorage
        const storedUser = localStorage.getItem('breakpoint_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Fallback dummy login
        const isProfessional = email.includes('admin') || email.includes('pro');
        const isElite = email.includes('elite');

        let tier = 'Free';
        let licenseKey = `BRK-FREE-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

        if (isElite) {
            tier = 'Elite';
            licenseKey = `BRK-ELITE-${Math.random().toString(36).substring(2, 15).toUpperCase()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        } else if (isProfessional) {
            tier = 'Pro';
            licenseKey = `BRK-PRO-${Math.random().toString(36).substring(2, 15).toUpperCase()}`;
        }

        const userData = {
            email,
            id: 'u' + Math.floor(Math.random() * 1000),
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            tier: tier,
            status: 'Active',
            expiry: isElite ? '2026-12-31' : (isProfessional ? '2026-06-30' : 'Permanent'),
            licenseKey: licenseKey,
            joined: new Date().toISOString().split('T')[0]
        };
        setUser(userData);
        localStorage.setItem('breakpoint_user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('breakpoint_user');
    };

    const verifyPaymentSession = async (sessionId) => {
        try {
            const response = await fetch(`/api/v1/verify-payment?session_id=${sessionId}`);
            const data = await response.json();

            if (data.status === 'verified') {
                const updatedUser = {
                    ...user,
                    tier: data.tier,
                    licenseKey: data.licenseKey,
                    expiry: data.expiry,
                    subscriptionStatus: 'Verified',
                    lastPayment: new Date().toISOString().split('T')[0]
                };
                setUser(updatedUser);
                localStorage.setItem('breakpoint_user', JSON.stringify(updatedUser));
                return { success: true, tier: data.tier };
            }
            return { success: false, error: data.error };
        } catch (err) {
            console.error("Verification failed:", err);
            return { success: false, error: "Network error during verification." };
        }
    };

    const startPaymentFlow = async (plan) => {
        if (!user) return { error: 'Not logged in' };

        try {
            const response = await fetch('/api/v1/create-checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan, userEmail: user.email })
            });
            const data = await response.json();

            if (data.url) {
                window.location.href = data.url; // Redirect to Real Stripe Checkout
                return { success: true };
            }
            return { error: data.error || 'Failed to create payment session' };
        } catch (err) {
            return { error: 'Stripe integration error. Check your server keys.' };
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, startPaymentFlow, verifyPaymentSession, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
