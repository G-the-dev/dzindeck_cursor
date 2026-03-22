"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Container } from "./Container";
import { useAuth } from "@/contexts/AuthContext";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Designathons", href: "/designathons" },
  { label: "Workshops", href: "/workshops" },
  { label: "Meetups", href: "/meetups" },
  { label: "Events", href: "/events", hasDropdown: true },
];

const LOGGED_IN_NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "My Events", href: "/my-events" },
  { label: "Designathons", href: "/designathons" },
  { label: "Workshops", href: "/workshops" },
  { label: "Meetups", href: "/meetups", hasDropdown: true },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-4 pb-4">
        <nav
          className={cn(
            "navbar-glass",
            "w-full flex flex-col justify-center items-stretch",
            "border border-[1.2px] border-border-default rounded-[24px]",
            "px-4 py-3 md:px-[12px] md:py-3 md:pl-4",
          )}
        >
          <div className="flex flex-row justify-between items-center w-full gap-4 lg:gap-[211px]">
            {/* Logo and Title */}
            <Link
              href="/"
              className="flex flex-row items-center gap-2 shrink-0"
            >
              <div className="w-10 h-10 relative flex items-center justify-center">
                <Image
                  src="/assets/SVGs/Logo.svg"
                  alt="Dzindeck"
                  width={40}
                  height={42}
                  className="text-primary"
                />
              </div>
              <span className="text-medium-lg font-semibold text-primary">
                Dzindeck
              </span>
            </Link>

            {/* Hamburger - Phone & Tablet only */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="flex lg:hidden p-2 rounded-xl text-primary hover:bg-state-hovered transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>

            {/* Nav Links - Macbook & Desktop only */}
            <div className="hidden lg:flex flex-row justify-center items-center gap-1">
              {(isLoggedIn ? LOGGED_IN_NAV_LINKS : NAV_LINKS).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "flex flex-row justify-center items-center gap-2 px-5 py-4 rounded-xl text-regular font-medium text-center",
                    link.active
                      ? "bg-surface border border-[1.2px] border-border-default text-primary"
                      : "text-primary hover:bg-state-hovered",
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <img
                      src="/assets/SVGs/Style=Fill, Icon=Alt Down.svg"
                      alt="dropdown"
                      width={20}
                      height={20}
                      className="shrink-0"
                      style={{
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)',
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Sign In + CTA - Macbook/Desktop only (lg+); Phone/Tablet see in hamburger menu */}
            <div className="hidden lg:flex flex-row justify-end items-center gap-6">
              {isLoggedIn ? (
                <>
                  {/* User Avatar */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-bold"
                      style={{ 
                        background: '#1B1C1F',
                        border: '1px solid #242528',
                        color: '#F1F2F4'
                      }}
                    >
                      {user?.fullName?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <button
                      onClick={logout}
                      className="text-regular font-bold text-primary hover:text-secondary"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="text-regular font-bold text-primary hover:text-secondary"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/organize"
                    className="flex flex-row justify-center items-center gap-2 px-6 py-4 rounded-xl bg-primary text-tertiary text-regular font-bold border border-[1.2px] border-border-default shadow-primary-btn"
                  >
                    Organize an Event
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {menuOpen && (
            <div className="flex lg:hidden flex-col gap-2 pt-4 mt-2 border-t border-border-default">
              {(isLoggedIn ? LOGGED_IN_NAV_LINKS : NAV_LINKS).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-5 py-4 rounded-xl text-regular font-medium",
                    link.active
                      ? "bg-surface text-primary"
                      : "text-primary hover:bg-state-hovered",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center gap-3 px-5 py-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-bold"
                        style={{ 
                          background: '#1B1C1F',
                          border: '1px solid #242528',
                          color: '#F1F2F4'
                        }}
                      >
                        {user?.fullName?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <span className="text-regular font-medium text-primary">{user?.fullName}</span>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="px-5 py-4 rounded-xl text-regular font-bold text-primary text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="px-5 py-4 rounded-xl text-regular font-bold text-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/organize"
                      className="px-6 py-4 rounded-xl bg-primary text-tertiary text-regular font-bold text-center"
                      onClick={() => setMenuOpen(false)}
                    >
                      Organize an Event
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

