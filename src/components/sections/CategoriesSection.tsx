"use client";

const CATEGORIES = [
  {
    id: "designathon",
    label: "Designathon",
    iconSrc: "/assets/SVGs/Style=Fill, Icon=Designathon.svg",
  },
  {
    id: "meetup",
    label: "Meetup",
    iconSrc: "/assets/SVGs/Style=Fill, Icon=Meetup.svg",
  },
  {
    id: "workshop",
    label: "Workshop",
    iconSrc: "/assets/SVGs/Style=Fill, Icon=Workshop.svg",
  },
  {
    id: "conference",
    label: "Conference",
    iconSrc: "/assets/SVGs/Style=Fill, Icon=Conference.svg",
  },
];

export function CategoriesSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] mb-[64px]">
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#F1F2F4] leading-[1.15] tracking-[-0.04em] text-center text-balance">
            Explore Categories Built for Every Creative Path
          </h2>
          <p className="text-[17px] font-normal text-[#8A8D94] leading-[1.55] text-center max-w-[640px]">
            Find events that match your goals, whether you&apos;re learning, networking, or building your career
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col p-[20px] rounded-[28px] cursor-pointer group transition-colors"
              style={{
                background: '#141416',
                border: '1.2px solid #242528',
                minHeight: '260px',
              }}
            >
              {/* Icon — top-left, 24px inside a small box */}
              <div
                className="flex items-center justify-center p-[10px] rounded-[14px] w-fit"
                style={{
                  background: '#1B1C1F',
                  border: '1px solid #242528',
                }}
              >
                <img
                  src={category.iconSrc}
                  alt={category.label}
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Label — bottom-left */}
              <span className="text-[20px] font-normal text-[#F1F2F4] leading-[1.25]">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
