import { Upload, FileEdit, Rocket, Play } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: 1,
    icon: Upload,
    title: 'Connect & Prep',
    description: 'Link your WhatsApp Business number to a workspace. Get your contact list ready.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    number: 2,
    icon: FileEdit,
    title: 'Create Templates',
    description: 'Build simple templates in the UI—add text, media, buttons.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Send & Refine',
    description: 'Bulk blast to contacts; track statuses for next-level tweaks.',
    gradient: 'from-[#25D366] to-emerald-500'
  }
];

export function HowItWorks() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,211,102,0.05),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#25D366]/10 to-purple-500/10 rounded-full border border-[#25D366]/30">
            <span className="text-sm text-[#25D366]">3 Simple Steps</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Bulk WhatsApp Campaigns: 3 Steps to 98% Engagement
          </h2>
          <p className="text-xl text-gray-600">
            Email setup took days. This? 
            <span className="text-[#25D366]"> Minutes to marketing gold.</span>
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative grid md:grid-cols-3 gap-8 mb-24">
          {/* Connection Line for Desktop */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-[#25D366] opacity-20"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Card */}
                <div className="relative backdrop-blur-xl bg-white/90 p-8 rounded-3xl border border-gray-200 shadow-xl group-hover:shadow-2xl transition-all text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-${step.gradient}/50 transform rotate-45 group-hover:rotate-[405deg] transition-transform duration-500`}>
                      <span className="text-2xl text-white transform -rotate-45 group-hover:-rotate-[405deg] transition-transform duration-500">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-lg opacity-50`}></div>
                      <div className={`relative p-5 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg`}>
                        <step.icon className="size-10 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Video Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            {/* Video Container */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
              <img
                src="https://images.unsplash.com/photo-1602509317877-1036c728270d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                alt="Campaign Demo"
                className="w-full h-full object-cover opacity-50"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Play Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="relative">
                  {/* Pulsing Rings */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[#25D366] rounded-full"
                  ></motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute inset-0 bg-[#25D366] rounded-full"
                  ></motion.div>
                  
                  {/* Button */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-[#25D366] to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/50 border-4 border-white/20">
                    <Play className="size-10 text-white ml-1" />
                  </div>
                </div>
              </motion.div>
              
              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl border border-white/20"
                >
                  <p className="text-white text-xl mb-2">See 98% Opens in Action</p>
                  <p className="text-gray-300 text-sm">Watch how to create and send a campaign in 20 seconds</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl mb-6 text-gray-700">
            Campaigns that matter, delivered today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-xl overflow-hidden shadow-2xl shadow-[#25D366]/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">Start Your First Blast Free</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
