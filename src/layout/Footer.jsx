import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { faHeart, faEnvelope, faPhone, faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const quickLinks = ['Home', 'About Us', 'Our Services', 'Meet The Team', 'Latest Blog', 'Contact Us'];
    const date = new Date().getFullYear();
    return (
        <footer className="bg-[#0a192f] text-white pt-16 pb-8">
            <div className="center-container">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Contact Info */}
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 rounded-full mb-6 shadow-sm shadow-[#13c5dd]/10">
                            <FontAwesomeIcon icon={faHeart} className="text-[#13c5dd] mr-2" />
                            <span className="text-[#13c5dd] font-semibold text-sm uppercase tracking-wider">
                                GET IN TOUCH
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            No dolore ipsum accusam no lorem.<br />
                            Invidunt sed cilia kasd cilia et et dolor sed dolor
                        </p>
                        <div className="space-y-4">
                            <p className="flex items-center group hover:text-[#13c5dd] transition-colors duration-300">
                                <span className="mr-3 bg-[#1d2a4d] p-2 rounded-full group-hover:bg-[#13c5dd]/20 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#13c5dd]" />
                                </span>
                                <span className="text-gray-300 group-hover:text-white">123 Street, New York, USA</span>
                            </p>
                            <p className="flex items-center group hover:text-[#13c5dd] transition-colors duration-300">
                                <span className="mr-3 bg-[#1d2a4d] p-2 rounded-full group-hover:bg-[#13c5dd]/20 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-[#13c5dd]" />
                                </span>
                                <a href="mailto:info@example.com" className="text-gray-300 group-hover:text-white hover:underline">info@example.com</a>
                            </p>
                            <p className="flex items-center group hover:text-[#13c5dd] transition-colors duration-300">
                                <span className="mr-3 bg-[#1d2a4d] p-2 rounded-full group-hover:bg-[#13c5dd]/20 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faPhone} className="text-[#13c5dd]" />
                                </span>
                                <a href="tel:+01234567890" className="text-gray-300 group-hover:text-white hover:underline">+012 345 67890</a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 rounded-full mb-6 shadow-sm shadow-[#13c5dd]/10">
                            <FontAwesomeIcon icon={faHeart} className="text-[#13c5dd] mr-2" />
                            <span className="text-[#13c5dd] font-semibold text-sm uppercase tracking-wider">
                                QUICK LINKS
                            </span>
                        </div>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-[#13c5dd] transition-all duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                            <FontAwesomeIcon icon={faChevronRight} className="text-[#13c5dd] text-xs" />
                                        </span>
                                        <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#13c5dd] after:transition-all after:duration-300 group-hover:after:w-full">
                                            {link}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Links */}
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 rounded-full mb-6 shadow-sm shadow-[#13c5dd]/10">
                            <FontAwesomeIcon icon={faHeart} className="text-[#13c5dd] mr-2" />
                            <span className="text-[#13c5dd] font-semibold text-sm uppercase tracking-wider">
                                POPULAR LINKS
                            </span>
                        </div>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-[#13c5dd] transition-all duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                            <FontAwesomeIcon icon={faChevronRight} className="text-[#13c5dd] text-xs" />
                                        </span>
                                        <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#13c5dd] after:transition-all after:duration-300 group-hover:after:w-full">
                                            {link}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 rounded-full mb-6 shadow-sm shadow-[#13c5dd]/10">
                            <FontAwesomeIcon icon={faHeart} className="text-[#13c5dd] mr-2" />
                            <span className="text-[#13c5dd] font-semibold text-sm uppercase tracking-wider">
                                NEWSLETTER
                            </span>
                        </div>
                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full bg-[#1d2a4d] border border-[#2a3a6a] rounded-lg p-4 pl-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13c5dd] focus:border-transparent transition-all duration-300 hover:border-[#13c5dd]/50"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#13c5dd] to-[#0ea5e9] text-white font-medium px-6 rounded-lg hover:from-[#0ea5e9] hover:to-[#13c5dd] transition-all duration-300 shadow-lg hover:shadow-[#13c5dd]/30">
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4 text-white text-lg">FOLLOW US</h4>
                            <div className="flex space-x-3">
                                {[
                                    { icon: <FaLinkedinIn />, label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
                                    { icon: <FaFacebookF />, label: 'Facebook', color: 'hover:bg-[#1877f2]' },
                                    { icon: <FaTwitter />, label: 'Twitter', color: 'hover:bg-[#1da1f2]' },
                                    { icon: <FaInstagram />, label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743]' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 bg-[#1d2a4d] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                                    >
                                        <div className={`w-full h-full bg-[#1d2a4d] rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}>
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#1d2a4d] pt-8 text-center">
                    <p className="text-gray-400 mb-2">
                        {new Date().getFullYear()} © MEDINOVA. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;