"use client";

import { useState, useEffect, useCallback } from "react";
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

const AUTO_ADVANCE_DURATION = 3000;

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
      const newProgress = Math.min((elapsed / AUTO_ADVANCE_DURATION) * 100, 100);
      setProgress(newProgress);
      if (elapsed < AUTO_ADVANCE_DURATION) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    const advanceTimer = setTimeout(nextFeature, AUTO_ADVANCE_DURATION);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(advanceTimer);
    };
  }, [activeIndex, nextFeature]);

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[20px] mb-[24px]">
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.15] tracking-[-0.4px] text-center text-balance">
            A Smarter Way to Find, Join, and Track Events
          </h2>
          <p className="text-[18px] font-normal text-[#8A8D94] leading-[1.5] text-center max-w-[640px]">
            Discover events that fit your goals, register fast, and stay updated, all in one place
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-[64px]">
          <button
            className="flex items-center justify-center px-[24px] py-[12px] rounded-[14px] text-[15px] font-semibold text-[#0E0E10] bg-[#F1F2F4]"
            style={{ border: '1px solid #242528' }}
          >
            Explore Events
          </button>
        </div>

        {/* Content — Left image + Right feature list */}
        <div className="flex flex-col lg:flex-row items-start gap-[64px]">
          {/* Feature Image — Left */}
          <div
            className="relative rounded-[28px] overflow-hidden flex-shrink-0 w-full lg:w-[500px] xl:w-[580px]"
            style={{
              background: '#141416',
              border: '1.2px solid #242528',
              aspectRatio: '4/3',
            }}
          >
            <Image
              src={FEATURES[activeIndex].visual}
              alt={FEATURES[activeIndex].title}
              fill
              className="object-contain transition-opacity duration-500"
              style={{ padding: '32px' }}
            />
          </div>

          {/* Feature List — Right */}
          <div className="flex flex-col flex-1 self-center">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={feature.id} className="relative">
                  {/* Top divider */}
                  {index === 0 && (
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#242528]" />
                  )}

                  <div
                    className="relative flex flex-col justify-center gap-[10px] py-[20px] pl-[24px] pr-[8px] cursor-pointer transition-all duration-300"
                    style={{
                      borderLeft: '2px solid',
                      borderLeftColor: isActive ? '#F1F2F4' : '#242528',
                    }}
                    onClick={() => { setActiveIndex(index); setProgress(0); }}
                  >
                    {/* Progress fill on left border */}
                    {isActive && (
                      <div
                        className="absolute left-[-2px] top-0 w-[2px] bg-[#F1F2F4]"
                        style={{ height: `${progress}%`, maxHeight: '100%' }}
                      />
                    )}

                    <h3 className="text-[28px] font-medium text-[#F1F2F4] leading-[1.2] tracking-[-0.02em]">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] font-normal text-[#8A8D94] leading-[1.5] max-w-[400px]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom divider */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#242528]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
