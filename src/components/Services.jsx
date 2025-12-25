import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAmbulance,
    faUserMd,
    faPills,
    faStethoscope,
    faFlask
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const services = [
        {
            icon: faAmbulance,
            title: 'Emergency Care',
            description: '24/7 emergency medical services with rapid response teams and advanced life support equipment for critical situations.',
            features: ['ICU Support', 'Mobile ICU']
        },
        {
            icon: faUserMd,
            title: 'Operation & Surgery',
            description: 'Advanced surgical procedures performed by board-certified surgeons using state-of-the-art technology.',
            features: ['Post-Op Care', 'Minimal Invasive']
        },
        {
            icon: faStethoscope,
            title: 'Outdoor Checkup',
            description: 'Comprehensive health assessments and preventive care services at convenient locations near you.',
            features: ['Regular Checkups', 'Wellness Plans']
        },
        {
            icon: faAmbulance,
            title: 'Ambulance Service',
            description: 'Fully equipped advanced life support ambulances with trained paramedics for emergency transportation.',
            features: ['GPS Tracking', 'Medical Staff']
        },
        {
            icon: faPills,
            title: 'Medicine & Pharmacy',
            description: 'Complete pharmaceutical services with genuine medications and professional consultation.',
            features: ['24/7 Pharmacy', 'Home Delivery']
        },
        {
            icon: faFlask,
            title: 'Blood Testing',
            description: 'Accurate diagnostic laboratory services with rapid results and comprehensive analysis.',
            features: ['Lab Tests', 'Blood Bank']
        }
    ];

    return (
        <section id="service" className="relative py-12 bg-transparent dark:bg-transparent overflow-hidden backdrop-blur-sm">
            <div className="center-container relative z-10">

                {/* Section Header with Animation */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 dark:from-[#13c5dd]/20 dark:to-[#13c5dd]/5 rounded-full mb-4 shadow-sm dark:shadow-[#13c5dd]/10 animate-pulse-slow">
                        <span className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold text-sm uppercase tracking-wider">
                            OUR MEDICAL SERVICES
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight">
                        Excellent <span className="text-[#13c5dd] dark:text-[#22d3ee] relative">
                            Medical
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#13c5dd] dark:from-[#22d3ee] to-transparent"></span>
                        </span> Services
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#13c5dd] dark:via-[#22d3ee] to-transparent mx-auto mb-8 animate-expand-width"></div>
                    <p className="text-lg text-[#5a6478] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Delivering exceptional medical care through advanced technology,
                        experienced specialists, and patient-centered approaches for optimal health outcomes.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl flex flex-col gap-1.5 items-center justify-center p-8 shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Animated Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#13c5dd]/10 dark:from-[#22d3ee]/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-all duration-700 group-hover:rotate-180"></div>

                            {/* Floating Particles Animation */}
                            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-[#13c5dd]/20 dark:bg-[#22d3ee]/20 rounded-full animate-float"
                                        style={{
                                            top: `${20 + i * 30}%`,
                                            left: `${10 + i * 40}%`,
                                            animationDelay: `${i * 0.5}s`
                                        }}
                                    ></div>
                                ))}
                            </div>

                            {/* Icon with Enhanced Animation */}
                            <div className="relative z-10 mb-6">
                                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#13c5dd] via-[#1d7a8c] to-[#1d2a4d] dark:from-[#22d3ee] dark:via-[#0ea5e9] dark:to-[#1e40af] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-md group-hover:shadow-xl">
                                    <FontAwesomeIcon
                                        icon={service.icon}
                                        className="text-white text-2xl transform group-hover:scale-125 transition-transform duration-300"
                                    />
                                    {/* Icon Glow Effect */}
                                    <div className="absolute inset-0 rounded-full bg-[#13c5dd]/20 dark:bg-[#22d3ee]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                {/* Icon Badge */}
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md dark:shadow-gray-900 animate-bounce-slow">
                                    <div className="w-2 h-2 bg-[#13c5dd] dark:bg-[#22d3ee] rounded-full"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center">
                                <h3 className="text-xl font-bold text-[#1d2a4d] dark:text-white mb-4 group-hover:text-[#13c5dd] dark:group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-y-1">
                                    {service.title}
                                </h3>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-[#13c5dd]/50 dark:from-[#22d3ee]/50 to-transparent mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>
                                <p className="text-[#5a6478] dark:text-gray-300 mb-6 leading-relaxed text-sm">
                                    {service.description}
                                </p>

                                {/* Enhanced Features List */}
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center justify-center text-sm text-[#1d2a4d] dark:text-gray-200 opacity-0 animate-slide-in-right"
                                            style={{ animationDelay: `${idx * 100 + 300}ms` }}
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300"></div>
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Enhanced Read More Button */}
                                <button className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-white to-white dark:from-gray-800 dark:to-gray-800 border border-[#13c5dd]/30 dark:border-[#22d3ee]/30 rounded-full text-[#13c5dd] dark:text-[#22d3ee] font-semibold shadow-sm dark:shadow-gray-900 hover:shadow-lg dark:hover:shadow-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#13c5dd]/10 hover:to-[#1d2a4d]/10 dark:hover:from-[#22d3ee]/10 dark:hover:to-[#1e40af]/10">
                                    <span className="mr-2">Learn More</span>
                                    <svg
                                        className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Enhanced Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#13c5dd]/30 dark:group-hover:border-[#22d3ee]/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-[#13c5dd]/5 dark:to-[#22d3ee]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center animate-fade-in-up">
                    <button className="group/cta px-8 py-4 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white font-bold rounded-full shadow-lg dark:shadow-gray-900 hover:shadow-xl dark:hover:shadow-gray-800 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
                        <span>View All Services</span>
                        <svg className="w-5 h-5 ml-3 transform group-hover/cta:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-[#13c5dd]/10 dark:from-[#22d3ee]/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-tr from-[#1d2a4d]/10 dark:from-[#1e293b]/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            {/* Floating Shapes */}
            <div className="absolute top-20 left-10 w-8 h-8 border border-[#13c5dd]/20 dark:border-[#22d3ee]/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-40 right-20 w-12 h-12 border border-[#1d2a4d]/10 dark:border-gray-700/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </section>
    );
};

export default Services;