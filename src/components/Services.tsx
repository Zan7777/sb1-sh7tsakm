import React from 'react';
import { MessageCircle, Image, BarChart3, Calendar, DollarSign, Target, Video, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Social Media Management',
      description: 'Sit back and relax as we handle daily promotions across top platforms like Reddit, Twitter, and Instagram. Leave the tedious work to us while you focus on creating amazing content.',
    },
    {
      icon: Image,
      title: 'Caption Creation',
      description: "We've got the hottest lines up our sleeve, so you don't have to worry about crafting captivating captions. Our expert team knows what works best to boost your OnlyFans sales rates.",
    },
    {
      icon: MessageCircle,
      title: 'Chat Management',
      description: 'Keep your OnlyFans subscribers hooked and the cash flowing without the administrative hassle. With our fan management and upsell service, you\'ll maintain a thriving community effortlessly.',
    },
    {
      icon: BarChart3,
      title: 'Personal Insights',
      description: 'Stay one step ahead with our cutting-edge data analysis. We uncover the latest social media trends, giving you valuable insights to create content that captures attention and drives success.',
    },
    {
      icon: Video,
      title: 'High-End Video Production Tips',
      description: 'Stand out from the crowd with our unrivaled knowledge of producing slick videos and captivating photo content. We\'ll help you elevate your visual appeal and leave a lasting impression.',
    },
    {
      icon: Target,
      title: 'Data Analysis',
      description: 'Leave the number-crunching to us. Our expert team will analyse your data and provide a personalised strategy plan. With real-time fine-tuning, we ensure you\'re making money around the clock.',
    },
    {
      icon: Calendar,
      title: 'Content Scheduling',
      description: 'Maximise your impact with tailored content plans. We\'ll guide you on what, when, and how much to post, taking your content to new heights of engagement and reach.',
    },
    {
      icon: DollarSign,
      title: 'Financial Projections',
      description: 'Curious about your earning potential? Let us provide accurate financial predictions based on our historical data, giving you a glimpse into your future success.',
    },
    {
      icon: Zap,
      title: 'Bespoke Growth Plans',
      description: 'Share your goals with us, and we\'ll ensure you reach them. Whether it\'s earning more or having more free time, our customised growth plans put you in control every step of the way!',
    },
  ];

  return (
    <section id="services" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Management Excellence
          </h3>
          <div className="w-16 h-px bg-white/20 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/[0.02] backdrop-blur-sm rounded-sm p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-base font-semibold text-white mb-2 group-hover:text-amber-100 transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300 font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;