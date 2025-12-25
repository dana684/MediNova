import React, { useState, useEffect } from 'react';
import ScrollToTopButton from "../components/ScrollToTopButton"
import Doctors from "../components/Doctors";

const DoctorP = () => {
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
            <Doctors />
            <ScrollToTopButton isActive={isActive} />
        </div>
    );
};

export default DoctorP;