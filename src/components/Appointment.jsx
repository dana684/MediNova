import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarCheck,
    faUserMd,
    faPhone,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Appointment = () => {
    return (
        <section id='appointment' className="relative py-16 bg-gradient-to-b from-white via-[#f0f9ff] to-[#eff5f9] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden">
            <div className="center-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Content */}
                    <div className="animate-fade-in-left">
                        {/* Section Header */}
                        <div className="mb-6">
                            <div className="inline-flex items-center px-4 py-2 bg-[#13c5dd]/10 dark:bg-[#22d3ee]/20 rounded-full mb-4 shadow-sm dark:shadow-[#22d3ee]/10 animate-pulse-slow">
                                <FontAwesomeIcon icon={faCalendarCheck} className="text-[#13c5dd] dark:text-[#22d3ee] mr-2" />
                                <span className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold uppercase tracking-wider">
                                    APPOINTMENT
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight">
                                Make An Appointment
                                <span className="block text-[#13c5dd] dark:text-[#22d3ee]">For Your Family</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="mb-10">
                            <p className="text-[1rem] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Schedule your medical appointments effortlessly with our streamlined booking system.
                                Connect with top healthcare professionals at your convenience.
                            </p>
                            <p className="text-[1rem] text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our platform ensures secure, confidential, and timely appointments with verified
                                medical experts across various specialties.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="group relative overflow-hidden bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#13c5dd]/20 dark:shadow-[#22d3ee]/20 animate-fade-in-up">
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#13c5dd]/20 to-[#1d7a8c]/20 dark:from-[#22d3ee]/20 dark:to-[#0ea5e9]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative font-semibold flex items-center space-x-3">
                                    <FontAwesomeIcon icon={faUserMd} />
                                    <span>Find Doctor</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                            </button>

                            <button className="group relative overflow-hidden border-2 border-[#13c5dd] dark:border-[#22d3ee] text-[#13c5dd] dark:text-[#22d3ee] px-8 py-4 rounded-lg hover:bg-gradient-to-r hover:from-[#13c5dd]/5 hover:to-transparent dark:hover:from-[#22d3ee]/5 transition-all duration-300 transform hover:-translate-y-1 shadow-sm shadow-gray-200 dark:shadow-gray-800 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                                <div className="absolute inset-0 bg-[#13c5dd]/5 dark:bg-[#22d3ee]/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <span className="relative font-semibold flex items-center space-x-3">
                                    <span>Read More</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Appointment Form */}
                    <div className="relative animate-fade-in-right">
                        {/* Background Effects */}
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#13c5dd]/10 dark:from-[#22d3ee]/10 to-transparent rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#1d2a4d]/10 dark:from-[#1e293b]/10 to-transparent rounded-full blur-xl"></div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-8 transform hover:shadow-3xl dark:hover:shadow-gray-900 transition-all duration-500 relative z-10 border border-gray-100 dark:border-gray-700">
                            {/* Form Header */}
                            <div className="text-center mb-8">
                                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] rounded-full mb-6 animate-bounce-slow shadow-lg">
                                    <FontAwesomeIcon icon={faCalendarCheck} className="text-white text-2xl" />
                                    <div className="absolute inset-0 rounded-full border-4 border-[#13c5dd]/20 dark:border-[#22d3ee]/20 animate-ping-slow"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1d2a4d] dark:text-white mb-2">Book An Appointment</h3>
                                <p className="text-gray-600 dark:text-gray-400">Fill the form below to schedule your visit</p>
                            </div>

                            {/* Appointment Form */}
                            <form className="relative space-y-6">
                                {/* Row 1: Department & Doctor */}
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            Choose Department
                                        </label>
                                        <div className="relative">
                                            <select className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg px-4 py-3.5 appearance-none focus:outline-none focus:border-[#13c5dd] dark:focus:border-[#22d3ee] focus:ring-2 focus:ring-[#13c5dd]/20 dark:focus:ring-[#22d3ee]/20 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 transition-all duration-300 group-hover:border-[#13c5dd]/50 dark:group-hover:border-[#22d3ee]/50">
                                                <option value="" className="text-gray-500 dark:text-gray-400">Select Department</option>
                                                <option value="cardiology" className="text-gray-700 dark:text-gray-300">Cardiology</option>
                                                <option value="neurology" className="text-gray-700 dark:text-gray-300">Neurology</option>
                                                <option value="orthopedics" className="text-gray-700 dark:text-gray-300">Orthopedics</option>
                                                <option value="pediatrics" className="text-gray-700 dark:text-gray-300">Pediatrics</option>
                                                <option value="dentistry" className="text-gray-700 dark:text-gray-300">Dentistry</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            Select Doctor
                                        </label>
                                        <div className="relative">
                                            <select className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg px-4 py-3.5 appearance-none focus:outline-none focus:border-[#13c5dd] dark:focus:border-[#22d3ee] focus:ring-2 focus:ring-[#13c5dd]/20 dark:focus:ring-[#22d3ee]/20 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 transition-all duration-300 group-hover:border-[#13c5dd]/50 dark:group-hover:border-[#22d3ee]/50">
                                                <option value="" className="text-gray-500 dark:text-gray-400">Choose Doctor</option>
                                                <option value="dr_smith" className="text-gray-700 dark:text-gray-300">Dr. John Smith</option>
                                                <option value="dr_johnson" className="text-gray-700 dark:text-gray-300">Dr. Sarah Johnson</option>
                                                <option value="dr_williams" className="text-gray-700 dark:text-gray-300">Dr. Michael Williams</option>
                                                <option value="dr_brown" className="text-gray-700 dark:text-gray-300">Dr. Emily Brown</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Name & Email */}
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#13c5dd] dark:focus:border-[#22d3ee] focus:ring-2 focus:ring-[#13c5dd]/20 dark:focus:ring-[#22d3ee]/20 placeholder:text-gray-500 dark:placeholder:text-gray-500 text-gray-800 dark:text-gray-300 transition-all duration-300 group-hover:border-[#13c5dd]/50 dark:group-hover:border-[#22d3ee]/50"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email@example.com"
                                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#13c5dd] dark:focus:border-[#22d3ee] focus:ring-2 focus:ring-[#13c5dd]/20 dark:focus:ring-[#22d3ee]/20 placeholder:text-gray-500 dark:placeholder:text-gray-500 text-gray-800 dark:text-gray-300 transition-all duration-300 group-hover:border-[#13c5dd]/50 dark:group-hover:border-[#22d3ee]/50"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Date & Time */}
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            Date
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#13c5dd] dark:focus:border-[#22d3ee] focus:ring-2 focus:ring-[#13c5dd]/20 dark:focus:ring-[#22d3ee]/20 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:border-[#13c5dd]/50 dark:group-hover:border-[#22d3ee]/50"
                                            />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            Time
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="time"
                                                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#13c5dd] dark:focus:border-[#22d3ee] focus:ring-2 focus:ring-[#13c5dd]/20 dark:focus:ring-[#22d3ee]/20 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:border-[#13c5dd]/50 dark:group-hover:border-[#22d3ee]/50"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group relative w-full bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg shadow-[#13c5dd]/20 dark:shadow-[#22d3ee]/20 flex items-center justify-center gap-3 mt-2 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <FontAwesomeIcon icon={faCalendarCheck} className="relative" />
                                    <span className="relative">Make An Appointment</span>
                                </button>
                            </form>

                            {/* Additional Info */}
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 group">
                                    <FontAwesomeIcon icon={faPhone} className="text-[#13c5dd] dark:text-[#22d3ee] mr-2 group-hover:scale-110 transition-transform duration-300" />
                                    <span>Need help? Call us: </span>
                                    <a href="tel:+1234567890" className="font-semibold text-gray-800 dark:text-white ml-1 hover:text-[#13c5dd] dark:hover:text-[#22d3ee] transition-colors duration-300">
                                        +1 234 567 890
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-[#13c5dd]/5 dark:from-[#22d3ee]/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-[#1d2a4d]/5 dark:from-[#1e293b]/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </section>
    );
};

export default Appointment;