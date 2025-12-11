'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Search, Book, Video, MessageCircle, HelpCircle, Keyboard, FileText, Download } from 'lucide-react';

export default function SupportPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const faqs = [
        {
            category: 'Getting Started',
            question: 'How do I install Gantto?',
            answer: 'Visit the Chrome Web Store, search for "Gantto", and click "Add to Chrome". The extension will appear in your browser toolbar.'
        },
        {
            category: 'Getting Started',
            question: 'Is Gantto free to use?',
            answer: 'Yes! Gantto is completely free with no subscription fees, hidden costs, or premium tiers. All features are available to everyone.'
        },
        {
            category: 'Features',
            question: 'How does natural language task creation work?',
            answer: 'Simply type your task in plain English like "Design homepage from Jan 15 for 2 weeks, 50% done" and click "Parse & Fill Form". Gantto will automatically extract the name, dates, duration, and progress.'
        },
        {
            category: 'Features',
            question: 'What are smart templates?',
            answer: 'Gantto includes 6 professional project templates (Web Development, Marketing Campaign, etc.) that you can use as starting points. You can also create custom templates from your own projects.'
        },
        {
            category: 'Features',
            question: 'How does progress velocity tracking work?',
            answer: 'Gantto calculates your completion rate (tasks per day) and predicts when your project will be complete based on current velocity. It also shows trend indicators to help you stay on track.'
        },
        {
            category: 'Data & Privacy',
            question: 'Where is my data stored?',
            answer: 'All your data is stored locally in Chrome using the chrome.storage.local API. Nothing is sent to external servers, ensuring complete privacy and security.'
        },
        {
            category: 'Data & Privacy',
            question: 'Can I export my data?',
            answer: 'Yes! You can export your projects to JSON (for backup) or CSV (for spreadsheets). You can also generate shareable links or copy data to clipboard.'
        },
        {
            category: 'Usage',
            question: 'How do I create a project?',
            answer: 'Click the "Add Project" button, fill in the details (or use natural language), and save. You can then add tasks to your project.'
        },
        {
            category: 'Usage',
            question: 'Can I print my Gantt chart?',
            answer: 'Yes! Click the print icon to open a print-optimized view. You can print directly or save as PDF for presentations.'
        },
        {
            category: 'Usage',
            question: 'What are the keyboard shortcuts?',
            answer: 'Ctrl/Cmd + N for new project, Ctrl/Cmd + T for new task, Ctrl/Cmd + F for search, Ctrl/Cmd + P for print, and Escape to close modals.'
        },
        {
            category: 'Troubleshooting',
            question: 'My data is not saving. What should I do?',
            answer: 'Check that Chrome has storage permissions for the extension. Try clearing browser cache and reloading the extension. Check the browser console for any errors.'
        },
        {
            category: 'Troubleshooting',
            question: 'The timeline is not displaying correctly.',
            answer: 'Ensure your date range is set correctly and that projects have valid start dates. Verify that duration values are positive numbers.'
        }
    ];

    const resources = [
        {
            icon: <Book className="w-6 h-6" />,
            title: 'User Guide',
            description: 'Comprehensive documentation covering all features',
            link: '#'
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: 'Video Tutorials',
            description: 'Step-by-step video guides for common tasks',
            link: '#'
        },
        {
            icon: <Keyboard className="w-6 h-6" />,
            title: 'Keyboard Shortcuts',
            description: 'Complete list of keyboard shortcuts',
            link: '#'
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Release Notes',
            description: 'Latest updates and version history',
            link: '#'
        }
    ];

    const categories = ['all', 'Getting Started', 'Features', 'Data & Privacy', 'Usage', 'Troubleshooting'];

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Support Center</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Find answers to common questions, browse documentation, and get help with Gantto
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-lg glass border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Quick Resources */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {resources.map((resource, index) => (
                        <a
                            key={index}
                            href={resource.link}
                            className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                                {resource.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                            <p className="text-sm text-gray-400">{resource.description}</p>
                        </a>
                    ))}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeCategory === category
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                                    : 'glass text-gray-400 hover:text-white'
                                }`}
                        >
                            {category === 'all' ? 'All Topics' : category}
                        </button>
                    ))}
                </div>

                {/* FAQs */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {filteredFaqs.map((faq, index) => (
                            <details
                                key={index}
                                className="glass rounded-xl p-6 group hover:bg-white/10 transition-all"
                            >
                                <summary className="flex items-start gap-3 cursor-pointer list-none">
                                    <HelpCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-1">
                                            {faq.question}
                                        </h3>
                                        <span className="text-sm text-purple-400">{faq.category}</span>
                                    </div>
                                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 pl-8 text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-12 glass rounded-xl">
                            <p className="text-gray-400">No results found. Try a different search term or category.</p>
                        </div>
                    )}
                </div>

                {/* Contact Support */}
                <div className="mt-20 glass rounded-3xl p-12 text-center">
                    <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Still Need Help?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Can't find what you're looking for? Our support team is here to help. Reach out to us and we'll get back to you as soon as possible.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
}
