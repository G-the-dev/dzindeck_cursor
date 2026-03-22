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

export function CitySection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">

        {/* Header — left title, right subtext + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[32px] mb-[64px]">
          <h2 className="text-[40px] lg:text-[48px] font-semibold text-[#F1F2F4] leading-[1.1] tracking-[-0.04em] max-w-[460px]">
            Discover Events Happening Around You
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-[20px] max-w-[360px]">
            <p className="text-[16px] font-normal text-[#8A8D94] leading-[1.55] lg:text-right">
              Design communities from across India, all in one place, discover events nearby and beyond
            </p>
            <button
              className="flex items-center justify-center px-[20px] py-[11px] rounded-[14px] text-[15px] font-semibold text-[#0E0E10] bg-[#F1F2F4] whitespace-nowrap"
              style={{ border: '1px solid #242528' }}
            >
              View All
            </button>
          </div>
        </div>

        {/* City Cards — horizontal scroll */}
        <div className="flex flex-row gap-[16px] overflow-x-auto pb-4 scrollbar-hide">
          {CITIES.map((city) => (
            <div
              key={city.id}
              className="flex-shrink-0 flex flex-col rounded-[24px] overflow-hidden cursor-pointer group"
              style={{
                width: '420px',
                background: '#141416',
                border: '1.2px solid #242528',
              }}
            >
              {/* City illustration — no overlay, clean blend with card background */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: '360px', background: '#141416' }}
              >
                <Image
                  src={city.svg}
                  alt={city.name}
                  fill
                  className="object-contain"
                  sizes="420px"
                />
              </div>

              {/* City name + tilt arrow */}
              <div className="flex flex-row items-center justify-between px-[20px] py-[20px]">
                <h3 className="text-[20px] font-normal text-[#F1F2F4] leading-[1.25]">
                  {city.name}
                </h3>
                {/* 24px arrow-right-tilt icon from assets */}
                <img
                  src="/assets/SVGs/Style=Fill, Icon=Arrow Right Tilt.svg"
                  alt="View"
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
