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
        {/* Header Container */}
        <div className="flex flex-col items-center gap-[16px] mb-[64px]">
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.4px] text-center text-balance">
            Explore Categories Built for Every Creative Path
          </h2>
          <p className="text-[18px] font-normal text-[#8A8D94] leading-[1.5] text-center max-w-[860px]">
            Find events that match your goals, whether you&apos;re learning, networking, or building your career
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col p-[20px] rounded-[28px] cursor-pointer min-h-[260px]"
              style={{
                background: '#141416',
                border: '1.2px solid #242528',
              }}
            >
              {/* Icon Container */}
              <div
                className="flex flex-row justify-center items-center p-[10px] rounded-[14px] w-fit mb-auto"
                style={{
                  background: '#1B1C1F',
                  border: '1px solid #242528',
                }}
              >
                <img
                  src={category.iconSrc}
                  alt={category.label}
                  className="w-[20px] h-[20px]"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Spacer to push label to bottom */}
              <div className="flex-1" />

              {/* Label */}
              <span className="text-[20px] font-normal text-[#F1F2F4] leading-[1.25] mt-[80px]">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
