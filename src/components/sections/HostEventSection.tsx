"use client";

export function HostEventSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        <div
          className="relative w-full rounded-[32px] overflow-hidden"
          style={{ background: '#141416' }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hostGrid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hostGrid)" />
            </svg>
          </div>

          {/* White glow — narrow bright beam from top center, like a flashlight */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-[40px] pointer-events-none"
            style={{
              width: '260px',
              height: '300px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 30%, transparent 70%)',
              filter: 'blur(18px)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-[24px] py-[80px] px-[48px] text-center">

            {/* Logo icon */}
            <div className="relative w-[76px] h-[76px]">
              {/* Glow halo above icon */}
              <div
                className="absolute -top-[20px] left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: '120px',
                  height: '80px',
                  background: 'radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />
              <div
                className="relative z-10 w-[76px] h-[76px] rounded-[20px] flex items-center justify-center"
                style={{
                  background: '#1B1C1F',
                  border: '1.2px solid #3A3B40',
                  boxShadow: '0 0 24px 4px rgba(255,255,255,0.07)',
                }}
              >
                <img
                  src="/assets/SVGs/Logo.svg"
                  alt="Dzindeck"
                  width={34}
                  height={34}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-[12px] max-w-[680px]">
              <h2 className="text-[40px] md:text-[48px] font-semibold text-[#F1F2F4] leading-[1.15] tracking-[-0.04em]">
                Host Your Event on Dzindeck
              </h2>
              <p className="text-[17px] font-normal text-[#8A8D94] leading-[1.55]">
                Reach the right audience - designers, developers, product people - all in one platform
              </p>
            </div>

            {/* CTA — white pill button with subtle glow underneath */}
            <div className="relative mt-[8px]">
              {/* Glow under button */}
              <div
                className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: '200px',
                  height: '40px',
                  background: 'radial-gradient(ellipse, rgba(241,242,244,0.35) 0%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />
              <button
                className="relative z-10 flex items-center justify-center px-[36px] py-[16px] rounded-[18px] text-[16px] font-semibold text-[#0E0E10] bg-[#F1F2F4]"
                style={{
                  boxShadow: '0px 4px 8px rgba(241,242,244,0.20), 0px 16px 24px rgba(241,242,244,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                Organize an Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
