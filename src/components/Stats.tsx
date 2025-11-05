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
    <section ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Stats Cards */}
          <div className="space-y-8">
            {/* Time Saved */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-500 group">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Time Saved</h3>
                  <p className="text-gray-400">Hours saved in a month</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-pink-400 mb-1">
                    {timeSaved}%
                  </div>
                  <Clock className="w-8 h-8 text-pink-500/60" />
                </div>
              </div>
              <div className="mt-6 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${timeSaved}%` }}
                ></div>
              </div>
            </div>

            {/* Followers Gained */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-500 group">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Followers Gained</h3>
                  <p className="text-gray-400">New followers acquired</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-pink-400 mb-1">
                    {formatFollowers(followersGained)}+
                  </div>
                  <Users className="w-8 h-8 text-pink-500/60" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup & Revenue */}
          <div className="relative">
            {/* Mobile Phone Mockup */}
            <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl">
              {/* Screen */}
              <div className="absolute inset-4 bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-8 bg-black flex items-center justify-center">
                  <div className="w-16 h-1 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-white">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold mb-2">STATEMENTS</h4>
                    <p className="text-sm text-gray-400">EARNING STATISTICS</p>
                  </div>
                  
                  {/* Revenue Chart Placeholder */}
                  <div className="mb-6">
                    <div className="text-right text-2xl font-bold text-green-400 mb-2">
                      ${(revenueIncrease * 3.2).toLocaleString()}
                    </div>
                    <div className="h-24 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg flex items-end">
                      <div className="w-full h-16 bg-gradient-to-t from-pink-500/40 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Stats List */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Subscriptions</span>
                      <span className="text-green-400">${(revenueIncrease * 0.7).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tips</span>
                      <span className="text-green-400">${(revenueIncrease * 0.2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Messages</span>
                      <span className="text-green-400">${(revenueIncrease * 0.35).toLocaleString()}</span>
                    </div>
                    <hr className="border-gray-700" />
                    <div className="flex justify-between font-bold">
                      <span>TOTAL</span>
                      <span className="text-green-400">${revenueIncrease.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
            </div>

            {/* Revenue Increase Card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-pink-400" />
                <div>
                  <h4 className="text-lg font-bold text-white">Biggest Increase</h4>
                  <p className="text-2xl font-bold text-pink-400">
                    {formatRevenue(revenueIncrease)} increase in revenue
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 -right-12 w-20 h-20 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;