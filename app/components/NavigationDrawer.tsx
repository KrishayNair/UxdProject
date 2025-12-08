'use client';

import { useState } from 'react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (path: string) => void;
}

export default function NavigationDrawer({ isOpen, onClose, onNavigate }: NavigationDrawerProps) {
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);

  const toggleProjectSection = () => {
    setIsProjectExpanded(!isProjectExpanded);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="absolute inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-green-900 to-black z-50 shadow-2xl">
        <div className="flex flex-col h-full p-6 text-green-100">
          <div className="mb-8">
            <h2 className="text-xl font-medium">Hi, David.</h2>
          </div>
          
          <nav className="flex-1 flex flex-col">
            <button
              onClick={() => {
                onNavigate?.('home');
                onClose();
              }}
              className="py-3 border-b border-green-700 text-green-300 font-medium relative text-left"
            >
              Home
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-300"></span>
            </button>
            <button
              onClick={() => {
                onNavigate?.('progress');
                onClose();
              }}
              className="py-3 border-b border-green-700 text-left"
            >
              Progress
            </button>
            <button
              onClick={() => {
                onNavigate?.('history');
                onClose();
              }}
              className="py-3 border-b border-green-700 text-left"
            >
              History
            </button>
            
            <div className="mt-2">
              <button
                onClick={toggleProjectSection}
                className="w-full flex items-center justify-between py-3 border-b border-green-700"
              >
                <span>Start a project</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isProjectExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProjectExpanded && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-green-700">
                  <button
                    onClick={() => {
                      onNavigate?.('scan');
                      onClose();
                    }}
                    className="block py-2 text-left w-full"
                  >
                    Scan
                  </button>
                  <button
                    onClick={() => {
                      onNavigate?.('chat');
                      onClose();
                    }}
                    className="block py-2 text-left w-full"
                  >
                    Chat
                  </button>
                  <button
                    onClick={() => {
                      onNavigate?.('live');
                      onClose();
                    }}
                    className="block py-2 text-left w-full"
                  >
                    Live
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => {
                onNavigate?.('about');
                onClose();
              }}
              className="py-3 border-b border-green-700 mt-2 text-left"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate?.('settings');
                onClose();
              }}
              className="py-3 border-b border-green-700 text-left"
            >
              Settings
            </button>
          </nav>
          
          <button className="mt-auto py-3 text-green-300 font-medium">
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}

