'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  // Auto-advance after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full w-full bg-gradient-to-b from-green-900 to-black text-white flex items-center justify-center">
      <div className="flex flex-col items-center px-6">
        {/* App Logo - Large and Prominent */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 mb-12 relative">
          <div className="absolute inset-0 bg-green-500/10 rounded-[2.5rem] blur-2xl"></div>
          <Image
            src="/logo.jpg"
            alt="Bin Buddy Logo"
            width={256}
            height={256}
            className="rounded-[2.5rem] shadow-2xl object-cover relative z-10 w-full h-full"
            priority
            quality={100}
          />
        </div>
        
        {/* App Name */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white tracking-tight drop-shadow-lg">
          Bin Buddy
        </h1>
        
        {/* Tagline */}
        <p className="text-gray-300 text-lg sm:text-xl font-medium drop-shadow-md">
          Sustainable Living Made Easy
        </p>
      </div>
    </div>
  );
}

