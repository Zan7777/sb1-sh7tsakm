import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Users, Clock, Shield, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const achievements = [
    "Aggressive promotion past $50k/month",
    "Tailored campaigns in spotlight",
    "Full-team channel management",
    "Optimized campaigns for reach",
    "Right audience, right time"
  ];

  return (
    <section id="home" className="min-h-[70vh] md:min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-6">
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Elevate Your
                <span className="block bg-gradient-to-r from-amber-200 via-neutral-100 to-amber-200 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-xl font-light">
                Sophisticated management solutions that transform your OnlyFans platform into a refined, revenue-generating enterprise.
              </p>

              <div className="inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 bg-amber-500/10 rounded-full border border-amber-500/20 backdrop-blur-sm">
                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-amber-400 mr-1 md:mr-1.5" />
                <span className="text-[10px] md:text-xs text-amber-300 font-medium tracking-wide">PREMIUM MANAGEMENT</span>
              </div>
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
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-3 md:p-6 border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4 tracking-tight flex items-center">
                  <span className="w-1 h-4 md:h-5 bg-gradient-to-b from-amber-300 to-amber-600 mr-2 rounded-full"></span>
                  Our Expertise
                </h3>

                <div className="space-y-1 md:space-y-2">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1.5 md:space-x-2 group/item hover:translate-x-1 transition-all duration-300"
                      style={{
                        animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s backwards`,
                      }}
                    >
                      <div className="flex-shrink-0 w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-1.5 h-1.5 md:w-2 md:h-2 text-black" />
                      </div>
                      <p className="text-[10px] md:text-sm text-neutral-400 group-hover/item:text-neutral-200 transition-colors duration-300 font-light leading-tight">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 md:mt-5 pt-3 md:pt-5 border-t border-white/5 text-center relative">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

                  <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent animate-pulse">
                    $70K+
                  </div>
                  <div className="text-[9px] md:text-xs text-neutral-500 mt-0.5 md:mt-1 uppercase tracking-widest font-light">
                    Avg. Revenue Growth
                  </div>
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