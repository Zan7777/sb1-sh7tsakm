import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Users, DollarSign, Award, Shield, CheckCircle, Globe, Clock, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const achievements = [
    { icon: DollarSign, value: '$2M+', label: 'Revenue Generated' },
    { icon: Users, value: '500+', label: 'Creators Managed' },
    { icon: TrendingUp, value: '95%', label: 'Revenue Increase' },
    { icon: Award, value: '24/7', label: 'Support Available' }
  ];

  const serviceCategories = [
    {
      title: 'Content Strategy',
      services: ['Caption Creation', 'Content Planning', 'Visual Direction', 'Brand Development']
    },
    {
      title: 'Growth & Marketing',
      services: ['Social Media Management', 'Influencer Partnerships', 'Cross-Platform Promotion', 'Audience Analytics']
    },
    {
      title: 'Revenue Optimization',
      services: ['Chat Management', 'Upsell Strategies', 'Pricing Optimization', 'Financial Projections']
    },
    {
      title: 'Technical Support',
      services: ['Account Setup', 'Platform Optimization', 'Performance Tracking', 'Security Management']
    }
  ];

  const trustBadges = [
    { icon: Shield, label: 'SSL Secured' },
    { icon: CheckCircle, label: 'GDPR Compliant' },
    { icon: Award, label: 'Industry Certified' },
    { icon: Globe, label: 'Worldwide Service' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter & CTA Section */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                  Earning Potential?
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Join hundreds of successful creators who have revolutionized their OnlyFans presence with our expert management services.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="flex items-center px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-6">Get insider tips, industry trends, and exclusive strategies delivered to your inbox.</p>
              
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300"
                  >
                    Subscribe Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-semibold">Successfully subscribed!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Brand & Contact */}
            <div className="space-y-8">
              {/* Brand Section */}
              <div className="flex items-center mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                  Modellaire MGMT
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                The premier OnlyFans management agency dedicated to transforming creators into digital empires through cutting-edge strategies and personalized support.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300 group">
                  <Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300 group">
                  <Twitter className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300 group">
                  <MessageCircle className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                </a>
              </div>
            </div>

            {/* Right Column - Services Grid */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Our Complete Service Portfolio</h4>
              <div className="grid grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-white font-bold mb-4 text-sm">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-xs flex items-center group">
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Contact */}
        <div className="py-12 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <a href="mailto:hello@modellairemgmt.com" className="flex items-center text-gray-400 hover:text-pink-400 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-pink-500/20">
                    <Mail className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-sm">hello@modellairemgmt.com</div>
                  </div>
                </a>

                <a href="tel:+15551234567" className="flex items-center text-gray-400 hover:text-pink-400 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-pink-500/20">
                    <Phone className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm">+1 (555) 123-4567</div>
                  </div>
                </a>

                <div className="flex items-center text-gray-400 group">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="font-medium">Available</div>
                    <div className="text-sm">24/7 Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Modellaire MGMT. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Zap className="w-3 h-3 text-pink-400" />
                <span>Powered by Advanced AI Technology</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;