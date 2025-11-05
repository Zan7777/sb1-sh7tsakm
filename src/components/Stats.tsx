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
      // Animate time saved to 40%
      const timeInterval = setInterval(() => {
        setTimeSaved(prev => {
          if (prev >= 40) {
            clearInterval(timeInterval);
            return 40;
          }
          return prev + 1;
        });
      }, 25);

      // Animate followers gained to 850K
      const followersInterval = setInterval(() => {
        setFollowersGained(prev => {
          if (prev >= 850000) {
            clearInterval(followersInterval);
            return 850000;
          }
          return prev + 25000;
        });
      }, 30);

      // Animate revenue increase to 68k
      const revenueInterval = setInterval(() => {
        setRevenueIncrease(prev => {
          if (prev >= 68000) {
            clearInterval(revenueInterval);
            return 68000;
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
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
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
    <section ref={sectionRef} className="py-4 relative">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 items-center">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-sm p-2.5 border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 animate-fadeIn">
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <h3 className="text-[11px] font-semibold text-white mb-0.5 tracking-tight">Time Efficiency</h3>
                  <p className="text-[8px] text-neutral-500 font-light">Monthly hours saved</p>
                </div>
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300 bg-clip-text text-transparent">
                {timeSaved}%
              </div>
              <div className="mt-2 h-0.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${timeSaved}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-sm p-2.5 border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 animate-fadeIn" style={{ animationDelay: '150ms' }}>
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <h3 className="text-[11px] font-semibold text-white mb-0.5 tracking-tight">Audience Growth</h3>
                  <p className="text-[8px] text-neutral-500 font-light">New followers acquired</p>
                </div>
                <Users className="w-3.5 h-3.5 text-neutral-500" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300 bg-clip-text text-transparent">
                {formatFollowers(followersGained)}+
              </div>
            </div>
          </div>

          <div className="relative mt-3 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            <div className="relative mx-auto w-full max-w-[280px] h-[320px] bg-black rounded-[1.5rem] border-2 border-neutral-800 shadow-2xl overflow-hidden">
              <div className="absolute inset-2 bg-gradient-to-b from-neutral-950 to-black rounded-[1.2rem] overflow-hidden">
                <div className="h-3 bg-black flex items-center justify-center border-b border-white/5">
                  <div className="w-10 h-0.5 bg-white/50 rounded-full"></div>
                </div>

                <div className="relative h-[calc(100%-3rem)]">
                  <img
                    src="https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional creator"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <div className="relative p-3 text-white">
                    <div className="text-center mb-3">
                      <h4 className="text-[10px] font-bold mb-0.5 tracking-tight">REVENUE</h4>
                      <p className="text-[8px] text-neutral-500 uppercase tracking-wider">Statistics</p>
                    </div>

                    <div className="mb-3">
                      <div className="text-center text-xl font-bold bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300 bg-clip-text text-transparent mb-1.5">
                        ${(revenueIncrease * 3.2).toLocaleString()}
                      </div>
                      <div className="h-16 bg-white/5 rounded-sm flex items-end overflow-hidden backdrop-blur-sm">
                        <div className="w-full h-12 bg-gradient-to-t from-gray-300/30 via-gray-100/20 to-transparent rounded-sm animate-pulse"></div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-[9px] bg-black/50 backdrop-blur-sm rounded-sm p-2 border border-white/10">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Subscriptions</span>
                        <span className="text-white font-medium">${(revenueIncrease * 0.7).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Tips</span>
                        <span className="text-white font-medium">${(revenueIncrease * 0.2).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Messages</span>
                        <span className="text-white font-medium">${(revenueIncrease * 0.35).toLocaleString()}</span>
                      </div>
                      <hr className="border-white/20" />
                      <div className="flex justify-between font-bold">
                        <span className="text-white">TOTAL</span>
                        <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">${revenueIncrease.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-white/50 rounded-full"></div>
            </div>

            <div className="absolute -bottom-3 -right-2 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-md rounded-sm p-2 border border-white/20 shadow-2xl animate-pulse">
              <div className="flex items-center space-x-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-white" />
                <div>
                  <h4 className="text-[8px] font-medium text-neutral-400 uppercase tracking-wider">Peak Growth</h4>
                  <p className="text-sm font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
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