import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeartbeat,
    faHome,
    faSearch,
    faUserMd,
    faStethoscope,
    faExclamationTriangle,
    faArrowLeft,
    faHospital,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // إنشاء جسيمات متحركة
        const newParticles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.2,
            delay: Math.random() * 2
        }));
        setParticles(newParticles);

        // تحريك الجسيمات
        const interval = setInterval(() => {
            setParticles(prev => prev.map(p => ({
                ...p,
                x: (p.x + p.speedX) % 100,
                y: (p.y + p.speedY) % 100
            })));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const quickLinks = [
        { icon: faHome, text: 'Home', to: '/' },
        { icon: faUserMd, text: 'Find Doctor', to: '/find-doctor' },
        { icon: faStethoscope, text: 'Services', to: '/services' },
        { icon: faHospital, text: 'About Us', to: '/about' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fcfd] to-[#eff5f9] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden relative">
            {/* Floating Background Elements */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-[#13c5dd] dark:bg-[#22d3ee] animate-float"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                        animationDelay: `${particle.delay}s`,
                        filter: 'blur(1px)'
                    }}
                />
            ))}

            {/* Pulse Rings */}
            <div className="absolute inset-0 overflow-hidden">
                {[0, 1, 2].map((ring) => (
                    <div
                        key={ring}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#13c5dd] dark:border-[#22d3ee] animate-ping-slow"
                        style={{
                            width: `${400 + ring * 200}px`,
                            height: `${400 + ring * 200}px`,
                            animationDelay: `${ring * 0.5}s`,
                            opacity: 0.1 - ring * 0.03
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in-up">
                        <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 dark:from-[#22d3ee]/20 dark:to-[#22d3ee]/5 rounded-full mb-6 shadow-lg dark:shadow-[#22d3ee]/10">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="text-[#13c5dd] dark:text-[#22d3ee] mr-3 animate-pulse" />
                            <span className="text-[#13c5dd] dark:text-[#22d3ee] font-bold text-sm uppercase tracking-wider">
                                PAGE NOT FOUND
                            </span>
                        </div>

                        {/* Animated 404 Number */}
                        <div className="relative mb-8">
                            <div className="text-[180px] md:text-[220px] font-black text-gray-800/10 dark:text-white/10 tracking-tighter animate-pulse-slow">
                                404
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="text-[180px] md:text-[220px] font-black text-[#13c5dd] dark:text-[#22d3ee] tracking-tighter animate-bounce-slow">
                                        404
                                    </div>
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 text-[180px] md:text-[220px] font-black text-[#13c5dd]/20 dark:text-[#22d3ee]/20 tracking-tighter blur-lg animate-pulse-slow">
                                        404
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Oops! <span className="text-[#13c5dd] dark:text-[#22d3ee]">Page</span> Not Found
                        </h1>

                        <div className="w-24 h-1 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] mx-auto mb-8 animate-expand-width"></div>

                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            The page you are looking for might have been removed, had its name changed,
                            or is temporarily unavailable.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-8 md:p-10 mb-12 border border-gray-100 dark:border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>

                        {/* Medical Illustration */}
                        <div className="flex flex-col items-center mb-10">
                            <div className="relative mb-8">
                                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#13c5dd]/20 to-[#1d7a8c]/20 dark:from-[#22d3ee]/20 dark:to-[#0ea5e9]/20 flex items-center justify-center animate-pulse-slow">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] flex items-center justify-center animate-ping-slow">
                                        <FontAwesomeIcon
                                            icon={faHeartbeat}
                                            className="text-white text-5xl animate-beat"
                                        />
                                    </div>
                                </div>

                                {/* Floating Medical Icons */}
                                <div className="absolute -top-2 -right-2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                    <FontAwesomeIcon icon={faStethoscope} className="text-[#13c5dd] dark:text-[#22d3ee]" />
                                </div>
                                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
                                    <FontAwesomeIcon icon={faUserMd} className="text-[#13c5dd] dark:text-[#22d3ee]" />
                                </div>
                                <div className="absolute -top-2 -left-2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
                                    <FontAwesomeIcon icon={faHospital} className="text-[#13c5dd] dark:text-[#22d3ee]" />
                                </div>
                            </div>

                            <div className="text-center max-w-lg mx-auto">
                                <h3 className="text-2xl font-bold text-[#1d2a4d] dark:text-white mb-4">
                                    Don't Worry, We're Here to Help
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    While you're here, you can explore our medical services or get back to safety.
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="mb-10">
                            <h4 className="text-xl font-semibold text-[#1d2a4d] dark:text-white mb-6 text-center">
                                Quick Navigation
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {quickLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.to}
                                        className="group p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:from-[#13c5dd]/10 hover:to-[#1d7a8c]/10 dark:hover:from-[#22d3ee]/10 dark:hover:to-[#0ea5e9]/10 border border-gray-200 dark:border-gray-700 hover:border-[#13c5dd] dark:hover:border-[#22d3ee] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center animate-fade-in-up"
                                        style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                                    >
                                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#13c5dd]/10 to-[#1d7a8c]/10 dark:from-[#22d3ee]/10 dark:to-[#0ea5e9]/10 rounded-full flex items-center justify-center group-hover:from-[#13c5dd] group-hover:to-[#1d7a8c] dark:group-hover:from-[#22d3ee] dark:group-hover:to-[#0ea5e9] transition-all duration-300">
                                            <FontAwesomeIcon
                                                icon={link.icon}
                                                className="text-[#13c5dd] dark:text-[#22d3ee] group-hover:text-white transition-colors duration-300"
                                            />
                                        </div>
                                        <span className="font-medium text-gray-800 dark:text-white group-hover:text-[#13c5dd] dark:group-hover:text-[#22d3ee] transition-colors duration-300">
                                            {link.text}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                to="/"
                                className="group relative overflow-hidden bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg text-center animate-fade-in-up"
                                style={{ animationDelay: '1.2s' }}
                            >
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    <FontAwesomeIcon icon={faHome} />
                                    <span>Return to Homepage</span>
                                </span>
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="group relative overflow-hidden border-2 border-[#13c5dd] dark:border-[#22d3ee] text-[#13c5dd] dark:text-[#22d3ee] px-8 py-4 rounded-full font-bold hover:bg-gradient-to-r hover:from-[#13c5dd]/10 hover:to-transparent dark:hover:from-[#22d3ee]/10 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                                style={{ animationDelay: '1.4s' }}
                            >
                                <div className="absolute inset-0 bg-[#13c5dd]/5 dark:bg-[#22d3ee]/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <span>Go Back</span>
                                </span>
                            </button>
                        </div>

                        {/* Search Box */}
                        <div className="bg-gradient-to-r from-[#13c5dd]/5 to-[#1d2a4d]/5 dark:from-[#22d3ee]/5 dark:to-[#1e293b]/5 rounded-xl p-6 border border-[#13c5dd]/10 dark:border-[#22d3ee]/10 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                            <h5 className="text-lg font-semibold text-[#1d2a4d] dark:text-white mb-4 text-center">
                                Search Our Website
                            </h5>
                            <div className="relative max-w-md mx-auto">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-full px-6 py-4 pl-12 focus:outline-none focus:border-[#13c5dd] dark:focus:border-[#22d3ee] focus:ring-2 focus:ring-[#13c5dd]/20 dark:focus:ring-[#22d3ee]/20 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-700 dark:text-gray-300"
                                />
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#13c5dd] dark:text-[#22d3ee]"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-md transition-all duration-300">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Still can't find what you're looking for?
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#13c5dd] dark:hover:text-[#22d3ee] transition-colors duration-300">
                                <FontAwesomeIcon icon={faPhone} className="text-[#13c5dd] dark:text-[#22d3ee]" />
                                <span>+1 234 567 890</span>
                            </a>
                            <a href="mailto:help@medinova.com" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#13c5dd] dark:hover:text-[#22d3ee] transition-colors duration-300">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#13c5dd] dark:text-[#22d3ee]" />
                                <span>help@medinova.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
                
                @keyframes beat {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }
                
                @keyframes ping-slow {
                    0% {
                        transform: translateX(-50%) translateY(-50%) scale(0.8);
                        opacity: 1;
                    }
                    70%, 100% {
                        transform: translateX(-50%) translateY(-50%) scale(2.5);
                        opacity: 0;
                    }
                }
                
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes expand-width {
                    from {
                        width: 0;
                        opacity: 0;
                    }
                    to {
                        width: 6rem;
                        opacity: 1;
                    }
                }
                
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-beat {
                    animation: beat 1s ease-in-out infinite;
                }
                
                .animate-ping-slow {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-expand-width {
                    animation: expand-width 1s ease-out forwards;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default NotFound;