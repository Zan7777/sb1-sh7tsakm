import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react';

const Calculator: React.FC = () => {
  const [subscribers, setSubscribers] = useState(7500);
  const [subscriptionPrice, setSubscriptionPrice] = useState(15);
  const [isPaid, setIsPaid] = useState(true);
  const [revenue, setRevenue] = useState(0);
  const [multiplier, setMultiplier] = useState(10);

  useEffect(() => {
    // Calculate estimated revenue
    const baseRevenue = isPaid ? subscribers * subscriptionPrice : subscribers * 5;
    const ppvRevenue = baseRevenue * (multiplier / 10);
    setRevenue(Math.round(baseRevenue + ppvRevenue));
  }, [subscribers, subscriptionPrice, isPaid, multiplier]);

  return (
    <section id="calculator" className="py-6 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center px-2 py-1 md:px-3 md:py-1.5 bg-amber-500/10 rounded-sm border border-amber-500/20 backdrop-blur-sm mb-3 md:mb-4">
            <CalcIcon className="w-2.5 h-2.5 md:w-3 md:h-3 text-amber-400 mr-1 md:mr-1.5" />
            <span className="text-[10px] md:text-xs text-amber-300 font-medium tracking-wide">CALCULATOR</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 tracking-tight">
            Revenue Projection
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-4 md:p-6 border border-white/10">
            <h3 className="text-base md:text-xl font-bold text-white mb-1.5 md:mb-2 tracking-tight">Income Calculator</h3>
            <p className="text-xs md:text-sm text-neutral-500 mb-4 md:mb-6 font-light">Adjust parameters to estimate potential</p>

            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <label className="text-xs md:text-sm text-neutral-400 font-light">Subscribers</label>
                  <span className="text-base md:text-xl font-bold text-white">
                    {subscribers.toLocaleString()}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    value={subscribers}
                    onChange={(e) => setSubscribers(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div 
                    className="absolute top-0 left-0 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg pointer-events-none"
                    style={{ width: `${(subscribers - 100) / (50000 - 100) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <label className="text-xs md:text-sm text-neutral-400 font-light mb-2 md:mb-3 block">Account Type</label>
                <div className="flex bg-black/50 rounded-sm p-0.5 md:p-1">
                  <button
                    onClick={() => setIsPaid(true)}
                    className={`flex-1 py-1.5 px-3 md:py-2 md:px-4 rounded-sm text-xs md:text-sm font-medium transition-all duration-300 ${
                      isPaid
                        ? 'bg-white text-black'
                        : 'text-neutral-500 hover:text-white'
                    }`}
                  >
                    Paid
                  </button>
                  <button
                    onClick={() => setIsPaid(false)}
                    className={`flex-1 py-1.5 px-3 md:py-2 md:px-4 rounded-sm text-xs md:text-sm font-medium transition-all duration-300 ${
                      !isPaid
                        ? 'bg-white text-black'
                        : 'text-neutral-500 hover:text-white'
                    }`}
                  >
                    Free
                  </button>
                </div>
              </div>

              {/* Subscription Price - only show for paid accounts */}
              {isPaid && (
                <div>
                  <div className="flex justify-between items-center mb-2 md:mb-3">
                    <label className="text-xs md:text-sm text-neutral-400 font-light">Subscription Price</label>
                    <span className="text-base md:text-xl font-bold text-white">${subscriptionPrice}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="3"
                      max="50"
                      value={subscriptionPrice}
                      onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div 
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg pointer-events-none"
                      style={{ width: `${(subscriptionPrice - 3) / (50 - 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 mt-4 lg:mt-0">
            <div className="text-center bg-white/[0.03] backdrop-blur-sm rounded-sm p-4 md:p-6 border border-white/10">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-200 to-neutral-100 bg-clip-text text-transparent mb-1.5 md:mb-2">
                ${revenue.toLocaleString()}
              </div>
              <p className="text-[10px] md:text-sm text-neutral-500 uppercase tracking-wider">Monthly Estimate</p>

              <div className="mt-3 md:mt-4 flex items-center justify-center text-neutral-400">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                <span className="text-base md:text-lg font-bold text-white">{multiplier}x</span>
                <span className="text-[10px] md:text-xs text-neutral-500 ml-1.5 md:ml-2 uppercase">Multiplier</span>
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-2 md:px-10 md:py-3 bg-white text-black text-xs md:text-sm font-medium rounded-sm hover:bg-neutral-200 transition-all duration-300 tracking-wide">
                APPLY NOW
              </button>
              <p className="text-[10px] md:text-xs text-neutral-500 mt-2 md:mt-3 font-light">Start maximizing revenue today</p>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm rounded-sm p-3 md:p-5 border border-white/10">
              <h4 className="text-sm md:text-base font-semibold text-white mb-2 md:mb-3 tracking-tight">Benefits</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-neutral-400 font-light">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                  50% time saved
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                  2M+ follower potential
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                  $70k monthly growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;