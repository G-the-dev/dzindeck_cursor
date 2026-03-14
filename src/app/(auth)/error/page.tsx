"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ErrorContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'generic';
  
  const errorMessages: Record<string, { title: string; message: string }> = {
    'email': {
      title: 'Invalid email',
      message: 'Please check your email address and try again.'
    },
    'no-account': {
      title: 'Account not found',
      message: 'We couldn\'t find an account with that email. Please check or create a new account.'
    },
    'password': {
      title: 'Invalid password',
      message: 'The password you entered is incorrect. Please try again.'
    },
    'failed-attempt': {
      title: 'Too many attempts',
      message: 'You\'ve made too many failed attempts. Please try again later.'
    },
    'signup': {
      title: 'Sign up failed',
      message: 'We couldn\'t create your account. Please try again.'
    },
    'reset': {
      title: 'Reset failed',
      message: 'We couldn\'t reset your password. Please try again.'
    },
    'generic': {
      title: 'Something went wrong',
      message: 'An unexpected error occurred. Please try again.'
    }
  };
  
  const error = errorMessages[type] || errorMessages['generic'];

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

          {/* Error Container */}
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
                {error.title}
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
                {error.message}
              </p>
            </div>
          </div>

          {/* Error Icon */}
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: '#EF4444' }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#0E0E10"/>
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-[12px] w-full">
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
              Back to Sign In
            </Link>
            
            {(type === 'no-account' || type === 'signup') && (
              <Link
                href="/signup"
                className="w-full flex items-center justify-center gap-[8px] px-[24px] py-[16px] rounded-[16px] text-[16px] font-bold border"
                style={{ 
                  fontFamily: 'Figtree, sans-serif',
                  background: 'transparent',
                  borderColor: '#242528',
                  color: '#F1F2F4',
                  lineHeight: '1.5em'
                }}
              >
                Create Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#0E0E10' }}>
        <div className="text-[#F1F2F4]">Loading...</div>
      </main>
    }>
      <ErrorContent />
    </Suspense>
  );
}
