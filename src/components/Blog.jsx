import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarAlt,
    faUser,
    faComments,
    faArrowRight,
    faTag,
    faClock,
    faBookOpen
} from '@fortawesome/free-solid-svg-icons';
import blog1 from '../assets/pregnancy-care.webp';
import blog2 from '../assets/health-checkup.webp';
import blog3 from '../assets/blog-3.webp';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Dolor clita vero elitr sea stet dolor justo diam',
            excerpt: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo',
            image: blog1,
            author: 'John Doe',
            date: 'Jan 01, 2024',
            comments: 123,
            category: 'Health Tips',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'How to Maintain Healthy Lifestyle During Winter',
            excerpt: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo',
            image: blog2,
            author: 'Jane Smith',
            date: 'Feb 15, 2024',
            comments: 89,
            category: 'Wellness',
            readTime: '7 min read'
        },
        {
            id: 3,
            title: 'Latest Advances in Medical Technology 2024',
            excerpt: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo',
            image: blog3,
            author: 'Dr. Robert Johnson',
            date: 'Mar 22, 2024',
            comments: 156,
            category: 'Technology',
            readTime: '8 min read'
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-white via-[#f8fcfd] to-[#eff5f9] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden">
            <div className="center-container">

                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#13c5dd]/10 to-[#1d2a4d]/5 dark:from-[#22d3ee]/20 dark:to-[#22d3ee]/5 rounded-full mb-6 shadow-lg dark:shadow-[#22d3ee]/10">
                        <FontAwesomeIcon icon={faBookOpen} className="text-[#13c5dd] dark:text-[#22d3ee] mr-3" />
                        <span className="text-[#13c5dd] dark:text-[#22d3ee] font-bold text-sm uppercase tracking-wider">
                            LATEST BLOG
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1d2a4d] dark:text-white mb-6 leading-tight">
                        Our Latest <span className="text-[#13c5dd] dark:text-[#22d3ee] relative">
                            Medical
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#13c5dd] dark:from-[#22d3ee] to-transparent"></span>
                        </span> Insights
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#13c5dd] dark:via-[#22d3ee] to-transparent mx-auto mb-8 animate-expand-width"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Stay updated with the latest medical news, health tips, and healthcare insights from our experts.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/40 hover:shadow-2xl dark:hover:shadow-gray-900/60 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                        >
                            {/* Blog Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white text-sm font-bold rounded-full shadow-lg">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2a4d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Blog Content */}
                            <div className="p-8">
                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6 gap-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUser} className="mr-2 text-[#13c5dd] dark:text-[#22d3ee]" />
                                        <span className="font-medium">{post.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-[#13c5dd] dark:text-[#22d3ee]" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faClock} className="mr-2 text-[#13c5dd] dark:text-[#22d3ee]" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-[#1d2a4d] dark:text-white mb-4 group-hover:text-[#13c5dd] dark:group-hover:text-[#22d3ee] transition-colors duration-300 leading-tight">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Bottom Info and Button */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
                                    {/* Comments */}
                                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                                        <FontAwesomeIcon icon={faComments} className="mr-2 text-[#13c5dd] dark:text-[#22d3ee]" />
                                        <span className="font-medium">{post.comments} Comments</span>
                                    </div>

                                    {/* Read More Button */}
                                    <button className="group/btn inline-flex items-center text-[#13c5dd] dark:text-[#22d3ee] font-bold hover:text-[#1d7a8c] dark:hover:text-[#0ea5e9] transition-colors duration-300">
                                        <span className="mr-2">Read More</span>
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="group-hover/btn:translate-x-2 transition-transform duration-300"
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#13c5dd]/30 dark:group-hover:border-[#22d3ee]/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center animate-fade-in-up">
                    <button className="group relative overflow-hidden bg-gradient-to-r from-[#13c5dd] to-[#1d7a8c] dark:from-[#22d3ee] dark:to-[#0ea5e9] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg">
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative flex items-center gap-3">
                            <span>View All Articles</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="group-hover:translate-x-2 transition-transform duration-300"
                            />
                        </span>
                    </button>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-br from-[#13c5dd]/5 dark:from-[#22d3ee]/5 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-gradient-to-tr from-[#1d2a4d]/5 dark:from-[#1e293b]/5 to-transparent rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default Blog;