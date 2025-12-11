'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Mail, MapPin, Github, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Get in Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have questions, feedback, or need support? We'd love to hear from you. Fill out the form below or reach out directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="glass rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Email</h3>
                                        <a href="mailto:tkarthikeyan@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                                            tkarthikeyan@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">GitHub</h3>
                                        <a
                                            href="https://github.com/carthworks"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            @tkarthikeyan
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Location</h3>
                                        <p className="text-gray-400">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                            <p className="text-gray-400 mb-4">
                                We typically respond within 24-48 hours during business days.
                            </p>
                            <p className="text-sm text-gray-500">
                                For urgent issues, please mark your subject line with [URGENT]
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="glass rounded-2xl p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">
                                        Thank you for reaching out. We'll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-purple-500 focus:outline-none text-white"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="support">Technical Support</option>
                                            <option value="feature">Feature Request</option>
                                            <option value="bug">Bug Report</option>
                                            <option value="feedback">General Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 resize-none"
                                            placeholder="Tell us how we can help..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    <p className="text-sm text-gray-400 text-center">
                                        * Required fields
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-20 glass rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Other Ways to Connect
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
                            <p className="text-gray-400 mb-4">
                                Join discussions and get help from other users
                            </p>
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Visit Forum →
                            </a>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
                            <p className="text-gray-400 mb-4">
                                Browse our comprehensive guides and tutorials
                            </p>
                            <a href="/support" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Read Docs →
                            </a>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">🐛</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Report a Bug</h3>
                            <p className="text-gray-400 mb-4">
                                Found an issue? Let us know on GitHub
                            </p>
                            <a
                                href="https://github.com/carthworks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                GitHub Issues →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
