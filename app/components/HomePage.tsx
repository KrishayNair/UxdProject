'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white pb-24">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pt-12">
        <div>
          <h1 className="text-2xl font-bold">Your History</h1>
        </div>
        <button className="p-2">
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
            <a href="#" className="text-sm text-green-300 flex items-center">
              View All <span className="ml-1">→</span>
            </a>
          </div>
          <div className="bg-green-800/20 border border-green-600 rounded-xl p-4">
            <h3 className="text-xl font-medium mb-1">Christmas Presents</h3>
            <p className="text-sm text-gray-400 mb-4">01-10-23</p>
            <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              View Chat
            </button>
          </div>
        </div>

        {/* History Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">History</h2>
            <a href="#" className="text-sm text-green-300 flex items-center">
              View All <span className="ml-1">→</span>
            </a>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm">
              The gift for my Wedding
            </button>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm">
              Coffee cup
            </button>
            <button className="bg-green-800/30 border border-green-600 rounded-full px-6 py-2 whitespace-nowrap text-sm">
              Some
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

