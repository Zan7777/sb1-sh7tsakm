import React from 'react';
import { Monitor, Code, Share2, Clock } from 'lucide-react';

const AdditionalServices: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Custom Strategies',
      description: 'We produce individual strategies across X, Reddit, Instagram, and more based on you, your brand, and your aspirations. Whether you need new accounts or want to grow your existing ones, our OnlyFans marketing agency has you covered.'
    },
    {
      icon: Code,
      title: 'High-Intent Chatting',
      description: 'Our OnlyFans marketing managers employ strategic advertising techniques followed by expert chatting services that reflect your style and tone to successfully transform casual subscribers into devoted fans.'
    },
    {
      icon: Share2,
      title: 'Account Audit',
      description: 'We leverage our extensive experience in the adult industry to optimize your profile and get the most out of your account. From your bio to your content strategy, we ensure your page aligns with your brand and your niche to achieve maximum growth.'
    },
    {
      icon: Clock,
      title: 'Full Funnel Setup',
      description: 'Successfully bringing in high-quality traffic is just the start. We turn your visitors into paying customers using a range of tried and tested methods, including collaborations and strategic chat management.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-4">Advanced Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Specialized
            <span className="block bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Service Offerings
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-500"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-pink-500/30 group-hover:to-red-500/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h4>
            <p className="text-gray-400 mb-6">
              Let us create a customized strategy that transforms your OnlyFans presence and maximizes your earning potential.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;