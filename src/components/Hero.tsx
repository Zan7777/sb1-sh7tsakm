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
    <section id="home" className="min-h-[70vh] md:min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-6">
            <div className="space-y-2 md:space-y-3">
              <div className="inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 bg-amber-500/10 rounded-full border border-amber-500/20 backdrop-blur-sm">
                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-amber-400 mr-1 md:mr-1.5" />
                <span className="text-[10px] md:text-xs text-amber-300 font-medium tracking-wide">PREMIUM MANAGEMENT</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Elevate Your
                <span className="block bg-gradient-to-r from-amber-200 via-neutral-100 to-amber-200 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-xl font-light">
                Sophisticated management solutions that transform your OnlyFans platform into a refined, revenue-generating enterprise.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              <button className="flex items-center px-4 py-2 md:px-6 md:py-2.5 bg-white text-black rounded-sm font-medium hover:bg-neutral-200 transition-all duration-300 text-xs md:text-sm tracking-wide">
                BEGIN NOW
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2" />
              </button>

              <button className="flex items-center px-4 py-2 md:px-6 md:py-2.5 bg-transparent text-white rounded-sm font-medium hover:bg-white/5 transition-all duration-300 backdrop-blur-sm border border-white/20 text-xs md:text-sm tracking-wide">
                OUR SERVICES
              </button>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-6 pt-3 md:pt-6 border-t border-white/5">
              <div>
                <div className="text-lg md:text-2xl font-bold text-white mb-0.5">$2M+</div>
                <div className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-wider">Revenue</div>
              </div>
              <div>
                <div className="text-lg md:text-2xl font-bold text-white mb-0.5">500+</div>
                <div className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-wider">Creators</div>
              </div>
              <div>
                <div className="text-lg md:text-2xl font-bold text-white mb-0.5">95%</div>
                <div className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-wider">Growth</div>
              </div>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-4 md:p-6 border border-white/10">
              <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-5 tracking-tight">Our Expertise</h3>

              <div className="space-y-2 md:space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2 md:space-x-3 group">
                    <div className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full flex items-center justify-center mt-0.5 md:mt-1">
                      <CheckCircle className="w-2 h-2 md:w-3 md:h-3 text-black" />
                    </div>
                    <p className="text-xs md:text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 font-light leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5 text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-200 to-neutral-100 bg-clip-text text-transparent">
                  $70K+
                </div>
                <div className="text-[10px] md:text-xs text-neutral-500 mt-1 uppercase tracking-wider">
                  Avg. Revenue Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;