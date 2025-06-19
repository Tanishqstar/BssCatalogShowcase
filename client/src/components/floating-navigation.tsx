import { ChevronUp, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingNavigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (section: string) => {
    console.log(`Navigate to: ${section}`);
  };

  const handleBookMeeting = () => {
    console.log('Book meeting clicked');
  };

  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <nav className="mx-auto w-fit bg-nav-dark/95 backdrop-blur-lg rounded-3xl px-6 py-4 shadow-2xl border border-white/10">
        <div className="flex items-center gap-3">
          {/* Up Arrow Button - Square */}
          <motion.button 
            className="w-12 h-12 bg-nav-dark hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors duration-200 border border-white/10"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="text-nav-text w-5 h-5" />
          </motion.button>
          
          {/* Navigation Links - Rectangular */}
          {[
            { name: 'PRODUCTS', hasPlus: true },
            { name: 'SOLUTIONS', hasPlus: true },
            { name: 'RESOURCES', hasPlus: true },
            { name: 'SERVICES', hasPlus: false }
          ].map((item) => (
            <motion.button
              key={item.name}
              className="px-6 py-3 bg-nav-dark hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center gap-2 border border-white/10"
              onClick={() => handleNavigation(item.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-nav-text text-sm font-mono font-medium uppercase tracking-wider">
                {item.name}
              </span>
              {item.hasPlus && <Plus className="text-cta-cyan w-4 h-4" />}
            </motion.button>
          ))}
          
          {/* CTA Button - Rectangular */}
          <motion.button 
            className="bg-cta-cyan hover:bg-cta-cyan/90 text-nav-dark font-mono font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-xl transition-colors duration-200 shadow-lg"
            onClick={handleBookMeeting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK A MEETING
          </motion.button>
        </div>
      </nav>
    </motion.div>
  );
}
