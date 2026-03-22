"use client";

export function HostEventSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* CTA Container */}
        <div className="relative w-full rounded-[32px] overflow-hidden" style={{ background: '#141416' }}>

          {/* Grid overlay pattern */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hostGrid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hostGrid)" />
            </svg>
          </div>

          {/* Radial glow from top center */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-[60px] w-[320px] h-[280px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(241,242,244,0.18) 0%, rgba(241,242,244,0) 70%)',
              filter: 'blur(24px)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-[28px] py-[72px] px-[48px] text-center">
            {/* Logo Icon with shine effect */}
            <div className="relative w-[76px] h-[76px]">
              {/* Glow above */}
              <div
                className="absolute -top-[24px] left-1/2 -translate-x-1/2 w-[100px] h-[80px] pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(12px)',
                }}
              />
              {/* Logo box */}
              <div
                className="relative w-[76px] h-[76px] rounded-[20px] flex items-center justify-center z-10"
                style={{
                  background: '#1B1C1F',
                  border: '1.2px solid transparent',
                  backgroundImage: 'linear-gradient(#1B1C1F, #1B1C1F), linear-gradient(135deg, rgba(241,242,244,0.6) 0%, rgba(241,242,244,0) 40%), linear-gradient(315deg, rgba(241,242,244,0.6) 0%, rgba(241,242,244,0) 40%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box, border-box',
                  boxShadow: 'inset 0 0 16px rgba(255,255,255,0.08)',
                }}
              >
                <img
                  src="/assets/SVGs/Logo.svg"
                  alt="Dzindeck"
                  className="w-[34px] h-[34px]"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-[16px] max-w-[720px]">
              <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.15] tracking-[-0.4px]">
                Host Your Event on Dzindeck
              </h2>
              <p className="text-[18px] font-normal text-[#8A8D94] leading-[1.5]">
                Reach the right audience - designers, developers, product people - all in one platform
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="flex items-center justify-center px-[32px] py-[16px] rounded-[16px] text-[16px] font-semibold text-[#0E0E10] bg-[#F1F2F4]"
              style={{
                boxShadow: '0px 4px 8px rgba(200,200,200,0.19), 0px 16px 16px rgba(200,200,200,0.17), 0px 34px 20px rgba(200,200,200,0.10), inset 10px 10px 16px rgba(255,255,255,0.15), inset -10px -10px 20px rgba(48,48,48,0.1)',
              }}
            >
              Organize an Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
