import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-gray-950/80 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#20BD5A] rounded-xl blur-sm"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#20BD5A] rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="size-5 text-white" />
              </div>
            </div>
            <span className="text-2xl">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Converify</span>
              <span className="text-[#25D366]">.ai</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'How It Works', 'Agencies', 'Pricing'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#25D366] to-[#20BD5A] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <a href="https://app.converify.com/auth/signup" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-xl text-white overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Start Free Trial</span>
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 backdrop-blur-xl bg-white/10 rounded-xl border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="size-6 text-white" />
            ) : (
              <Menu className="size-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 flex flex-col gap-4">
                {['Features', 'How It Works', 'Agencies', 'Pricing'].map((item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors backdrop-blur-xl bg-white/5 px-4 py-3 rounded-xl border border-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <a href="https://app.converify.com/auth/signup" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-[#25D366] to-[#20BD5A] text-white px-6 py-3 rounded-xl w-full"
                  >
                    Start Free Trial
                  </motion.button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
