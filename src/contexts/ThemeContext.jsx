import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // تحقق من التفضيل المحفوظ
        const savedTheme = localStorage.getItem('theme');
        // تحقق من تفضيلات النظام
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        return savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    });

    useEffect(() => {
        // تحديث localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // إضافة/إزالة الكلاس من الـ body
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};