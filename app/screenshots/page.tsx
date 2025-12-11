import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Screenshots - Gantto in Action",
    description: "See Gantto in action with detailed screenshots showcasing the interface, features, and capabilities.",
};

export default function ScreenshotsPage() {
    const screenshots = [
        {
            src: "/screenshots/heroshot01.png",
            title: "Main Dashboard",
            description: "Beautiful dark-themed interface with interactive Gantt chart visualization"
        },
        {
            src: "/screenshots/what_to_work_02.png",
            title: "Smart Suggestions",
            description: "AI-powered 'What to Work On Today' feature with intelligent task prioritization"
        },
        {
            src: "/screenshots/progreessVelocity_03.png",
            title: "Progress Velocity",
            description: "Track completion rates and predict project completion with visual analytics"
        },
        {
            src: "/screenshots/project_creation_04.png",
            title: "Project Creation",
            description: "Create projects with natural language or traditional forms"
        },
        {
            src: "/screenshots/filters_05.png",
            title: "Advanced Filtering",
            description: "Search and filter projects by status, dates, and custom criteria"
        },
        {
            src: "/screenshots/project_template_06__.png",
            title: "Smart Templates",
            description: "6 built-in professional templates plus custom template creation"
        },
        {
            src: "/screenshots/share_the_gantt_chart_07__.png",
            title: "Share & Export",
            description: "Export to JSON/CSV and share via links with your team"
        }
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">See Gantto in Action</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore detailed screenshots showcasing Gantto's beautiful interface and powerful features. From the main dashboard to advanced analytics, see how Gantto makes project management effortless.
                    </p>
                </div>

                {/* Screenshots Grid */}
                <div className="space-y-16">
                    {screenshots.map((screenshot, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.title}
                                        width={800}
                                        height={600}
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="glass rounded-2xl p-8">
                                    <div className="text-purple-400 font-semibold mb-2">
                                        Screenshot {index + 1}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">
                                        {screenshot.title}
                                    </h2>
                                    <p className="text-gray-300 text-lg">
                                        {screenshot.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Highlight */}
                <div className="mt-20 glass rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        What You'll Experience
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Beautiful Design</h3>
                            <p className="text-gray-400">
                                Modern dark theme with vibrant gradients and smooth animations
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                            <p className="text-gray-400">
                                Instant updates and real-time visual feedback on all actions
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-4">🧠</div>
                            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
                            <p className="text-gray-400">
                                Smart suggestions and predictive analytics for better planning
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6 text-lg">
                        Ready to experience Gantto yourself?
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
