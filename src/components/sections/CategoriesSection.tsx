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
        <div className="flex flex-col items-center gap-[20px] mb-[80px]">
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.833%] text-center">
            Explore Categories Built for Every Creative Path
          </h2>
          <p className="text-[20px] font-medium text-[#8A8D94] leading-[1.4] text-center max-w-[1054px]">
            Find events that match your goals, whether you're learning, networking, or building your career
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="flex flex-row justify-center items-center gap-[32px] flex-wrap">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col p-[24px] rounded-[32px] cursor-pointer"
              style={{
                width: '286px',
                background: '#141416',
                border: '1.2px solid #242528'
              }}
            >
              {/* Icon Container */}
              <div 
                className="flex flex-row justify-center items-center p-[12px] rounded-[16px] w-fit mb-[120px]"
                style={{
                  background: '#1B1C1F',
                  border: '1px solid #242528'
                }}
              >
                <img src={category.iconSrc} alt={category.label} className="w-[24px] h-[24px]" style={{ objectFit: 'contain' }} />
              </div>

              {/* Label */}
              <span className="text-[24px] font-medium text-[#F1F2F4] leading-[1.25] tracking-[-0.625%]">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
