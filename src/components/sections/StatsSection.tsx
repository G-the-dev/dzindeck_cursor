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
];

export function StatsSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Main Stats Container */}
        <div 
          className="flex flex-col lg:flex-row gap-[16px] rounded-[48px] p-[24px]"
          style={{
            background: '#141416',
            border: '1.2px solid #242528'
          }}
        >
          {/* Stats Summary - Left Side with White Background */}
          <div 
            className="flex flex-col justify-end p-[32px] rounded-[24px] flex-1"
            style={{ background: '#F1F2F4' }}
          >
            <div className="flex flex-col gap-[32px]">
              {/* Stats Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-x-[80px] gap-y-[32px]">
                {STATS.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-[8px]">
                    <span 
                      className="text-[48px] font-bold leading-[1.208] tracking-[-0.833%]"
                      style={{ 
                        color: '#0E0E10',
                        fontFamily: 'Figtree, sans-serif'
                      }}
                    >
                      {stat.number}
                    </span>
                    <span 
                      className="text-[24px] font-normal leading-[1.25] tracking-[-0.625%]"
                      style={{ 
                        color: '#3A3B40',
                        fontFamily: 'Figtree, sans-serif'
                      }}
                    >
                      {stat.label}
                    </span>
                    {/* Gradient line separator - only for first row */}
                    {index === 0 || index === 1 ? (
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{
                          background: 'linear-gradient(205deg, rgba(56, 56, 56, 0) 0%, rgba(56, 56, 56, 1) 100%)'
                        }}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Events List - Right Side */}
          <div 
            className="flex flex-col gap-[16px] lg:w-[387px] h-[640px] overflow-hidden relative"
          >
            {/* Scrolling Event List with offset */}
            <div 
              className="flex flex-col gap-[16px]"
              style={{ marginTop: '-154px' }}
            >
              {RECENT_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col gap-[20px] p-[24px] rounded-[24px] cursor-pointer"
                  style={{
                    background: 'rgba(27, 28, 31, 0.2)',
                    border: '1px solid #242528'
                  }}
                >
                  {/* Event Header */}
                  <div className="flex flex-row justify-between items-start gap-[10px]">
                    <div className="flex flex-col flex-1">
                      <h4 
                        className="text-[20px] font-semibold leading-[1.4]"
                        style={{ 
                          color: '#F1F2F4',
                          fontFamily: 'Figtree, sans-serif'
                        }}
                      >
                        {event.title}
                      </h4>
                      <span 
                        className="text-[16px] font-medium leading-[1.5]"
                        style={{ 
                          color: '#8A8D94',
                          fontFamily: 'Figtree, sans-serif'
                        }}
                      >
                        {event.location}
                      </span>
                    </div>
                    <span 
                      className="px-[12px] py-[4px] rounded-full text-[14px] font-medium whitespace-nowrap"
                      style={{ 
                        background: '#1B1C1F',
                        color: '#C9CBD2',
                        fontFamily: 'Figtree, sans-serif'
                      }}
                    >
                      {event.tag}
                    </span>
                  </div>
                  
                  {/* Event Date and Info */}
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex flex-row items-center gap-[6px]">
                      <span 
                        className="text-[16px] font-medium leading-[1.5]"
                        style={{ 
                          color: '#8A8D94',
                          fontFamily: 'Figtree, sans-serif'
                        }}
                      >
                        {event.date}
                      </span>
                      <span 
                        className="w-[4px] h-[4px] rounded-full"
                        style={{ background: '#8A8D94' }}
                      />
                      <span 
                        className="text-[16px] font-medium leading-[1.5]"
                        style={{ 
                          color: '#8A8D94',
                          fontFamily: 'Figtree, sans-serif'
                        }}
                      >
                        {event.time}
                      </span>
                    </div>
                    <p 
                      className="text-[16px] font-medium leading-[1.5]"
                      style={{ 
                        color: '#F1F2F4',
                        fontFamily: 'Figtree, sans-serif'
                      }}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
