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

export function HowItWorksSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10] relative">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="text-[#242528]">
          <pattern id="howItWorksDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#howItWorksDots)" />
        </svg>
      </div>

      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-[20px] mb-[80px] text-center">
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.833%]">
            How Dzindeck Works
          </h2>
          <p className="text-[20px] font-medium text-[#8A8D94] leading-[1.4] max-w-[1054px]">
            Discover relevant events, register in seconds, and stay informed without unnecessary confusion
          </p>
        </div>

        {/* Center Logo Element */}
        <div className="flex justify-center mb-[80px]">
          <div className="relative w-[44px] h-[44px]">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[rgba(243,244,246,0.5)] blur-[48px]" />
            {/* Icon container */}
            <div className="relative w-[44px] h-[44px] rounded-[16px] bg-[#141416] flex items-center justify-center"
              style={{
                border: '1.2px solid transparent',
                backgroundImage: 'linear-gradient(#141416, #141416), linear-gradient(57deg, rgba(241,242,244,1) 0%, rgba(241,242,244,0) 37%), linear-gradient(251deg, rgba(241,242,244,1) 0%, rgba(241,242,244,0) 40%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box, border-box'
              }}
            >
              <img src="/assets/SVGs/How Works Icons.svg" alt="Discover" className="w-[20px] h-[20px]" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-[32px]">
          {STEPS.map((step) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center gap-[24px] p-[24px] rounded-[24px] flex-1 max-w-[386px]"
              style={{
                background: '#141416',
                border: '1.2px solid transparent',
                backgroundImage: 'linear-gradient(#141416, #141416), linear-gradient(57deg, rgba(241,242,244,1) 0%, rgba(241,242,244,0) 37%), linear-gradient(251deg, rgba(241,242,244,1) 0%, rgba(241,242,244,0) 40%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box, border-box'
              }}
            >
              {/* Icon with glow */}
              <div className="relative w-[44px] h-[44px] mt-[16px]">
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 rounded-full bg-[rgba(243,244,246,0.5)] blur-[48px]" style={{ transform: 'translateY(40px)' }} />
                {/* Icon container */}
                <div className="relative w-[44px] h-[44px] rounded-[16px] bg-[#141416] flex items-center justify-center"
                  style={{
                    border: '1.2px solid transparent',
                    backgroundImage: 'linear-gradient(#141416, #141416), linear-gradient(57deg, rgba(241,242,244,1) 0%, rgba(241,242,244,0) 37%), linear-gradient(251deg, rgba(241,242,244,1) 0%, rgba(241,242,244,0) 40%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box, border-box'
                  }}
                >
                  <img src={step.iconSrc} alt={step.title} className="w-[20px] h-[20px]" style={{ objectFit: 'contain' }} />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col items-center gap-[12px] text-center mt-[24px]">
                <h3 className="text-[20px] font-medium text-[#F1F2F4]">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
