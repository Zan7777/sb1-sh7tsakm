import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black"></div>

      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="luxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#c0c0c0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <g className="animate-shimmer">
            <line x1="0" y1="20" x2="100" y2="25" stroke="url(#luxGradient)" strokeWidth="0.15" />
            <line x1="0" y1="50" x2="100" y2="52" stroke="url(#luxGradient)" strokeWidth="0.12" />
            <line x1="0" y1="75" x2="100" y2="78" stroke="url(#luxGradient)" strokeWidth="0.18" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neutral-300/5 rounded-full blur-3xl animate-float-delayed"></div>
    </div>
  );
};

export default AnimatedBackground;