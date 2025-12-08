'use client';

import { useState } from 'react';
import NavigationDrawer from './components/NavigationDrawer';
import BottomNav from './components/BottomNav';
import DashboardPage from './components/DashboardPage';
import ProgressPage from './components/ProgressPage';
import HistoryPage from './components/HistoryPage';
import ScanPage from './components/ScanPage';
import ChatPage from './components/ChatPage';

type Screen = 'dashboard' | 'progress' | 'history' | 'scan' | 'chat' | 'voice-chat' | 'waste-info' | 'featured';
type BottomTab = 'home' | 'progress' | 'history' | 'profile';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [activeTab, setActiveTab] = useState<BottomTab>('home');
  const [scanMode, setScanMode] = useState<'waste' | 'upcycle'>('waste');

  const handleTabChange = (tab: BottomTab) => {
    setActiveTab(tab);
    setIsDrawerOpen(false);
    
    // Map bottom nav to screens
    if (tab === 'home') {
      setCurrentScreen('dashboard');
    } else if (tab === 'progress') {
      setCurrentScreen('progress');
    } else if (tab === 'history') {
      setCurrentScreen('history');
    }
  };

  const navigateToScreen = (screen: Screen, mode?: 'waste' | 'upcycle') => {
    setCurrentScreen(screen);
    setIsDrawerOpen(false);
    if (mode && screen === 'scan') {
      setScanMode(mode);
    }
  };

  const handleBack = () => {
    // Navigate back to dashboard
    setCurrentScreen('dashboard');
    setActiveTab('home');
  };

  // Determine which page to show based on current screen
  const getCurrentPage = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <DashboardPage 
          onNavigate={(screen: string, mode?: 'waste' | 'upcycle') => navigateToScreen(screen as Screen, mode)}
          onOpenDrawer={showBottomNav && !isDrawerOpen ? () => setIsDrawerOpen(true) : undefined}
        />;
      case 'progress':
        return <ProgressPage />;
      case 'history':
        return <HistoryPage variant="history" />;
      case 'scan':
        return <ScanPage onBack={handleBack} mode={scanMode} />;
      case 'chat':
        return <ChatPage onBack={handleBack} initialMode="menu" />;
      case 'voice-chat':
        return <ChatPage onBack={handleBack} initialMode="voice" />;
      case 'waste-info':
        return <ChatPage onBack={handleBack} initialMode="chat" />;
      case 'featured':
        return <DashboardPage 
          onNavigate={(screen: string, mode?: 'waste' | 'upcycle') => navigateToScreen(screen as Screen, mode)}
          onOpenDrawer={showBottomNav && !isDrawerOpen ? () => setIsDrawerOpen(true) : undefined}
        />;
      default:
        return <DashboardPage 
          onNavigate={(screen: string, mode?: 'waste' | 'upcycle') => navigateToScreen(screen as Screen, mode)}
          onOpenDrawer={showBottomNav && !isDrawerOpen ? () => setIsDrawerOpen(true) : undefined}
        />;
    }
  };

  const showBottomNav = !['scan', 'chat', 'voice-chat', 'waste-info'].includes(currentScreen);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Mobile Container - max width 375px to match mobile screenshots */}
      <div className="relative w-full max-w-[375px] h-[812px] overflow-hidden bg-gradient-to-b from-green-900 to-black rounded-3xl shadow-2xl">
        {/* Navigation Drawer */}
        <NavigationDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onNavigate={(path) => {
            if (path === 'home') {
              setCurrentScreen('dashboard');
              setActiveTab('home');
            } else if (path === 'progress') {
              setCurrentScreen('progress');
              setActiveTab('progress');
            } else if (path === 'history') {
              setCurrentScreen('history');
              setActiveTab('history');
            } else if (path === 'scan') {
              setScanMode('waste');
              setCurrentScreen('scan');
            } else if (path === 'chat') {
              setCurrentScreen('chat');
            }
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 h-full overflow-y-auto scrollbar-hide" style={{ paddingBottom: showBottomNav ? '80px' : '0', WebkitOverflowScrolling: 'touch' }}>
          {getCurrentPage()}
        </div>

        {/* Bottom Navigation - only show on main screens */}
        {showBottomNav && (
          <BottomNav 
            activeTab={activeTab} 
            onTabChange={(tab) => {
              handleTabChange(tab);
              // Update active tab based on screen
              if (tab === 'home') {
                setCurrentScreen('dashboard');
              } else if (tab === 'progress') {
                setCurrentScreen('progress');
              } else if (tab === 'history') {
                setCurrentScreen('history');
              }
            }}
            variant={activeTab === 'progress' ? 'progress' : 'default'}
          />
        )}
      </div>
    </div>
  );
}
