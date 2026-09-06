import Header from '../src/components/layout/Header';
import HeroSection from '../src/components/landing/HeroSection';
import ValueProps from '../src/components/landing/ValueProps';
import PackagesSection from '../src/components/landing/PackagesSection';
import ALaCartaSection from '../src/components/landing/ALaCartaSection';
import ProductsSection from '../src/components/landing/ProductsSection';
import MuebleriaTeaser from '../src/components/landing/MuebleriaTeaser';
import BenefitsSection from '../src/components/landing/BenefitsSection';
import Segments from '../src/components/landing/Segments';
import HowItWorks from '../src/components/landing/HowItWorks';
import ContactSection from '../src/components/landing/ContactSection';
import Footer from '../src/components/layout/Footer';
import WhatsAppButton from '../src/components/layout/WhatsAppButton';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="bg-orb w-96 h-96 bg-primary/15 top-0 left-0 animate-float"></div>
      <div className="bg-orb w-96 h-96 bg-tertiary/15 bottom-0 right-0 animate-float-delayed"></div>
      <div className="bg-orb w-72 h-72 bg-aqua-deep/20 top-1/2 left-1/4 animate-float"></div>

      <Header />
      <main>
        <HeroSection />
        <ValueProps />
        <PackagesSection />
        <ALaCartaSection />
        <ProductsSection />
        <MuebleriaTeaser />
        <BenefitsSection />
        <Segments />
        <HowItWorks />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}