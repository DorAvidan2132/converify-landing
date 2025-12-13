import { ArrowRight, Mail, MessageCircle, TrendingDown, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSolution() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,211,102,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-red-50 to-green-50 rounded-full border border-gray-200">
            <span className="text-sm">The Evolution</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl px-4">
            Why WhatsApp Marketing?
            <br />
            <span className="bg-gradient-to-r from-[#25D366] to-[#20BD5A] bg-clip-text text-transparent">
              Results That Email Can't Match
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative backdrop-blur-xl bg-white/80 p-10 rounded-3xl border border-red-200 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg">
                  <Mail className="size-8 text-white" />
                </div>
                <div>
                  <h3 className="text-red-700">Email Marketing</h3>
                  <p className="text-gray-600">The Old Guard</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: TrendingDown, text: '42% average open rates—most ignored', value: '42%' },
                  { icon: TrendingDown, text: 'Spam folders kill visibility', value: '60%' },
                  { icon: TrendingDown, text: 'Declining engagement rates', value: '-15%' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="size-5 text-red-500" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                    <span className="text-2xl text-red-600">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/30 to-emerald-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative backdrop-blur-xl bg-white/90 p-10 rounded-3xl border border-[#25D366]/30 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-[#25D366] to-emerald-500 rounded-2xl shadow-lg shadow-[#25D366]/50">
                  <MessageCircle className="size-8 text-white" />
                </div>
                <div>
                  <h3 className="text-[#25D366]">WhatsApp Marketing</h3>
                  <p className="text-gray-600">The Future is Here</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, text: '98% open rates—actually read', value: '98%', highlight: true },
                  { icon: TrendingUp, text: 'Direct to most-checked app', value: '+200%' },
                  { icon: TrendingUp, text: 'Growing engagement daily', value: '+45%' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center justify-between p-4 ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-[#25D366]/20 to-emerald-500/20 border-2 border-[#25D366]' 
                        : 'bg-green-50 border border-green-100'
                    } rounded-xl relative overflow-hidden group/item`}
                  >
                    {item.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/10 to-[#25D366]/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000"></div>
                    )}
                    <div className="flex items-center gap-3 relative z-10">
                      <item.icon className="size-5 text-[#25D366]" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                    <span className="text-2xl text-[#25D366] relative z-10">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Arrow & Description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-[#25D366]/10 to-emerald-500/10 rounded-full border border-[#25D366]/30">
            <ArrowRight className="size-8 text-[#25D366]" />
            <span className="text-xl">Make the Switch</span>
            <ArrowRight className="size-8 text-[#25D366]" />
          </div>
        </motion.div>

        {/* Converify Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="backdrop-blur-xl bg-white/80 p-12 rounded-3xl border border-gray-200 shadow-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="size-6 text-[#25D366]" />
              <h3 className="bg-gradient-to-r from-[#25D366] to-emerald-600 bg-clip-text text-transparent">
                Converify: Bulk WhatsApp, Simple & Powerful
              </h3>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
              Professional WhatsApp marketing platform built on the official Meta API. Create approved templates and send bulk campaigns that your customers actually open and engage with.
            </p>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              <strong>Key capabilities:</strong> Send bulk campaigns to unlimited contacts, automate your workflows with our API, track delivery and engagement in real-time.
              <span className="text-[#25D366]"> Use your existing WhatsApp Business account—no complex setup required.</span>
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <p className="text-lg sm:text-xl mb-6 text-gray-700">Start reaching customers where they're already active.</p>
          <a href="https://app.converify.ai" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-lg font-semibold overflow-hidden shadow-2xl shadow-[#25D366]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial
                <Sparkles className="size-5" />
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}