"use client";

import Image from "next/image";

const CITIES = [
  { id: "hyderabad", name: "Hyderabad", svg: "/assets/SVGs/Property 1=Hyderabad.svg" },
  { id: "bangalore", name: "Bangalore", svg: "/assets/SVGs/Property 1=Bangalore.svg" },
  { id: "delhi", name: "Delhi", svg: "/assets/SVGs/Property 1=Delhi.svg" },
  { id: "mumbai", name: "Mumbai", svg: "/assets/SVGs/Property 1=Mumbai.svg" },
  { id: "jaipur", name: "Jaipur", svg: "/assets/SVGs/Property 1=Jaipur.svg" },
  { id: "chennai", name: "Chennai", svg: "/assets/SVGs/Property 1=Chennai.svg" },
  { id: "lucknow", name: "Lucknow", svg: "/assets/SVGs/Property 1=Lucknow.svg" },
  { id: "pune", name: "Pune", svg: "/assets/SVGs/Property 1=Pune.svg" },
];

function IconArrowRightTilt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CitySection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Header — left title, right subtext + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[32px] mb-[64px]">
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.1] tracking-[-0.04em] max-w-[460px]">
            Discover Events Happening Around You
          </h2>

          <div className="flex flex-col items-start lg:items-end gap-[24px] max-w-[380px]">
            <p className="text-[18px] font-normal text-[#8A8D94] leading-[1.5] lg:text-right">
              Design communities from across India, all in one place, discover events nearby and beyond
            </p>
            <button
              className="flex items-center justify-center px-[20px] py-[12px] rounded-[14px] text-[15px] font-semibold text-[#0E0E10] bg-[#F1F2F4]"
              style={{ border: '1px solid #242528' }}
            >
              View All
            </button>
          </div>
        </div>

        {/* City Cards Horizontal Scroll */}
        <div className="flex flex-row gap-[20px] overflow-x-auto pb-4 scrollbar-hide">
          {CITIES.map((city) => (
            <div
              key={city.id}
              className="flex-shrink-0 flex flex-col p-[20px] rounded-[28px] cursor-pointer group"
              style={{
                width: '440px',
                background: '#141416',
                border: '1.2px solid #242528',
              }}
            >
              {/* City Image */}
              <div
                className="relative w-full rounded-[20px] overflow-hidden mb-[20px]"
                style={{ height: '360px', background: '#0E0E10' }}
              >
                <Image
                  src={city.svg}
                  alt={city.name}
                  fill
                  className="object-contain"
                />
                {/* Subtle radial fade at edges */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 110%, rgba(20,20,22,0.6) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* City Name + Arrow */}
              <div className="flex flex-row items-center justify-between w-full">
                <h3 className="text-[22px] font-normal text-[#F1F2F4] leading-[1.25]">
                  {city.name}
                </h3>
                <span className="text-[#F1F2F4]">
                  <IconArrowRightTilt />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
