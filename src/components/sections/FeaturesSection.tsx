"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const FEATURES = [
  {
    id: 1,
    title: "Smart Event Discovery",
    description: "Find the right workshops, meetups, designathons, and tech events in seconds",
    visual: "/assets/SVGs/Feature-images.svg",
  },
  {
    id: 2,
    title: "Real-Time Verified Listings",
    description: "Every listing is screened so you don't waste time on mid, low-value events",
    visual: "/assets/SVGs/Feature-images.svg",
  },
  {
    id: 3,
    title: "One-Click Registrations",
    description: "Skip the PDFs and random links, register instantly in one smooth flow.",
    visual: "/assets/SVGs/Feature-images.svg",
  },
  {
    id: 4,
    title: "Smart Reminders & Alerts",
    description: "Bookmark events you like, we'll notify you when they're starting, filling up, or when similar ones go live",
    visual: "/assets/SVGs/Feature-images.svg",
  },
];

const AUTO_ADVANCE_DURATION = 1800; // 1.8 seconds per feature
const FILL_ANIMATION_DURATION = 1800; // 1.8 seconds fill animation (fills as timer progresses)

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextFeature = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / FILL_ANIMATION_DURATION) * 100, 100);
      
      setProgress(newProgress);

      if (elapsed < FILL_ANIMATION_DURATION) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Auto-advance timer
    const advanceTimer = setTimeout(() => {
      nextFeature();
    }, AUTO_ADVANCE_DURATION);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(advanceTimer);
    };
  }, [activeIndex, nextFeature]);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Header Container */}
        <div className="flex flex-col items-center gap-[32px] mb-[80px]">
          {/* Header Text Container */}
          <div className="flex flex-col items-center gap-[20px]">
            <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.833%] text-center" style={{ fontFamily: 'Figtree, sans-serif' }}>
              A Smarter Way to Find, Join, and Track Events
            </h2>
            <p className="text-[20px] font-medium text-[#8A8D94] leading-[1.4] text-center max-w-[812px]" style={{ fontFamily: 'Figtree, sans-serif' }}>
              Discover events that fit your goals, register fast, and stay updated, all in one place
            </p>
          </div>
          <Button 
            variant="primary" 
            size="sm"
            className="rounded-[16px] px-[16px] py-[12px] bg-[#F1F2F4] text-[#0E0E10] text-[16px] font-semibold border border-[#242528]"
          >
            Explore Events
          </Button>
        </div>

        {/* Content Container - Side by Side */}
        <div className="flex flex-col lg:flex-row items-center gap-[80px]">
          {/* Feature Image - Left Side */}
          <div 
            className="relative rounded-[32px] overflow-hidden flex-shrink-0 order-2 lg:order-1"
            style={{
              width: '694px',
              height: '520px',
              background: '#141416'
            }}
          >
            <Image
              src={FEATURES[activeIndex].visual}
              alt={FEATURES[activeIndex].title}
              fill
              className="object-contain transition-opacity duration-300"
              style={{ padding: '24px' }}
            />
          </div>

          {/* Feature List - Right Side */}
          <div className="flex flex-col order-1 lg:order-2">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div key={feature.id} className="relative">
                  {/* Horizontal separator line - full width */}
                  {index !== 0 && (
                    <div 
                      className="absolute top-0 left-0 right-0 h-[1px] bg-[#242528]"
                    />
                  )}
                  <div
                    className="relative flex flex-col justify-center gap-[12px] py-[16px] px-[24px] cursor-pointer transition-all duration-300"
                    style={{
                      borderLeft: '2px solid',
                      borderLeftColor: isActive ? '#F1F2F4' : '#242528',
                    }}
                    onClick={() => handleFeatureClick(index)}
                  >
                    {/* Progress Fill Line for Active Feature - grows from top */}
                    {isActive && (
                      <div 
                        className="absolute left-[-2px] top-0 w-[2px] bg-[#F1F2F4]"
                        style={{
                          height: `${progress}%`,
                          maxHeight: '100%'
                        }}
                      />
                    )}
                    <h3 
                      className="text-[32px] font-medium leading-[1.1875] tracking-[-0.625%]"
                      style={{ 
                        fontFamily: 'Figtree, sans-serif',
                        color: '#F1F2F4'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-[16px] font-normal leading-[1.5] max-w-[418px]"
                      style={{ 
                        fontFamily: 'Figtree, sans-serif',
                        color: '#8A8D94'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
