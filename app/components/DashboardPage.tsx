'use client';

interface DashboardPageProps {
  onNavigate: (screen: string, mode?: 'waste' | 'upcycle') => void;
  onOpenDrawer?: () => void;
}

export default function DashboardPage({ onNavigate, onOpenDrawer }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white pb-28">
      {/* Header with better spacing */}
      <div className="flex justify-between items-start px-6 pt-14 pb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Hi, David</h1>
          <p className="text-sm text-gray-300">06-01-26</p>
        </div>
        {onOpenDrawer && (
          <button
            onClick={onOpenDrawer}
            className="p-2.5 hover:bg-green-800/30 rounded-lg transition-colors"
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

      {/* Main Action Buttons with better spacing */}
      <div className="flex justify-center gap-5 px-6 mb-10">
        <button
          onClick={() => onNavigate('scan', 'waste')}
          className="flex-1 max-w-[150px] bg-transparent border-2 border-white rounded-2xl p-7 flex flex-col items-center hover:bg-white/10 transition-all active:scale-95"
        >
          <div className="w-18 h-18 border-2 border-white rounded-xl mb-4 flex items-center justify-center">
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <span className="text-sm font-semibold">Waste</span>
        </button>

        <button
          onClick={() => onNavigate('scan', 'upcycle')}
          className="flex-1 max-w-[150px] bg-transparent border-2 border-white rounded-2xl p-7 flex flex-col items-center hover:bg-white/10 transition-all active:scale-95"
        >
          <div className="w-18 h-18 border-2 border-white rounded-xl mb-4 flex items-center justify-center">
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span className="text-sm font-semibold">Upcycle</span>
        </button>
      </div>

      {/* Scan Now Button with better styling */}
      <div className="px-6 mb-10">
        <button
          onClick={() => onNavigate('scan', 'waste')}
          className="w-full bg-green-500 hover:bg-green-600 border-2 border-green-400 text-white font-bold py-5 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all active:scale-98"
        >
          SCAN NOW
        </button>
      </div>

      {/* Previous Projects Section with better spacing */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Previous Projects</h2>
          <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide -mx-1 px-1" style={{ WebkitOverflowScrolling: 'touch' }}>
          <button className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-7 py-3 whitespace-nowrap text-sm font-medium shrink-0 transition-all active:scale-95">
            Glass Bottle
          </button>
          <button className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-7 py-3 whitespace-nowrap text-sm font-medium shrink-0 transition-all active:scale-95">
            Cardboard Cutout
          </button>
          <button className="bg-green-800/30 hover:bg-green-800/40 border border-green-600 rounded-full px-7 py-3 whitespace-nowrap text-sm font-medium shrink-0 transition-all active:scale-95">
            Plastic con
          </button>
        </div>
      </div>

      {/* More Options Section with better spacing */}
      <div className="px-6 space-y-5">
        <h2 className="text-xl font-bold mb-1">More Options</h2>
        
        <button
          onClick={() => onNavigate('chat')}
          className="w-full bg-green-800/20 hover:bg-green-800/30 border border-green-600 rounded-xl p-5 flex items-center gap-5 text-left transition-all active:scale-98"
        >
          <div className="w-14 h-14 bg-transparent border-2 border-white rounded-full flex items-center justify-center shrink-0">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm leading-relaxed">You can tell our chatbot what waste you have, and it will show you how to dispose of or upcycle it.</p>
          </div>
          <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => onNavigate('voice-chat')}
          className="w-full bg-green-800/20 hover:bg-green-800/30 border border-green-600 rounded-xl p-5 flex items-center gap-5 text-left transition-all active:scale-98"
        >
          <div className="w-14 h-14 bg-transparent border-2 border-white rounded-full flex items-center justify-center shrink-0">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm leading-relaxed">Use our live feature to call out what waste you have, and it will instantly tell you how to dispose of or upcycle it.</p>
          </div>
          <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
