import { Metadata } from 'next';
import { Users, Briefcase, Code, TrendingUp, Clock, Shield, Zap, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: "Benefits - Why Choose Gantto",
    description: "Discover the benefits of using Gantto for project management. Improve productivity, save time, and deliver projects on schedule.",
};

export default function BenefitsPage() {
    const benefits = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Save Time",
            description: "Create tasks in seconds using natural language instead of filling out lengthy forms",
            stats: "70% faster task creation"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Improve Productivity",
            description: "AI-powered suggestions help you focus on what matters most each day",
            stats: "40% increase in task completion"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Instant Insights",
            description: "Real-time progress tracking and predictive analytics keep you informed",
            stats: "Real-time project visibility"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Data Security",
            description: "All data stored locally in Chrome - no external servers or data breaches",
            stats: "100% local storage"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "User-Friendly",
            description: "Intuitive interface with smooth animations and beautiful design",
            stats: "4.8/5 user satisfaction"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Easy Collaboration",
            description: "Share projects via links and export to multiple formats for team sharing",
            stats: "Seamless team sharing"
        }
    ];

    const userBenefits = {
        "Project Managers": [
            "Data-driven decisions with velocity tracking",
            "Predictive planning for accurate timelines",
            "Early risk detection with trend indicators",
            "Clear priority management",
            "Professional presentations with print support"
        ],
        "Developers": [
            "Clear focus with smart task suggestions",
            "Context-aware prioritization",
            "One-click access to important tasks",
            "Visual progress tracking for motivation",
            "Sprint planning with week view"
        ],
        "Teams": [
            "Transparent priority visibility for everyone",
            "Accountability with overdue task highlighting",
            "Upcoming task planning",
            "Momentum maintenance on in-progress work",
            "Easy data sharing and export"
        ],
        "Freelancers": [
            "Quick project setup with templates",
            "Client workflow templates",
            "Progress sharing via links",
            "Professional timeline presentations",
            "Time tracking and velocity insights"
        ]
    };

    const comparisonPoints = [
        {
            feature: "Natural Language Input",
            gantto: true,
            others: false
        },
        {
            feature: "AI-Powered Suggestions",
            gantto: true,
            others: false
        },
        {
            feature: "Progress Velocity Tracking",
            gantto: true,
            others: false
        },
        {
            feature: "Smart Templates",
            gantto: true,
            others: "Limited"
        },
        {
            feature: "Local Data Storage",
            gantto: true,
            others: false
        },
        {
            feature: "No Subscription Required",
            gantto: true,
            others: false
        },
        {
            feature: "Beautiful Modern UI",
            gantto: true,
            others: "Basic"
        },
        {
            feature: "Chrome Extension",
            gantto: true,
            others: "Web Only"
        }
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Why Choose Gantto?</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Discover how Gantto transforms project management with AI-powered features, intuitive design, and powerful capabilities that save you time and improve productivity.
                    </p>
                </div>

                {/* Main Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                                {benefit.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-400 mb-4">
                                {benefit.description}
                            </p>

                            <div className="text-purple-400 font-semibold">
                                {benefit.stats}
                            </div>
                        </div>
                    ))}
                </div>

                {/* User-Specific Benefits */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span className="text-gradient">Benefits for Everyone</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(userBenefits).map(([role, benefits]) => (
                            <div key={role} className="glass rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Briefcase className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-2xl font-bold text-white">{role}</h3>
                                </div>

                                <ul className="space-y-3">
                                    {benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-purple-400 mt-1">✓</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span className="text-gradient">Gantto vs Others</span>
                    </h2>

                    <div className="glass rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                                        <th className="px-6 py-4 text-center text-white font-semibold">Gantto</th>
                                        <th className="px-6 py-4 text-center text-white font-semibold">Other Tools</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {comparisonPoints.map((point, index) => (
                                        <tr key={index} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-gray-300">{point.feature}</td>
                                            <td className="px-6 py-4 text-center">
                                                {point.gantto === true ? (
                                                    <span className="text-green-400 text-2xl">✓</span>
                                                ) : (
                                                    <span className="text-gray-400">{point.gantto}</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {point.others === true ? (
                                                    <span className="text-green-400 text-2xl">✓</span>
                                                ) : point.others === false ? (
                                                    <span className="text-red-400 text-2xl">✗</span>
                                                ) : (
                                                    <span className="text-yellow-400">{point.others}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* ROI Section */}
                <div className="glass rounded-3xl p-12 mb-20">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Return on Investment
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-gradient mb-2">10hrs</div>
                            <p className="text-gray-400">Saved per month on average</p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-gradient mb-2">$0</div>
                            <p className="text-gray-400">Completely free to use</p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-gradient mb-2">∞</div>
                            <p className="text-gray-400">Unlimited projects and tasks</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-6 text-lg">
                        Join thousands of satisfied users today
                    </p>
                    <a
                        href="https://chrome.google.com/webstore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                    >
                        Install Gantto Now - It's Free
                    </a>
                </div>
            </div>
        </div>
    );
}
