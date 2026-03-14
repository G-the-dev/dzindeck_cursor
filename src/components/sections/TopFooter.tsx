"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function TopFooter() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[8px]">
          {/* Left - Text */}
          <p className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.833%] max-w-[624px]">
            Discover curated design and tech events across India.
          </p>

          {/* Right - Subscribe Form */}
          <div className="flex flex-row items-center gap-[8px] p-[8px] pl-[20px] rounded-[24px] bg-[#141416] w-full lg:w-auto">
            <span className="text-[16px] font-medium text-[#3A3B40] whitespace-nowrap hidden sm:block">
              Enter your email
            </span>
            <Button 
              variant="primary" 
              size="sm"
              className="rounded-[16px] px-[16px] py-[12px] bg-[#F1F2F4] text-[#0E0E10] text-[16px] font-semibold border border-[#242528]"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
