import { MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Converify's bulk WhatsApp campaigns = email's funeral. 5x opens!",
    author: "SMB Campaign Lead",
    date: "Nov 2025",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "Simple sends with Converify recovered carts—game over for old-school blasts.",
    author: "Agency Pro",
    metric: "+200% ROI",
    date: "Dec 2025",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    quote: "Converify templates + bulk = marketing heaven. Never going back to email.",
    author: "Digital Marketer",
    date: "Oct 2025",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    quote: "With Converify, 98% open rates aren't a dream anymore. WhatsApp delivers.",
    author: "E-commerce Owner",
    date: "Nov 2025",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

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
          <h2 className="mb-6 text-white">
            Scrolled Here? Time to Ditch Email
            <br />
            <span className="bg-gradient-to-r from-[#25D366] to-emerald-400 bg-clip-text text-transparent">
              for WhatsApp Campaigns
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            You've seen the stats. Bulk sends that open. 
            <span className="text-white"> This is marketing's now.</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#25D366]/30"
                  />
                  <div>
                    <p className="text-sm text-gray-300">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                <p className="italic text-gray-300 text-sm mb-2">"{testimonial.quote}"</p>
                {testimonial.metric && (
                  <p className="text-[#25D366]">{testimonial.metric}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 px-8 py-6 rounded-3xl border border-white/10">
            <p className="text-2xl mb-6">
              <span className="bg-gradient-to-r from-[#25D366] to-emerald-400 bg-clip-text text-transparent">
                Powering 300+ Campaigns Monthly
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <span className="text-2xl">📊</span>
                </div>
                <span className="text-sm">Marketing Analytics</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <span className="text-2xl">💼</span>
                </div>
                <span className="text-sm">Agency Tools</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-gradient-to-br from-[#25D366] to-emerald-500 rounded-xl">
                  <span className="text-2xl">🚀</span>
                </div>
                <span className="text-sm">Bulk Automation</span>
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

        {/* Contact Email */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 mb-2">Questions or need help?</p>
          <a
            href="mailto:support@converify.ai"
            className="text-[#25D366] hover:text-emerald-400 transition-colors text-lg"
          >
            support@converify.ai
          </a>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-2xl mb-8 text-white">Launch your WhatsApp era.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-xl overflow-hidden shadow-2xl shadow-[#25D366]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              Start Free Campaign Trial – Bulk Ready
              <Sparkles className="size-6" />
            </span>
          </motion.button>
        </motion.div>

        {/* WhatsApp Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-[#25D366]/50 transition-all"
          >
            <div className="p-2 bg-gradient-to-br from-[#25D366] to-emerald-500 rounded-xl">
              <MessageCircle className="size-5 text-white" />
            </div>
            <span className="text-gray-300">Campaign inspo? WhatsApp us</span>
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
          <p>© 2025 Converify. Campaigns for the win.</p>
        </div>
      </div>
    </footer>
  );
}