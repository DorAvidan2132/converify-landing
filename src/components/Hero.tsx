import { CheckCircle, Play, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#25D366] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 backdrop-blur-xl bg-white/10 rounded-full border border-white/20"
        >
          <Sparkles className="size-4 text-[#25D366]" />
          <span className="text-white/90 text-sm">Marketing Evolution 2.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight px-4"
        >
          Turn WhatsApp Into Your
          <br />
          <span className="bg-gradient-to-r from-[#25D366] to-[#20BD5A] bg-clip-text text-transparent">
            Marketing Engine
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
        >
          <span className="text-white font-semibold">98% open rates.</span> Unlimited scale. Official Meta API.
          <br className="hidden sm:block" />
          <span className="text-gray-300"> Send bulk WhatsApp campaigns that actually get read.</span>
        </motion.p>

        {/* Floating Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, text: 'Unlimited Scale', color: 'from-yellow-500 to-orange-500' },
            { icon: TrendingUp, text: '98% Open Rates', color: 'from-[#25D366] to-emerald-600' },
            { icon: Sparkles, text: 'Real-Time Tracking', color: 'from-purple-500 to-pink-500' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group backdrop-blur-xl bg-white/5 px-5 py-3 rounded-2xl border border-white/10 hover:border-white/30 transition-all"
            >
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="size-4 text-white" />
                </div>
                <span className="text-white text-sm sm:text-base">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 px-4"
        >
          <a href="https://app.converify.com/auth/signup" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-lg font-semibold overflow-hidden shadow-2xl shadow-[#25D366]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial
                <Sparkles className="size-5" />
              </span>
            </motion.button>
          </a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto px-8 py-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl text-white text-lg hover:bg-white/20 transition-all"
          >
            <span className="flex items-center justify-center gap-2">
              <Play className="size-5" />
              Watch Demo
            </span>
          </motion.button>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 text-sm text-gray-400 px-4"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="size-4 text-[#25D366]" />
            <span>Official Meta Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-4 text-[#25D366]" />
            <span>7-Day Free Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-4 text-[#25D366]" />
            <span>No Credit Card Required</span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 mx-4"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#25D366] to-emerald-400 bg-clip-text text-transparent font-bold">98%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Open Rate</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">500+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">10M+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Messages Sent</div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}