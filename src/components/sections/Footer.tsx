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

// Social icons — using provided SVG assets at 24px
const SOCIAL_ICONS = [
  { name: "LinkedIn", src: "/assets/SVGs/Style=Fill, Icon=LinkedIn.svg" },
  { name: "Instagram", src: "/assets/SVGs/Style=Fill, Icon=Instagram.svg" },
  { name: "Twitter", src: "/assets/SVGs/Style=Fill, Icon=Twitter(X).svg" },
  { name: "Medium", src: "/assets/SVGs/Style=Fill, Icon=Medium.svg" },
  { name: "Discord", src: "/assets/SVGs/Style=Fill, Icon=Discord.svg" },
];

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
    <footer className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] pt-[0px] pb-[48px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">

        {/* Footer Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[64px]">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-[20px]">
              <h4 className="text-[14px] font-semibold text-[#F1F2F4] tracking-[0.01em]">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-[14px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px] font-normal text-[#8A8D94] hover:text-[#F1F2F4] transition-colors leading-[1.4]"
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-[24px]">
          {/* Copyright */}
          <p className="text-[13px] font-normal text-[#8A8D94]">
            © 2026 Dzindeck. All rights reserved.
          </p>

          {/* Center Logo */}
          <img
            src="/assets/SVGs/Logo.svg"
            alt="Dzindeck"
            width={36}
            height={36}
            style={{ objectFit: 'contain' }}
          />

          {/* Social Icons — 24px icons in small boxes */}
          <div className="flex flex-row gap-[8px]">
            {SOCIAL_ICONS.map(({ name, src }) => (
              <button
                key={name}
                className="w-[40px] h-[40px] rounded-[12px] flex items-center justify-center transition-colors hover:bg-[#242528]"
                style={{ background: '#1B1C1F', border: '1px solid #242528' }}
                aria-label={name}
              >
                <img
                  src={src}
                  alt={name}
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
