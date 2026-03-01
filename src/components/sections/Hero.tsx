import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col items-center w-full gap-8 md:gap-[32px]">
      {/* Icon Shine - Dzindeck logo with glow */}
      <div className="relative w-[76px] h-[76px] md:w-[76px] md:h-[76px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] flex items-center justify-center p-5 rounded-xl bg-app border border-[1.2px] border-border-default shadow-[inset_3px_3px_14px_0px_rgba(255,255,255,0.3)]">
            <Image
              src="/assets/DD Logo SVG.svg"
              alt="Dzindeck"
              width={36}
              height={38}
              className="text-primary"
            />
          </div>
        </div>
      </div>

      {/* Hero Text Container */}
      <div className="flex flex-col items-center gap-5 max-w-[380px] sm:max-w-[600px] md:max-w-[704px] lg:max-w-[860px]">
        {/* Hero Tagline badge */}
        <div className="inline-flex flex-row justify-center items-center gap-2 px-2 py-1 rounded-full bg-app border border-border-default">
          <span className="text-regular font-medium text-secondary text-center">
            Early access to curated design & tech events
          </span>
        </div>

        {/* Hero Title - responsive: 32px→48px→72px */}
        <h1 className="text-large md:text-extra-large lg:text-title font-semibold text-primary text-center w-full max-w-[860px] leading-[1.167] tracking-[-0.8px]">
          Stop Hunting for Events. Start Showing Up.
        </h1>

        {/* Hero Description */}
        <p className="text-medium font-medium text-muted text-center max-w-[602px] leading-[1.4]">
          Dzindeck brings curated designathons, meetups, workshops, and
          conferences across India all in one place, without the noise.
        </p>
      </div>

      {/* Button Container */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-[380px] sm:max-w-none">
          {/* Dropdown - I'm a... */}
          <div className="flex flex-row justify-center items-center gap-4 px-6 py-4 rounded-xl bg-app border border-[1.2px] border-border-default w-full sm:w-auto min-w-0">
            <span className="text-regular font-semibold text-disabled">
              I&apos;m a...
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary shrink-0"
            >
              <path d="M5 7.5l5 5 5-5H5z" />
            </svg>
          </div>

          {/* Email input */}
          <div className="flex flex-row items-center gap-[160px] px-6 py-4 rounded-xl bg-app border border-[1.2px] border-border-default w-full sm:w-[362px] min-w-0">
            <span className="text-regular font-medium text-disabled">
              Enter your email
            </span>
          </div>

          {/* Join the Waitlist - Primary CTA with green dot */}
          <button
            type="button"
            className="flex flex-row justify-center items-center gap-2 px-6 py-4 rounded-xl bg-state-focused text-tertiary text-regular font-bold border border-[1.2px] border-border-default shrink-0"
          >
            <span className="w-[5px] h-[5px] rounded-full bg-increase shrink-0" />
            Join the Waitlist
          </button>
        </div>

        <p className="text-regular font-medium text-primary">
          No spam. Early access only.
        </p>
      </div>
    </div>
  );
}
