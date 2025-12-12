'use client';

import { useState } from 'react';

interface HistoryPageProps {
  variant?: 'history' | 'sound';
  onOpenDrawer?: () => void;
  onNavigate?: (screen: string) => void;
}

export default function HistoryPage({ variant = 'history', onOpenDrawer, onNavigate }: HistoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  if (variant === 'sound') {
    // Second screenshot variant with different sections
  return (
    <div className="h-full w-full bg-gradient-to-b from-green-900 to-black text-white pb-24">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pt-12">
        <div>
          <h1 className="text-2xl font-bold">Your History</h1>
          <p className="text-sm text-gray-300 mt-1">00-01-23</p>
        </div>
        {onOpenDrawer && (
          <button 
            onClick={onOpenDrawer}
            className="p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="flex items-center bg-green-800/30 rounded-lg px-4 py-3 border border-green-700">
          <svg
            className="w-5 h-5 text-gray-400 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
          />
          <div className="ml-2 w-px h-6 bg-green-700"></div>
          <button className="ml-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Saved Chats Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Saved Chats</h2>
            <button 
              onClick={() => alert('View All feature - coming soon!')}
              className="text-sm text-green-300 flex items-center hover:text-green-200 transition-colors"
            >
              View All <span className="ml-1">→</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-4 min-w-[280px] flex-shrink-0">
              <h3 className="text-lg font-medium mb-1">Morning Chat Christmas Presents</h3>
              <p className="text-sm text-gray-400 mb-4">03-12-16</p>
              <button 
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('chat');
                  } else {
                    alert('Opening chat...');
                  }
                }}
                className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View Chat
              </button>
            </div>
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-4 min-w-[280px] flex-shrink-0">
              <h3 className="text-lg font-medium mb-1">Morning Chat Glass Bottle Christmas candles</h3>
              <p className="text-sm text-gray-400 mb-4">03-12-16</p>
              <button 
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('chat');
                  } else {
                    alert('Opening chat...');
                  }
                }}
                className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View Chat
              </button>
            </div>
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-4 min-w-[280px] flex-shrink-0">
              <h3 className="text-lg font-medium mb-1">Morning Chat...</h3>
              <p className="text-sm text-gray-400 mb-4">03-12-16</p>
              <button 
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('chat');
                  } else {
                    alert('Opening chat...');
                  }
                }}
                className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View Chat
              </button>
            </div>
          </div>
        </div>

        {/* Scan History Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Scan History</h2>
            <button 
              onClick={() => alert('View All feature - coming soon!')}
              className="text-sm text-green-300 flex items-center hover:text-green-200 transition-colors"
            >
              View All <span className="ml-1">→</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <button 
              onClick={() => alert('Viewing scan: The green bottle of whisky')}
              className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0 transition-colors"
            >
              The green bottle of whisky
            </button>
            <button 
              onClick={() => alert('Viewing scan: Coffee cup')}
              className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0 transition-colors"
            >
              Coffee cup
            </button>
            <button 
              onClick={() => alert('Viewing scan: Bottle of wine')}
              className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0 transition-colors"
            >
              Bottle of wine
            </button>
          </div>
        </div>

        {/* Chat History Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Chat History</h2>
            <button 
              onClick={() => alert('View All feature - coming soon!')}
              className="text-sm text-green-300 flex items-center hover:text-green-200 transition-colors"
            >
              View All <span className="ml-1">→</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0">
              Feature name
            </button>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0">
              Example prompt
            </button>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0">
              Feature name
            </button>
          </div>
        </div>

        {/* Live History Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Live History</h2>
            <button 
              onClick={() => alert('View All feature - coming soon!')}
              className="text-sm text-green-300 flex items-center hover:text-green-200 transition-colors"
            >
              View All <span className="ml-1">→</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0">
              Candle and Coffee
            </button>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0">
              Feature name
            </button>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0">
              Feature name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }

  // First screenshot variant - simpler history page
  return (
    <div className="h-full w-full bg-gradient-to-b from-green-900 to-black text-white pb-24">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pt-12">
        <h1 className="text-2xl font-bold">Your History</h1>
        {onOpenDrawer && (
          <button 
            onClick={onOpenDrawer}
            className="p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="flex items-center bg-green-800/30 rounded-lg px-4 py-3 border border-green-700">
          <svg
            className="w-5 h-5 text-gray-400 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Q Search..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Saved Chats Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Saved Chats</h2>
            <button 
              onClick={() => alert('View All feature - coming soon!')}
              className="text-sm text-green-300 flex items-center hover:text-green-200 transition-colors"
            >
              View All <span className="ml-1">→</span>
            </button>
          </div>
          <div className="bg-green-800/20 border border-green-600 rounded-xl p-4">
            <h3 className="text-xl font-medium mb-1">Christmas Presents</h3>
            <p className="text-sm text-gray-400 mb-4">01-10-23</p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('View Chat clicked');
                if (onNavigate) {
                  onNavigate('chat');
                } else {
                  alert('Opening chat...');
                }
              }}
              className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer relative z-10"
            >
              View Chat
            </button>
          </div>
        </div>

        {/* History Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">History</h2>
            <button 
              onClick={() => alert('View All feature - coming soon!')}
              className="text-sm text-green-300 flex items-center hover:text-green-200 transition-colors"
            >
              View All <span className="ml-1">→</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              onClick={() => alert('Viewing: The gift for my Wedding')}
              className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0 transition-colors"
            >
              The gift for my Wedding
            </button>
            <button 
              onClick={() => alert('Viewing: Coffee cup')}
              className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0 transition-colors"
            >
              Coffee cup
            </button>
            <button 
              onClick={() => alert('Viewing: Some')}
              className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm flex-shrink-0 transition-colors"
            >
              Some
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

