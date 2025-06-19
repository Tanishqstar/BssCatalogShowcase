import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Zap, Layers, Calendar, Film, Apple, Podcast, Moon, Sun } from 'lucide-react';

interface TabData {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  mockup: React.ReactNode;
}

const tabs: TabData[] = [
  {
    id: 'billing',
    name: 'BILLING',
    icon: <FileText className="w-5 h-5" />,
    title: 'Real-Time Convergent Billing',
    description: 'Instantaneous, accurate billing across all services and platforms. Streamline revenue assurance with intelligent automation.',
    bgColor: '#FFD9D9',
    mockup: (
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 w-80 transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">EMS</span>
            </div>
            <span className="font-semibold text-gray-800">EMS</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <FileText className="text-white w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Billing</p>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-2 bg-gray-200 rounded-full">
                  <div className="w-8 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-500">17 DAYS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'charging',
    name: 'CHARGING',
    icon: <Zap className="w-5 h-5" />,
    title: 'Online Charging System',
    description: 'AI-powered insights that predict customer needs and drive personalized experiences in real-time.',
    bgColor: '#FFEFAF',
    mockup: (
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 w-80 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
        <div className="mb-6">
          <div className="text-2xl font-bold text-gray-800 mb-2">€9.00</div>
          <div className="text-sm text-gray-500">TRAFFIC TYPE</div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <div>
              <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
              <span className="text-xs text-gray-400">Location</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <div>
              <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
              <span className="text-xs text-gray-400">User</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <div>
              <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
              <span className="text-xs text-gray-400">Time</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">✓</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'catalog',
    name: 'CATALOG',
    icon: <Layers className="w-5 h-5" />,
    title: 'Product Catalog',
    description: 'Intuitive tools that empower customers to manage their accounts with ease, freeing up your team.',
    bgColor: '#E9FFE1',
    mockup: (
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 w-80 transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">⟵ APP JARS</div>
          <div className="flex space-x-3 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <Film className="text-white w-6 h-6" />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Apple className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-4">
            <Podcast className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-xs text-green-600 mb-1">PREMIUM PLAY ⟵</div>
          <div className="text-xl font-bold text-gray-800 mb-1">TOTAL UNLIMITED</div>
          <div className="text-xs text-gray-400">Unlimited minutes</div>
        </div>
      </div>
    )
  },
  {
    id: 'events',
    name: 'EVENTS',
    icon: <Calendar className="w-5 h-5" />,
    title: 'Event Management',
    description: 'Comprehensive event tracking and analytics that provide deep insights into customer behavior and system performance.',
    bgColor: '#A9F7FF',
    mockup: (
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 w-80 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-800">Event Analytics</h4>
            <div className="text-xs text-gray-400">Live</div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">API Calls</span>
              <span className="text-sm font-semibold text-gray-800">2.4M</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="w-3/4 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Events/sec</span>
              <span className="text-sm font-semibold text-gray-800">1.2K</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="w-2/3 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function BssOssShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % tabs.length);
          return 0;
        }
        return prev + (100 / 80); // 8 seconds = 80 intervals of 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-primary-custom'}`}>
      {/* Dark Mode Toggle */}
      <motion.div
        className="fixed top-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <motion.button
          onClick={toggleTheme}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
              : 'bg-white/20 border-white/30 hover:bg-white/30'
          } backdrop-blur-sm`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </motion.button>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={`text-sm font-medium tracking-wider uppercase mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              ( EFFICIENCY, SCALABILITY, AND AGILITY )
            </p>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-white'}`}>
              Unparalleled
            </h1>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
              BSS/OSS Capabilities
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-7xl">
              <div className="flex gap-3 justify-center">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={tab.id}
                    className="relative overflow-hidden rounded-2xl"
                    animate={{
                      width: activeTab === index ? 380 : 160
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      backgroundColor: activeTab === index 
                        ? `${tab.bgColor}40` // Light shade for background
                        : tab.bgColor
                    }}
                  >
                    {/* Progress Fill Background */}
                    {activeTab === index && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ backgroundColor: tab.bgColor }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                    
                    <motion.button
                      className="h-16 w-full flex items-center rounded-2xl transition-all duration-300 overflow-hidden relative z-10"
                      onClick={() => handleTabClick(index)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon Block */}
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ml-2"
                        style={{ backgroundColor: activeTab === index ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.5)' }}
                      >
                        <div className="text-gray-700">
                          {tab.icon}
                        </div>
                      </div>
                      
                      {/* Label Container */}
                      <motion.div 
                        className="flex-1 px-5 pr-3 overflow-hidden"
                        animate={{
                          opacity: activeTab === index ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="font-mono font-medium text-sm uppercase tracking-wider text-gray-700 whitespace-nowrap">
                          {tab.name}
                        </span>
                      </motion.div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[400px]">
            <div className="w-full max-w-7xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="space-y-6">
                    <motion.h3 
                      className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {tabs[activeTab].title}
                    </motion.h3>
                    <motion.p 
                      className={`text-lg leading-relaxed max-w-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {tabs[activeTab].description}
                    </motion.p>
                  </div>
                  <motion.div 
                    className="flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {tabs[activeTab].mockup}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
