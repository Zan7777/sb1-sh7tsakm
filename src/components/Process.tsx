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
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center mb-1.5 group-hover:bg-white/10 transition-all duration-300">
                        <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-xs text-neutral-500 font-light uppercase tracking-wider">{step.step}</div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-100 transition-colors duration-300 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300 font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="ml-5 mt-3 h-6 w-px bg-white/10"></div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-4 border border-white/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-900 to-black rounded-sm overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional team working together in bright modern office with laptops and natural workspace setting"
                  className="w-full h-full object-cover relative z-10 opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;