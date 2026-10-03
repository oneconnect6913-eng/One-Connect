/**
 * ONE CONNECT - Corporate Contracting & Project Execution Platform
 * Tagline: "One Call. Every Work. One Complete Solution."
 * Positioning: "Your Complete Project Partner."
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroTrustStrip } from './components/HeroTrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { MajorConversionSection } from './components/MajorConversionSection';
import { ProjectTypesSection } from './components/ProjectTypesSection';
import { WhyOneConnect } from './components/WhyOneConnect';
import { HowItWorks } from './components/HowItWorks';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { LeadGenSection } from './components/LeadGenSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { LegalModal } from './components/LegalModals';
import { ServiceItem } from './data/servicesData';
import { ProjectItem } from './data/projectsData';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Form pre-fill states
  const [formPreselectedService, setFormPreselectedService] = useState<string>('');
  const [formPreselectedArea, setFormPreselectedArea] = useState<string>('');
  const [formPreselectedType, setFormPreselectedType] = useState<string>('');

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setFormPreselectedService(serviceName);
    scrollToQuote();
  };

  const handleSelectAreaForQuote = (area: string) => {
    setFormPreselectedArea(area);
    scrollToQuote();
  };

  const handleSelectTypeForQuote = (type: string) => {
    setFormPreselectedType(type);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenQuote={scrollToQuote}
        activeSection="home"
      />

      {/* Main Homepage Flow (strictly matching requested order) */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={scrollToQuote} />

        {/* 2. Trust Highlights */}
        <HeroTrustStrip />

        {/* 3. Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceForModal(service)}
          onOpenQuoteWithService={handleSelectServiceForQuote}
        />

        {/* 4. Complete Project Section (Major Conversion Section) */}
        <MajorConversionSection onOpenQuote={scrollToQuote} />

        {/* 5. Project Types */}
        <ProjectTypesSection onSelectTypeForQuote={handleSelectTypeForQuote} />

        {/* 6. Why ONE CONNECT */}
        <WhyOneConnect />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Before / After Interactive Slider */}
        <BeforeAfterSlider onOpenQuote={scrollToQuote} />

        {/* 9. Project Portfolio */}
        <ProjectsPortfolio
          onSelectProject={(project) => setSelectedProjectForModal(project)}
          onOpenQuote={scrollToQuote}
        />

        {/* 10. Service Areas */}
        <ServiceAreaSection onSelectAreaForQuote={handleSelectAreaForQuote} />

        {/* 11. About ONE CONNECT */}
        <AboutSection />

        {/* 12. FAQ */}
        <FaqSection />

        {/* 13. Lead Generation / Get Quote Form */}
        <LeadGenSection
          preselectedService={formPreselectedService}
          preselectedArea={formPreselectedArea}
          preselectedType={formPreselectedType}
        />

        {/* 14. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={scrollToQuote}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating WhatsApp and Mobile Fixed Bottom Bar */}
      <FloatingWidgets onOpenQuote={scrollToQuote} />

      {/* Modals */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onSelectForQuote={handleSelectServiceForQuote}
      />

      <ProjectDetailModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
        onOpenQuote={scrollToQuote}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
