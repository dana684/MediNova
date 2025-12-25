import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuoteLeft,
    faStar,
    faChevronLeft,
    faChevronRight,
    faHeart,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import testimonial1 from '../assets/testimonial-1.webp';
import testimonial2 from '../assets/testimonial-2.webp';
import testimonial3 from '../assets/testimonial-3.webp';
import testimonial4 from '../assets/team-4.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "Cardiology Patient",
            content: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.",
            rating: 5,
            date: "January 15, 2024",
            image: testimonial1
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Orthopedic Patient",
            content: "The medical team provided exceptional care during my recovery. Their expertise and compassion made all the difference in my healing process. Highly recommended!",
            rating: 5,
            date: "February 28, 2024",
            image: testimonial2
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Neurology Patient",
            content: "Professional service from start to finish. The doctors took time to explain everything clearly and made me feel comfortable throughout the treatment.",
            rating: 4,
            date: "March 10, 2024",
            image: testimonial3
        },
        {
            id: 4,
            name: "Emily Williams",
            role: "Dental Patient",
            content: "Outstanding dental care experience. The team was gentle, professional, and the results exceeded my expectations. Will definitely return!",
            rating: 5,
            date: "April 5, 2024",
            image: testimonial4
        }
    ];

    return (
        <section className="relative py-12 bg-gradient-to-b from-white via-[#f8fcfd] to-[#eff5f9] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden">
            <div className="center-container">

                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 dark:from-[#22d3ee]/20 dark:to-[#22d3ee]/5 rounded-full mb-6 shadow-sm dark:shadow-[#22d3ee]/10">
                        <FontAwesomeIcon icon={faHeart} className="text-[#13c5dd] dark:text-[#22d3ee] mr-2" />
                        <span className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold text-sm uppercase tracking-wider">
                            TESTIMONIALS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight">
                        What Our <span className="text-[#13c5dd] dark:text-[#22d3ee]">Patients</span> Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#13c5dd]/50 via-[#13c5dd] to-[#13c5dd]/50 dark:from-[#22d3ee]/50 dark:via-[#22d3ee] dark:to-[#22d3ee]/50 mx-auto mb-8"></div>
                </div>

                {/* Main Testimonial Slider */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation Buttons - Professional */}
                    <div className="swiper-testimonial-navigation absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 flex justify-between pointer-events-none px-4">
                        <button className="swiper-testimonial-prev bg-white dark:bg-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-[#13c5dd] dark:text-[#22d3ee] hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] hover:text-white transition-all duration-300 hover:shadow-xl pointer-events-auto border border-gray-200 dark:border-gray-700">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                        </button>
                        <button className="swiper-testimonial-next bg-white dark:bg-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-[#13c5dd] dark:text-[#22d3ee] hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] hover:text-white transition-all duration-300 hover:shadow-xl pointer-events-auto border border-gray-200 dark:border-gray-700">
                            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                        </button>
                    </div>

                    {/* Swiper Container */}
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        speed={700}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-testimonial-next',
                            prevEl: '.swiper-testimonial-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-testimonial-pagination',
                            renderBullet: function (index, className) {
                                return `<span class="${className} w-8 h-1 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300"></span>`;
                            },
                        }}
                        className="pb-12"
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            }
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/40 p-8 md:p-12 transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-900/60">
                                    {/* Quote Icon */}
                                    <div className="mb-8 text-center">
                                        <FontAwesomeIcon
                                            icon={faQuoteLeft}
                                            className="text-4xl text-[#13c5dd]/30 dark:text-[#22d3ee]/30"
                                        />
                                    </div>

                                    {/* Testimonial Content */}
                                    <div className="mb-10 px-4 md:px-8">
                                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center italic font-light">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    {/* Patient Info */}
                                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 dark:border-gray-700">
                                        {/* Patient Details */}
                                        <div className="flex items-center mb-6 md:mb-0">
                                            {/* Larger Profile Image */}
                                            <div className="relative mr-6">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                                                    style={{ objectPosition: 'top' }}
                                                />
                                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#13c5dd] dark:bg-[#22d3ee] rounded-full flex items-center justify-center shadow-md">
                                                    <FontAwesomeIcon
                                                        icon={faCheckCircle}
                                                        className="text-white text-xs"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#1d2a4d] dark:text-white mb-1">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold mb-1">
                                                    {testimonial.role}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {testimonial.date}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex flex-col items-center md:items-end">
                                            <div className="flex items-center mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <FontAwesomeIcon
                                                        key={i}
                                                        icon={faStar}
                                                        className={`text-xl mx-0.5 ${i < testimonial.rating
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300 dark:text-gray-600'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                                {testimonial.rating}.0 Rating
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="swiper-testimonial-pagination flex justify-center space-x-2 mt-8"></div>
                </div>
                {/* CTA Section */}
                <div className="mt-16 text-center animate-fade-in-up">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <button className="group relative overflow-hidden bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg">
                            <span className="relative flex items-center gap-3">
                                <span>Share Your Experience</span>
                                <FontAwesomeIcon icon={faHeart} className="group-hover:scale-110 transition-transform" />
                            </span>
                        </button>
                        <button className="px-8 py-4 border-2 border-[#13c5dd] dark:border-[#22d3ee] text-[#13c5dd] dark:text-[#22d3ee] rounded-full font-semibold hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] hover:text-white transition-all duration-300">
                            Read All Reviews
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-[#13c5dd]/5 dark:from-[#22d3ee]/5 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-tr from-[#1d2a4d]/5 dark:from-[#1e293b]/5 to-transparent rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default Testimonials;