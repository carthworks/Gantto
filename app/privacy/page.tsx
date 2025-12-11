import { Metadata } from 'next';
import { Shield, Lock, Database, Eye, UserCheck, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: "Privacy Policy - Gantto",
    description: "Learn how Gantto protects your privacy and handles your data. We store everything locally with no external servers.",
};

export default function PrivacyPage() {
    const lastUpdated = "December 11, 2025";

    const principles = [
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Local Storage Only",
            description: "All your data is stored locally in your browser. We never send your data to external servers."
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "No Tracking",
            description: "We don't track your usage, collect analytics, or use cookies for advertising purposes."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Your Data is Yours",
            description: "You have complete control over your data. Export, delete, or modify it anytime."
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "No Account Required",
            description: "Use Gantto without creating an account or providing personal information."
        }
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <Shield className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Privacy Policy</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Your privacy is our priority. Learn how we protect your data.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Last Updated: {lastUpdated}
                    </p>
                </div>

                {/* Privacy Principles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {principles.map((principle, index) => (
                        <div key={index} className="glass rounded-xl p-6">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                                {principle.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                            <p className="text-gray-400">{principle.description}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Policy */}
                <div className="glass rounded-2xl p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Database className="w-6 h-6 text-purple-400" />
                            Information We Collect
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                Gantto is designed with privacy in mind. We collect minimal information necessary for the extension to function:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Project and Task Data:</strong> Information you enter (project names, dates, descriptions, etc.) is stored locally in your browser using Chrome's storage API.</li>
                                <li><strong>Extension Settings:</strong> Your preferences and settings are stored locally.</li>
                                <li><strong>No Personal Information:</strong> We do not collect names, email addresses, or any personally identifiable information.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Lock className="w-6 h-6 text-purple-400" />
                            How We Store Your Data
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                All data is stored using the <code className="px-2 py-1 rounded bg-white/10 text-purple-400">chrome.storage.local</code> API:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Local Storage:</strong> Data never leaves your device</li>
                                <li><strong>No Cloud Sync:</strong> We don't sync your data to any servers</li>
                                <li><strong>Browser-Based:</strong> Data is tied to your Chrome browser profile</li>
                                <li><strong>Automatic Saving:</strong> Changes are saved automatically to local storage</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Eye className="w-6 h-6 text-purple-400" />
                            What We Don't Do
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                We are committed to respecting your privacy:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>We <strong>do not</strong> send your data to external servers</li>
                                <li>We <strong>do not</strong> track your usage or behavior</li>
                                <li>We <strong>do not</strong> use analytics or tracking cookies</li>
                                <li>We <strong>do not</strong> sell or share your data with third parties</li>
                                <li>We <strong>do not</strong> display advertisements</li>
                                <li>We <strong>do not</strong> require account creation or login</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <UserCheck className="w-6 h-6 text-purple-400" />
                            Your Rights and Control
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                You have complete control over your data:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Export:</strong> Export all your data to JSON or CSV at any time</li>
                                <li><strong>Delete:</strong> Remove individual projects/tasks or clear all data</li>
                                <li><strong>Modify:</strong> Edit any information you've entered</li>
                                <li><strong>Uninstall:</strong> Removing the extension deletes all local data</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-purple-400" />
                            Security
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                We take security seriously:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Chrome Security:</strong> Data is protected by Chrome's built-in security measures</li>
                                <li><strong>No Network Requests:</strong> The extension doesn't make external network calls</li>
                                <li><strong>Minimal Permissions:</strong> We only request necessary Chrome permissions</li>
                                <li><strong>Open Source:</strong> Code can be reviewed for transparency</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-purple-400" />
                            Chrome Permissions
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                Gantto requires the following Chrome permissions:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>storage:</strong> To save your projects and tasks locally</li>
                                <li><strong>No other permissions required</strong></li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                Gantto does not integrate with any third-party services, analytics platforms, or advertising networks. The extension is completely self-contained.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                Gantto does not knowingly collect any information from anyone. Since we don't collect personal data, the extension is safe for users of all ages.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                        <div className="text-gray-300 space-y-4">
                            <p>
                                If you have any questions about this privacy policy or how we handle data, please contact us:
                            </p>
                            <ul className="list-none space-y-2 ml-4">
                                <li><strong>Email:</strong> <a href="mailto:tkarthikeyan@gmail.com" className="text-purple-400 hover:text-purple-300">tkarthikeyan@gmail.com</a></li>
                                <li><strong>GitHub:</strong> <a href="https://github.com/carthworks" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">@tkarthikeyan</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Summary Box */}
                <div className="mt-12 glass rounded-2xl p-8 border-2 border-purple-500/30">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                        Privacy in a Nutshell
                    </h3>
                    <p className="text-gray-300 text-center text-lg">
                        Your data stays on your device. We don't collect, track, or share anything. You have complete control. That's it. 🔒
                    </p>
                </div>
            </div>
        </div>
    );
}
