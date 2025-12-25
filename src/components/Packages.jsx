import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBaby,
    faHeartbeat,
    faTooth,
    faShieldAlt,
    faChevronLeft,
    faChevronRight,
    faCheck,
    faStar
} from '@fortawesome/free-solid-svg-icons';

import pregnancyCare from '../assets/pregnancy-care.webp';
import healthCheckup from '../assets/health-checkup.webp';
import basicHealth from '../assets/health-checkup.webp';
import dentalCare from '../assets/dental-care.webp';
import operationSurgery from '../assets/operation-surgery.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Packages = () => {
    const packages = [
        {
            id: 1,
            title: 'Pregnancy Care',
            price: '$49',
            period: 'Year',
            icon: faBaby,
            image: pregnancyCare,
            color: 'from-[#13c5dd] to-[#1d7a8c]',
            badge: 'Most Popular',
            highlighted: true,
            features: [
                { text: 'Emergency Medical Treatment' },
                { text: 'Highly Experienced Doctors' },
                { text: 'Highest Success Rate' },
                { text: 'Telephone Service' }
            ]
        },
        {
            id: 2,
            title: 'Health Checkup',
            price: '$99',
            period: '/Year',
            icon: faHeartbeat,
            image: healthCheckup,
            color: 'from-[#1d2a4d] to-[#2d3a5d]',
            badge: 'Best Value',
            highlighted: false,
            features: [
                { text: 'Emergency Medical Treatment' },
                { text: 'Highly Experienced Doctors' },
                { text: 'Highest Success Rate' },
                { text: 'Telephone Service' }
            ]
        },
        {
            id: 3,
            title: 'Dental Care',
            price: '$149',
            period: 'Year',
            icon: faTooth,
            image: dentalCare,
            color: 'from-[#13c5dd] to-[#1d7a8c]',
            badge: 'Premium',
            highlighted: false,
            features: [
                { text: 'Emergency Medical Treatment' },
                { text: 'Highly Experienced Doctors' },
                { text: 'Highest Success Rate' },
                { text: 'Telephone Service' }
            ]
        },
        {
            id: 4,
            title: 'Operation & Surgery',
            price: '$199',
            period: 'Year',
            icon: faShieldAlt,
            image: operationSurgery,
            color: 'from-[#1d2a4d] to-[#2d3a5d]',
            badge: 'Premium Plus',
            highlighted: false,
            features: [
                { text: 'Emergency Medical Treatment' },
                { text: 'Highly Experienced Doctors' },
                { text: 'Highest Success Rate' },
                { text: 'Telephone Service' }
            ]
        },
        {
            id: 5,
            title: 'Basic Health',
            price: '$10',
            period: '/Month',
            icon: faHeartbeat,
            image: basicHealth,
            color: 'from-[#13c5dd] to-[#1d7a8c]',
            badge: 'Economical',
            highlighted: false,
            features: [
                { text: 'Emergency Medical Treatment' },
                { text: 'Highly Experienced Doctors' },
                { text: 'Highest Success Rate' },
                { text: 'Telephone Service' }
            ]
        }
    ];

    return (
        <section id="packages" className="relative py-20 bg-gradient-to-b from-white via-[#f8fcfd] to-[#eff5f9] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden">
            <div className="center-container">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 dark:from-[#22d3ee]/20 dark:to-[#22d3ee]/5 rounded-full mb-4 shadow-sm dark:shadow-[#22d3ee]/10 animate-pulse-slow">
                        <FontAwesomeIcon icon={faStar} className="text-[#13c5dd] dark:text-[#22d3ee] mr-2" />
                        <span className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold text-sm uppercase tracking-wider">
                            MEDICAL PACKAGES
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight">
                        Awesome <span className="text-[#13c5dd] dark:text-[#22d3ee] relative">
                            Medical
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#13c5dd] dark:from-[#22d3ee] to-transparent"></span>
                        </span> Programs
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#13c5dd] dark:via-[#22d3ee] to-transparent mx-auto mb-8 animate-expand-width"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Choose from our comprehensive healthcare packages designed to meet your medical needs
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons - Smaller and More Subtle */}
                    <div className="swiper-navigation absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 flex justify-between pointer-events-none px-4">
                        <button className="swiper-button-prev-custom bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-10 h-10 rounded-full shadow-md flex items-center justify-center text-[#13c5dd] dark:text-[#22d3ee] hover:text-white dark:hover:text-white hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] transition-all duration-300 hover:scale-105 pointer-events-auto">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                        </button>
                        <button className="swiper-button-next-custom bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-10 h-10 rounded-full shadow-md flex items-center justify-center text-[#13c5dd] dark:text-[#22d3ee] hover:text-white dark:hover:text-white hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] transition-all duration-300 hover:scale-105 pointer-events-auto">
                            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                        </button>
                    </div>

                    {/* Swiper Container - Simpler Design */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        speed={600}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        className="pb-2 px-4"
                    >
                        {packages.map((pkg) => (
                            <SwiperSlide key={pkg.id}>
                                <div className={`relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/30 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 h-full border ${pkg.highlighted ? 'border-[#13c5dd] dark:border-[#22d3ee]' : 'border-gray-100 dark:border-gray-700'}`}>
                                    {/* Badge - Simpler */}
                                    {pkg.badge && (
                                        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10 ${pkg.highlighted
                                            ? 'bg-[#13c5dd] dark:bg-[#22d3ee] text-white'
                                            : 'bg-white dark:bg-gray-700 text-[#13c5dd] dark:text-[#22d3ee] border border-[#13c5dd] dark:border-[#22d3ee]'}`}>
                                            {pkg.badge}
                                        </div>
                                    )}

                                    {/* Header with Image Background and Gradient */}
                                    <div className={`relative bg-gradient-to-r ${pkg.color} pt-8 pb-6 px-6 text-center overflow-hidden h-48`}>
                                        {/* Image Background with Overlay */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                className="w-full h-full object-cover opacity-20"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                                                <FontAwesomeIcon
                                                    icon={pkg.icon}
                                                    className="text-white text-2xl"
                                                />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>

                                            {/* Price */}
                                            <div className="flex items-baseline justify-center space-x-1">
                                                <span className="text-3xl font-bold text-white">{pkg.price}</span>
                                                <span className="text-white/80 text-sm">{pkg.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="p-6">
                                        <ul className="space-y-3 mb-6">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${pkg.highlighted
                                                            ? 'bg-[#13c5dd]/10 dark:bg-[#22d3ee]/10'
                                                            : 'bg-gray-100 dark:bg-gray-700'
                                                            }`}>
                                                            <FontAwesomeIcon
                                                                icon={faCheck}
                                                                className={`text-xs ${pkg.highlighted
                                                                    ? 'text-[#13c5dd] dark:text-[#22d3ee]'
                                                                    : 'text-gray-600 dark:text-gray-400'}`}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="ml-3 text-sm text-gray-800 dark:text-gray-200 font-medium">{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Apply Button */}
                                        <button className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md ${pkg.highlighted
                                            ? 'bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white hover:from-[#1d7a8c] hover:to-[#13c5dd] dark:hover:from-[#0ea5e9] dark:hover:to-[#22d3ee]'
                                            : 'bg-gray-100 dark:bg-gray-700 text-[#1d2a4d] dark:text-white hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] hover:text-white'
                                            }`}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Dots Indicator - Simple */}
                <div className="flex justify-center mt-8 space-x-2">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-[#13c5dd] dark:bg-[#22d3ee] w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                        />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center animate-fade-in-up">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        • Use arrows to navigate • Packages designed for your healthcare needs •
                    </p>
                </div>
            </div>

            {/* Background Decorative Elements - More Subtle */}
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-br from-[#13c5dd]/5 dark:from-[#22d3ee]/5 to-transparent rounded-full blur-3xl -z-10 opacity-50"></div>
            <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-gradient-to-tr from-[#1d2a4d]/5 dark:from-[#1e293b]/5 to-transparent rounded-full blur-3xl -z-10 opacity-50" style={{ animationDelay: '1s' }}></div>
        </section>
    );
};

export default Packages;