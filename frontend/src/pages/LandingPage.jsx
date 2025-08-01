import React, { useState, useEffect } from "react";
import {
  Play,
  BookOpen,
  Tv,
  Headphones,
  Brain,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Heart,
  Zap,
  Shield,
  Clock,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

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
      gradient: "purple-pink",
    },
    {
      icon: Target,
      title: "Personalized Discovery",
      description:
        "Every recommendation is tailored to your unique taste profile and viewing history",
      gradient: "blue-cyan",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "Track your content journey with detailed insights and preference evolution",
      gradient: "emerald-teal",
    },
  ];

  const contentTypes = [
    { icon: BookOpen, label: "Books", color: "amber" },
    { icon: Tv, label: "TV Shows", color: "blue" },
    { icon: Play, label: "Movies", color: "red" },
  ];

  return (
    <div className="landing-page">
      {/* Animated background effects */}
      <div className="background-effects">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-icon">
              <Sparkles size={24} />
            </div>
            <span className="brand-text">Pixelites</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            <h1 className="hero-title">
              Discover Your Next
              <br />
              <span className="hero-title-accent">Obsession</span>
            </h1>
            <p className="hero-subtitle">
              AI-powered content recommendations that understand your taste
              better than you do. Find books, shows, movies, and podcasts
              tailored perfectly to your preferences.
            </p>

            {/* Content type badges */}
            <div className="content-types">
              {contentTypes.map((type, index) => (
                <div
                  key={index}
                  className={`content-type-badge content-type-${type.color}`}
                >
                  <type.icon size={20} />
                  <span>{type.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button className="primary-button">
                <Link to="/signup" className="to-login">
                  <span>Start Discovering</span>
                </Link>
                <ArrowRight size={20} />
              </button>
              <button className="secondary-button">Watch Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Powered by Intelligence</h2>
            <p className="section-subtitle">
              Our advanced AI doesn't just recommend content—it understands your
              evolving tastes and discovers hidden gems you never knew you
              wanted.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${
                  activeFeature === index ? "active" : ""
                }`}
              >
                <div
                  className={`feature-icon feature-icon-${feature.gradient}`}
                >
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="section-header">
            <h2 className="section-title">Simple. Smart. Seamless.</h2>
          </div>

          <div className="steps-grid">
            <div className="connection-line connection-line-1"></div>
            <div className="connection-line connection-line-2"></div>

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
              <div key={index} className="step-card">
                <div className="step-icon">
                  <step.icon size={40} />
                  <div className="step-number">{index + 1}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <h2 className="cta-title">Transform Your Discovery</h2>
            <p className="cta-subtitle">
              Experience personalized content recommendations that evolve with
              your taste and help you discover your next favorite obsession.
            </p>
            <div className="trust-badges">
              <div className="trust-badge">
                <Shield size={16} />
                <span>Free forever</span>
              </div>
              <div className="trust-badge">
                <Clock size={16} />
                <span>No setup time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand-icon">
              <Sparkles size={20} />
            </div>
            <span className="brand-text">Pixelites</span>
          </div>
          <p className="footer-tagline">
            Discover content that speaks to your soul, powered by artificial
            intelligence.
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
            <a href="#" className="footer-link">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
