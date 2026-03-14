import { BackgroundPattern } from "@/components/sections/BackgroundPattern";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { VideoSection } from "@/components/sections/VideoSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CitySection } from "@/components/sections/CitySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { HostEventSection } from "@/components/sections/HostEventSection";
import { TopFooter } from "@/components/sections/TopFooter";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center bg-page overflow-hidden">
      {/* Background pattern - absolute, behind content */}
      <BackgroundPattern />

      {/* Content - responsive container */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Video Section */}
        <VideoSection />

        {/* Brands/Partners Section */}
        <BrandsSection />

        {/* Events Section */}
        <EventsSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Categories Section */}
        <CategoriesSection />

        {/* Stats Section */}
        <StatsSection />

        {/* City Cards Section */}
        <CitySection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Host Event CTA Section */}
        <HostEventSection />

        {/* Top Footer - Newsletter */}
        <TopFooter />

        {/* Main Footer */}
        <Footer />
      </div>
    </main>
  );
}
