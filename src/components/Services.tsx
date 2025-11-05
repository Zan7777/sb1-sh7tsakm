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
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-4">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our OnlyFans
            <span className="block bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Management Services
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-500 hover:transform hover:scale-105"
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
      </div>
    </section>
  );
};

export default Services;