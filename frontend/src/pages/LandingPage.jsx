import React, { useState, useEffect } from "react";
import {
  Play,
  BookOpen,
  Tv,
  Headphones,
  Star,
  Users,
  Brain,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Eye,
  Heart,
  Zap,
  Shield,
  Clock,
  Target,
} from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,

      title: "AI-Powered Recommendations",

      description:
        "Advanced machine learning algorithms analyze your preferences to suggest content you'll love",

      gradient: "from-purple-400 to-pink-400",
    },

    {
      icon: Target,

      title: "Personalized Discovery",

      description:
        "Every recommendation is tailored to your unique taste profile and viewing history",

      gradient: "from-blue-400 to-cyan-400",
    },

    {
      icon: TrendingUp,

      title: "Smart Analytics",

      description:
        "Track your content journey with detailed insights and preference evolution",

      gradient: "from-emerald-400 to-teal-400",
    },
  ];

  const stats = [];

  const contentTypes = [
    { icon: BookOpen, label: "Books", color: "text-amber-400" },

    { icon: Tv, label: "TV Shows", color: "text-blue-400" },

    { icon: Play, label: "Movies", color: "text-red-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}

      <nav className="relative z-10 px-6 py-4 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pixelites
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="hover:text-purple-300 transition-colors"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="hover:text-purple-300 transition-colors"
            >
              How It Works
            </a>

            <a
              href="#pricing"
              className="hover:text-purple-300 transition-colors"
            >
              Pricing
            </a>

            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Discover Your Next
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Obsession
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered content recommendations that understand your taste
              better than you do. Find books, shows, movies tailored perfectly
              to your preferences.
            </p>

            {/* Content type badges */}

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {contentTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <type.icon className={`w-5 h-5 ${type.color}`} />

                  <span className="text-sm font-medium">{type.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-2xl">
                <span>Start Discovering</span>

                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powered by Intelligence
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our advanced AI doesn't just recommend content—it understands your
              evolving tastes and discovers hidden gems you never knew you
              wanted.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                  activeFeature === index ? "ring-2 ring-purple-400/50" : ""
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}

      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple. Smart. Seamless.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}

            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-y-1/2"></div>

            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-y-1/2"></div>

            {[
              {
                icon: Heart,
                title: "Share Your Taste",
                desc: "Tell us what you love, rate content, and let our AI learn your preferences",
              },

              {
                icon: Brain,
                title: "AI Analysis",
                desc: "Our intelligent engine processes your data and finds patterns in your preferences",
              },

              {
                icon: Sparkles,
                title: "Get Recommendations",
                desc: "Receive personalized suggestions that match your unique taste profile perfectly",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-10 h-10 text-white" />

                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>

                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transform Your Discovery
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience personalized content recommendations that evolve with
              your taste and help you discover your next favorite obsession.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />

                <span>Free forever</span>
              </div>

              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />

                <span>No setup time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pixelites
            </span>
          </div>

          <p className="text-gray-400 mb-6">
            Discover content that speaks to your soul, powered by artificial
            intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-purple-300 transition-colors">
              Terms of Service
            </a>

            <a href="#" className="hover:text-purple-300 transition-colors">
              Contact
            </a>

            <a href="#" className="hover:text-purple-300 transition-colors">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
