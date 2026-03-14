"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setIsSent(true);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to send reset link');
      }
    } catch (error) {
      alert('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

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
                Reset your password
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
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
            </div>
          </div>

          {/* Form Container */}
          {isSent ? (
            <div className="flex flex-col items-center gap-[20px] w-full">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: '#22C55E' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#0E0E10"/>
                </svg>
              </div>
              <p 
                className="text-[16px] font-medium text-center"
                style={{ fontFamily: 'Figtree, sans-serif', color: '#8A8D94' }}
              >
                Check your email for the reset link.
              </p>
              <Link
                href="/signin"
                className="text-[16px] font-bold hover:underline"
                style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
              >
                Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full">
              <div className="flex flex-col gap-[16px]">
                {/* Email Input */}
                <div className="flex flex-col gap-[8px]">
                  <label 
                    className="text-[16px] font-medium"
                    style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
                  >
                    Email*
                  </label>
                  <div 
                    className="flex items-center gap-[16px] px-[16px] py-[12px] rounded-[16px]"
                    style={{
                      background: '#141416',
                      border: `1px solid ${emailFocused ? '#F1F2F4' : '#242528'}`
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                      className="flex-1 bg-transparent outline-none text-[16px] font-medium"
                      style={{ 
                        fontFamily: 'Figtree, sans-serif',
                        color: '#F1F2F4',
                        lineHeight: '1.5em'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Send Reset Link Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-[8px] px-[24px] py-[16px] rounded-[16px] text-[16px] font-bold disabled:opacity-50"
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
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>

              {/* Back to Sign In */}
              <Link
                href="/signin"
                className="text-[16px] font-bold text-center hover:underline"
                style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
              >
                Back to Sign In
              </Link>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
