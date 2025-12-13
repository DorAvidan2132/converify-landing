import { ChevronDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Do I need a new WhatsApp number or can I use my existing one?",
    answer: "You can use your existing WhatsApp Business number! That's one of Converify's biggest advantages—no need to create a new number or change your setup. Just connect your current WhatsApp Business account and start sending campaigns. Your messages appear in the same inbox you already use on the WhatsApp Business app."
  },
  {
    question: "Can I still use the WhatsApp Business app on mobile and desktop?",
    answer: "Yes, absolutely! You can continue using the official WhatsApp Business app by Meta on both mobile and desktop as normal. Converify works alongside your existing setup without any disruption. All your conversations and campaigns will sync perfectly."
  },
  {
    question: "How's WhatsApp different from email marketing?",
    answer: "98% open rates (Meta) vs. email's ~42%—plus bulk sends to lists for campaigns that feel direct. WhatsApp messages land where people actually check daily, making your campaigns impossible to ignore."
  },
  {
    question: "Is there a payment per message?",
    answer: "From Converify? No—your subscription covers unlimited sending. However, Meta (WhatsApp) charges per conversation, typically $0.001-$0.02 per message depending on the country and message type (marketing, utility, authentication). These are Meta's standard rates, paid directly to them."
  },
  {
    question: "Is there a limit to how many messages I can send?",
    answer: "Meta wants to keep WhatsApp spam-free, so they implement daily limits based on your messaging quality and unique contact numbers. Accounts typically start at 250 conversations per 24-hour period and can scale up based on your sending behavior and engagement rates. These are Meta's limits, not Converify's—we support unlimited sending on our end."
  },
  {
    question: "Can I send bulk messages without bans?",
    answer: "Yes—official Meta API ensures compliance. Use approved templates for clean blasts and you're protected. Converify helps you stay within Meta's guidelines automatically."
  },
  {
    question: "How do I create and send templates?",
    answer: "Simple UI: Build with text/media/buttons, then send to your contact list in bulk. Templates get submitted to Meta for approval (usually within 24 hours), then you can blast to your entire audience."
  },
  {
    question: "What does the $20 plan cover for bulk sends?",
    answer: "Everything: Unlimited templates/sends to lists, full tracking, analytics, workspaces—one number included. Plus API access, automation capabilities, and integration with your CRM."
  },
  {
    question: "Agencies: How do I run client campaigns?",
    answer: "Isolated workspaces per client—bulk sends stay separate. Add numbers cheap ($9 each), white-label for pro vibes. Manage multiple client campaigns from one dashboard."
  },
  {
    question: "Need campaign support?",
    answer: "In-app chat for tweaks, email for deep dives. Users say: \"Faster than tweaking email lists.\" Our team is here to help you maximize your campaign performance."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,211,102,0.03),transparent_70%)]"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#25D366]/10 to-emerald-500/10 rounded-full border border-[#25D366]/30">
            <Sparkles className="size-4 text-[#25D366]" />
            <span className="text-sm text-[#25D366]">FAQ</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Campaign Quick-Starts: Your Questions Answered
          </h2>
          <p className="text-xl text-gray-600">
            Bulk sends got you? Sort it here. 
            <span className="text-[#25D366]"> (Pro tip: 98% opens await.)</span>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 transition-opacity ${
                openIndex === index ? 'opacity-100' : 'group-hover:opacity-50'
              }`}></div>
              
              {/* Card */}
              <div className={`relative backdrop-blur-xl bg-white/90 rounded-2xl border transition-all ${
                openIndex === index 
                  ? 'border-[#25D366] shadow-xl shadow-[#25D366]/10' 
                  : 'border-gray-200 hover:border-[#25D366]/50'
              }`}>
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-all"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`pr-4 transition-colors ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-[#25D366] to-emerald-600 bg-clip-text text-transparent' 
                      : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className={`p-2 rounded-xl transition-all ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-[#25D366] to-emerald-500' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <ChevronDown className={`size-5 transition-colors ${
                        openIndex === index ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-xl mb-6 text-gray-700">More deets?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl text-white text-lg overflow-hidden shadow-2xl shadow-[#25D366]/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#20BD5A] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              Chat Campaign Ideas
              <Sparkles className="size-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
