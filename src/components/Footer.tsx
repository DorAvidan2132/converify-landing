import { MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 bg-[#25D366] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 backdrop-blur-xl bg-white/5 rounded-full border border-white/10">
            <Sparkles className="size-4 text-[#25D366]" />
            <span className="text-sm text-white/80">Join The Future</span>
          </div>
          <h2 className="mb-6 text-white text-3xl sm:text-4xl md:text-5xl px-4">
            Ready to Transform Your Marketing?
            <br />
            <span className="bg-gradient-to-r from-[#25D366] to-emerald-400 bg-clip-text text-transparent">
              Start Your Free Trial Today
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 px-4">
            Join hundreds of businesses sending millions of messages with 98% open rates.
            <span className="text-white"> No credit card required.</span>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 px-8 py-6 rounded-3xl border border-white/10">
            <p className="text-xl sm:text-2xl mb-6">
              <span className="bg-gradient-to-r from-[#25D366] to-emerald-400 bg-clip-text text-transparent font-semibold">
                Trusted by 500+ Businesses Worldwide
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-gray-400 text-sm sm:text-base px-4">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <span className="text-2xl">📊</span>
                </div>
                <span className="text-xs sm:text-sm">Performance Tracking</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <span className="text-2xl">💼</span>
                </div>
                <span className="text-xs sm:text-sm">Multi-Workspace</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-gradient-to-br from-[#25D366] to-emerald-500 rounded-xl">
                  <span className="text-2xl">🚀</span>
                </div>
                <span className="text-xs sm:text-sm">Unlimited Scale</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400"
        >
          {['Features', 'Pricing', 'Blog', 'Support', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance'].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase().replace(/[\s]/g, '-')}`}
              whileHover={{ scale: 1.05, color: '#25D366' }}
              className="hover:text-[#25D366] transition-colors text-sm"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* WhatsApp Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 mb-4">Questions or need help?</p>
          <a
            href="https://wa.me/972552516825"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-[#25D366]/50 hover:bg-white/10 transition-all group"
          >
            <div className="p-3 bg-gradient-to-br from-[#25D366] to-emerald-500 rounded-xl group-hover:scale-110 transition-transform">
              <MessageCircle className="size-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Contact Us on WhatsApp</p>
              <p className="text-gray-400 text-sm">We're here to help!</p>
            </div>
          </a>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <p className="text-xl sm:text-2xl mb-8 text-white">Ready to see the difference?</p>
          <a href="https://app.converify.ai" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-lg sm:text-xl font-semibold overflow-hidden shadow-2xl shadow-[#25D366]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Free Trial
                <Sparkles className="size-5 sm:size-6" />
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8 px-4">
          <p>© 2025 Converify. Professional WhatsApp Marketing Platform.</p>
          <p className="mt-2 text-xs">Built with the official Meta WhatsApp Business API</p>
        </div>
      </div>
    </footer>
  );
}