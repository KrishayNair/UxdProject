'use client';

import { useState, useRef, useEffect } from 'react';

interface ScanPageProps {
  onBack: () => void;
  mode?: 'waste' | 'upcycle';
}

export default function ScanPage({ onBack, mode = 'waste' }: ScanPageProps) {
  const [activeMode, setActiveMode] = useState<'scan' | 'chat' | 'live'>('scan');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    if (activeMode === 'scan') {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [activeMode]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // Use back camera on mobile
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setHasPermission(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 relative overflow-hidden">
      {/* Header with better spacing */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between px-4 pt-14 pb-4">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
          <svg
            className="w-5 h-5 text-gray-800"
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

      {/* Title Section with better positioning */}
      <div className="absolute top-24 left-0 right-0 z-30 px-4">
        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Scan Your Waste</h1>
        <p className="text-white text-sm leading-relaxed drop-shadow-md">
          Scan your waste to get suggestions on what you can do to waste it
        </p>
      </div>

      {/* Camera View Area - Full screen */}
      <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
        {hasPermission === false ? (
          <div className="flex items-center justify-center h-full flex-col gap-6 px-6">
            <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-white text-lg font-medium text-center">Camera access denied</p>
            <p className="text-gray-300 text-sm text-center">Please enable camera access to scan items</p>
            <button
              onClick={startCamera}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors shadow-lg"
            >
              Enable Camera
            </button>
          </div>
        ) : (
          <>
            {/* Video element */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Scanning frame overlay with better styling */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="border-4 border-white rounded-xl w-[300px] h-[450px] shadow-2xl"></div>
            </div>
          </>
        )}
      </div>

      {/* Capture Button - Better positioned */}
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-30">
        <button className="w-20 h-20 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform active:scale-95">
          <div className="w-16 h-16 bg-gray-800 rounded-full"></div>
        </button>
      </div>

      {/* Bottom Navigation - Enhanced styling */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100/95 backdrop-blur-md z-30 border-t border-gray-200">
        <div className="flex justify-around items-center px-4 py-5">
          <button
            onClick={() => setActiveMode('scan')}
            className="flex flex-col items-center gap-2 transition-transform active:scale-95"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md ${
              activeMode === 'scan' ? 'bg-white shadow-lg' : 'bg-gray-800'
            }`}>
              <span className={`text-sm font-semibold ${
                activeMode === 'scan' ? 'text-gray-800' : 'text-white'
              }`}>Scan</span>
            </div>
          </button>

          <button
            onClick={() => setActiveMode('chat')}
            className="flex flex-col items-center gap-2 transition-transform active:scale-95"
          >
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
              <span className="text-sm font-semibold text-white">Chat</span>
            </div>
          </button>

          <button
            onClick={() => setActiveMode('live')}
            className="flex flex-col items-center gap-2 transition-transform active:scale-95"
          >
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
              <span className="text-sm font-semibold text-white">Live</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
