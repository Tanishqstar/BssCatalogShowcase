import { ChevronUp, Plus, X, Code, Trophy, Users, BookOpen, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FloatingNavigation() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (section: string) => {
    setActivePopup(section);
  };

  const handleBookMeeting = () => {
    setActivePopup('contact');
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const popupContent = {
    PRODUCTS: {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "HackForge Products",
      description: "Revolutionary BSS/OSS solutions built by passionate developers during our 48-hour coding marathon. Each product represents countless energy drinks, sleepless nights, and breakthrough moments.",
      features: ["Real-time API integrations", "Microservices architecture", "Cloud-native deployment", "AI-powered analytics"]
    },
    SOLUTIONS: {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: "HackSprint Solutions",
      description: "Award-winning telecom solutions that emerged from our hackathon battlefield. These aren't just demos - they're production-ready innovations that solve real industry challenges.",
      features: ["Scalable infrastructure", "Machine learning models", "Blockchain integration", "Edge computing optimization"]
    },
    RESOURCES: {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Developer Arsenal",
      description: "Open-source tools, documentation, and frameworks created by our hackathon community. From midnight debugging sessions to victory celebrations - all resources are battle-tested.",
      features: ["API documentation", "Code repositories", "Tutorial videos", "Community forums"]
    },
    SERVICES: {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "HackSquad Services",
      description: "Professional services delivered with startup agility and hackathon innovation. Our team of code warriors transforms complex telecom challenges into elegant solutions.",
      features: ["24/7 rapid deployment", "Agile development cycles", "DevOps automation", "Performance optimization"]
    }
  };

  return (
    <>
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

      {/* Hackathon Popup */}
      <AnimatePresence>
        {activePopup && popupContent[activePopup as keyof typeof popupContent] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="bg-gray-900 rounded-3xl p-8 max-w-2xl mx-4 border border-gray-700 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {popupContent[activePopup as keyof typeof popupContent].icon}
                  <div>
                    <h2 className="text-2xl font-bold text-white font-mono">
                      {popupContent[activePopup as keyof typeof popupContent].title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-mono">HACKATHON PROJECT</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  onClick={closePopup}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {popupContent[activePopup as keyof typeof popupContent].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {popupContent[activePopup as keyof typeof popupContent].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="bg-gray-800/50 rounded-xl p-3 border border-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cta-cyan rounded-full"></div>
                        <span className="text-sm text-gray-300 font-mono">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.button
                    className="flex-1 bg-cta-cyan text-gray-900 px-6 py-3 rounded-xl font-mono font-semibold text-sm uppercase tracking-wider hover:bg-cta-cyan/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Demo
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl font-mono font-medium text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Contact Card Modal */}
        {activePopup === 'contact' && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="bg-nav-bg border border-gray-700 rounded-2xl p-6 max-w-sm w-full"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cta-cyan to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-lg">TG</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-mono">Tanishq Gohil</h3>
                      <p className="text-gray-400 text-sm font-mono">Full Stack Developer</p>
                    </div>
                  </div>
                  <button
                    onClick={closePopup}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      BSS/OSS Platform Developer specializing in telecom solutions, 
                      billing systems, and enterprise software architecture.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-3">
                    <motion.a
                      href="https://www.linkedin.com/in/tanishq-gohil28/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-700/50 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin size={20} className="text-cta-cyan" />
                      <div className="flex-1">
                        <span className="text-white font-mono text-sm">LinkedIn</span>
                        <p className="text-gray-400 text-xs">Connect professionally</p>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-cta-cyan transition-colors" />
                    </motion.a>

                    <motion.a
                      href="https://instagram.com/tanishq.js"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-700/50 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Instagram size={20} className="text-cta-cyan" />
                      <div className="flex-1">
                        <span className="text-white font-mono text-sm">@tanishq.js</span>
                        <p className="text-gray-400 text-xs">Follow for tech updates</p>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-cta-cyan transition-colors" />
                    </motion.a>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-cta-cyan text-gray-900 px-6 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider hover:bg-cta-cyan/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://www.linkedin.com/in/tanishq-gohil28/', '_blank')}
                  >
                    Let's Connect
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
