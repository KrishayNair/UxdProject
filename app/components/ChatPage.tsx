'use client';

import { useState } from 'react';

interface ChatPageProps {
  onBack?: () => void;
  initialMode?: 'menu' | 'chat' | 'voice';
}

export default function ChatPage({ onBack, initialMode = 'menu' }: ChatPageProps) {
  const [mode, setMode] = useState<'menu' | 'chat' | 'voice'>(initialMode);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([]);
  const [inputText, setInputText] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setMode('chat');
    setMessages([
      { text: option, sender: 'user' },
      { text: `Thank you for selecting ${option}. How can I help you with ${option.toLowerCase()}?`, sender: 'bot' }
    ]);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Thank you for your message. I\'m here to help!', sender: 'bot' }]);
      }, 500);
    }
  };

  if (mode === 'voice') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          {onBack && (
            <button onClick={onBack} className="p-2 -ml-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <button className="p-2 ml-auto">
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

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <h2 className="text-2xl font-bold mb-2">Hi, David</h2>
          <p className="text-gray-300 mb-12">What would you need help with?</p>

          {/* Voice Button */}
          <button className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-8">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </button>

          {/* Control Buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 2v2H7v2h2v2h2V6h2V4h-2V2H9zm9 8c-2.21 0-4 1.79-4 4v1h-2v-1c0-2.21-1.79-4-4-4H3v2h3c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h3v2h-3z"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'chat') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          {onBack && (
            <button onClick={onBack} className="p-2 -ml-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <button className="p-2 ml-auto">
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

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  msg.sender === 'user'
                    ? 'bg-green-600'
                    : 'bg-green-800/50'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="px-6 py-4 border-t border-green-700">
          <div className="flex items-center gap-3">
            <button className="p-2 bg-green-800/50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg outline-none"
            />
          </div>
        </div>
      </div>
    );
  }

  // Menu mode (default)
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <button
          onClick={() => onBack?.()}
          className="p-2 -ml-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
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

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold mb-2">Hi, David</h2>
        <p className="text-gray-300 mb-12">What would you need help with?</p>

        {/* Option Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={() => handleOptionClick('Recycling')}
            className="w-full bg-green-800/50 hover:bg-green-700 border border-green-600 rounded-full px-6 py-4 text-lg font-medium transition-colors"
          >
            Recycling
          </button>
          <button
            onClick={() => handleOptionClick('Upcycling')}
            className="w-full bg-green-800/50 hover:bg-green-700 border border-green-600 rounded-full px-6 py-4 text-lg font-medium transition-colors"
          >
            Upcycling
          </button>
          <button
            onClick={() => handleOptionClick('Waste Management')}
            className="w-full bg-green-800/50 hover:bg-green-700 border border-green-600 rounded-full px-6 py-4 text-lg font-medium transition-colors"
          >
            Waste Management
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-6 py-4 border-t border-green-700">
        <div className="flex items-center gap-3">
          <button className="p-2 bg-green-800/50 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg outline-none"
          />
        </div>
      </div>
    </div>
  );
}

