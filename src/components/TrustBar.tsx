import React from 'react';
import { Shield, Users, FileCheck, Eye, Lock, Award } from 'lucide-react';

const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: FileCheck, label: 'TOS Compliant' },
    { icon: Shield, label: '18+ ID Verified' },
    { icon: Lock, label: 'Consent Ledger' },
    { icon: Award, label: 'GDPR Certified' },
    { icon: Users, label: '2M+ Followers Managed' },
    { icon: Eye, label: 'Full Transparency' },
  ];

  return (
    <div className="border-y border-white/5 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center space-x-2 text-neutral-500 hover:text-white transition-colors duration-300">
                <Icon className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-xs font-light whitespace-nowrap tracking-wide">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;