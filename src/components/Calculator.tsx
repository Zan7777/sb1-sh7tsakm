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
    <section id="calculator" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm mb-6">
            <CalcIcon className="w-4 h-4 text-pink-400 mr-2" />
            <span className="text-sm text-pink-300 font-medium">Earnings Calculator</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Calculate Your 
            <span className="block bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Potential Earnings
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Controls */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Income Calculator</h3>
            <p className="text-gray-400 mb-8">Move the sliders to see your potential</p>

            <div className="space-y-8">
              {/* Subscribers */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-semibold">Subscribers</label>
                  <span className="text-2xl font-bold text-pink-400">
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

              {/* Account Type Toggle */}
              <div>
                <label className="text-white font-semibold mb-4 block">Account Type</label>
                <div className="flex bg-gray-800 rounded-full p-1">
                  <button
                    onClick={() => setIsPaid(true)}
                    className={`flex-1 py-2 px-4 rounded-full font-semibold transition-all duration-300 ${
                      isPaid
                        ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Paid
                  </button>
                  <button
                    onClick={() => setIsPaid(false)}
                    className={`flex-1 py-2 px-4 rounded-full font-semibold transition-all duration-300 ${
                      !isPaid
                        ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Free
                  </button>
                </div>
              </div>

              {/* Subscription Price - only show for paid accounts */}
              {isPaid && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white font-semibold">Subscription Price</label>
                    <span className="text-xl font-bold text-pink-400">${subscriptionPrice}</span>
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

          {/* Results */}
          <div className="space-y-8">
            {/* Revenue Display */}
            <div className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-4">
                ${revenue.toLocaleString()}
              </div>
              <p className="text-gray-300 text-lg">Estimated Monthly Revenue</p>
              
              <div className="mt-6 flex items-center justify-center text-pink-400">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">{multiplier}x</span>
                <span className="text-gray-400 ml-2">Revenue Multiplier</span>
              </div>
            </div>

            {/* Apply Now Button */}
            <div className="text-center">
              <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                Apply Now
              </button>
              <p className="text-gray-400 mt-4">Start maximizing your earnings today</p>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">How You Benefit</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  50% time saved through automation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  2M+ new followers potential
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Up to $70k monthly increase
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