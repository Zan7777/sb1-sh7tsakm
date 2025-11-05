import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Users, DollarSign, Award, Shield, CheckCircle, Globe, Clock, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const achievements = [
    { icon: DollarSign, value: '$2M+', label: 'Revenue Generated' },
    { icon: Users, value: '500+', label: 'Creators Managed' },
    { icon: TrendingUp, value: '95%', label: 'Revenue Increase' },
    { icon: Award, value: '24/7', label: 'Support Available' }
  ];

  const serviceCategories = [
    {
      title: 'Content Strategy',
      services: ['Caption Creation', 'Content Planning', 'Visual Direction', 'Brand Development']
    },
    {
      title: 'Growth & Marketing',
      services: ['Social Media Management', 'Influencer Partnerships', 'Cross-Platform Promotion', 'Audience Analytics']
    },
    {
      title: 'Revenue Optimization',
      services: ['Chat Management', 'Upsell Strategies', 'Pricing Optimization', 'Financial Projections']
    },
    {
      title: 'Technical Support',
      services: ['Account Setup', 'Platform Optimization', 'Performance Tracking', 'Security Management']
    }
  ];

  const trustBadges = [
    { icon: Shield, label: 'SSL Secured' },
    { icon: CheckCircle, label: 'GDPR Compliant' },
    { icon: Award, label: 'Industry Certified' },
    { icon: Globe, label: 'Worldwide Service' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="py-6 md:py-10 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-amber-200 to-neutral-100 bg-clip-text text-transparent">
                  Earning Potential
                </span>
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-3 md:mb-5 font-light">
                Join creators elevating their presence through sophisticated management strategies.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button className="flex items-center px-4 py-2 md:px-6 md:py-2.5 bg-white text-black rounded-sm font-medium hover:bg-neutral-200 transition-all duration-300 text-xs md:text-sm tracking-wide">
                  GET STARTED
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2" />
                </button>
                <button className="flex items-center px-4 py-2 md:px-6 md:py-2.5 bg-transparent text-white rounded-sm font-medium hover:bg-white/5 transition-all duration-300 backdrop-blur-sm border border-white/20 text-xs md:text-sm tracking-wide">
                  CONSULTATION
                </button>
              </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-sm rounded-sm p-4 md:p-6 border border-white/10 mt-4 lg:mt-0">
              <h4 className="text-base md:text-lg font-semibold text-white mb-1.5 md:mb-2 tracking-tight">Stay Informed</h4>
              <p className="text-xs md:text-sm text-neutral-500 mb-3 md:mb-5 font-light">Industry insights delivered to your inbox.</p>
              
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2 md:space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-black/50 border border-white/20 rounded-sm text-xs md:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 md:px-6 md:py-2.5 bg-white text-black rounded-sm text-xs md:text-sm font-medium hover:bg-neutral-200 transition-all duration-300 tracking-wide"
                  >
                    SUBSCRIBE
                    <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 ml-1.5 md:ml-2" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-3 md:py-4">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-1.5 md:mb-2" />
                  <p className="text-white text-xs md:text-sm font-medium">Subscribed successfully</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="py-6 md:py-8 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-amber-200 to-neutral-100 bg-clip-text text-transparent tracking-tight">
                  MODELLAIRE
                </h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-md font-light">
                Premier management agency transforming creators through sophisticated strategies and personalized excellence.
              </p>

              <div className="flex space-x-2">
                <a href="#" className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4 text-neutral-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4 text-neutral-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-neutral-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm md:text-base font-semibold text-white mb-3 md:mb-4 tracking-tight">Services</h4>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <h5 className="text-white font-medium mb-1.5 md:mb-2 text-[10px] md:text-xs uppercase tracking-wider">{category.title}</h5>
                    <ul className="space-y-1 md:space-y-1.5">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300 text-[10px] md:text-xs font-light">
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 md:py-8 border-b border-white/5">
          <div>
            <h4 className="text-sm md:text-base font-semibold text-white mb-3 md:mb-4 tracking-tight">Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <a href="mailto:hello@modellairemgmt.com" className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300 group">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-sm flex items-center justify-center mr-2 md:mr-3 group-hover:bg-white/10">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 text-neutral-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-light">Email</div>
                  <div className="text-[10px] md:text-xs font-medium">hello@modellaire.com</div>
                </div>
              </a>

              <a href="tel:+15551234567" className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300 group">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-sm flex items-center justify-center mr-2 md:mr-3 group-hover:bg-white/10">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-neutral-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-light">Phone</div>
                  <div className="text-[10px] md:text-xs font-medium">+1 (555) 123-4567</div>
                </div>
              </a>

              <div className="flex items-center text-neutral-400">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-white/5 rounded-sm flex items-center justify-center mr-2 md:mr-3">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-neutral-400" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-light">Available</div>
                  <div className="text-[10px] md:text-xs font-medium">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 md:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            <p className="text-neutral-600 text-[10px] md:text-xs font-light">
              © 2024 Modellaire. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-end space-x-3 md:space-x-4 text-[10px] md:text-xs">
              <a href="#" className="text-neutral-600 hover:text-white transition-colors duration-300 font-light">Privacy</a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors duration-300 font-light">Terms</a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors duration-300 font-light">Cookies</a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors duration-300 font-light">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;