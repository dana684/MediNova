import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiHeartBeats } from "react-icons/gi";
import heroImage from "../assets/hero.webp"

const Hero = () => {
    useEffect(() => {
        // تهيئة AOS عند تحميل المكون
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: false,
            mirror: true,
            offset: 100,
            disable: window.innerWidth < 768
        });
    }, []);

    return (
        <section id='hero' className="relative min-h-screen flex items-center w-full inline-block overflow-hidden">
            <div className="">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroImage})`


                    }}
                />

                {/* Overlay Layers*/}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1d2a4d]/85 via-[#0a0f1f]/70 dark:bg-black dark:opacity-75 to-transparent" />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#1d2a4d]/50 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative w-full max-w-7xl center-container h-full flex items-center z-10">
                <div className="w-full md:py-20 lg:py-24">
                    <div className="max-w-2xl lg:max-w-3xl">
                        {/* Main Heading With AOS */}
                        <div className="mb-8 md:mb-12" data-aos="fade-right" data-aos-delay="200">
                            <h5 className='text-xl sm:text-2xl md:text-3xl text-white font-light mb-3 md:mb-4'>
                                Welcome To Medinova ...<GiHeartBeats className='inline-block text-xl text-[#13c5dd]' />
                            </h5>
                            <div
                                className="h-1 w-46 sm:w-52 bg-white/30 rounded-full mb-6 md:mb-8"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            />

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-cyan-800 leading-snug md:leading-tight mb-4 md:mb-6">
                                <span
                                    className=" mb-2 sm:mb-3"
                                    data-aos="fade-right"
                                    data-aos-delay="400"
                                >Best Healthcare </span>
                                <span
                                    className=" mb-2 sm:mb-3"
                                    data-aos="fade-right"
                                    data-aos-delay="500"
                                > Solution In Your </span>
                                <span
                                    className="text-[#13c5dd] dark:text-white "
                                    data-aos="fade-right"
                                    data-aos-delay="600"
                                > City</span>
                            </h2>

                            <p
                                className="text-base sm:text-lg md:text-xl text-white/80 mt-4 md:mt-6 max-w-xl"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >We offer the best healthcare according to international standards. Our team of specialist doctors is ready to care for you at any time.</p></div>

                        {/* Action Buttons */}
                        <div
                            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-8 md:mt-12"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <button className="group relative overflow-hidden bg-[#13c5dd] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-[#10b0c5] transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl w-full sm:w-auto">
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                                    <span>Find Doctor</span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>

                            <button className="group relative overflow-hidden border-2 border-white/30 text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full hover:border-[#13c5dd] hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm w-full sm:w-auto">
                                <div className="absolute inset-0 bg-[#13c5dd]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                                    <span>Appointment</span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                data-aos="fade-up"
                data-aos-delay="1000"
            >
                <div className="animate-bounce">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;