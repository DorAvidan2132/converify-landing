import { Briefcase, TrendingUp, DollarSign, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function ForAgencies() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,211,102,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.08),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#25D366]/10 to-purple-500/10 rounded-full border border-[#25D366]/30">
            <Briefcase className="size-4 text-[#25D366]" />
            <span className="text-sm text-[#25D366]">For Agencies</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Agencies: Deliver WhatsApp Campaigns
            <br />
            <span className="bg-gradient-to-r from-[#25D366] to-emerald-600 bg-clip-text text-transparent">
              That Win Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Email was your bread-and-butter. WhatsApp's the upgrade—bulk blasts your 
            SMB clients crave, with <span className="text-[#25D366]">98% opens to prove ROI</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                icon: Briefcase,
                title: 'Client Campaigns',
                description: 'Workspaces for isolated bulk sends—manage lists per client.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Award,
                title: 'White-Label Wins',
                description: 'Brand the tool; API for custom flows.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: DollarSign,
                title: 'Scale Revenue',
                description: '$20 base + $9/add\'l number—upsell campaigns effortlessly.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: TrendingUp,
                title: 'Close More Biz',
                description: '"WhatsApp marketing included" = instant agency edge.',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Card */}
                <div className="relative backdrop-blur-xl bg-white/80 p-6 rounded-2xl border border-gray-200 shadow-lg group-hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`relative p-3 bg-gradient-to-br ${benefit.gradient} rounded-xl shadow-lg`}>
                        <benefit.icon className="size-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-xl text-white overflow-hidden shadow-2xl shadow-[#25D366]/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Book Agency Demo
                  <Sparkles className="size-5" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 backdrop-blur-xl bg-white/80 border-2 border-gray-200 rounded-xl text-gray-900 hover:border-[#25D366] transition-all shadow-lg"
              >
                Or Trial Bulk Sends Free
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Dashboard Container */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Agency Dashboard"
                  className="w-full h-auto opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Dashboard Overlay Elements */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4">
                  {/* Client Card 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="backdrop-blur-xl bg-white/95 p-5 rounded-2xl border-l-4 border-[#25D366] shadow-xl"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Client 1: Retail Store</p>
                        <p className="text-[#25D366] flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                          Promo Campaign Active
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl bg-gradient-to-r from-[#25D366] to-emerald-600 bg-clip-text text-transparent">98%</p>
                        <p className="text-sm text-gray-600">Open Rate</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Client Card 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="backdrop-blur-xl bg-white/95 p-5 rounded-2xl border-l-4 border-purple-500 shadow-xl"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Client 2: Restaurant</p>
                        <p className="text-purple-500 flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          Weekly Blast Scheduled
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">1,250</p>
                        <p className="text-sm text-gray-600">Contacts</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Client Card 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="backdrop-blur-xl bg-white/95 p-5 rounded-2xl border-l-4 border-blue-500 shadow-xl"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Client 3: E-commerce</p>
                        <p className="text-blue-500 flex items-center gap-2">
                          <TrendingUp className="size-4" />
                          +47% Conversion
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">$12K</p>
                        <p className="text-sm text-gray-600">Revenue</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 mt-6 italic"
            >
              Market where it counts: <span className="text-[#25D366]">WhatsApp today.</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
