import { useState } from 'react';
import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { CategoryStrip } from './sections/CategoryStrip';
import { ServicesSection } from './sections/ServicesSection';
import { ValueSection } from './sections/ValueSection';
import { ChannelsSection } from './sections/ChannelsSection';
import { BottomCtaSection } from './sections/BottomCtaSection';
import { Footer } from './sections/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />
      <div className="page-noise" />

      <main className="page-frame" id="top">
        <Navbar />
        <HeroSection />
        <CategoryStrip active={activeCategory} onSelect={setActiveCategory} />
        <ServicesSection activeCategory={activeCategory} />
        <BottomCtaSection />
        <ChannelsSection />
        <ValueSection />
        <Footer />
      </main>
    </div>
  );
}
