"use client";

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

// The center Dzindeck logo icon box (top of tree)
function LogoIconBox() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-[32px] scale-150 pointer-events-none" />
      <div
        className="relative w-[72px] h-[72px] rounded-[20px] flex items-center justify-center z-10"
        style={{
          background: '#1B1C1F',
          border: '1.2px solid #3A3B40',
          boxShadow: '0 0 40px 8px rgba(241,242,244,0.08)',
        }}
      >
        <img
          src="/assets/SVGs/Logo.svg"
          alt="Dzindeck"
          className="w-[32px] h-[32px]"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

// Step icon box - larger rounded squares like design
function StepIconBox({ iconSrc, alt }: { iconSrc: string; alt: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative w-[80px] h-[80px] rounded-[24px] flex items-center justify-center z-10"
        style={{
          background: '#1B1C1F',
          border: '1.2px solid #3A3B40',
          boxShadow: '0 0 48px 12px rgba(241,242,244,0.06)',
        }}
      >
        <img
          src={iconSrc}
          alt={alt}
          className="w-[32px] h-[32px]"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10] relative overflow-hidden">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] mb-[80px] text-center">
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.4px]">
            How Dzindeck Works
          </h2>
          <p className="text-[18px] font-normal text-[#8A8D94] leading-[1.5] max-w-[700px]">
            Discover relevant events, register in seconds, and stay informed without unnecessary confusion
          </p>
        </div>

        {/* Tree diagram — logo top center, 3 steps below connected by lines */}
        <div className="flex flex-col items-center">

          {/* Top center logo node */}
          <LogoIconBox />

          {/* Connector: vertical line from logo down to horizontal bar */}
          <div className="flex flex-col items-center">
            <div className="w-[1.5px] h-[48px] bg-[#2E2F33]" />

            {/* Horizontal bar connecting three columns */}
            <div className="relative w-full flex items-start justify-center">
              {/* The horizontal line */}
              <div
                className="absolute top-0 left-[calc(16.666%+0px)] right-[calc(16.666%+0px)] h-[1.5px] bg-[#2E2F33]"
                style={{ borderRadius: '1px' }}
              />

              {/* Three columns */}
              <div className="w-full grid grid-cols-3 gap-0">
                {STEPS.map((step, idx) => (
                  <div key={step.id} className="flex flex-col items-center">
                    {/* Vertical drop from horizontal bar to icon */}
                    <div
                      className="w-[1.5px] bg-[#2E2F33]"
                      style={{ height: idx === 1 ? '48px' : '80px' }}
                    />

                    {/* Step Icon Box */}
                    <StepIconBox iconSrc={step.iconSrc} alt={step.title} />

                    {/* Step Title */}
                    <h3 className="mt-[24px] text-[20px] font-medium text-[#F1F2F4] leading-[1.3] text-center px-[16px]">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-[12px] text-[15px] font-normal text-[#8A8D94] leading-[1.5] text-center max-w-[280px] px-[8px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
