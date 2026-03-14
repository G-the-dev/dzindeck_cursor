"use client";

import Link from "next/link";
import Image from "next/image";

export default function PasswordUpdatedPage() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center px-[16px] py-[80px]"
      style={{ background: '#0E0E10' }}
    >
      {/* Root Container */}
      <div 
        className="relative rounded-[32px] p-[8px]"
        style={{ background: '#1B1C1F' }}
      >
        {/* Main Container */}
        <div 
          className="rounded-[32px] p-[24px] flex flex-col items-center gap-[24px]"
          style={{ 
            background: '#141416',
            width: '501px'
          }}
        >
          {/* Icon Shine Logo */}
          <div className="relative w-[76px] h-[76px]">
            <Image
              src="/assets/SVGs/Icon Shine.svg"
              alt="Dzindeck"
              width={76}
              height={76}
              className="rounded-[16px]"
              priority
            />
          </div>

          {/* Welcome Container */}
          <div className="flex flex-col items-center gap-[12px] w-full">
            <div className="flex flex-col items-center gap-[8px]">
              <h1 
                className="text-[32px] font-medium text-center"
                style={{ 
                  fontFamily: 'Figtree, sans-serif',
                  fontWeight: 500,
                  lineHeight: '1.1875em',
                  letterSpacing: '-0.625%',
                  color: '#F1F2F4'
                }}
              >
                Password updated
              </h1>
              <p 
                className="text-[16px] font-medium text-center"
                style={{ 
                  fontFamily: 'Figtree, sans-serif',
                  fontWeight: 500,
                  lineHeight: '1.5em',
                  color: '#8A8D94',
                  width: '372px'
                }}
              >
                Your password has been successfully updated. You can now sign in with your new password.
              </p>
            </div>
          </div>

          {/* Success Icon */}
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: '#22C55E' }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#0E0E10"/>
            </svg>
          </div>

          {/* Sign In Button */}
          <Link
            href="/signin"
            className="w-full flex items-center justify-center gap-[8px] px-[24px] py-[16px] rounded-[16px] text-[16px] font-bold"
            style={{ 
              fontFamily: 'Figtree, sans-serif',
              background: '#F1F2F4',
              color: '#0E0E10',
              lineHeight: '1.5em'
            }}
          >
            <span 
              className="w-[5px] h-[5px] rounded-full"
              style={{ background: '#22C55E' }}
            />
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
