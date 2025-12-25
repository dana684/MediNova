import React, { useState, useEffect, useRef } from 'react';
import { FaHospitalAlt, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import DarkModeToggle from "../components/DarkModeToggle";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('home');
    const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        switch (location.pathname) {
            case '/': setActiveNav('home'); break;
            case '/about': setActiveNav('about'); break;
            case '/services': setActiveNav('service'); break;
            case '/packages': setActiveNav('pricing'); break;
            case '/contact': setActiveNav('contact'); break;
            default: setActiveNav('');
        }
    }, [location]);

    const navItems = [
        { name: 'Home', path: "/", id: 'home' },
        { name: 'About', path: "/about", id: 'about' },
        { name: 'Service', path: "/services", id: 'service' },
        { name: 'Pricing', path: "/packages", id: 'pricing' },
        {
            name: 'Pages',
            id: 'pages',
            dropdown: [
                { name: 'Blog Grid', path: '#blog-grid' },
                { name: 'Blog Detail', path: '#blog-detail' },
                { name: 'The Team', path: "/doctor" },
                { name: 'Testimonial', path: "/testimonials" },
                { name: 'Appointment', path: "/appointment" },
                { name: 'Search', path: "/find" }
            ]
        },
        { name: 'Contact', path: "/contact", id: 'contact' },
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsPagesDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
                setMobilePagesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDropdownNavigate = (path, isMobile = false) => {
        if (path.startsWith('/')) navigate(path);
        else window.location.hash = path;

        setIsPagesDropdownOpen(false);
        if (isMobile) {
            setMobilePagesOpen(false);
            setIsMobileMenuOpen(false);
        }
    };

    const handleNavItemClick = (item) => {
        if (item.path) {
            navigate(item.path);
            setActiveNav(item.id);
        } else {
            setIsPagesDropdownOpen(prev => !prev);
        }
    };

    const handleMobileNavItemClick = (item) => {
        if (item.path) {
            navigate(item.path);
            setActiveNav(item.id);
            setIsMobileMenuOpen(false);
            setMobilePagesOpen(false);
        } else {
            setMobilePagesOpen(prev => !prev);
        }
    };

    return (
        <nav className="relative bg-white dark:bg-[rgb(10,25,47)] shadow-md py-4 sticky top-0 z-50">
            <div className="center-container flex justify-between items-center">

                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#13c5dd] to-[#1d2a4dcc] rounded-full flex items-center justify-center">
                        <FaHospitalAlt className="text-white text-xl sm:text-2xl" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#1d2a4d] dark:text-white">
                        MED<span className="text-[#13c5dd] dark:text-[#13c5dd]">INOVA</span>
                    </h1>
                </div>

                {/* Desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map(item => (
                        <div key={item.id} className="relative" ref={item.dropdown ? dropdownRef : null}>
                            {item.dropdown ? (
                                <>
                                    <button
                                        onClick={() => handleNavItemClick(item)}
                                        onMouseEnter={() => setIsPagesDropdownOpen(true)}
                                        className={`flex items-center nav-link font-medium transition-all duration-300 
                                                text-[#1d2a4d] dark:text-gray-300 
                                                hover:text-[#13c5dd] dark:hover:text-[#13c5dd]
                                                ${activeNav === item.id ? 'active-nav dark:active-nav-dark' : ''}`}
                                    >
                                        {item.name}
                                        <FaChevronDown />
                                    </button>
                                    {/* Dropdown Menu */}
                                    {isPagesDropdownOpen && (
                                        <div
                                            onMouseLeave={() => setIsPagesDropdownOpen(false)}
                                            className="absolute top-full mt-2 bg-white dark:bg-zinc-800 rounded-lg shadow-lg  border-gray-100 dark:border-zinc-700 py-2 z-50"
                                        >
                                            {item.dropdown.map(d => (
                                                <button
                                                    key={d.name}
                                                    onClick={() => handleDropdownNavigate(d.path)}
                                                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 
                                                            hover:bg-gradient-to-r from-[#13c5dd] to-[#1d2a4dcc] 
                                                            hover:text-white dark:hover:text-white transition-colors"
                                                >
                                                    {d.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => handleNavItemClick(item)}
                                    className={`nav-link font-medium transition-all duration-300 
                                            text-[#1d2a4d] dark:text-gray-300 
                                            hover:text-[#13c5dd] dark:hover:text-[#13c5dd]
                                            ${activeNav === item.id ? 'active-nav dark:active-nav-dark' : ''}`}
                                >
                                    {item.name}
                                </button>
                            )}
                        </div>
                    ))}

                    {/* Dark Mode Desktop */}
                    <div className="flex items-center justify-center w-10 h-10 cursor-pointer ml-4">
                        <DarkModeToggle />
                    </div>
                </div>

                {/* Mobile */}
                <div className="lg:hidden relative" ref={mobileMenuRef}>
                    <div className="flex items-center gap-3">
                        {/* إزالة DarkModeToggle من هنا */}

                        <button onClick={() => setIsMobileMenuOpen(p => !p)}
                            className="text-[#1d2a4d] dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-50"
                        >
                            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-white dark:bg-[#0a192f] shadow-lg border-t border-gray-200 dark:border-gray-800 py-4 px-6 z-40 mt-2">
                            <div className="flex flex-col space-y-4">
                                {navItems.map(item => (
                                    <div key={item.id}>
                                        <button
                                            onClick={() => handleMobileNavItemClick(item)}
                                            className={`flex items-center justify-between w-full py-3 px-4 text-left font-medium transition-all duration-300 
                                                    text-[#1d2a4d] dark:text-gray-300 
                                                    hover:text-[#13c5dd] dark:hover:text-[#13c5dd]
                                                    rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800
                                                    ${activeNav === item.id ? 'text-[#13c5dd] dark:text-[#13c5dd] bg-gray-50 dark:bg-gray-800' : ''}`}
                                        >
                                            {item.name}
                                            {item.dropdown && <FaChevronDown className={`ml-1 text-sm transition-transform ${mobilePagesOpen ? 'rotate-180' : ''}`} />}
                                        </button>

                                        {item.dropdown && mobilePagesOpen && (
                                            <div className="ml-6 mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                                                {item.dropdown.map(d => (
                                                    <button
                                                        key={d.name}
                                                        onClick={() => handleDropdownNavigate(d.path, true)}
                                                        className="block w-full text-left py-2 px-4 text-gray-700 dark:text-gray-300 
                                                                hover:bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/10 
                                                                hover:text-[#13c5dd] dark:hover:text-[#13c5dd] 
                                                                rounded transition-colors"
                                                    >
                                                        {d.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Dark Mode Toggle داخل قائمة الموبايل */}
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <div className="flex justify-center">
                                        <DarkModeToggle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;