"use client";

import { useState } from "react";

export function TopFooter() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] pt-[80px] pb-[48px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[48px]">
          {/* Left — Big heading */}
          <h2 className="text-[52px] font-semibold text-[#F1F2F4] leading-[1.1] tracking-[-0.04em] max-w-[560px]">
            Discover curated design and tech events across India.
          </h2>

          {/* Right — Email subscribe */}
          <div
            className="flex flex-row items-center gap-[0px] rounded-[20px] overflow-hidden flex-shrink-0"
            style={{
              background: '#141416',
              border: '1px solid #3A3B40',
              padding: '6px 6px 6px 20px',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-[15px] font-normal text-[#3A3B40] outline-none w-[220px] placeholder-[#3A3B40]"
              style={{ fontFamily: 'inherit' }}
            />
            <button
              className="flex items-center justify-center px-[20px] py-[12px] rounded-[14px] text-[15px] font-semibold text-[#0E0E10] bg-[#F1F2F4] whitespace-nowrap flex-shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
