"use client";

// All icons use the provided SVG assets at 20px
function IconCalendar() {
  return (
    <img
      src="/assets/SVGs/Style=Fill, Icon=Calendar.svg"
      alt="Date"
      width={20}
      height={20}
      style={{ objectFit: 'contain', filter: 'brightness(0) invert(0.7)' }}
    />
  );
}

function IconClock() {
  return (
    <img
      src="/assets/SVGs/Style=Fill, Icon=Clock.svg"
      alt="Time"
      width={20}
      height={20}
      style={{ objectFit: 'contain', filter: 'brightness(0) invert(0.7)' }}
    />
  );
}

function IconShare() {
  return (
    <img
      src="/assets/SVGs/Style=Fill, Icon=Share.svg"
      alt="Share"
      width={20}
      height={20}
      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
    />
  );
}

function IconBookmark() {
  return (
    <img
      src="/assets/SVGs/Style=Fill, Icon=Bookmark.svg"
      alt="Bookmark"
      width={20}
      height={20}
      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
    />
  );
}

const EVENTS = [
  {
    id: 1,
    title: "UX Research Community Meetup",
    description: "An open discussion on UX research methods, challenges, and real-world practices.",
    tags: ["Label", "Label"],
    cost: "Free",
    date: "Wed, Dec 09",
    time: "9:30 PM IST",
    attendees: "160 attendees",
    image: "/assets/SVGs/Event Card Photo.png",
  },
  {
    id: 2,
    title: "Future of Design",
    description: "A virtual conference featuring industry leaders discussing the future of design.",
    tags: ["Conference", "Label"],
    cost: "Free",
    date: "Wed, Dec 09",
    time: "9:30 PM IST",
    attendees: "160 attendees",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    id: 3,
    title: "Local Creative Networking",
    description: "A virtual networking meetup for creatives to connect and collaborate.",
    tags: ["Meetup", "Label"],
    cost: "Free",
    date: "Wed, Dec 09",
    time: "9:30 PM IST",
    attendees: "160 attendees",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    id: 4,
    title: "Design Systems Workshop",
    description: "A practical workshop on building and scaling design systems with Figma.",
    tags: ["Webinar", "Label"],
    cost: "Free",
    date: "Wed, Dec 09",
    time: "9:30 PM IST",
    attendees: "160 attendees",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
];

// The floating next arrow shown between cards (after 3rd card)
function NextArrow() {
  return (
    <div
      className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
      style={{
        background: '#1B1C1F',
        border: '1.2px solid #3A3B40',
        boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F1F2F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function EventsSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">

        {/* Header — left title, right subtext + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[32px] mb-[64px]">
          <h2 className="text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#F1F2F4] max-w-[400px]">
            Upcoming Design &amp; Tech Events
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-[20px] max-w-[380px]">
            <p className="text-[16px] font-normal text-[#8A8D94] leading-[1.5] lg:text-right">
              Curated workshops, meetups, and designathons from trusted organizers across India
            </p>
            <button
              className="flex items-center justify-center px-[20px] py-[11px] rounded-[14px] text-[15px] font-semibold text-[#0E0E10] bg-[#F1F2F4] whitespace-nowrap"
              style={{ border: '1px solid #242528' }}
            >
              View All
            </button>
          </div>
        </div>

        {/* Cards scroll row — right edge bleeds with gradient fade */}
        <div className="relative">
          {/* Right fade gradient */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[120px] pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, transparent, #0E0E10)' }}
          />

          <div className="flex flex-row gap-[20px] overflow-x-auto pb-4 scrollbar-hide -mr-[100px] pr-[100px]">
            {EVENTS.map((event, index) => (
              <div key={event.id} className="relative flex-shrink-0">
                {/* Next arrow between 3rd and 4th card */}
                {index === 2 && <NextArrow />}

                <div
                  className="flex flex-col rounded-[24px] overflow-hidden"
                  style={{
                    width: '340px',
                    background: '#141416',
                    border: '1.2px solid #242528',
                  }}
                >
                  {/* Event Image */}
                  <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: '200px' }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Cost Badge */}
                    <div
                      className="absolute top-[12px] left-[12px] px-[12px] py-[6px] rounded-full"
                      style={{
                        background: 'rgba(14,14,16,0.80)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                    >
                      <span className="text-[13px] font-semibold text-[#F1F2F4]">{event.cost}</span>
                    </div>
                    {/* Share + Bookmark */}
                    <div className="absolute top-[12px] right-[12px] flex items-center gap-[8px]">
                      <button
                        className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(14,14,16,0.80)', backdropFilter: 'blur(10px)' }}
                        aria-label="Share"
                      >
                        <IconShare />
                      </button>
                      <button
                        className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(14,14,16,0.80)', backdropFilter: 'blur(10px)' }}
                        aria-label="Bookmark"
                      >
                        <IconBookmark />
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col gap-[12px] p-[16px]">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-[8px]">
                      {event.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-[10px] py-[4px] rounded-full text-[12px] font-medium text-[#C9CBD2]"
                          style={{ border: '1px solid #3A3B40' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title + Description */}
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="text-[18px] font-semibold text-[#F1F2F4] leading-[1.3]">
                        {event.title}
                      </h3>
                      <p className="text-[13px] font-normal text-[#8A8D94] leading-[1.5] line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                    {/* Date & Time row */}
                    <div className="flex flex-row items-center gap-[12px]">
                      <div className="flex items-center gap-[6px]">
                        <IconCalendar />
                        <span className="text-[13px] font-medium text-[#C9CBD2]">{event.date}</span>
                      </div>
                      <div className="h-[14px] w-[1px] bg-[#3A3B40]" />
                      <div className="flex items-center gap-[6px]">
                        <IconClock />
                        <span className="text-[13px] font-medium text-[#C9CBD2]">{event.time}</span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-[1px] bg-[#242528]" />

                    {/* Attendees + Register */}
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex items-center gap-[8px]">
                        {/* Stacked avatar circles */}
                        <div className="flex -space-x-[8px]">
                          {[0, 1, 2].map((i) => (
                            <div
                              key={i}
                              className="w-[26px] h-[26px] rounded-full flex-shrink-0"
                              style={{
                                background: '#2E2F33',
                                border: '2px solid #141416',
                              }}
                            />
                          ))}
                          <div
                            className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[9px] font-bold text-[#0E0E10] flex-shrink-0"
                            style={{ background: '#C9CBD2', border: '2px solid #141416' }}
                          >
                            +100
                          </div>
                        </div>
                        <span className="text-[13px] font-medium text-[#F1F2F4]">{event.attendees}</span>
                      </div>
                      <button
                        className="flex items-center justify-center px-[14px] py-[8px] rounded-[12px] text-[13px] font-semibold text-[#F1F2F4]"
                        style={{ background: '#1B1C1F', border: '1.2px solid #242528' }}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
