"use client";

import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Discover",
    links: ["Meetups", "Workshops", "Designathons", "Conferences"],
  },
  {
    title: "Community",
    links: ["Organize an Event", "Organizer Guidelines", "Event Promotion", "FAQs"],
  },
  {
    title: "Company",
    links: ["About", "Partner With Us", "Terms", "Privacy"],
  },
  {
    title: "Support",
    links: ["Help", "Contact Us", "Report an Event"],
  },
];

// Social icon components using SVG paths to match design
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="#F1F2F4" strokeWidth="1.5"/>
      <path d="M7 10V17M7 7.01L7.01 6.999M11 17V13.5C11 12.119 12.119 11 13.5 11C14.881 11 16 12.119 16 13.5V17M11 10V17" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#F1F2F4" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="#F1F2F4" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="0.75" fill="#F1F2F4"/>
    </svg>
  );
}

function IconTwitterX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L20 20M4 20L20 4" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconMedium() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7L8.5 17L14 7M17 7C17 7 17 17 17 17M21 7C21 7 21 17 21 17" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12C9 12.552 8.552 13 8 13C7.448 13 7 12.552 7 12C7 11.448 7.448 11 8 11C8.552 11 9 11.448 9 12ZM17 12C17 12.552 16.552 13 16 13C15.448 13 15 12.552 15 12C15 11.448 15.448 11 16 11C16.552 11 17 11.448 17 12Z" fill="#F1F2F4"/>
      <path d="M8.5 6.5C10.3 6 13.7 6 15.5 6.5M8 17.5C8 17.5 6 16.5 5 14C5 14 5.5 10 8.5 9M16 17.5C16 17.5 18 16.5 19 14C19 14 18.5 10 15.5 9" stroke="#F1F2F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Dot divider for footer center line
function DotDivider() {
  return (
    <div className="relative w-full flex items-center my-[48px]">
      <div className="flex-1 h-[1px] bg-[#242528]" />
      <div className="w-[6px] h-[6px] rounded-full bg-[#3A3B40] mx-[12px] flex-shrink-0" />
      <div className="flex-1 h-[1px] bg-[#242528]" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] pt-[0px] pb-[48px] bg-[#0E0E10] relative">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[48px] lg:gap-[80px] mb-0">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-[20px]">
              <h4 className="text-[15px] font-semibold text-[#F1F2F4] tracking-[0.02em]">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-[14px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[15px] font-normal text-[#8A8D94] hover:text-[#F1F2F4] transition-colors leading-[1.4]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dot Divider */}
        <DotDivider />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[32px]">
          {/* Copyright */}
          <p className="text-[14px] font-normal text-[#8A8D94]">
            © 2026 Dzindeck. All rights reserved.
          </p>

          {/* Center Logo */}
          <div className="w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
            <img
              src="/assets/SVGs/Logo.svg"
              alt="Dzindeck"
              className="w-[36px] h-[36px]"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-[12px]">
            {[
              { name: "LinkedIn", Icon: IconLinkedIn },
              { name: "Instagram", Icon: IconInstagram },
              { name: "Twitter", Icon: IconTwitterX },
              { name: "Medium", Icon: IconMedium },
              { name: "Discord", Icon: IconDiscord },
            ].map(({ name, Icon }) => (
              <button
                key={name}
                className="w-[40px] h-[40px] rounded-[12px] flex items-center justify-center hover:bg-[#242528] transition-colors"
                style={{ background: '#1B1C1F', border: '1px solid #242528' }}
                aria-label={name}
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
