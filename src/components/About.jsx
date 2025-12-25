import { faUserMd, faAmbulance, faVial, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from "../assets/about.webp";

const About = () => {
    const stats = [
        { title: 'Qualified', subtitle: 'Doctors', number: '50+', icon: faUserMd },
        { title: 'Emergency', subtitle: 'Services', number: '24/7', icon: faStethoscope },
        { title: 'Accurate', subtitle: 'Testing', number: '99%', icon: faVial },
        { title: 'Free', subtitle: 'Ambulance', number: '100+', icon: faAmbulance }
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            delay: 0,
            easing: 'ease-in-out-cubic',
        });
    }, []);

    return (
        <section id='about' className="py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="center-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image with Decorative Elements */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-800/30">
                            <img
                                src={about}
                                alt="Medical Team"
                                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1d2a4d]/40 dark:from-gray-900/60 to-transparent"></div>

                            {/* Experience Badge */}
                            <div
                                data-aos="fade-right"
                                data-aos-delay="80"
                                className="absolute bottom-3 h-13 flex left-[-21px] bg-white dark:bg-gray-800 rounded-full p-6 shadow-2xl dark:shadow-gray-800/50 max-w-[250px] transition-colors duration-300"
                            >
                                <div className="flex items-center justify-center">
                                    <div className="bg-[#13c5dd]/10 dark:bg-[#13c5dd]/20 p-3 rounded-full mr-4 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-[#13c5dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-[#1d2a4d] dark:text-white transition-colors duration-300">25+</div>
                                        <div className="text-sm text-[#848e9f] dark:text-gray-300 transition-colors duration-300">Years of Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#13c5dd]/10 dark:bg-[#13c5dd]/20 rounded-full z-0 transition-colors duration-300"></div>
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#1d2a4d]/5 dark:bg-gray-800/20 rounded-full z-0 transition-colors duration-300"></div>
                    </div>

                    {/* Right Column - Content */}
                    <div>
                        {/* Section Header */}
                        <div className="mb-6">
                            <div
                                className="inline-flex items-center px-4 py-2 bg-[#13c5dd]/10 dark:bg-[#13c5dd]/20 rounded-full mb-4 transition-colors duration-300"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <span className="text-[#13c5dd] font-semibold">
                                    ABOUT US
                                </span>
                            </div>
                            <h2
                                className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight transition-colors duration-300"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                Best Medical Care For <span className="text-[#13c5dd]">Yourself</span> and Your Family
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="mb-12">
                            <p
                                className="text-lg text-[#848e9f] dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Tempor erat elitr at rebum at at clita aliquyam consectetur. Diam dolor diam ipsum et, tempor voluptua sit consectetur sit. Aliquyam diam amet diam et eos sadipscing labore.
                            </p>
                            <p
                                className="text-lg text-[#848e9f] dark:text-gray-300 leading-relaxed transition-colors duration-300"
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consectetur takimata eirmod, dolores takimata consectetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna.
                            </p>
                        </div>

                        {/* الدوائر الأربعة */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                            {stats.map((stat, index) => {
                                const baseDelay = 300 + (index * 100);

                                return (
                                    <div
                                        key={index}
                                        className="text-center"
                                        data-aos="fade-up"
                                        data-aos-delay={baseDelay}
                                        data-aos-duration="600"
                                    >
                                        <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
                                            {/* الدائرة الخلفية مع تأثير النبض */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#13c5dd]/20 dark:from-[#13c5dd]/30 to-[#1d2a4d]/10 dark:to-gray-800/30 rounded-full transition-colors duration-300">
                                                {/* تأثير النبض المستمر */}
                                                <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-br from-[#13c5dd]/30 dark:from-[#13c5dd]/40 to-[#1d2a4d]/20 dark:to-gray-800/40"></div>
                                            </div>

                                            {/* الدائرة الخارجية النابضة */}
                                            <div
                                                className="absolute w-24 h-24 rounded-full border-4 border-transparent animate-pulse"
                                                style={{
                                                    background: 'linear-gradient(#13c5dd, #1d2a4d) border-box',
                                                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                                    WebkitMaskComposite: 'xor',
                                                    maskComposite: 'exclude'
                                                }}
                                            ></div>

                                            {/* الدائرة الرئيسية */}
                                            <div className="relative w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-800/50 border-4 border-white dark:border-gray-800 transition-colors duration-300">
                                                <div className="w-16 h-16 bg-gradient-to-br from-[#13c5dd] to-[#1d2a4d] rounded-full flex items-center justify-center">
                                                    <FontAwesomeIcon
                                                        icon={stat.icon}
                                                        className="text-white text-2xl"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-[#1d2a4d] dark:text-white font-bold text-xl transition-colors duration-300">
                                            {stat.title}
                                        </div>
                                        <div className="text-[#13c5dd] font-semibold transition-colors duration-300">
                                            {stat.subtitle}
                                        </div>
                                        <div className="text-[#848e9f] dark:text-gray-400 text-sm mt-1 transition-colors duration-300">
                                            {stat.number}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;