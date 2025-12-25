import React, { useState, useEffect } from 'react';
import ScrollToTopButton from "../components/ScrollToTopButton"
import Appointment from "../components/Appointment";

const AppointmentP = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // تنظيف event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Appointment />
            <ScrollToTopButton isActive={isActive} />
        </div>
    );
};

export default AppointmentP;