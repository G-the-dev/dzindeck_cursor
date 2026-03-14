"use client";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-20 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1792px] mx-auto flex flex-col items-center gap-10">
        {/* Hero Text Container */}
        <div className="flex flex-col items-center gap-6 max-w-[860px]">
          {/* Hero Tagline badge */}
          <div className="inline-flex flex-row justify-center items-center gap-2 px-3 py-2 rounded-full bg-app border border-border-default">
            {/* Event Type Tag */}
            <div className="flex items-center px-2 py-1 rounded-full bg-surface">
              <span className="text-tiny font-medium text-secondary">Hello!</span>
            </div>
            <span className="text-regular font-medium text-secondary text-center">
              Psst… Mumbai meetups have free chai & samosas ☕
            </span>
          </div>

          {/* Hero Title - 72px Title SemiBold */}
          <h1 className="text-extra-large md:text-title font-semibold text-primary text-center leading-[1.167] tracking-[-0.8px]">
            All the Best Design & Tech Events. In One Place
          </h1>

          {/* Hero Description - 20px Sub heading Medium */}
          <p className="text-medium font-medium text-muted text-center max-w-[700px] leading-[1.4]">
            Stop hunting through random links. Dzindeck curates verified design events across India so you can learn and connect without chaos
          </p>
        </div>

        {/* CTA Button - Primary Medium with Hero-btn shadow */}
        <Button variant="hero" size="md" className="gap-2">
          <span className="w-[6px] h-[6px] rounded-full bg-increase" />
          Explore Events
        </Button>
      </div>
    </section>
  );
}
