import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Zap, Brain, Share2, Filter, Printer, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Interactive Gantt Charts",
      description: "Visual timeline with drag-and-drop capabilities and multiple view modes"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Natural Language",
      description: "Create tasks using plain English - 'Design homepage from Jan 15 for 2 weeks'"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Templates",
      description: "6 built-in templates plus custom templates with AI-powered insights"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Velocity",
      description: "Track completion rates and predict project completion dates"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Advanced Filtering",
      description: "Search and filter by progress, dates, and custom criteria"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Export & Share",
      description: "Export to JSON/CSV and share via links with your team"
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Projects Created" },
    { value: "4.8/5", label: "User Rating" },
    { value: "99%", label: "Uptime" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 rounded-full glass border border-purple-500/30">
                <span className="text-sm text-purple-400">✨ Now with AI-Powered Features</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Manage Projects</span>
                <br />
                <span className="text-gradient">Like a Pro</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Create beautiful Gantt charts with natural language task creation, smart templates, and AI-powered insights. The most intuitive project timeline manager for Chrome.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  className="group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Install Free Extension
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/features"
                  className="px-8 py-4 rounded-lg glass border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Explore Features
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden glass p-4 animate-glow">
                <Image
                  src="/screenshots/heroshot01.png"
                  alt="Gantto Dashboard"
                  width={800}
                  height={600}
                  className="rounded-lg"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass rounded-lg p-4 animate-float hidden lg:block">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Task Completed</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass rounded-lg p-4 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">On Schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage projects efficiently, all in one beautiful extension
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All Features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of project managers using Gantto to streamline their workflow
              </p>
              <Link
                href="https://chrome.google.com/webstore"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                Install Now - It's Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
