import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        setCurrentNumber(Math.floor(next));
        
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Calculate L-shape clip path
  const getLShapeClipPath = (progress: number) => {
    if (progress === 0) return 'polygon(0 0, 0 0, 0 0, 0 0)';
    
    const size = Math.min(progress * 1.2, 100);
    const centerX = 50;
    const centerY = 50;
    const halfSize = size / 2;
    
    // L-shape: 4 squares arranged in L formation
    return `polygon(
      ${centerX - halfSize}% ${centerY - halfSize}%, 
      ${centerX}% ${centerY - halfSize}%, 
      ${centerX}% ${centerY}%, 
      ${centerX + halfSize}% ${centerY}%, 
      ${centerX + halfSize}% ${centerY + halfSize}%, 
      ${centerX - halfSize}% ${centerY + halfSize}%
    )`;
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[200] bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rolling Numbers - Bottom Left */}
          <div className="fixed bottom-8 left-8">
            <div className="font-mono text-6xl text-white tracking-widest" style={{ fontWeight: 100, fontStretch: 'ultra-condensed' }}>
              <motion.span
                key={currentNumber}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {currentNumber.toString().padStart(2, '0')}
              </motion.span>
              <span className="text-gray-500 ml-3 text-4xl">%</span>
            </div>
          </div>

          {/* L-Shape Progress Indicator */}
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="relative w-40 h-40">
              {/* L-shape outline */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
                <div className="border border-gray-600 bg-gray-800/20"></div>
                <div className="border border-gray-600 bg-gray-800/20"></div>
                <div className="border border-gray-600 bg-gray-800/20"></div>
                <div className="border border-gray-600 bg-gray-800/20"></div>
              </div>
              
              {/* Progress overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-80"
                style={{
                  clipPath: getLShapeClipPath(progress)
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Website preview visible through L-shape */}
          <div 
            className="fixed inset-0 bg-primary-custom"
            style={{
              clipPath: getLShapeClipPath(progress)
            }}
          >
            <div className="w-full h-full flex items-center justify-center filter blur-sm opacity-70">
              <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold text-white">Unparalleled</h1>
                <h2 className="text-4xl font-bold text-gray-800">BSS/OSS Capabilities</h2>
                <div className="flex gap-3 justify-center mt-8">
                  <div className="w-28 h-14 bg-pink-300 rounded-2xl opacity-80"></div>
                  <div className="w-28 h-14 bg-yellow-300 rounded-2xl opacity-80"></div>
                  <div className="w-28 h-14 bg-green-300 rounded-2xl opacity-80"></div>
                  <div className="w-28 h-14 bg-cyan-300 rounded-2xl opacity-80"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading text */}
          <motion.div
            className="fixed bottom-8 right-8 text-gray-400 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Initializing BSS/OSS Platform...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}