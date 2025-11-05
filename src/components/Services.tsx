import React, { useState } from 'react';
import { MessageCircle, Image, BarChart3, Calendar, DollarSign, Target, Video, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: MessageCircle,
      title: 'Social Media Management',
      description: 'Complete platform promotion across Reddit, Twitter & Instagram',
    },
    {
      icon: Image,
      title: 'Caption Creation',
      description: 'Expert copywriting optimized for maximum conversion rates',
    },
    {
      icon: MessageCircle,
      title: 'Chat Management',
      description: 'Professional subscriber engagement & upsell strategies',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven strategies leveraging social media trends',
    },
    {
      icon: Video,
      title: 'Content Direction',
      description: 'Premium visual production guidance & styling',
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Personalized growth strategies with real-time optimization',
    },
    {
      icon: Calendar,
      title: 'Content Scheduling',
      description: 'Tailored posting plans for maximum engagement',
    },
    {
      icon: DollarSign,
      title: 'Revenue Forecasting',
      description: 'Accurate financial projections based on historical data',
    },
    {
      icon: Zap,
      title: 'Growth Solutions',
      description: 'Customized plans aligned with your specific goals',
    },
  ];

  return (
    <section id="services" className="py-6 md:py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1.5 md:mb-3">Services</h2>
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 tracking-tight">
            Management Excellence
          </h3>
          <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1.5 md:gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative bg-white/[0.02] backdrop-blur-sm rounded-sm p-2.5 md:p-4 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.03] cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s backwards`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-sm transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <div className="relative z-10">
                  <div className="w-6 h-6 md:w-9 md:h-9 bg-white/5 rounded-sm flex items-center justify-center mb-1.5 md:mb-3 group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110">
                    <Icon className={`w-3 h-3 md:w-4.5 md:h-4.5 text-neutral-400 group-hover:text-amber-200 transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`} />
                  </div>

                  <h4 className="text-[10px] md:text-sm font-semibold text-white mb-0.5 md:mb-1.5 group-hover:text-amber-100 transition-colors duration-500 tracking-tight leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-[9px] md:text-xs text-neutral-500 leading-snug group-hover:text-neutral-400 transition-colors duration-500 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;