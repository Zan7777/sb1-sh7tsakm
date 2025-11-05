import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, TrendingUp, DollarSign, Users, Percent } from 'lucide-react';

const Calculator: React.FC = () => {
  const [subscribers, setSubscribers] = useState(7500);
  const [subscriptionPrice, setSubscriptionPrice] = useState(15);
  const [isPaid, setIsPaid] = useState(true);
  const [conversionRate, setConversionRate] = useState(8);
  const [ppvMultiplier, setPpvMultiplier] = useState(2.5);
  const [revenue, setRevenue] = useState(0);
  const [breakdown, setBreakdown] = useState({
    subscription: 0,
    ppv: 0,
    tips: 0,
    total: 0
  });

  useEffect(() => {
    // Advanced revenue calculation
    const activeRate = conversionRate / 100;
    const activeSubscribers = Math.round(subscribers * activeRate);

    // Base subscription revenue
    const subscriptionRev = isPaid ? subscribers * subscriptionPrice : 0;

    // PPV revenue (from active subscribers)
    const ppvRev = Math.round(activeSubscribers * subscriptionPrice * ppvMultiplier);

    // Tips revenue (15% of active subscribers tip avg $20)
    const tipsRev = Math.round(activeSubscribers * 0.15 * 20);

    // Free account revenue (estimated $2 per subscriber from PPV/tips)
    const freeRev = !isPaid ? subscribers * 2 : 0;

    const total = subscriptionRev + ppvRev + tipsRev + freeRev;

    setBreakdown({
      subscription: subscriptionRev,
      ppv: ppvRev + freeRev,
      tips: tipsRev,
      total: total
    });
    setRevenue(total);
  }, [subscribers, subscriptionPrice, isPaid, conversionRate, ppvMultiplier]);

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

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-start">
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-4 md:p-6 border border-white/10 shadow-2xl">
            <h3 className="text-base md:text-xl font-bold text-white mb-1.5 md:mb-2 tracking-tight">Income Calculator</h3>
            <p className="text-xs md:text-sm text-neutral-500 mb-4 md:mb-6 font-light">Adjust parameters to estimate potential</p>

            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <label className="text-xs md:text-sm text-neutral-400 font-light flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Subscribers
                  </label>
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
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-metallic"
                  />
                  <div
                    className="absolute top-0 left-0 h-2 rounded-lg pointer-events-none bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400"
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

              {isPaid && (
                <div>
                  <div className="flex justify-between items-center mb-2 md:mb-3">
                    <label className="text-xs md:text-sm text-neutral-400 font-light flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Subscription Price
                    </label>
                    <span className="text-base md:text-xl font-bold text-white">${subscriptionPrice}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="3"
                      max="50"
                      value={subscriptionPrice}
                      onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-metallic"
                    />
                    <div
                      className="absolute top-0 left-0 h-2 rounded-lg pointer-events-none bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400"
                      style={{ width: `${(subscriptionPrice - 3) / (50 - 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <label className="text-xs md:text-sm text-neutral-400 font-light flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Active Conversion Rate
                  </label>
                  <span className="text-base md:text-xl font-bold text-white">{conversionRate}%</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="3"
                    max="20"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-metallic"
                  />
                  <div
                    className="absolute top-0 left-0 h-2 rounded-lg pointer-events-none bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400"
                    style={{ width: `${(conversionRate - 3) / (20 - 3) * 100}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-neutral-600 mt-1">% of subscribers actively engaging with content</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <label className="text-xs md:text-sm text-neutral-400 font-light flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    PPV Multiplier
                  </label>
                  <span className="text-base md:text-xl font-bold text-white">{ppvMultiplier}x</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={ppvMultiplier}
                    onChange={(e) => setPpvMultiplier(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-metallic"
                  />
                  <div
                    className="absolute top-0 left-0 h-2 rounded-lg pointer-events-none bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400"
                    style={{ width: `${(ppvMultiplier - 1) / (5 - 1) * 100}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-neutral-600 mt-1">Average PPV revenue per active subscriber</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 mt-4 lg:mt-0">
            <div className="text-center bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-sm p-4 md:p-8 border border-white/10 shadow-2xl">
              <p className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-wider mb-2">Projected Monthly Revenue</p>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300 bg-clip-text text-transparent mb-4 md:mb-6">
                ${revenue.toLocaleString()}
              </div>

              <div className="space-y-3 md:space-y-4 mt-6">
                <div className="flex items-center justify-between px-4 py-2 bg-black/30 rounded-sm">
                  <span className="text-xs text-neutral-400">Subscriptions</span>
                  <span className="text-sm font-bold text-white">${breakdown.subscription.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2 bg-black/30 rounded-sm">
                  <span className="text-xs text-neutral-400">PPV Content</span>
                  <span className="text-sm font-bold text-white">${breakdown.ppv.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2 bg-black/30 rounded-sm">
                  <span className="text-xs text-neutral-400">Tips & Extras</span>
                  <span className="text-sm font-bold text-white">${breakdown.tips.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-2 md:px-10 md:py-3 bg-white text-black text-xs md:text-sm font-medium rounded-sm hover:bg-neutral-200 transition-all duration-300 tracking-wide">
                APPLY NOW
              </button>
              <p className="text-[10px] md:text-xs text-neutral-500 mt-2 md:mt-3 font-light">Start maximizing revenue today</p>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm rounded-sm p-3 md:p-5 border border-white/10 shadow-lg">
              <h4 className="text-sm md:text-base font-semibold text-white mb-3 md:mb-4 tracking-tight">Revenue Insights</h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 mt-1.5"></div>
                  <div>
                    <p className="text-xs text-white font-medium">Conversion Optimization</p>
                    <p className="text-[10px] text-neutral-500">Higher conversion rates directly impact PPV revenue</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 mt-1.5"></div>
                  <div>
                    <p className="text-xs text-white font-medium">Engagement Metrics</p>
                    <p className="text-[10px] text-neutral-500">Active subscribers generate 3-5x more revenue</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 mt-1.5"></div>
                  <div>
                    <p className="text-xs text-white font-medium">Premium Content</p>
                    <p className="text-[10px] text-neutral-500">Strategic PPV pricing maximizes earnings</p>
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

export default Calculator;