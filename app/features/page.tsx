import { Metadata } from 'next';
import { Calendar, Brain, Zap, TrendingUp, Filter, Share2, Printer, Layout, Clock, Target, Layers, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: "Features - Gantto Project Manager",
    description: "Explore all the powerful features of Gantto including natural language task creation, smart templates, progress tracking, and more.",
};

export default function FeaturesPage() {
    const coreFeatures = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Interactive Gantt Charts",
            description: "Visual timeline with drag-and-drop capabilities",
            details: [
                "Multiple view modes: Day, Week, Month, Year",
                "Color-coded bars for easy identification",
                "Real-time updates and visual feedback",
                "Today indicator for current date tracking"
            ]
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Natural Language Task Creation",
            description: "Create tasks using conversational language",
            details: [
                "Type: 'Design homepage from Jan 15 for 2 weeks'",
                "Supports relative dates: 'tomorrow', 'next Monday'",
                "Auto-extracts name, dates, duration, and progress",
                "Parse & fill form with one click"
            ]
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Smart Templates & Learning",
            description: "Pre-built templates and AI-powered insights",
            details: [
                "6 professional templates included",
                "Create custom templates from your projects",
                "AI learns from your historical data",
                "Get personalized recommendations"
            ]
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Progress Velocity Tracking",
            description: "Predictive analytics for project completion",
            details: [
                "Real-time completion rate calculation",
                "Estimated completion date predictions",
                "Visual 7-day progress trend chart",
                "Risk indicators (On track, Needs attention, At risk)"
            ]
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Smart Task Suggestions",
            description: "AI-powered 'What to Work On Today'",
            details: [
                "Intelligent prioritization of tasks",
                "Color-coded priority badges",
                "Context-aware recommendations",
                "One-click access to important tasks"
            ]
        },
        {
            icon: <Filter className="w-8 h-8" />,
            title: "Advanced Filtering",
            description: "Search and filter with precision",
            details: [
                "Real-time search across projects and tasks",
                "Filter by progress status",
                "Custom date range filtering",
                "Expand/collapse all functionality"
            ]
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            title: "Export & Share",
            description: "Multiple export and sharing options",
            details: [
                "Export to JSON for backup",
                "Export to CSV for spreadsheets",
                "Generate shareable links",
                "Copy data to clipboard"
            ]
        },
        {
            icon: <Printer className="w-8 h-8" />,
            title: "Print Support",
            description: "Print-optimized Gantt charts",
            details: [
                "Professional print layouts",
                "Optimized for presentations",
                "Save as PDF option",
                "Customizable print settings"
            ]
        },
        {
            icon: <Layout className="w-8 h-8" />,
            title: "Hierarchical Structure",
            description: "Organize projects and tasks efficiently",
            details: [
                "Create projects with multiple tasks",
                "Task dependencies and relationships",
                "Auto-calculated project progress",
                "Collapsible project sections"
            ]
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Date Range Control",
            description: "Flexible timeline management",
            details: [
                "Custom date range selection",
                "Quick 'Today' navigation",
                "Automatic timeline adjustment",
                "Validation for task dates"
            ]
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Critical Path Highlighting",
            description: "Identify critical tasks using CPM algorithm",
            details: [
                "Longest sequence of dependent tasks",
                "Visual highlighting of critical path",
                "Helps prioritize important work",
                "Optimize project timelines"
            ]
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Data Persistence",
            description: "Automatic saving and storage",
            details: [
                "Auto-save on all changes",
                "Chrome local storage",
                "No internet required",
                "Data persists across sessions"
            ]
        }
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Powerful Features</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Gantto is packed with advanced features designed to make project management effortless and efficient. From AI-powered insights to natural language processing, we've got you covered.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 mb-4">
                                {feature.description}
                            </p>

                            <ul className="space-y-2">
                                {feature.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="text-purple-400 mt-1">✓</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Premium Design Section */}
                <div className="mt-20 glass rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Premium Design & User Experience
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-purple-400 mb-4">Modern Dark Theme</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Professional dark mode interface</li>
                                <li>• Vibrant gradient accents</li>
                                <li>• Glassmorphism effects</li>
                                <li>• Smooth micro-animations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-purple-400 mb-4">Responsive & Accessible</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Optimized for all screen sizes</li>
                                <li>• Keyboard shortcuts support</li>
                                <li>• Intuitive user interface</li>
                                <li>• Fast and performant</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
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
