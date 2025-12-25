import React, { useState } from 'react';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaPaperPlane,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Address',
            info: '123 Street, New York, USA',
            bgColor: 'from-[#13c5dd] to-[#0ea5e9]'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            info: '+012 345 6789',
            bgColor: 'from-[#13c5dd] to-[#0ea5e9]'
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            info: 'info@example.com',
            bgColor: 'from-[#13c5dd] to-[#0ea5e9]'
        }
    ];

    const socialLinks = [
        { icon: FaFacebookF, color: 'hover:bg-[#1877f2]', label: 'Facebook' },
        { icon: FaTwitter, color: 'hover:bg-[#1da1f2]', label: 'Twitter' },
        { icon: FaLinkedinIn, color: 'hover:bg-[#0077b5]', label: 'LinkedIn' },
        { icon: FaInstagram, color: 'hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743]', label: 'Instagram' },
        { icon: FaYoutube, color: 'hover:bg-[#ff0000]', label: 'YouTube' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section id="contact" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-[#0a192f]">
                <div className="center-container">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 rounded-full mb-4 shadow-sm shadow-[#13c5dd]/10">
                            <FaPaperPlane className="text-[#13c5dd] mr-2" />
                            <span className="text-[#13c5dd] font-semibold text-sm uppercase tracking-wider">
                                CONTACT US
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                            Get In <span className="text-[#13c5dd]">Touch</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Have questions? We're here to help. Reach out to us anytime and we'll be happy to assist you.
                        </p>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                            >
                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.bgColor} mb-6 transform -rotate-6`}>
                                    <item.icon
                                        className="text-white text-3xl transform rotate-6"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {item.info}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map and Contact Form Section */}
            <section className="py-16 bg-white dark:bg-[#0a192f]">
                <div className="center-container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Google Map */}
                        <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1643030998198!5m2!1sen!2s"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map Location"
                            ></iframe>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 dark:bg-zinc-800 rounded-2xl p-8 shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#13c5dd] focus:border-transparent transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#13c5dd] focus:border-transparent transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#13c5dd] focus:border-transparent transition-all duration-300"
                                        placeholder="What is this regarding?"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#13c5dd] focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#13c5dd] to-[#0ea5e9] text-white font-semibold py-4 px-8 rounded-lg hover:from-[#0ea5e9] hover:to-[#13c5dd] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                >
                                    <FaPaperPlane className="mr-2 inline" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                            Follow Us On Social Media
                        </h3>
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-12 h-12 bg-gray-100 dark:bg-zinc-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <div className={`w-full h-full bg-gray-100 dark:bg-zinc-700 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}>
                                        <social.icon
                                            className="text-gray-600 dark:text-gray-300 group-hover:text-white text-lg"
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-[#0a192f]">
                <div className="center-container">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                                Our <span className="text-[#13c5dd]">Location</span>
                            </h2>
                            <div className="flex items-start mb-6">
                                <FaMapMarkerAlt
                                    className="text-[#13c5dd] text-xl mr-4 mt-1"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                        Main Hospital
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        123 Medical Center Drive, New York, NY 10001, USA
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start mb-6">
                                <FaPhone
                                    className="text-[#13c5dd] text-xl mr-4 mt-1"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                        Emergency Contact
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        +1 (555) 123-4567 (24/7 Emergency Line)
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaEnvelope
                                    className="text-[#13c5dd] text-xl mr-4 mt-1"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                        Support Email
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        support@medinova.com (Response within 24 hours)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                Business <span className="text-[#13c5dd]">Hours</span>
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
                                    { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
                                    { day: 'Sunday', time: '9:00 AM - 4:00 PM' },
                                    { day: 'Emergency Services', time: '24/7 Available' }
                                ].map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700 last:border-0">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            {schedule.day}
                                        </span>
                                        <span className="font-semibold text-[#13c5dd]">
                                            {schedule.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;