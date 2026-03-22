"use client";

const STATS = [
  { number: "200+", label: "Designathons Completed" },
  { number: "15K+", label: "Designers Empowered" },
  { number: "1.2K+", label: "Events Hosted" },
  { number: "50+", label: "Cities Activated" },
];

const RECENT_EVENTS = [
  {
    id: 1,
    title: "Figma Bootcamp",
    location: "Chennai, India",
    description: "1K+ designers trained • 92% satisfaction rate",
    tag: "Workshop",
    date: "Wed, Dec 09",
    time: "9:30 PM IST",
  },
  {
    id: 2,
    title: "UX Design Conference",
    location: "Bangalore, India",
    description: "500+ attendees • 85% industry leaders",
    tag: "Conference",
    date: "Fri, Jan 15",
    time: "10:00 AM IST",
  },
  {
    id: 3,
    title: "Designathon 2023",
    location: "Mumbai, India",
    description: "Collaboration with top brands • Prizes for winners",
    tag: "Designathon",
    date: "Sat, Feb 20",
    time: "11:00 AM IST",
  },
  {
    id: 4,
    title: "Prototyping Workshop",
    location: "Delhi, India",
    description: "Hands-on session • Limit: 30 participants",
    tag: "Workshop",
    date: "Sun, Mar 10",
    time: "2:00 PM IST",
  },
  {
    id: 5,
    title: "Creative Sprint",
    location: "Pune, India",
    description: "Networking opportunities • Open to all levels",
    tag: "Meetup",
    date: "Tue, Apr 25",
    time: "5:30 PM IST",
  },
  {
    id: 6,
    title: "Product Design Meetup",
    location: "Hyderabad, India",
    description: "Portfolio reviews • Industry talks",
    tag: "Meetup",
    date: "Thu, May 08",
    time: "6:00 PM IST",
  },
];

function EventCard({ event }: { event: typeof RECENT_EVENTS[0] }) {
  return (
    <div
      className="flex flex-col gap-[12px] p-[16px] rounded-[20px]"
      style={{
        background: '#141416',
        border: '1px solid #242528',
      }}
    >
      <div className="flex flex-row justify-between items-start gap-[8px]">
        <div className="flex flex-col gap-[2px]">
          <h4 className="text-[15px] font-semibold text-[#F1F2F4] leading-[1.3]">
            {event.title}
          </h4>
          <span className="text-[13px] font-normal text-[#8A8D94]">
            {event.location}
          </span>
        </div>
        <span
          className="px-[10px] py-[3px] rounded-full text-[11px] font-medium text-[#C9CBD2] whitespace-nowrap flex-shrink-0"
          style={{ background: '#1B1C1F', border: '1px solid #242528' }}
        >
          {event.tag}
        </span>
      </div>
      <div className="flex flex-col gap-[2px]">
        <span className="text-[12px] font-medium text-[#8A8D94]">
          {event.date} • {event.time}
        </span>
        <p className="text-[13px] font-medium text-[#F1F2F4] leading-[1.4]">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        <div
          className="flex flex-col lg:flex-row gap-[20px] rounded-[40px] p-[20px]"
          style={{
            background: '#0E0E10',
            border: '1.2px solid #242528',
          }}
        >
          {/* Left — Stats card: exactly 386px wide, white background */}
          <div
            className="flex flex-col justify-between p-[36px] rounded-[28px] flex-shrink-0"
            style={{ background: '#F1F2F4', width: '386px', minWidth: '280px' }}
          >
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col">
                {index !== 0 && (
                  <div className="w-full h-[1px] bg-[#C9CBD2] my-[28px]" />
                )}
                <div className="flex flex-col gap-[6px]">
                  <span className="text-[56px] font-bold text-[#0E0E10] leading-[1] tracking-[-0.04em]">
                    {stat.number}
                  </span>
                  <span className="text-[15px] font-normal text-[#56585E] leading-[1.4]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Two scrolling columns, opposite directions */}
          <div className="flex-1 overflow-hidden rounded-[24px] relative" style={{ height: '580px' }}>
            {/* Top fade */}
            <div
              className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none z-10"
              style={{ background: 'linear-gradient(to bottom, #0E0E10 10%, transparent)' }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none z-10"
              style={{ background: 'linear-gradient(to top, #0E0E10 10%, transparent)' }}
            />

            <div className="flex flex-row gap-[16px] h-full">
              {/* Column 1 — scrolls UP */}
              <div className="flex-1 overflow-hidden">
                <div
                  className="flex flex-col gap-[16px] animate-scroll-up"
                  style={{ animationDuration: '20s' }}
                >
                  {[...RECENT_EVENTS, ...RECENT_EVENTS, ...RECENT_EVENTS].map((event, i) => (
                    <EventCard key={`col1-${i}`} event={event} />
                  ))}
                </div>
              </div>

              {/* Column 2 — scrolls DOWN (opposite direction) */}
              <div className="flex-1 overflow-hidden">
                <div
                  className="flex flex-col gap-[16px] animate-scroll-down"
                  style={{ animationDuration: '24s' }}
                >
                  {[...RECENT_EVENTS.slice(3), ...RECENT_EVENTS, ...RECENT_EVENTS, ...RECENT_EVENTS].map((event, i) => (
                    <EventCard key={`col2-${i}`} event={event} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
