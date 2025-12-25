import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import team1 from "../assets/team-1.webp"
import team2 from "../assets/team-2.webp"
import team3 from "../assets/team-3.webp"
import team4 from "../assets/team-4.webp"
import team6 from "../assets/team-6.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserMd,
    faGraduationCap,
    faStar,
    faPhone,
    faEnvelope,
    faHeartbeat,
    faBrain,
    faTooth,
    faEye,
    faBaby,
    faBone,
    faChevronLeft,
    faChevronRight,
    faCalendarCheck,
    faAward,
    faUsers
} from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

const Doctors = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. John Smith',
            specialization: 'Cardiology Specialist',
            description: 'Expert in heart-related treatments with 15+ years of experience in advanced cardiac care.',
            image: team1,
            experience: '15+ Years',
            rating: 4.9,
            patients: '5000+',
            specialties: ['Heart Surgery', 'ECG', 'Echocardiography'],
            contact: {
                phone: '+1 234 567 8901',
                email: 'dr.john@medinova.com'
            }
        },
        {
            id: 2,
            name: 'Dr. Sarah Johnson',
            specialization: 'Neurology Specialist',
            description: 'Specialized in neurological disorders with expertise in brain surgery and treatments.',
            image: team2,
            experience: '12+ Years',
            rating: 4.8,
            patients: '4500+',
            specialties: ['Brain Surgery', 'EEG', 'Neurological Disorders'],
            contact: {
                phone: '+1 234 567 8902',
                email: 'dr.sarah@medinova.com'
            }
        },
        {
            id: 3,
            name: 'Dr. Michael Brown',
            specialization: 'Dental Specialist',
            description: 'Providing comprehensive dental care with focus on oral surgery and cosmetic dentistry.',
            image: team3,
            experience: '10+ Years',
            rating: 4.9,
            patients: '3800+',
            specialties: ['Oral Surgery', 'Implants', 'Cosmetic Dentistry'],
            contact: {
                phone: '+1 234 567 8903',
                email: 'dr.michael@medinova.com'
            }
        },
        {
            id: 4,
            name: 'Dr. Emily Wilson',
            specialization: 'Pediatrics Specialist',
            description: 'Dedicated to children\'s healthcare with expertise in growth monitoring and vaccinations.',
            image: team4,
            experience: '8+ Years',
            rating: 4.7,
            patients: '3200+',
            specialties: ['Child Healthcare', 'Vaccinations', 'Growth Monitoring'],
            contact: {
                phone: '+1 234 567 8904',
                email: 'dr.emily@medinova.com'
            }
        },
        {
            id: 6,
            name: 'Dr. Lisa Anderson',
            specialization: 'Ophthalmology Specialist',
            description: 'Expert in eye care including cataract surgery, LASIK, and retina treatments.',
            image: team6,
            experience: '14+ Years',
            rating: 4.8,
            patients: '4200+',
            specialties: ['Cataract Surgery', 'LASIK', 'Retina Care'],
            contact: {
                phone: '+1 234 567 8906',
                email: 'dr.lisa@medinova.com'
            }
        }
    ];


    return (
        <section className="relative py-12 bg-gradient-to-b from-white via-[#f8fcfd] to-[#eff5f9] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden">
            <div className="center-container">

                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 dark:from-[#22d3ee]/20 dark:to-[#22d3ee]/5 rounded-full mb-4 shadow-sm dark:shadow-[#22d3ee]/10 animate-pulse-slow">
                        <FontAwesomeIcon icon={faUserMd} className="text-[#13c5dd] dark:text-[#22d3ee] mr-2" />
                        <span className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold uppercase tracking-wider">
                            OUR DOCTORS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight">
                        Qualified <span className="text-[#13c5dd] dark:text-[#22d3ee] relative">
                            Healthcare
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#13c5dd] dark:from-[#22d3ee] to-transparent"></span>
                        </span> Professionals
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#13c5dd] dark:via-[#22d3ee] to-transparent mx-auto mb-8 animate-expand-width"></div>
                </div>
                <div className="relative px-4 md:px-8">
                    {/* Navigation Buttons */}
                    <div className="swiper-doctors-navigation absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
                        <button className="swiper-doctors-prev bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-10 h-10 rounded-full shadow-md flex items-center justify-center text-[#13c5dd] dark:text-[#22d3ee] hover:text-white dark:hover:text-white hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] transition-all duration-300 hover:scale-105 pointer-events-auto">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                        </button>
                        <button className="swiper-doctors-next bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-10 h-10 rounded-full shadow-md flex items-center justify-center text-[#13c5dd] dark:text-[#22d3ee] hover:text-white dark:hover:text-white hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] transition-all duration-300 hover:scale-105 pointer-events-auto">
                            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                        </button>
                    </div>

                    {/* Swiper Slider with Coverflow Effect */}
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        spaceBetween={20}
                        loop={true}
                        speed={600}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -40, // يجعل الجانبيين أصغر
                            depth: 100,
                            modifier: 1.5,
                            slideShadows: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-doctors-next',
                            prevEl: '.swiper-doctors-prev',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 50,
                                    modifier: 1,
                                }
                            },
                            640: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: -20,
                                    depth: 80,
                                    modifier: 1.5,
                                }
                            },
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: -30,
                                    depth: 100,
                                    modifier: 2,
                                }
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: -40,
                                    depth: 150,
                                    modifier: 2.5,
                                }
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: -50,
                                    depth: 200,
                                    modifier: 3,
                                }
                            },
                        }}
                        className="pb-8 pt-4"
                        onSlideChange={(swiper) => {
                            // إضافة تأثير للشريحة النشطة
                            swiper.slides.forEach((slide) => {
                                slide.classList.remove('active-slide');
                            });
                            swiper.slides[swiper.activeIndex].classList.add('active-slide');
                        }}
                        onInit={(swiper) => {
                            // تعريف الشريحة النشطة عند التحميل
                            swiper.slides[swiper.activeIndex].classList.add('active-slide');
                        }}
                    >
                        {doctors.map((doctor) => (
                            <SwiperSlide key={doctor.id} className="max-w-md transition-all duration-500">
                                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/30 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-500 h-full border border-gray-100 dark:border-gray-700 transform hover:scale-[1.02]">
                                    {/* Active Card Indicator */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] transition-all duration-300 opacity-0 group-hover:w-16 group-hover:opacity-100 active-slide:w-24 active-slide:opacity-100"></div>

                                    {/* Doctor Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 active-slide:scale-105"
                                            style={{ objectPosition: 'top' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 active-slide:opacity-100"></div>

                                        {/* Experience Badge with Active State */}
                                        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105 active-slide:scale-105">
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faGraduationCap} className="text-[#13c5dd] dark:text-[#22d3ee] text-sm" />
                                                <span className="font-bold text-[#1d2a4d] dark:text-white text-sm">{doctor.experience}</span>
                                            </div>
                                        </div>

                                        {/* Specialization Icon with Active State */}
                                        <div className="absolute bottom-3 left-3 transition-transform duration-300 group-hover:scale-110 active-slide:scale-110">
                                            <div className="w-10 h-10 bg-gradient-to-br from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] rounded-full flex items-center justify-center shadow-md">
                                                <FontAwesomeIcon
                                                    icon={
                                                        doctor.specialization.includes('Cardiology') ? faHeartbeat :
                                                            doctor.specialization.includes('Neurology') ? faBrain :
                                                                doctor.specialization.includes('Dental') ? faTooth :
                                                                    doctor.specialization.includes('Pediatrics') ? faBaby :
                                                                        doctor.specialization.includes('Orthopedic') ? faBone :
                                                                            faEye
                                                    }
                                                    className="text-white text-base"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="p-5">
                                        {/* Name and Specialization with Active State */}
                                        <div className="mb-3">
                                            <h3 className="text-lg font-bold text-[#1d2a4d] dark:text-white mb-1 transition-colors duration-300 active-slide:text-[#13c5dd] dark:active-slide:text-[#22d3ee]">
                                                {doctor.name}
                                            </h3>
                                            <p className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold text-sm">{doctor.specialization}</p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                            {doctor.description}
                                        </p>

                                        {/* Stats with Active State */}
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-all duration-300 group-hover:bg-[#13c5dd]/10 dark:group-hover:bg-[#22d3ee]/10 active-slide:bg-[#13c5dd]/10 dark:active-slide:bg-[#22d3ee]/10">
                                                <div className="flex items-center justify-center space-x-1 mb-1">
                                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                                                    <span className="font-bold text-[#1d2a4d] dark:text-white text-sm">{doctor.rating}</span>
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                                            </div>
                                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-all duration-300 group-hover:bg-[#13c5dd]/10 dark:group-hover:bg-[#22d3ee]/10 active-slide:bg-[#13c5dd]/10 dark:active-slide:bg-[#22d3ee]/10">
                                                <div className="flex items-center justify-center mb-1">
                                                    <FontAwesomeIcon icon={faUsers} className="text-[#13c5dd] dark:text-[#22d3ee] text-sm mr-1" />
                                                    <span className="font-bold text-[#1d2a4d] dark:text-white text-sm">{doctor.patients}</span>
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Patients</div>
                                            </div>
                                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-all duration-300 group-hover:bg-[#13c5dd]/10 dark:group-hover:bg-[#22d3ee]/10 active-slide:bg-[#13c5dd]/10 dark:active-slide:bg-[#22d3ee]/10">
                                                <div className="flex items-center justify-center mb-1">
                                                    <FontAwesomeIcon icon={faAward} className="text-[#13c5dd] dark:text-[#22d3ee] text-sm mr-1" />
                                                    <span className="font-bold text-[#1d2a4d] dark:text-white text-sm">{doctor.specialties.length}</span>
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Services</div>
                                            </div>
                                        </div>

                                        {/* Specialties */}
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-1.5">
                                                {doctor.specialties.map((specialty, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-[#1d2a4d] dark:text-gray-200 text-xs rounded-full hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] hover:text-white transition-colors cursor-pointer"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Contact and Actions with Active State */}
                                        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex space-x-2">
                                                <a
                                                    href={`tel:${doctor.contact.phone}`}
                                                    className="w-8 h-8 bg-[#13c5dd]/10 dark:bg-[#22d3ee]/10 rounded-full flex items-center justify-center hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] hover:text-white transition-colors active-slide:bg-[#13c5dd] dark:active-slide:bg-[#22d3ee] active-slide:text-white"
                                                    title="Call"
                                                >
                                                    <FontAwesomeIcon icon={faPhone} className="text-[#13c5dd] dark:text-[#22d3ee] text-xs group-hover:text-white active-slide:text-white" />
                                                </a>
                                                <a
                                                    href={`mailto:${doctor.contact.email}`}
                                                    className="w-8 h-8 bg-[#13c5dd]/10 dark:bg-[#22d3ee]/10 rounded-full flex items-center justify-center hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] hover:text-white transition-colors active-slide:bg-[#13c5dd] dark:active-slide:bg-[#22d3ee] active-slide:text-white"
                                                    title="Email"
                                                >
                                                    <FontAwesomeIcon icon={faEnvelope} className="text-[#13c5dd] dark:text-[#22d3ee] text-xs group-hover:text-white active-slide:text-white" />
                                                </a>
                                            </div>
                                            <button className="px-4 py-2 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white rounded-full font-semibold text-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active-slide:scale-105 flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faCalendarCheck} className="text-xs" />
                                                <span>Book Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-1.5">
                        {doctors.map((doctor, index) => (
                            <div
                                key={doctor.id}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-[#13c5dd] dark:hover:bg-[#22d3ee] ${index === 0 ? 'bg-[#13c5dd] dark:bg-[#22d3ee] w-3' : 'bg-gray-300 dark:bg-gray-600'}`}
                                onClick={() => {
                                    const swiper = document.querySelector('.swiper').swiper;
                                    swiper.slideToLoop(index);
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center animate-fade-in-up">
                    <button className="group px-8 py-4 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
                        <span>View All Doctors</span>
                        <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Background Decorative Elements */}
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-br from-[#13c5dd]/5 dark:from-[#22d3ee]/5 to-transparent rounded-full blur-3xl -z-10 opacity-50"></div>
            <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-gradient-to-tr from-[#1d2a4d]/5 dark:from-[#1e293b]/5 to-transparent rounded-full blur-3xl -z-10 opacity-50" style={{ animationDelay: '1s' }}></div>
        </section>
    );
};

export default Doctors;