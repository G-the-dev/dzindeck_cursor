"use client";

import { Button } from "@/components/ui/Button";

// Calendar Icon - 20x20 with 12px radius container
function IconCalendar() {
  return (
    <div 
      className="w-[32px] h-[32px] flex items-center justify-center rounded-[12px]"
      style={{ background: '#1B1C1F' }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 1.66666V4.16666M13.3333 1.66666V4.16666M2.91667 7.57499H17.0833M17.5 7.08332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08332C2.5 4.58332 3.75 2.91666 6.66667 2.91666H13.3333C16.25 2.91666 17.5 4.58332 17.5 7.08332Z" stroke="#C9CBD2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.079 11.4167H13.0865M13.079 13.9167H13.0865M9.99623 11.4167H10.0037M9.99623 13.9167H10.0037M6.91209 11.4167H6.91957M6.91209 13.9167H6.91957" stroke="#C9CBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// Clock Icon - 20x20 with 12px radius container
function IconClock() {
  return (
    <div 
      className="w-[32px] h-[32px] flex items-center justify-center rounded-[12px]"
      style={{ background: '#1B1C1F' }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3333 10C18.3333 14.6 14.6 18.3333 10 18.3333C5.4 18.3333 1.66667 14.6 1.66667 10C1.66667 5.39999 5.4 1.66666 10 1.66666C14.6 1.66666 18.3333 5.39999 18.3333 10Z" stroke="#C9CBD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.0917 12.65L10.5083 11.1083C10.0583 10.8417 9.69167 10.2 9.69167 9.67499V6.25833" stroke="#C9CBD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// Bookmark Icon
function IconBookmark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0167 2.5H5.98333C4.7 2.5 3.66667 3.54167 3.66667 4.83333V16.2583C3.66667 17.35 4.425 17.825 5.35 17.3167L9.24167 15.1583C9.65833 14.925 10.3333 14.925 10.7417 15.1583L14.6333 17.3167C15.5583 17.8333 16.3167 17.3583 16.3167 16.2583V4.83333C16.3333 3.54167 15.3 2.5 14.0167 2.5Z" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const EVENTS = [
  {
    id: 1,
    title: "UX Research Community Meetup",
    description: "An open discussion on UX research methods, challenges, and real-world practices.",
    tags: ["Panel Discussion", "Label"],
    cost: "Free",
    date: "Wed, Dec 09",
    time: "9:30 PM IST",
    attendees: "160 attendees",
    hostCount: 4,
    hostExtra: "+100",
  },
  {
    id: 2,
    title: "Design Systems Workshop",
    description: "Learn to build scalable design systems with Figma and React components.",
    tags: ["Workshop", "Label"],
    cost: "₹500",
    date: "Fri, Dec 15",
    time: "6:00 PM IST",
    attendees: "85 attendees",
    hostCount: 2,
    hostExtra: "+50",
  },
  {
    id: 3,
    title: "Diversity in Design",
    description: "A panel discussion featuring diverse perspectives on inclusion and representation in design.",
    tags: ["Panel Discussion", "Label"],
    cost: "Free",
    date: "Mon, Dec 18",
    time: "7:00 PM IST",
    attendees: "200 attendees",
    hostCount: 3,
    hostExtra: "+75",
  },
];

export function EventsSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Header Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[20px] mb-[80px]">
          <div className="flex flex-col gap-[20px]">
            <h2 
              className="text-[48px] font-semibold leading-[1.208] tracking-[-0.833%]"
              style={{ color: '#F1F2F4', fontFamily: 'Figtree, sans-serif' }}
            >
              Upcoming Design & Tech Events
            </h2>
            <p 
              className="text-[20px] font-medium leading-[1.4] max-w-[600px]"
              style={{ color: '#8A8D94', fontFamily: 'Figtree, sans-serif' }}
            >
              Curated workshops, meetups, and designathons from trusted organizers across India
            </p>
          </div>
          <Button 
            variant="primary" 
            size="sm"
            className="rounded-[16px] px-[16px] py-[12px] text-[16px] font-semibold"
            style={{ 
              background: '#F1F2F4', 
              color: '#0E0E10', 
              border: '1.2px solid #242528',
              fontFamily: 'Figtree, sans-serif'
            }}
          >
            View All
          </Button>
        </div>

        {/* Event Cards Slider */}
        <div className="flex flex-row gap-[32px] overflow-x-auto pb-4 scrollbar-hide">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 flex flex-col rounded-[32px] p-[16px]"
              style={{
                width: '380px',
                background: '#141416',
                border: '1.2px solid #242528'
              }}
            >
              {/* Event Image */}
              <div 
                className="relative w-full h-[200px] rounded-[16px] mb-[16px] overflow-hidden"
                style={{ background: '#1B1C1F' }}
              >
                {/* Cost Badge */}
                <div 
                  className="absolute top-[12px] left-[12px] px-[12px] py-[4px] rounded-full"
                  style={{ 
                    background: '#1B1C1F', 
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span 
                    className="text-[16px] font-medium"
                    style={{ color: '#F1F2F4', fontFamily: 'Figtree, sans-serif' }}
                  >
                    {event.cost}
                  </span>
                </div>
                {/* Bookmark Icon */}
                <button 
                  className="absolute top-[12px] right-[12px] w-[40px] h-[40px] rounded-full flex items-center justify-center"
                  style={{ 
                    background: '#1B1C1F',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <IconBookmark />
                </button>
              </div>

              {/* Event Card Details */}
              <div className="flex flex-col gap-[16px] p-[8px]">
                {/* Tags */}
                <div className="flex flex-wrap gap-[8px]">
                  {event.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-[12px] py-[4px] rounded-full text-[14px] font-medium"
                      style={{ 
                        background: '#1B1C1F', 
                        color: '#C9CBD2',
                        fontFamily: 'Figtree, sans-serif'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Event Description */}
                <div className="flex flex-col gap-[8px]">
                  <h3 
                    className="text-[20px] font-semibold leading-[1.4]"
                    style={{ color: '#F1F2F4', fontFamily: 'Figtree, sans-serif' }}
                  >
                    {event.title}
                  </h3>
                  <p 
                    className="text-[14px] font-normal leading-[1.43] line-clamp-2"
                    style={{ color: '#8A8D94', fontFamily: 'Figtree, sans-serif' }}
                  >
                    {event.description}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="flex flex-row items-center gap-[16px] py-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <IconCalendar />
                    <span 
                      className="text-[14px] font-medium"
                      style={{ color: '#C9CBD2', fontFamily: 'Figtree, sans-serif' }}
                    >
                      {event.date}
                    </span>
                  </div>
                  <div 
                    className="h-[16px] w-[1px]"
                    style={{ background: '#3A3B40' }}
                  />
                  <div className="flex items-center gap-[8px]">
                    <IconClock />
                    <span 
                      className="text-[14px] font-medium"
                      style={{ color: '#C9CBD2', fontFamily: 'Figtree, sans-serif' }}
                    >
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Separator Line */}
                <div 
                  className="w-full h-[1px]"
                  style={{ background: '#242528' }}
                />

                {/* Host & Action */}
                <div className="flex flex-row justify-between items-center pt-[8px]">
                  {/* Host Avatars */}
                  <div className="flex items-center gap-[8px]">
                    <div className="flex -space-x-[8px]">
                      {[...Array(Math.min(event.hostCount, 3))].map((_, i) => (
                        <div
                          key={i}
                          className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                          style={{ 
                            background: '#1B1C1F',
                            border: '3px solid #141416'
                          }}
                        >
                          <span 
                            className="text-[12px] font-medium"
                            style={{ color: '#C9CBD2', fontFamily: 'Figtree, sans-serif' }}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                        </div>
                      ))}
                      <div 
                        className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                        style={{ 
                          background: '#C9CBD2',
                          border: '3px solid #141416'
                        }}
                      >
                        <span 
                          className="text-[10px] font-medium"
                          style={{ color: '#0E0E10', fontFamily: 'Figtree, sans-serif' }}
                        >
                          {event.hostExtra}
                        </span>
                      </div>
                    </div>
                    <span 
                      className="text-[14px] font-medium"
                      style={{ color: '#F1F2F4', fontFamily: 'Figtree, sans-serif' }}
                    >
                      {event.attendees}
                    </span>
                  </div>

                  {/* Register Button */}
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="rounded-[16px] px-[16px] py-[12px] text-[16px] font-semibold"
                    style={{ 
                      background: '#1B1C1F', 
                      color: '#F1F2F4', 
                      border: '1.2px solid #242528',
                      fontFamily: 'Figtree, sans-serif'
                    }}
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-[24px]">
          <div 
            className="w-[48px] h-[4px] rounded-full"
            style={{ background: '#3A3B40' }}
          />
        </div>
      </div>
    </section>
  );
}
