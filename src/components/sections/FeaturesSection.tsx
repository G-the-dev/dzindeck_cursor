"use client";

import { useState, useEffect, useCallback } from "react";

// Each feature has its own visual from the assets folder
const FEATURES = [
  {
    id: 1,
    title: "Smart Event Discovery",
    description: "Find the right workshops, meetups, designathons, and tech events in seconds",
    visual: "/assets/Type=Visual 1.svg",
  },
  {
    id: 2,
    title: "Real-Time Verified Listings",
    description: "Every listing is screened so you don't waste time on mid, low-value events",
    visual: "/assets/Type=Visual 2.svg",
  },
  {
    id: 3,
    title: "One-Click Registrations",
    description: "Skip the PDFs and random links, register instantly in one smooth flow.",
    visual: "/assets/Type=Visual 3.svg",
  },
  {
    id: 4,
    title: "Smart Reminders & Alerts",
    description: "Bookmark events you like, we'll notify you when they're starting, filling up, or when similar ones go live",
    visual: "/assets/Type=Visual 4.svg",
  },
];

const AUTO_ADVANCE_DURATION = 3500;

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    let startTime: number | null = null;
    let rafId: number;

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const pct = Math.min((elapsed / AUTO_ADVANCE_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed < AUTO_ADVANCE_DURATION) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    const timer = setTimeout(goToNext, AUTO_ADVANCE_DURATION);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [activeIndex, goToNext]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] mb-[16px]">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-[#F1F2F4] leading-[1.1] tracking-[-0.04em] text-center text-balance max-w-[860px]">
            A Smarter Way to Find, Join, and Track Events
          </h2>
          <p className="text-[17px] font-normal text-[#8A8D94] leading-[1.55] text-center max-w-[560px]">
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

        {/* Main content — Left visual + Right feature list */}
        <div className="flex flex-col lg:flex-row items-stretch gap-[48px]">

          {/* Left — Feature Visual */}
          <div
            className="relative rounded-[28px] overflow-hidden flex-shrink-0 w-full lg:w-[520px] xl:w-[580px] flex items-center justify-center"
            style={{
              background: '#141416',
              border: '1.2px solid #242528',
              minHeight: '380px',
            }}
          >
            <img
              key={FEATURES[activeIndex].id}
              src={FEATURES[activeIndex].visual}
              alt={FEATURES[activeIndex].title}
              className="w-full h-full object-contain transition-opacity duration-500"
              style={{ padding: '32px', maxHeight: '440px' }}
            />
          </div>

          {/* Right — Feature list with animated left border indicator */}
          <div className="flex flex-col flex-1 justify-center divide-y divide-[#242528]">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={feature.id}
                  className="relative flex flex-col gap-[8px] py-[24px] pl-[24px] pr-[8px] cursor-pointer transition-all duration-200"
                  style={{
                    borderLeft: `2px solid ${isActive ? '#F1F2F4' : '#242528'}`,
                  }}
                  onClick={() => handleSelect(index)}
                >
                  {/* Animated progress bar on left border */}
                  {isActive && (
                    <div
                      className="absolute left-[-2px] top-0 w-[2px] bg-[#F1F2F4]"
                      style={{
                        height: `${progress}%`,
                        transition: 'height 0.05s linear',
                      }}
                    />
                  )}

                  <h3
                    className="text-[24px] md:text-[28px] font-medium leading-[1.2] tracking-[-0.02em] transition-colors duration-200"
                    style={{ color: isActive ? '#F1F2F4' : '#56585E' }}
                  >
                    {feature.title}
                  </h3>
                  {isActive && (
                    <p className="text-[15px] font-normal text-[#8A8D94] leading-[1.55] max-w-[400px]">
                      {feature.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
