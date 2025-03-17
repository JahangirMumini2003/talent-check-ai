
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceOverview from "@/components/ServiceOverview";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href?.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServiceOverview />
        <HowItWorks />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
