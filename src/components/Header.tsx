import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          <div className="flex items-center">
            <h1 className="text-base md:text-xl font-bold bg-gradient-to-r from-amber-200 to-neutral-100 bg-clip-text text-transparent tracking-tight">
              MODELLAIRE
            </h1>
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-400 hover:text-white transition-colors duration-200 relative group text-xs md:text-sm font-light tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button className="flex items-center px-3 py-1.5 md:px-5 md:py-2 bg-white text-black rounded-sm hover:bg-neutral-200 transition-all duration-300 text-xs md:text-sm font-medium tracking-wide">
              <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1.5 md:mr-2" />
              CONTACT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-400 hover:text-white block px-3 py-1.5 text-xs font-light transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-3 flex items-center justify-center px-4 py-1.5 bg-white text-black rounded-sm hover:bg-neutral-200 transition-all duration-300 text-xs font-medium tracking-wide">
              <Phone className="w-3 h-3 mr-1.5" />
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;