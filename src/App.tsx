import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { ForAgencies } from './components/ForAgencies';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <ProblemSolution />
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="agencies">
          <ForAgencies />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
