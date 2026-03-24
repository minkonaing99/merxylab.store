import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { CategoryStrip } from './sections/CategoryStrip';
import { ServicesSection } from './sections/ServicesSection';
import { ValueSection } from './sections/ValueSection';
import { ChannelsSection } from './sections/ChannelsSection';
import { BottomCtaSection } from './sections/BottomCtaSection';
import { Footer } from './sections/Footer';
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
