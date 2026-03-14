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

const SOCIAL_LINKS = [
  { name: "LinkedIn", iconSrc: "/assets/SVGs/Style=Fill, Icon=LinkedIn.svg" },
  { name: "Instagram", iconSrc: "/assets/SVGs/Style=Fill, Icon=Instagram.svg" },
  { name: "Twitter", iconSrc: "/assets/SVGs/Style=Fill, Icon=Twitter(X).svg" },
  { name: "Medium", iconSrc: "/assets/SVGs/Style=Fill, Icon=Medium.svg" },
  { name: "Discord", iconSrc: "/assets/SVGs/Style=Fill, Icon=Discord.svg" },
];

export function Footer() {
  return (
    <footer className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10] relative">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="text-[#242528]">
          <pattern id="footerDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerDots)" />
        </svg>
      </div>

      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto relative z-10">
        {/* Footer Columns */}
        <div className="flex flex-col lg:flex-row justify-between gap-[80px] mb-[60px]">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-[16px]">
              <h4 className="text-[16px] font-medium text-[#F1F2F4]">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-[12px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[16px] font-medium text-[#8A8D94] hover:text-[#F1F2F4] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[48px] pt-[48px] border-t border-[#242528]">
          <p className="text-[16px] font-medium text-[#F1F2F4]">
            © 2026 Dzindeck. All rights reserved.
          </p>
          
          {/* Logo */}
          <div className="w-[40px] h-[40px]">
            <img
              src="/assets/SVGs/Logo.svg"
              alt="Dzindeck"
              className="w-10 h-10"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-row gap-[16px]">
            {SOCIAL_LINKS.map((social) => (
              <button
                key={social.name}
                className="w-10 h-10 rounded-[12px] bg-[#1B1C1F] flex items-center justify-center hover:bg-[#242528] transition-colors"
                aria-label={social.name}
              >
                <img src={social.iconSrc} alt={social.name} className="w-[20px] h-[20px]" style={{ objectFit: 'contain' }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
