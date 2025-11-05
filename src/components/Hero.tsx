import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Users, Clock, Shield, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const achievements = [
    "Aggressive promotion to push past $50k/month",
    "Tailored campaigns that put your brand in spotlight", 
    "Full team managing promotion across all channels",
    "Optimized posts, ads, and campaigns for maximum reach",
    "Position you in front of the right audience at the right time"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 text-pink-400 mr-2" />
                <span className="text-sm text-pink-300 font-medium">Premium OnlyFans Management</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 bg-clip-text text-transparent">
                  Digital Empire
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Elevate your OnlyFans presence with our cutting-edge management solutions. 
                We don't just manage - we revolutionize your earning potential through 
                advanced strategies and futuristic approaches.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="flex items-center px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$2M+</div>
                <div className="text-sm text-gray-400">Generated Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Creators Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400">Revenue Increase</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features List */}
          {/* Trusted & Secure Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-white font-bold mb-6 text-center">Trusted & Secure</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-xs text-gray-400 font-medium">SSL Secured</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-xs text-gray-400 font-medium">GDPR Compliant</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-xs text-gray-400 font-medium">Industry Certified</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-xs text-gray-400 font-medium">Worldwide Service</div>
              </div>
            </div>
          </div>

        {/* Enhanced Achievements Section */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">$2M+</div>
              <div className="text-sm text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400">Creators Managed</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-gray-400">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Modellaire MGMT</h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                    $70K+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Average Revenue Increase
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-red-500/15 to-pink-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;