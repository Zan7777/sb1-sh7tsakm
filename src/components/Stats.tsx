import React, { useEffect, useState, useRef } from 'react';
import { Smartphone, Users, TrendingUp, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeSaved, setTimeSaved] = useState(0);
  const [followersGained, setFollowersGained] = useState(0);
  const [revenueIncrease, setRevenueIncrease] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate time saved to 50%
      const timeInterval = setInterval(() => {
        setTimeSaved(prev => {
          if (prev >= 50) {
            clearInterval(timeInterval);
            return 50;
          }
          return prev + 1;
        });
      }, 20);

      // Animate followers gained to 2M
      const followersInterval = setInterval(() => {
        setFollowersGained(prev => {
          if (prev >= 2000000) {
            clearInterval(followersInterval);
            return 2000000;
          }
          return prev + 50000;
        });
      }, 30);

      // Animate revenue increase to 70k
      const revenueInterval = setInterval(() => {
        setRevenueIncrease(prev => {
          if (prev >= 70000) {
            clearInterval(revenueInterval);
            return 70000;
          }
          return prev + 2000;
        });
      }, 25);
    }
  }, [isVisible]);

  const formatFollowers = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toLocaleString();
  };

  const formatRevenue = (num: number) => {
    if (num >= 1000) {
      return '$' + (num / 1000).toFixed(0) + 'K';
    }
    return '$' + num.toLocaleString();
  };

  return (
    <section ref={sectionRef} className="py-6 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-6">
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-3 md:p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-white mb-0.5 md:mb-1 tracking-tight">Time Efficiency</h3>
                  <p className="text-[10px] md:text-xs text-neutral-500 font-light">Monthly hours saved</p>
                </div>
                <div className="text-right">
                  <div className="text-xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">
                    {timeSaved}%
                  </div>
                  <Clock className="w-3.5 h-3.5 md:w-5 md:h-5 text-neutral-500" />
                </div>
              </div>
              <div className="mt-2 md:mt-4 h-0.5 md:h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${timeSaved}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-3 md:p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-white mb-0.5 md:mb-1 tracking-tight">Audience Growth</h3>
                  <p className="text-[10px] md:text-xs text-neutral-500 font-light">New followers acquired</p>
                </div>
                <div className="text-right">
                  <div className="text-xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">
                    {formatFollowers(followersGained)}+
                  </div>
                  <Users className="w-3.5 h-3.5 md:w-5 md:h-5 text-neutral-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <div className="relative mx-auto w-48 h-[380px] md:w-72 md:h-[550px] bg-black rounded-[2rem] md:rounded-[2.5rem] border-2 md:border-4 border-neutral-800 shadow-2xl">
              <div className="absolute inset-2 md:inset-3 bg-gradient-to-b from-neutral-950 to-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                <div className="h-4 md:h-6 bg-black flex items-center justify-center">
                  <div className="w-8 md:w-12 h-0.5 bg-white/50 rounded-full"></div>
                </div>

                <div className="p-3 md:p-5 text-white">
                  <div className="text-center mb-3 md:mb-5">
                    <h4 className="text-xs md:text-base font-bold mb-0.5 md:mb-1 tracking-tight">REVENUE</h4>
                    <p className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-wider">Statistics</p>
                  </div>
                  
                  <div className="mb-3 md:mb-5">
                    <div className="text-right text-sm md:text-xl font-bold text-white mb-1 md:mb-2">
                      ${(revenueIncrease * 3.2).toLocaleString()}
                    </div>
                    <div className="h-12 md:h-20 bg-white/5 rounded-sm flex items-end">
                      <div className="w-full h-8 md:h-14 bg-gradient-to-t from-white/20 to-transparent rounded-sm"></div>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2 text-[10px] md:text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Subscriptions</span>
                      <span className="text-white">${(revenueIncrease * 0.7).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Tips</span>
                      <span className="text-white">${(revenueIncrease * 0.2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Messages</span>
                      <span className="text-white">${(revenueIncrease * 0.35).toLocaleString()}</span>
                    </div>
                    <hr className="border-white/10" />
                    <div className="flex justify-between font-bold">
                      <span className="text-white">TOTAL</span>
                      <span className="text-white">${revenueIncrease.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1 md:bottom-1.5 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 bg-white/50 rounded-full"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white/[0.05] backdrop-blur-sm rounded-sm p-2 md:p-4 border border-white/10 shadow-2xl">
              <div className="flex items-center space-x-1.5 md:space-x-2">
                <TrendingUp className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                <div>
                  <h4 className="text-[9px] md:text-xs font-medium text-neutral-400 uppercase tracking-wider">Peak Growth</h4>
                  <p className="text-sm md:text-lg font-bold text-white">
                    {formatRevenue(revenueIncrease)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;