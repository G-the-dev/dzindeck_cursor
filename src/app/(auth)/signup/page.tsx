"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function SignUpPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameFocused, setFullNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        login({ fullName, email });
        router.push('/');
      } else {
        alert(data.error || 'Sign up failed');
      }
    } catch (error) {
      alert('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    window.location.href = '/api/auth/google';
  };

  const handleGithubSignUp = () => {
    window.location.href = '/api/auth/github';
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
                Create your Dzindeck account
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
                Discover curated design & tech events across India - all in one place.
              </p>
            </div>

            <p 
              className="text-[16px] font-medium"
              style={{ fontFamily: 'Figtree, sans-serif', color: '#8A8D94' }}
            >
              Already have an account?{" "}
              <Link 
                href="/signin" 
                className="hover:underline"
                style={{ color: '#F1F2F4' }}
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full">
            <div className="flex flex-col gap-[16px]">
              {/* Full Name Input */}
              <div className="flex flex-col gap-[8px]">
                <label 
                  className="text-[16px] font-medium"
                  style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
                >
                  Full name*
                </label>
                <div 
                  className="flex items-center gap-[16px] px-[16px] py-[12px] rounded-[16px]"
                  style={{
                    background: '#141416',
                    border: `1px solid ${fullNameFocused ? '#F1F2F4' : '#242528'}`
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onFocus={() => setFullNameFocused(true)}
                    onBlur={() => setFullNameFocused(false)}
                    className="flex-1 bg-transparent outline-none text-[16px]"
                    style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#3A3B40',
                      lineHeight: '1.5em'
                    }}
                  />
                </div>
              </div>

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
                    className="flex-1 bg-transparent outline-none text-[16px]"
                    style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#3A3B40',
                      lineHeight: '1.5em'
                    }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-[8px]">
                <label 
                  className="text-[16px] font-medium"
                  style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
                >
                  Password*
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
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    className="flex-1 bg-transparent outline-none text-[16px]"
                    style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#3A3B40',
                      lineHeight: '1.5em'
                    }}
                  />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#3A3B40"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Create Account Button */}
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
              {isLoading ? 'Creating...' : 'Create Account'}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-[20px]">
              <div 
                className="flex-1 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(67,67,67,0) 0%, rgba(67,67,67,1) 100%)'
                }}
              />
              <span 
                className="text-[14px] font-medium whitespace-nowrap"
                style={{ fontFamily: 'Figtree, sans-serif', color: '#3A3B40' }}
              >
                Or sign up with
              </span>
              <div 
                className="flex-1 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(67,67,67,1) 0%, rgba(67,67,67,0) 100%)'
                }}
              />
            </div>

            {/* Social Buttons */}
            <div className="flex gap-[16px]">
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="flex-1 flex items-center justify-center gap-[8px] px-[16px] py-[16px] rounded-[16px] border text-[16px] font-medium"
                style={{ 
                  fontFamily: 'Figtree, sans-serif',
                  background: 'transparent',
                  borderColor: '#242528',
                  color: '#F1F2F4',
                  lineHeight: '1.5em'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.171 8.367h-7.67V11.6h4.405c-.193 1.086-.782 2.007-1.664 2.624l2.695 2.09c1.57-1.45 2.476-3.585 2.476-6.117 0-.59-.053-1.16-.242-1.83z" fill="#4285F4"/>
                  <path d="M9.5 18c2.97 0 5.46-.98 7.28-2.65l-2.695-2.09c-.98.66-2.235 1.05-3.585 1.05-2.76 0-5.1-1.86-5.935-4.365L1.62 12.09C3.44 15.62 7.12 18 9.5 18z" fill="#34A853"/>
                  <path d="M3.565 10.045c-.22-.66-.345-1.365-.345-2.085s.125-1.425.345-2.085L1.62 3.835C.795 5.485.325 7.345.325 9.46c0 2.115.47 3.975 1.295 5.625l1.945-1.52z" fill="#FBBC05"/>
                  <path d="M9.5 3.64c1.56 0 2.955.535 4.055 1.585l3.045-3.045C14.955 1.095 12.465 0 9.5 0 7.12 0 3.44 2.38 1.62 5.91l1.945 1.52c.835-2.505 3.175-4.365 5.935-4.365z" fill="#EB4335"/>
                </svg>
                Google
              </button>

              <button
                type="button"
                onClick={handleGithubSignUp}
                className="flex-1 flex items-center justify-center gap-[8px] px-[16px] py-[16px] rounded-[16px] border text-[16px] font-medium"
                style={{ 
                  fontFamily: 'Figtree, sans-serif',
                  background: 'transparent',
                  borderColor: '#242528',
                  color: '#F1F2F4',
                  lineHeight: '1.5em'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.197 20 14.442 20 10.017 20 4.484 15.522 0 10 0z" fill="#F1F2F4"/>
                </svg>
                Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
