import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate checking for existing session
        const storedUser = localStorage.getItem('breakpoint_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Simulate login with deterministic logic for professional feel
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
            licenseKey: licenseKey
        };
        setUser(userData);
        localStorage.setItem('breakpoint_user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('breakpoint_user');
    };

    const upgrade = (newTier) => {
        if (user) {
            let licenseKey = user.licenseKey;
            let expiry = user.expiry;
            let tierName = newTier;

            // Normalize tier names for the identity engine
            if (newTier === 'Professional' || newTier === 'Pro') {
                tierName = 'Pro';
                licenseKey = `BRK-PRO-${Math.random().toString(36).substring(2, 15).toUpperCase()}`;
                expiry = '2026-06-30';
            } else if (newTier === 'Enterprise' || newTier === 'Elite') {
                tierName = 'Elite';
                licenseKey = `BRK-ELITE-${Math.random().toString(36).substring(2, 15).toUpperCase()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
                expiry = '2026-12-31';
            }

            const updatedUser = {
                ...user,
                tier: tierName,
                licenseKey: licenseKey,
                expiry: expiry
            };
            setUser(updatedUser);
            localStorage.setItem('breakpoint_user', JSON.stringify(updatedUser));
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, upgrade, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
