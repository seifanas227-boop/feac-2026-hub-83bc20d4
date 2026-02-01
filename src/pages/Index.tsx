import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { VisionSection } from "@/components/VisionSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { EventHighlightsSection } from "@/components/EventHighlightsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { GallerySection } from "@/components/GallerySection";
import { SponsorsCarousel } from "@/components/SponsorsCarousel";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WaveDivider } from "@/components/WaveDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <WaveDivider variant="primary" />
      <StatsSection />
      <WaveDivider variant="muted" flip />
      <VisionSection />
      <WaveDivider variant="primary" />
      <SectorsSection />
      <WaveDivider variant="muted" flip />
      <ObjectivesSection />
      <EventHighlightsSection />
      <SpeakersSection />
      <GallerySection />
      <SponsorsCarousel />
      <PartnersSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
