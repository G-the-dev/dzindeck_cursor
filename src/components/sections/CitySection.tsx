"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

const CITIES = [
  { id: "hyderabad", name: "Hyderabad", svg: "/assets/SVGs/Property 1=Hyderabad.svg" },
  { id: "bangalore", name: "Bangalore", svg: "/assets/SVGs/Property 1=Bangalore.svg" },
  { id: "delhi", name: "Delhi", svg: "/assets/SVGs/Property 1=Delhi.svg" },
  { id: "mumbai", name: "Mumbai", svg: "/assets/SVGs/Property 1=Mumbai.svg" },
  { id: "jaipur", name: "Jaipur", svg: "/assets/SVGs/Property 1=Jaipur.svg" },
  { id: "chennai", name: "Chennai", svg: "/assets/SVGs/Property 1=Chennai.svg" },
  { id: "lucknow", name: "Lucknow", svg: "/assets/SVGs/Property 1=Lucknow.svg" },
  { id: "pune", name: "Pune", svg: "/assets/SVGs/Property 1=Pune.svg" },
  { id: "kerala", name: "Kerala", svg: "/assets/SVGs/Property 1=Kerala.svg" },
  { id: "bhopal", name: "Bhopal", svg: "/assets/SVGs/Property 1=Bhopal.svg" },
];

// Arrow Right Tilt Icon
function IconArrowRightTilt({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CitySection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Header Container - Row layout with space-between */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[32px] mb-[80px]">
          {/* Header */}
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.833%] max-w-[579px]">
            Discover Events Happening Around You
          </h2>
          
          {/* Subheader + Button Container */}
          <div className="flex flex-col gap-[32px] max-w-[450px]">
            <p className="text-[20px] font-medium text-[#8A8D94] leading-[1.4]">
              Design communities from across India, all in one place, discover events nearby and beyond
            </p>
            <div className="flex justify-start lg:justify-end">
              <Button 
                variant="primary" 
                size="sm"
                className="rounded-[16px] px-[16px] py-[12px] bg-[#F1F2F4] text-[#0E0E10] text-[16px] font-semibold border border-[#242528]"
              >
                View All
              </Button>
            </div>
          </div>
        </div>

        {/* City Cards - Horizontal scroll */}
        <div className="flex flex-row gap-[32px] overflow-x-auto pb-4 scrollbar-hide">
          {CITIES.map((city) => (
            <div
              key={city.id}
              className="flex-shrink-0 flex flex-col p-[32px] rounded-[32px] bg-[#141416] border border-[#242528] cursor-pointer group"
              style={{
                borderWidth: '1.2px'
              }}
            >
              {/* City Image Container */}
              <div className="relative w-[460px] h-[425px] rounded-[24px] overflow-hidden mb-[24px]"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 0) 16%, rgba(20, 20, 20, 1) 100%)'
                }}
              >
                {/* City SVG Image */}
                <Image
                  src={city.svg}
                  alt={city.name}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* City Name + Arrow */}
              <div className="flex flex-row items-center justify-between w-full gap-[12px]">
                <h3 className="text-[24px] font-medium text-[#F1F2F4] leading-[1.25] tracking-[-0.625%]">
                  {city.name}
                </h3>
                <IconArrowRightTilt className="w-[24px] h-[24px] text-[#F1F2F4]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator Gradient */}
      <div 
        className="absolute right-0 top-0 w-[201px] h-[637px] pointer-events-none hidden xl:block"
        style={{
          background: 'linear-gradient(270deg, rgba(2, 3, 6, 1) 0%, rgba(2, 3, 6, 0) 100%)'
        }}
      />
    </section>
  );
}
