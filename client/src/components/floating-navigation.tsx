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
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <nav className="bg-nav-dark/90 backdrop-blur-lg rounded-2xl px-8 py-4 neumorphic-shadow border border-white/10">
        <div className="flex items-center space-x-6">
          {/* Up Arrow Button */}
          <motion.button 
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="text-white w-4 h-4" />
          </motion.button>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {[
              { name: 'PRODUCTS', hasPlus: true },
              { name: 'SOLUTIONS', hasPlus: true },
              { name: 'RESOURCES', hasPlus: true },
              { name: 'SERVICES', hasPlus: false }
            ].map((item) => (
              <motion.button
                key={item.name}
                className="px-4 py-2 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center space-x-1"
                onClick={() => handleNavigation(item.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{item.name}</span>
                {item.hasPlus && <Plus className="w-3 h-3" />}
              </motion.button>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.button 
            className="bg-cta-cyan hover:bg-cta-cyan/90 text-gray-800 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg"
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
