import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Scarcity from './components/Scarcity';
import About from './components/About';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimationsInit from './utils/Animations';

function App() {
  return (
    <main className="w-full overflow-x-hidden max-w-[100vw] font-['Inter',sans-serif] text-[#2E2E2E]">
      <AnimationsInit />
      <Hero />
      <Features />
      <SocialProof />
      <Scarcity />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
