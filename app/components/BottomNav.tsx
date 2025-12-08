'use client';

interface BottomNavProps {
  activeTab: 'home' | 'progress' | 'history' | 'profile';
  onTabChange: (tab: 'home' | 'progress' | 'history' | 'profile') => void;
  variant?: 'default' | 'progress';
}

export default function BottomNav({ activeTab, onTabChange, variant = 'default' }: BottomNavProps) {
  // Both variants use 3 icons: Home, Progress, History
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-3xl px-6 py-4 z-30">
      <div className="flex justify-around items-center">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center relative ${
            activeTab === 'home' ? 'text-white' : 'text-gray-400'
          }`}
        >
          {activeTab === 'home' && (
            <div className="absolute -top-2 mb-1 w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          )}
          {activeTab !== 'home' && (
            <svg
              className="w-6 h-6 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          )}
          <span className={`text-xs ${activeTab === 'home' ? 'relative z-10' : ''}`}>Home</span>
        </button>

        <button
          onClick={() => onTabChange('progress')}
          className={`flex flex-col items-center relative ${
            activeTab === 'progress' ? 'text-white' : 'text-gray-400'
          }`}
        >
          {activeTab === 'progress' && (
            <div className="absolute -top-2 mb-1 w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          )}
          {activeTab !== 'progress' && (
            <svg
              className="w-6 h-6 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          )}
          <span className={`text-xs ${activeTab === 'progress' ? 'relative z-10' : ''}`}>Progress</span>
        </button>

        <button
          onClick={() => onTabChange('history')}
          className={`flex flex-col items-center relative ${
            activeTab === 'history' ? 'text-white' : 'text-gray-400'
          }`}
        >
          {activeTab === 'history' && (
            <div className="absolute -top-2 mb-1 w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          )}
          {activeTab !== 'history' && (
            <svg
              className="w-6 h-6 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <span className={`text-xs ${activeTab === 'history' ? 'relative z-10' : ''}`}>History</span>
        </button>
      </div>
    </div>
  );
}
