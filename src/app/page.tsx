import { BackgroundPattern } from "@/components/sections/BackgroundPattern";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { VideoContainer } from "@/components/sections/VideoContainer";

export default function WishlistPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center bg-page overflow-hidden">
      {/* Background pattern - absolute, behind content */}
      <BackgroundPattern />

      {/* Content - responsive container: 412→16px/380px, 768→32px/704px, 1440→64px/1312px, 1920→64px/1792px */}
      <div className="relative z-20 w-full flex flex-col items-center gap-[40px] md:gap-[60px] lg:gap-[80px] px-4 py-10 md:px-8 md:py-[32px] lg:px-16 lg:py-[64px] xl:px-16 xl:pt-[40px] xl:pb-20 max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1792px] mx-auto">
        {/* Navbar */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Hero Content */}
        <section className="w-full flex flex-col items-center">
          <Hero />
        </section>

        {/* Video Container */}
        <section className="w-full">
          <VideoContainer />
        </section>
      </div>
    </main>
  );
}
