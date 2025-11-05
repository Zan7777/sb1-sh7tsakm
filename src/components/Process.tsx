import React from 'react';
import { Target, Megaphone, BarChart3 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      step: 'Step 1',
      icon: Target,
      title: 'Strategy & Setup',
      description: 'We take the time to understand your content style, niche, and fanbase to create a data-led strategy that enhances your results. Whether you\'re new to the platform or need guidance moving forward, we have everything to suit you.'
    },
    {
      step: 'Step 2', 
      icon: Megaphone,
      title: 'Promotion & Execution',
      description: 'We promote your OnlyFans across the most effective platforms, like Reddit, and secure influencer collaborations to maximize your reach and conversions. All you need to do is stay consistent and we handle the rest.'
    },
    {
      step: 'Step 3',
      icon: BarChart3,
      title: 'Testing & Scaling',
      description: 'We don\'t leave you in the dark once you\'re up and running. We regularly monitor your performance and evaluate what works and what doesn\'t so we can focus on the strategies that get you the best results.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-2 group-hover:from-pink-500/30 group-hover:to-red-500/30 transition-all duration-300">
                        <Icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                      </div>
                      <div className="text-sm text-pink-400 font-semibold">{step.step}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="ml-8 mt-4 h-8 w-0.5 bg-gradient-to-b from-pink-500/50 to-red-500/30"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden relative">
                {/* Professional consultation image */}
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional team working together in bright modern office with laptops and natural workspace setting"
                  className="w-full h-full object-cover relative z-10"
                />
                
                {/* Gradient overlay for brand consistency */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/3 z-20"></div>
                
                {/* Screen reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/3 z-30"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-red-500/15 to-pink-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;