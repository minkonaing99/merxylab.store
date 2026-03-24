import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryStrip } from './components/CategoryStrip';
import { ServicesSection } from './components/ServicesSection';
import { ValueSection } from './components/ValueSection';
import { ChannelsSection } from './components/ChannelsSection';
import { BottomCtaSection } from './components/BottomCtaSection';
import { Footer } from './components/Footer';
import TargetCursor from './components/TargetCursor';

export default function App() {
  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />
      <div className="page-noise" />
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={false}
        parallaxOn
        hoverDuration={0.2}
      />

      <main className="page-frame" id="top">
        <Navbar />
        <HeroSection />
        <CategoryStrip />
        <ServicesSection />
        <BottomCtaSection />
        <ChannelsSection />
        <ValueSection />
        <Footer />
      </main>
    </div>
  );
}
