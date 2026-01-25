import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { VisionSection } from "@/components/VisionSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { EventHighlightsSection } from "@/components/EventHighlightsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <VisionSection />
      <SectorsSection />
      <ObjectivesSection />
      <EventHighlightsSection />
      <SpeakersSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
