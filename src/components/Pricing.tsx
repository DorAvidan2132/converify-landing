import { Check, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Pricing() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,211,102,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#25D366]/10 to-purple-500/10 rounded-full border border-[#25D366]/30">
            <Zap className="size-4 text-[#25D366]" />
            <span className="text-sm text-[#25D366]">Simple Pricing</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Campaign Pricing: Simple as Your Blasts
          </h2>
          <p className="text-xl text-gray-600">
            Pay for power, not promises. <span className="text-[#25D366]">Bulk unlimited.</span>
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] via-emerald-500 to-[#20BD5A] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            {/* Card */}
            <div className="relative backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-[#25D366]/30">
              {/* Header */}
              <div className="relative bg-gradient-to-br from-[#25D366] via-emerald-500 to-[#20BD5A] px-12 py-10 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Sparkles className="size-5 text-white" />
                    <h3 className="text-white">Campaign Starter</h3>
                  </div>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-7xl text-white">$20</span>
                    <span className="text-3xl text-white/80 mb-2">/mo</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-12">
                <p className="text-gray-700 text-lg text-center mb-8 leading-relaxed">
                  Includes 1 WhatsApp Business account:
                  <span className="text-[#25D366]"> Unlimited bulk sends</span>, templates,
                  tracking, analytics, API.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    '98% Open Power (Meta-Approved)',
                    '7-Day Free Trial',
                    'Monthly Billing, No Lock-In',
                    'Unlimited Bulk Sends',
                    'Full Analytics & Tracking',
                    'API Access',
                    'Agency Workspaces',
                    'White-Label Ready'
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-transparent hover:from-[#25D366]/5 transition-all group/item"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#25D366] to-emerald-500 flex items-center justify-center shadow-lg">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Add-on Pricing */}
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/5 to-purple-500/5 rounded-2xl blur-xl"></div>
                  <div className="relative backdrop-blur-xl bg-gradient-to-r from-[#25D366]/10 to-emerald-500/10 p-6 rounded-2xl border-l-4 border-[#25D366]">
                    <div className="flex items-start gap-3">
                      <Zap className="size-6 text-[#25D366] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="mb-2">
                          <strong className="text-gray-900">Additional Workspaces:</strong>
                          <span className="text-2xl text-[#25D366] ml-2">+$9</span>
                          <span className="text-gray-600">/month each</span>
                        </p>
                        <p className="text-gray-600 text-sm mb-1">
                          (Each workspace supports 1 WhatsApp account)
                        </p>
                        <p className="text-gray-600 text-sm">
                          e.g., 10 client accounts = $20 + 9×$9 =
                          <span className="text-[#25D366] font-semibold"> $101/mo</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center italic text-gray-600 mb-8">
                  Affordable upgrade from email tools. Blast away.
                </p>

                {/* CTA Button */}
                <a href="https://app.converify.com/auth/signup" target="_blank" rel="noopener noreferrer" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full relative px-8 py-5 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-lg overflow-hidden shadow-2xl shadow-[#25D366]/40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Start Campaigns at $20/Mo</span>
                      <Sparkles className="size-5" />
                    </span>
                  </motion.button>
                </a>

                <a
                  href="#faq"
                  className="block text-center text-gray-600 hover:text-[#25D366] transition-colors mt-6"
                >
                  Why WhatsApp &gt; Email? (Quick Read)
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Common Question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-xl bg-white/80 p-8 rounded-3xl border border-gray-200 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="size-6 text-[#25D366]" />
              <p className="text-2xl text-gray-900">
                <strong>Common Q:</strong> Bulk limits?
              </p>
            </div>
            <p className="text-xl text-gray-700">
              <strong className="bg-gradient-to-r from-[#25D366] to-emerald-600 bg-clip-text text-transparent">
                None
              </strong>
              —send like email, win like WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}