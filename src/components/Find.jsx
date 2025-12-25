import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faStethoscope,
    faUserMd,
    faFilter,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const FindDoctor = () => {
    const [department, setDepartment] = useState('');
    const [keyword, setKeyword] = useState('');

    const departments = [
        'Cardiology',
        'Neurology',
        'Dentistry',
        'Pediatrics',
        'Orthopedics',
        'Ophthalmology',
        'Dermatology',
        'Gynecology',
        'General Medicine'
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Searching for:', { department, keyword });
    };

    return (
        <section className="relative py-12 bg-gradient-to-br from-[#eff5f9] to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2313c5dd' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px'
                }}></div>
            </div>
            <div className="center-container relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-[#13c5dd]/10 dark:from-[#22d3ee]/20 dark:to-[#22d3ee]/5 rounded-full mb-4 shadow-sm dark:shadow-[#22d3ee]/10 animate-pulse-slow">
                            <FontAwesomeIcon icon={faStethoscope} className="text-[#13c5dd] mr-2" />
                            <span className="text-[#13c5dd] dark:text-[#22d3ee] font-semibold uppercase tracking-wider">
                                FIND A DOCTOR
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6">
                            Find A Healthcare
                            <br />
                            <span className="text-[#13c5dd]">Professionals</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#13c5dd] mx-auto mb-8"></div>
                        <p className="text-lg text-[#848e9f] max-w-2xl mx-auto leading-relaxed">
                            Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo.
                        </p>
                    </div>

                    {/* Search Box */}
                    <div className="bg-white rounded-2xl dark:bg-[#22d3ee]/10 shadow-2xl p-8 mb-12">
                        <form onSubmit={handleSearch} className="space-y-8">
                            {/* Search Inputs */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Department Select */}
                                <div>
                                    <label className="block text-sm font-semibold dark:text-gray-200 text-[#1d2a4d] mb-3">
                                        <FontAwesomeIcon icon={faFilter} className="mr-2 text-[#13c5dd]" />
                                        Department
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                            className="w-full border border-gray-200 dark:bg-gray-700 rounded-xl px-4 py-4 appearance-none focus:outline-none focus:border-[#13c5dd] focus:ring-2 focus:ring-[#13c5dd]/20 text-[#848e9f] bg-white"
                                        >
                                            <option value="">Select Department</option>
                                            {departments.map((dept, index) => (
                                                <option key={index} value={dept.toLowerCase()}>
                                                    {dept}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                            <svg className="w-5 h-5 text-[#848e9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Keyword Input */}
                                <div>
                                    <label className="block text-sm font-semibold text-[#1d2a4d] dark:text-white mb-3">
                                        <FontAwesomeIcon icon={faSearch} className="mr-2 text-[#13c5dd]" />
                                        Keyword
                                    </label>
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        placeholder="Doctor name, specialty, or symptom"
                                        className="w-full border dark:bg-gray-700 border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#13c5dd] focus:ring-2 focus:ring-[#13c5dd]/20 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="group relative overflow-hidden bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white px-16 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#13c5dd]/20 to-[#1d7a8c]/20 dark:from-[#22d3ee]/20 dark:to-[#0ea5e9]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="relative font-bold text-lg flex items-center justify-center space-x-4">
                                        <FontAwesomeIcon icon={faSearch} className="text-lg" />
                                        <span>Find Doctors</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#13c5dd]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#1d2a4d]/5 rounded-full blur-3xl"></div>
        </section>
    );
};

export default FindDoctor;