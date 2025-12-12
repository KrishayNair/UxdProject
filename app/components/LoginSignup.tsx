'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LoginSignupProps {
  onLogin: () => void;
}

export default function LoginSignup({ onLogin }: LoginSignupProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Dummy data for auto-fill
  const dummyData = {
    email: 'david@gmail.com',
    password: 'password123',
    name: 'David'
  };

  const handleFieldClick = (field: 'email' | 'password' | 'name') => {
    if (field === 'email') {
      setEmail(dummyData.email);
    } else if (field === 'password') {
      setPassword(dummyData.password);
    } else if (field === 'name') {
      setName(dummyData.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auto-fill if fields are empty
    if (!email) setEmail(dummyData.email);
    if (!password) setPassword(dummyData.password);
    if (!isLogin && !name) setName(dummyData.name);
    
    // Simulate login/signup
    setTimeout(() => {
      onLogin();
    }, 300);
  };

  return (
    <div className="h-full w-full bg-gradient-to-b from-green-900 to-black text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-center pt-12 pb-6">
        <div className="w-28 h-28 relative">
          <Image
            src="/logo.jpg"
            alt="Bin Buddy Logo"
            width={112}
            height={112}
            className="rounded-3xl shadow-lg"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8 px-6">
        <h1 className="text-3xl font-bold mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="text-gray-300 text-sm">
          {isLogin ? 'Sign in to continue your sustainable journey' : 'Join us in making the world greener'}
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onClick={() => handleFieldClick('name')}
                placeholder="Enter your name"
                className="w-full bg-green-800/30 border border-green-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => handleFieldClick('email')}
              placeholder="Enter your email"
              className="w-full bg-green-800/30 border border-green-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={() => handleFieldClick('password')}
              placeholder="Enter your password"
              className="w-full bg-green-800/30 border border-green-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-all active:scale-98 mt-6"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Login/Signup */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setEmail('');
                setPassword('');
                setName('');
              }}
              className="text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

