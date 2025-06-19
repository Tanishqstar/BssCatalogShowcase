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
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center">
      <motion.nav 
        className="bg-nav-dark px-4 py-2 rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          {/* Up Arrow Button - Square */}
          <motion.button 
            className="w-10 h-10 bg-nav-dark hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors duration-200"
            onClick={scrollToTop}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ChevronUp className="text-nav-text w-4 h-4" />
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
              className="h-10 px-6 bg-nav-dark hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center gap-2"
              onClick={() => handleNavigation(item.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-nav-text text-xs font-mono font-medium uppercase tracking-wider whitespace-nowrap">
                {item.name}
              </span>
              {item.hasPlus && <Plus className="text-cta-cyan w-3 h-3" />}
            </motion.button>
          ))}
          
          {/* CTA Button - Rectangular */}
          <motion.button 
            className="h-10 bg-cta-cyan hover:bg-cta-cyan/90 text-nav-dark font-mono font-semibold text-xs uppercase tracking-wider px-8 rounded-xl transition-colors duration-200"
            onClick={handleBookMeeting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            BOOK A MEETING
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
}
