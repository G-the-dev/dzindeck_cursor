"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

function SetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/auth/set-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      
      if (res.ok) {
        router.push('/password-updated');
      } else {
        const data = await res.json();
        if (data.code === 'LINK_EXPIRED') {
          router.push('/link-expired');
        } else {
          setError(data.error || 'Failed to reset password');
        }
      }
    } catch (error) {
      setError('An error occurred');
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
                Set new password
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
                Create a new password for your account.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full">
            <div className="flex flex-col gap-[16px]">
              {/* New Password Input */}
              <div className="flex flex-col gap-[8px]">
                <label 
                  className="text-[16px] font-medium"
                  style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
                >
                  New Password*
                </label>
                <div 
                  className="flex items-center gap-[16px] px-[16px] py-[12px] rounded-[16px]"
                  style={{
                    background: '#141416',
                    border: `1px solid ${passwordFocused ? '#F1F2F4' : '#242528'}`
                  }}
                >
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    className="flex-1 bg-transparent outline-none text-[16px] font-medium"
                    style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#F1F2F4',
                      lineHeight: '1.5em'
                    }}
                  />
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="flex flex-col gap-[8px]">
                <label 
                  className="text-[16px] font-medium"
                  style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
                >
                  Confirm Password*
                </label>
                <div 
                  className="flex items-center gap-[16px] px-[16px] py-[12px] rounded-[16px]"
                  style={{
                    background: '#141416',
                    border: `1px solid ${confirmFocused ? '#F1F2F4' : '#242528'}`
                  }}
                >
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setConfirmFocused(true)}
                    onBlur={() => setConfirmFocused(false)}
                    className="flex-1 bg-transparent outline-none text-[16px] font-medium"
                    style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#F1F2F4',
                      lineHeight: '1.5em'
                    }}
                  />
                </div>
              </div>

              {error && (
                <p 
                  className="text-[14px] font-medium"
                  style={{ fontFamily: 'Figtree, sans-serif', color: '#EF4444' }}
                >
                  {error}
                </p>
              )}
            </div>

            {/* Reset Password Button */}
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
              {isLoading ? 'Resetting...' : 'Reset Password'}
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
        </div>
      </div>
    </main>
  );
}

export default function SetPasswordPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#0E0E10' }}>
        <div className="text-[#F1F2F4]">Loading...</div>
      </main>
    }>
      <SetPasswordForm />
    </Suspense>
  );
}
