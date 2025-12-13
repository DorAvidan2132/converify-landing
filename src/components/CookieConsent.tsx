import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative backdrop-blur-xl bg-gray-950/95 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-[#25D366] to-emerald-500 rounded-xl">
                    <Cookie className="size-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">We use cookies</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                    By clicking "Accept", you consent to our use of cookies.{' '}
                    <a href="#privacy-policy" className="text-[#25D366] hover:text-emerald-400 transition-colors underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={declineCookies}
                    className="px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all text-sm font-medium"
                  >
                    Decline
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-xl text-white hover:opacity-90 transition-opacity text-sm font-semibold"
                  >
                    Accept Cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
