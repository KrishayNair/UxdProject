'use client';

import { useState } from 'react';
import Image from 'next/image';

interface OnboardingCarouselProps {
  onComplete: () => void;
}

const features = [
  {
    mascot: '/mascot1.png',
    title: 'Scan Your Waste',
    description: 'Use your camera to scan waste items and get instant suggestions on how to dispose or upcycle them.'
  },
  {
    mascot: '/mascot2.png',
    title: 'Track Your Progress',
    description: 'Monitor your environmental impact with detailed statistics on CO2 emissions saved and waste reduced.'
  },
  {
    mascot: '/mascot3.png',
    title: 'Get Expert Guidance',
    description: 'Chat with our AI assistant or use voice commands to get personalized advice on waste management.'
  }
];

export default function OnboardingCarousel({ onComplete }: OnboardingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < features.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const skip = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      {/* Skip Button */}
      <div className="flex justify-end p-6 pt-12">
        <button
          onClick={skip}
          className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        <div className="w-full max-w-sm">
          {/* Feature Card */}
          <div className="text-center mb-12">
            {/* Mascot Image with dashed circular border */}
            <div className="flex justify-center mb-8 relative">
              {/* Left Arrow */}
              {currentIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-50 transition-all active:scale-95"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Mascot Image Container */}
              <div className="w-56 h-56 border-2 border-dashed border-green-500 rounded-full flex items-center justify-center bg-white shadow-sm p-4">
                <div className="w-full h-full relative">
                  <Image
                    src={features[currentIndex].mascot}
                    alt={features[currentIndex].title}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-50 transition-all active:scale-95"
                aria-label={currentIndex === features.length - 1 ? "Get Started" : "Next slide"}
              >
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{features[currentIndex].title}</h2>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm px-4">{features[currentIndex].description}</p>
          </div>

          {/* Indicators - Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-500 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="px-6 pb-12">
        <button
          onClick={nextSlide}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-all active:scale-98"
        >
          {currentIndex === features.length - 1 ? 'Get Started' : 'Next'}
        </button>
      </div>
    </div>
  );
}

