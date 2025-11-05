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
    <section className="py-6 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 md:mb-3">Advanced Solutions</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 tracking-tight">
            Specialized Services
          </h3>
          <div className="w-12 md:w-16 h-px bg-white/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/[0.02] backdrop-blur-sm rounded-sm p-3 md:p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-sm flex items-center justify-center mb-2 md:mb-4 group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-xs md:text-base font-semibold text-white mb-1 md:mb-2 group-hover:text-amber-100 transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-[11px] md:text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300 font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6 md:mt-10">
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-4 md:p-6 border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-base md:text-xl font-bold text-white mb-1.5 md:mb-2 tracking-tight">Ready to Begin?</h4>
            <p className="text-xs md:text-sm text-neutral-500 mb-3 md:mb-5 font-light">
              Customized strategies to transform your presence and maximize potential.
            </p>
            <button className="px-6 py-2 md:px-8 md:py-2.5 bg-white text-black rounded-sm text-xs md:text-sm font-medium hover:bg-neutral-200 transition-all duration-300 tracking-wide">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;