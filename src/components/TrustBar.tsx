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
    <div className="border-y border-white/10 bg-gradient-to-r from-black/50 via-gray-900/50 to-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;