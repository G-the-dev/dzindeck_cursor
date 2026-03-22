"use client";

import { Button } from "@/components/ui/Button";

// Calendar Icon - inline SVG (no box container, matches design)
function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66667 1.66666V4.16666M13.3333 1.66666V4.16666M2.91667 7.57499H17.0833M17.5 7.08332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08332C2.5 4.58332 3.75 2.91666 6.66667 2.91666H13.3333C16.25 2.91666 17.5 4.58332 17.5 7.08332Z" stroke="#C9CBD2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.079 11.4167H13.0865M13.079 13.9167H13.0865M9.99623 11.4167H10.0037M9.99623 13.9167H10.0037M6.91209 11.4167H6.91957M6.91209 13.9167H6.91957" stroke="#C9CBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Clock Icon - inline SVG (no box container)
function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3333 10C18.3333 14.6 14.6 18.3333 10 18.3333C5.4 18.3333 1.66667 14.6 1.66667 10C1.66667 5.39999 5.4 1.66666 10 1.66666C14.6 1.66666 18.3333 5.39999 18.3333 10Z" stroke="#C9CBD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0917 12.65L10.5083 11.1083C10.0583 10.8417 9.69167 10.2 9.69167 9.67499V6.25833" stroke="#C9CBD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Share Icon
function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6.66667C16.3807 6.66667 17.5 5.54738 17.5 4.16667C17.5 2.78595 16.3807 1.66667 15 1.66667C13.6193 1.66667 12.5 2.78595 12.5 4.16667C12.5 5.54738 13.6193 6.66667 15 6.66667Z" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.42505 11.2583L12.5834 14.575M12.5750 5.42499L7.42505 8.74166" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Bookmark Icon
function IconBookmark() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0167 2.5H5.98333C4.7 2.5 3.66667 3.54167 3.66667 4.83333V16.2583C3.66667 17.35 4.425 17.825 5.35 17.3167L9.24167 15.1583C9.65833 14.925 10.3333 14.925 10.7417 15.1583L14.6333 17.3167C15.5583 17.8333 16.3167 17.3583 16.3167 16.2583V4.83333C16.3333 3.54167 15.3 2.5 14.0167 2.5Z" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Arrow Right for scroll indicator
function IconArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F1F2F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
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
    hostCount: 3,
    hostExtra: "+100",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
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
    hostCount: 3,
    hostExtra: "+100",
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
    hostCount: 3,
    hostExtra: "+100",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    id: 4,
    title: "Design Systems Workshop",
    description: "A practical workshop on building and scaling design systems with Figma.",
    tags: ["Workshop", "Label"],
    cost: "Free",
    date: "Wed, Dec 09",
    time: "9:30 PM IST",
    attendees: "160 attendees",
    hostCount: 3,
    hostExtra: "+100",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
];

export function EventsSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Header — left title, right subtext + CTA stacked on right */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[32px] mb-[64px]">
          <h2
            className="text-[48px] font-semibold leading-[1.1] tracking-[-0.4px] text-[#F1F2F4] max-w-[420px]"
          >
            Upcoming Design &amp; Tech Events
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-[24px]">
            <p className="text-[18px] font-normal text-[#8A8D94] leading-[1.5] max-w-[400px] lg:text-right">
              Curated workshops, meetups, and designathons from trusted organizers across India
            </p>
            <button
              className="flex items-center justify-center px-[20px] py-[12px] rounded-[14px] text-[15px] font-semibold text-[#0E0E10] bg-[#F1F2F4] border border-[#242528] whitespace-nowrap"
            >
              View All
            </button>
          </div>
        </div>

        {/* Event Cards Horizontal Scroll */}
        <div className="relative">
          <div className="flex flex-row gap-[20px] overflow-x-auto pb-4 scrollbar-hide">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 flex flex-col rounded-[24px] overflow-hidden"
                style={{
                  width: '360px',
                  background: '#141416',
                  border: '1.2px solid #242528',
                }}
              >
                {/* Event Image */}
                <div className="relative w-full h-[200px] overflow-hidden flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Cost Badge */}
                  <div
                    className="absolute top-[12px] left-[12px] px-[12px] py-[6px] rounded-full"
                    style={{
                      background: 'rgba(14,14,16,0.75)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <span className="text-[14px] font-semibold text-[#F1F2F4]">
                      {event.cost}
                    </span>
                  </div>
                  {/* Share + Bookmark */}
                  <div className="absolute top-[12px] right-[12px] flex items-center gap-[8px]">
                    <button
                      className="w-[36px] h-[36px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(14,14,16,0.75)',
                        backdropFilter: 'blur(10px)',
                      }}
                      aria-label="Share"
                    >
                      <IconShare />
                    </button>
                    <button
                      className="w-[36px] h-[36px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(14,14,16,0.75)',
                        backdropFilter: 'blur(10px)',
                      }}
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
                        className="px-[10px] py-[4px] rounded-full text-[13px] font-medium"
                        style={{
                          color: '#C9CBD2',
                          border: '1px solid #3A3B40',
                        }}
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

                  {/* Date & Time */}
                  <div className="flex flex-row items-center gap-[12px] py-[4px]">
                    <div className="flex items-center gap-[6px]">
                      <IconCalendar />
                      <span className="text-[13px] font-medium text-[#C9CBD2]">
                        {event.date}
                      </span>
                    </div>
                    <div className="h-[14px] w-[1px] bg-[#3A3B40]" />
                    <div className="flex items-center gap-[6px]">
                      <IconClock />
                      <span className="text-[13px] font-medium text-[#C9CBD2]">
                        {event.time}
                      </span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="w-full h-[1px] bg-[#242528]" />

                  {/* Attendees + Register */}
                  <div className="flex flex-row justify-between items-center">
                    {/* Avatars */}
                    <div className="flex items-center gap-[8px]">
                      <div className="flex -space-x-[6px]">
                        {[...Array(event.hostCount)].map((_, i) => (
                          <div
                            key={i}
                            className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[11px] font-medium text-[#C9CBD2]"
                            style={{
                              background: '#1B1C1F',
                              border: '2px solid #141416',
                            }}
                          >
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                        <div
                          className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[10px] font-semibold text-[#0E0E10]"
                          style={{
                            background: '#C9CBD2',
                            border: '2px solid #141416',
                          }}
                        >
                          {event.hostExtra}
                        </div>
                      </div>
                      <span className="text-[13px] font-medium text-[#F1F2F4]">
                        {event.attendees}
                      </span>
                    </div>

                    {/* Register Button */}
                    <button
                      className="flex items-center justify-center px-[14px] py-[8px] rounded-[12px] text-[13px] font-semibold text-[#F1F2F4]"
                      style={{
                        background: '#1B1C1F',
                        border: '1.2px solid #242528',
                      }}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Scroll arrow hint */}
            <div className="flex-shrink-0 flex items-center justify-center w-[48px]">
              <div
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
                style={{ background: '#1B1C1F', border: '1.2px solid #242528' }}
              >
                <IconArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
