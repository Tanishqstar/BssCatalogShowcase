import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [displayNumber, setDisplayNumber] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 16; // 60fps for smooth animation
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        
        // Smooth rolling numbers
        setDisplayNumber(next);
        
        if (next >= 100) {
          clearInterval(timer);
          setDisplayNumber(100);
          // Show progress bar when 100% is reached
          setTimeout(() => {
            setShowProgressBar(true);
            // Complete after bar animation
            setTimeout(() => {
              setIsComplete(true);
              setTimeout(onComplete, 300);
            }, 1200);
          }, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);



  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[200] bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Central Number Display */}
          <div className="fixed inset-0 flex items-center justify-center flex-col">
            <motion.div
              className="font-mono text-6xl md:text-8xl lg:text-9xl font-thin text-foreground tracking-wider"
              style={{ 
                fontStretch: 'ultra-condensed',
                letterSpacing: '0.1em'
              }}
              animate={{
                opacity: showProgressBar ? 0 : 1,
                scale: showProgressBar ? 0.8 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {Math.floor(displayNumber).toString().padStart(2, '0')}
            </motion.div>

            {/* Progress Bar */}
            <AnimatePresence>
              {showProgressBar && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className="h-1 bg-foreground rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "min(400px, 80vw)" }}
                    transition={{ 
                      duration: 1,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Website Preview (appears when bar completes) */}
          <AnimatePresence>
            {showProgressBar && (
              <motion.div
                className="fixed inset-0 bg-background"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className="w-full h-full flex items-center justify-center filter blur-sm">
                  <div className="text-center space-y-6">
                    <h1 className="text-5xl font-bold text-foreground">BSS/OSS</h1>
                    <h2 className="text-4xl font-bold text-muted-foreground">Platform</h2>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}