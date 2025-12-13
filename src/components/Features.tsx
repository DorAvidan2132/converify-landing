import { FileText, Activity, Users, BarChart3, Zap, Target } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: FileText,
    title: 'Template Creation & Bulk Sends',
    subtitle: 'Craft & Blast Templates – Unlimited',
    benefits: [
      'Simple UI to create templates (text, media, buttons)—no complexity',
      'Send to your full contact list in one go—bulk scale without limits',
      'Hit 98% opens: Where email fails, WhatsApp dominates'
    ],
    cta: 'Create My First Template',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Activity,
    title: 'Send History & Status Tracking',
    subtitle: 'Monitor Every Send',
    benefits: [
      'Delivery status tracking for all template sends',
      'Full send history with easy filters and search',
      'Track message delivery and status updates'
    ],
    cta: 'View Send History',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Agency Workspaces',
    subtitle: 'Client Campaigns, Chaos-Free',
    benefits: [
      'Dedicated spaces per client: Bulk sends isolated, access controlled',
      'Manage multiple numbers—one workspace at a time',
      'Scale bulk ops: Add numbers, multiply revenue'
    ],
    cta: 'Create Agency Workspace',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: BarChart3,
    title: 'Template Performance Tracking',
    subtitle: 'Insights Into Your Sends',
    benefits: [
      'Track template send metrics and delivery rates',
      'Review message performance across campaigns',
      'Monitor send history and recipient statuses'
    ],
    cta: 'View Send Analytics',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'API Integration',
    subtitle: 'Automate Your Campaigns',
    benefits: [
      'Full API access for custom workflows and automation',
      'White-label capabilities for agency branding',
      'Integrate with your existing CRM and tools'
    ],
    cta: 'Explore API Docs',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'Compliance & Security',
    subtitle: 'Official Meta API – No Bans',
    benefits: [
      'Meta-approved templates ensure compliance',
      'Secure messaging infrastructure',
      'Enterprise-grade reliability and uptime'
    ],
    cta: 'Learn About Security',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

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
    quote: "Our bulk WhatsApp campaigns with Converify crushed email—4x engagement!",
    author: "E-com Marketer",
    date: "Oct 2025",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export function Features() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,211,102,0.03),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#25D366]/10 to-emerald-500/10 rounded-full border border-[#25D366]/30">
            <span className="text-sm text-[#25D366]">Powerful Features</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Core Tools for WhatsApp Campaign Wins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Email had lists and sends. WhatsApp has 98% engagement. 
            <span className="text-[#25D366]"> Converify delivers both, stupid simple.</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/80 p-8 rounded-3xl border border-gray-200 shadow-xl group-hover:shadow-2xl transition-all">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-md opacity-50`}></div>
                  <div className={`relative p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg inline-flex`}>
                    <feature.icon className="size-8 text-white" />
                  </div>
                </div>

                <h3 className="mb-2">{feature.title}</h3>
                <p className={`mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.subtitle}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0`}></span>
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg hover:shadow-xl transition-all`}
                >
                  {feature.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PLG Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block backdrop-blur-xl bg-gradient-to-r from-[#25D366]/10 to-purple-500/10 px-12 py-6 rounded-3xl border border-gray-200">
            <p className="text-2xl">
              <span className="bg-gradient-to-r from-[#25D366] to-emerald-600 bg-clip-text text-transparent">Simple:</span>
              <span className="text-gray-700"> Campaigns that scale, opens that stick.</span>
            </p>
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xl mb-6 text-gray-700">Bulk sends that matter—your way.</p>
          <a href="https://app.converify.com/auth/signup" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-xl overflow-hidden shadow-2xl shadow-[#25D366]/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Launch a Campaign Now</span>
            </motion.button>
          </a>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            What Our Users Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative backdrop-blur-xl bg-white/90 p-6 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#25D366]/30"
                    />
                    <div>
                      <p className="text-sm text-gray-600">{testimonial.author}</p>
                      <p className="text-xs text-gray-400">{testimonial.date}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700 mb-2">"{testimonial.quote}"</p>
                  {testimonial.metric && (
                    <p className="text-[#25D366]">{testimonial.metric}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}