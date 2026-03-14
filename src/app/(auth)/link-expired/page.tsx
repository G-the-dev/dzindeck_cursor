"use client";

import Link from "next/link";
import Image from "next/image";

export default function LinkExpiredPage() {
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

          {/* Expired Container */}
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
                Link expired
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
                This password reset link has expired. Please request a new one.
              </p>
            </div>
          </div>

          {/* Expired Icon */}
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: '#F59E0B' }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#0E0E10"/>
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-[12px] w-full">
            <Link
              href="/reset-password"
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
              Request New Link
            </Link>
            
            <Link
              href="/signin"
              className="w-full flex items-center justify-center gap-[8px] px-[24px] py-[16px] rounded-[16px] text-[16px] font-bold border"
              style={{ 
                fontFamily: 'Figtree, sans-serif',
                background: 'transparent',
                borderColor: '#242528',
                color: '#F1F2F4',
                lineHeight: '1.5em'
              }}
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
