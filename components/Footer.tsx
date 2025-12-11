import Link from 'next/link';
import { Github, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="glass border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">G</span>
                            </div>
                            <span className="text-xl font-bold text-gradient">Gantto</span>
                        </div>
                        <p className="text-gray-400 max-w-md mb-4">
                            Professional project timeline manager. Create beautiful Gantt charts with advanced features including natural language task creation and smart templates.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/carthworks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="mailto:tkarthikeyan@gmail.com"
                                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/screenshots" className="text-gray-400 hover:text-white transition-colors">
                                    Screenshots
                                </Link>
                            </li>
                            <li>
                                <Link href="/benefits" className="text-gray-400 hover:text-white transition-colors">
                                    Benefits
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
                    <p>© {currentYear} Gantto by Karthikeyan T. All rights reserved.</p>
                    <p className="mt-2 text-sm">Made with ❤️ for project managers and developers</p>
                </div>
            </div>
        </footer>
    );
}
