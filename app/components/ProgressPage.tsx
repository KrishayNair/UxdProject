'use client';

import { useState } from 'react';

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState<'recycling' | 'upcycling'>('recycling');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white pb-28">
      {/* Header with better spacing */}
      <div className="flex justify-between items-start px-6 pt-14 pb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Your Progress</h1>
          <p className="text-sm text-gray-300">06-01-26</p>
        </div>
        <button className="p-2.5 hover:bg-green-800/30 rounded-lg transition-colors">
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
      </div>

      {/* CO2 Emissions Summary with better spacing */}
      <div className="px-6 mb-8">
        <p className="text-lg font-semibold text-center leading-relaxed">
          You've saved <span className="text-2xl font-bold">7.4 kg</span> of Co2 emissions this month.
        </p>
      </div>

      {/* Tabs with better styling */}
      <div className="px-6 mb-8">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab('recycling')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
              activeTab === 'recycling'
                ? 'text-white'
                : 'text-gray-400'
            }`}
          >
            Recycling
            {activeTab === 'recycling' && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 rounded-t-full"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('upcycling')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
              activeTab === 'upcycling'
                ? 'text-white'
                : 'text-gray-400'
            }`}
          >
            Upcycling
            {activeTab === 'upcycling' && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 rounded-t-full"></span>
            )}
          </button>
        </div>
      </div>

      {/* Content based on active tab - 2x2 Grid with better spacing */}
      <div className="px-6">
        {activeTab === 'recycling' ? (
          <div className="grid grid-cols-2 gap-5">
            {/* Monthly Waste Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Monthly Waste</h3>
              <div className="text-3xl font-bold mb-2">6.8 kg</div>
              <div className="text-xs text-gray-300 mb-3 leading-relaxed">4.6 kg recycled • 2.2 kg trashed</div>
              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                <div className="bg-green-500 h-2.5 rounded-full transition-all" style={{ width: '80%' }}></div>
              </div>
              <div className="text-xs text-gray-300 mb-4">Goal: 8.5kg • On Track✓</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                View table
              </button>
            </div>

            {/* Today Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Today</h3>
              <div className="text-xs text-gray-300 mb-2 leading-relaxed">0 kg recycled • 0.6 kg trashed</div>
              <div className="text-sm mb-4">5 day streak 🔥</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                View table
              </button>
            </div>

            {/* Items saved from landfill Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Items saved from landfill</h3>
              <div className="text-3xl font-bold mb-4">13 items</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                View table
              </button>
            </div>

            {/* Most common recycling material Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Most common recycling material</h3>
              <div className="text-xs text-gray-300 mb-2">Plastic (43%)</div>
              <div className="text-xs text-gray-300 mb-4">Paper (22%)</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                View table
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5">
            {/* Monthly Upcycling Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Monthly upcycling</h3>
              <div className="text-3xl font-bold mb-2">12 items</div>
              <div className="text-xs text-gray-300 mb-3 leading-relaxed">Est saved. 3.6 kg waste</div>
              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                <div className="bg-green-500 h-2.5 rounded-full transition-all" style={{ width: '86%' }}></div>
              </div>
              <div className="text-xs text-gray-300 mb-2">Goal: 4.5 kg.</div>
              <div className="text-xs text-green-400 mb-4">On Track✓</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                View table
              </button>
            </div>

            {/* Current Project Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Current Project</h3>
              <div className="w-14 h-14 bg-green-700 rounded-lg mb-3 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <div className="text-sm mb-2 font-medium">T-shirt → Tote Bag</div>
              <div className="text-xs text-gray-300 mb-4">Est. Saved: 0.4 kg textile</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                Continue
              </button>
            </div>

            {/* Previous Projects Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Previous Projects</h3>
              <div className="text-3xl font-bold mb-4">17 projects</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                View Projects
              </button>
            </div>

            {/* Most commonly upcycled material Card */}
            <div className="bg-green-800/20 border border-green-600 rounded-xl p-5 hover:bg-green-800/25 transition-colors">
              <h3 className="text-base font-semibold mb-3">Most commonly upcycled material</h3>
              <div className="text-xs text-gray-300 mb-2">Textile (67%)</div>
              <div className="text-xs text-gray-300 mb-4">Glass (11%)</div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg text-xs font-medium transition-colors active:scale-95">
                View table
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
