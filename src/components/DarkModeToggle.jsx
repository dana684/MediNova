import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }, []);

    return (
        <button
            onClick={toggleDarkMode}
            className=" absolute top-5 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full  transition-all duration-500 hover:scale-110 group"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                {/* حركة التدوير والتحريك للأيقونات */}
                <FaSun
                    className={`absolute transition-all inline-block duration-500 ${isDarkMode
                        ? 'opacity-0 scale-50 rotate-90 translate-y-2 text-gray-300'
                        : 'opacity-100 scale-100 rotate-0 translate-y-0 text-amber-500 group-hover:rotate-12'
                        }`}
                />
                <FaMoon
                    className={`absolute transition-all inline-block duration-500 ${isDarkMode
                        ? 'opacity-100 scale-100 rotate-0 translate-y-0 text-gray-300 group-hover:-rotate-12'
                        : 'opacity-0 scale-50 -rotate-90 -translate-y-2 text-gray-400'
                        }`}
                />
            </div>

            {/* تأثير إشعاعي خفيف */}
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDarkMode
                ? 'bg-gradient-to-r from-gray-700/20 to-zinc-800/20'
                : 'bg-gradient-to-r from-amber-500/10 to-yellow-500/10'
                }`}></div>
        </button>
    );
};

export default DarkModeToggle;