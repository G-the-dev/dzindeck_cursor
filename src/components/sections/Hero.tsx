"use client";

export function Hero() {
  return (
    <section className="w-full flex flex-col items-center pt-[48px] pb-[48px] px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto flex flex-col items-center gap-[24px]">

        {/* Tagline badge */}
        <div
          className="inline-flex flex-row justify-center items-center gap-[8px] px-[4px] py-[4px] pr-[14px] rounded-full"
          style={{
            background: '#141416',
            border: '1px solid #242528',
          }}
        >
          <div
            className="flex items-center px-[10px] py-[5px] rounded-full"
            style={{ background: '#1B1C1F', border: '1px solid #2E2F33' }}
          >
            <span className="text-[13px] font-medium text-[#C9CBD2]">Hello!</span>
          </div>
          <span className="text-[14px] font-medium text-[#C9CBD2]">
            Psst… Mumbai meetups have free chai &amp; samosas ☕
          </span>
        </div>

        {/* Hero title */}
        <h1 className="text-[56px] md:text-[72px] lg:text-[88px] font-semibold text-[#F1F2F4] text-center leading-[1.06] tracking-[-0.04em] text-balance max-w-[900px]">
          All the Best Design &amp; Tech Events. In One Place
        </h1>

        {/* Hero description */}
        <p className="text-[17px] font-normal text-[#8A8D94] text-center max-w-[560px] leading-[1.55]">
          Stop hunting through random links. Dzindeck curates verified design events across India so you can learn and connect without chaos
        </p>

        {/* CTA Button */}
        <button
          className="flex flex-row items-center gap-[8px] px-[28px] py-[14px] rounded-[16px] text-[16px] font-semibold text-[#0E0E10] bg-[#F1F2F4] mt-[8px]"
          style={{
            boxShadow: '0px 34px 20px 0px rgba(200,200,200,0.10), 0px 16px 16px 0px rgba(200,200,200,0.17), 0px 4px 8px 0px rgba(200,200,200,0.19), inset -10px -10px 20px 0px rgba(48,48,48,0.10), inset 10px 10px 16px 0px rgba(255,255,255,0.15)',
          }}
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[#22C55E] flex-shrink-0" />
          Explore Events
        </button>
      </div>
    </section>
  );
}
