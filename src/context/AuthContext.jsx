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
        // Simulate login
        const userData = {
            email,
            id: 'u123',
            name: 'Security Admin',
            tier: 'Free', // Default tier
            status: 'Active',
            expiry: '2026-12-31',
            licenseKey: 'BRK-FREE-XXXX-YYYY'
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
            const updatedUser = { ...user, tier: newTier };
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
