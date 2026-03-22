"use client";

import { useState } from "react";

export function TopFooter() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] pt-[80px] pb-[48px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[48px]">

          {/* Left — Big heading */}
          <h2 className="text-[44px] md:text-[56px] font-semibold text-[#F1F2F4] leading-[1.08] tracking-[-0.04em] max-w-[560px]">
            Discover curated design and tech events across India.
          </h2>

          {/* Right — Email input + Subscribe button */}
          <div className="flex flex-row items-center gap-[12px] flex-shrink-0 w-full lg:w-auto">
            <div
              className="flex-1 lg:w-[320px] flex items-center px-[20px] py-[14px] rounded-[16px]"
              style={{
                background: '#141416',
                border: '1px solid #3A3B40',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-[15px] font-normal text-[#F1F2F4] outline-none placeholder-[#56585E]"
                style={{ fontFamily: 'inherit' }}
              />
            </div>
            <button
              className="flex items-center justify-center px-[24px] py-[14px] rounded-[16px] text-[15px] font-semibold text-[#0E0E10] bg-[#F1F2F4] whitespace-nowrap flex-shrink-0"
              style={{
                boxShadow: '0px 4px 8px rgba(241,242,244,0.15)',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
