'use client';

import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Phone Frame */}
      <div className="relative">
        {/* Outer Phone Bezel */}
        <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-gray-800 rounded-[2.5rem] p-1">
            {/* Screen Area - Fixed size */}
            <div className="relative w-[375px] h-[812px] overflow-hidden bg-black rounded-[2.25rem]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-32 h-6 bg-black rounded-b-2xl"></div>
              
              {/* Status Bar Area */}
              <div className="absolute top-0 left-0 right-0 h-12 z-40 flex items-center justify-between px-6 pt-2 pointer-events-none">
                <span className="text-white text-sm font-semibold">9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal Icon */}
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  {/* WiFi Icon */}
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.778 8.222a7.966 7.966 0 01-1.414 2.618c-1.133 1.133-2.618 1.414-2.618 1.414s-.281-1.485-1.414-2.618a7.966 7.966 0 01-2.618-1.414c1.133-1.133 1.414-2.618 1.414-2.618s1.485.281 2.618 1.414a7.966 7.966 0 012.618 1.414zM15.657 5.343a5.982 5.982 0 01-1.414 1.657c-.943.943-1.657 1.414-1.657 1.414s-.471-.714-1.414-1.657a5.982 5.982 0 01-1.657-1.414c.943-.943 1.414-1.657 1.414-1.657s.714.471 1.657 1.414a5.982 5.982 0 011.414 1.657z" clipRule="evenodd" />
                  </svg>
                  {/* Battery Icon */}
                  <svg className="w-6 h-3 text-white" fill="currentColor" viewBox="0 0 24 12">
                    <rect x="1" y="3" width="18" height="8" rx="1" fill="currentColor" />
                    <rect x="3" y="5" width="14" height="4" fill="white" />
                    <rect x="19" y="5" width="2" height="4" rx="0.5" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* App Content */}
              <div className="relative w-full h-full overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

