"use client";

// The 3 step icons — using the provided How Works Icons SVG files directly (no background box per instructions)
const STEPS = [
  {
    id: "discover",
    iconSrc: "/assets/SVGs/How Works Icons.svg",
    title: "Discover Curated Events",
    description: "Find high-quality design and tech events without wading through random links.",
  },
  {
    id: "register",
    iconSrc: "/assets/SVGs/How Works Icons-1.svg",
    title: "Register Instantly",
    description: "One-click registration with accurate details, verified organizers, and smart reminders.",
  },
  {
    id: "showup",
    iconSrc: "/assets/SVGs/How Works Icons-2.svg",
    title: "Show Up & Grow",
    description: "Join meetups, workshops, and designathons that build skills, friends, and opportunities.",
  },
];

// Center logo node — the Dzindeck icon in a dark rounded box
function LogoNode() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Subtle glow */}
      <div
        className="absolute inset-[-16px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="relative w-[72px] h-[72px] rounded-[20px] flex items-center justify-center z-10"
        style={{
          background: '#1B1C1F',
          border: '1.2px solid #3A3B40',
          boxShadow: '0 0 32px 4px rgba(241,242,244,0.07)',
        }}
      >
        <img
          src="/assets/SVGs/Logo.svg"
          alt="Dzindeck"
          width={32}
          height={32}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">

        {/* Header — centered */}
        <div className="flex flex-col items-center gap-[16px] mb-[80px] text-center">
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#F1F2F4] leading-[1.15] tracking-[-0.04em]">
            How Dzindeck Works
          </h2>
          <p className="text-[17px] font-normal text-[#8A8D94] leading-[1.55] max-w-[640px]">
            Discover relevant events, register in seconds, and stay informed without unnecessary confusion
          </p>
        </div>

        {/* Tree diagram */}
        <div className="flex flex-col items-center">
          {/* Top — center logo */}
          <LogoNode />

          {/* Vertical stem from logo */}
          <div className="w-[1px] h-[56px] bg-[#2E2F33]" />

          {/* Horizontal cross-bar connecting 3 branches */}
          <div className="relative w-full flex justify-center">
            {/* Horizontal bar — spans from left-third to right-third */}
            <div
              className="absolute top-0 h-[1px] bg-[#2E2F33]"
              style={{ left: 'calc(16.67%)', right: 'calc(16.67%)' }}
            />

            {/* Three columns */}
            <div className="w-full grid grid-cols-3">
              {STEPS.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center">
                  {/* Vertical drop from horizontal bar — middle is short (connected at center) */}
                  <div
                    className="w-[1px] bg-[#2E2F33]"
                    style={{ height: idx === 1 ? '0px' : '56px' }}
                  />

                  {/* Step icon — 32px, no background box, just the SVG directly */}
                  <div className="relative flex items-center justify-center">
                    {/* Glow behind icon */}
                    <div
                      className="absolute inset-[-24px] rounded-full pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
                    />
                    <div
                      className="relative w-[80px] h-[80px] rounded-[24px] flex items-center justify-center z-10"
                      style={{
                        background: '#1B1C1F',
                        border: '1.2px solid #3A3B40',
                        boxShadow: '0 0 48px 8px rgba(241,242,244,0.05)',
                      }}
                    >
                      <img
                        src={step.iconSrc}
                        alt={step.title}
                        width={32}
                        height={32}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>

                  {/* Step title */}
                  <h3 className="mt-[24px] text-[18px] md:text-[20px] font-medium text-[#F1F2F4] leading-[1.3] text-center px-[8px]">
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="mt-[10px] text-[14px] font-normal text-[#8A8D94] leading-[1.55] text-center max-w-[260px] px-[4px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
