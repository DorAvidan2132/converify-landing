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

      {/* Meta Badge - Floating */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-24 right-8 z-20 backdrop-blur-xl bg-white/10 px-6 py-3 rounded-2xl border border-white/20 shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
          <CheckCircle className="size-5 text-[#25D366]" />
          <span className="text-white">Official Meta Partner</span>
        </div>
      </motion.div>

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
          className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
        >
          WhatsApp Marketing
          <br />
          <span className="bg-gradient-to-r from-[#25D366] to-[#20BD5A] bg-clip-text text-transparent">
            98% Opens. Zero Excuses.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Leave email's 42% open rates behind. Launch bulk campaigns via official Meta API.
          <span className="text-white"> Use your existing WhatsApp Business number—no new setup needed.</span>
        </motion.p>

        {/* Floating Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Zap, text: 'Unlimited Bulk Sends', color: 'from-yellow-500 to-orange-500' },
            { icon: TrendingUp, text: '98% Open Rates', color: 'from-[#25D366] to-emerald-600' },
            { icon: Sparkles, text: 'Send Status Tracking', color: 'from-purple-500 to-pink-500' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group backdrop-blur-xl bg-white/5 px-6 py-4 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="size-5 text-white" />
                </div>
                <span className="text-white">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <a href="https://app.converify.com/auth/signup" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-5 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-lg overflow-hidden shadow-2xl shadow-[#25D366]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <Sparkles className="size-5" />
              </span>
            </motion.button>
          </a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl text-white text-lg hover:bg-white/20 transition-all"
          >
            <span className="flex items-center gap-2">
              <Play className="size-5" />
              Watch Demo
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#25D366] to-emerald-400 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-400 text-sm">Open Rate</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">300+</div>
              <div className="text-gray-400 text-sm">Active Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">4x</div>
              <div className="text-gray-400 text-sm">ROI Boost</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 text-gray-400 italic"
        >
          "Our WhatsApp campaigns crushed email—4x engagement in week one." 
          <span className="text-[#25D366]"> – E-com Marketer</span>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}