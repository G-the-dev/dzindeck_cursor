"use client";

import { useRef, useState } from "react";

const VIDEO_TABS = [
  { id: "designathons", label: "Designathons", iconSrc: "/assets/SVGs/Style=Fill, Icon=Designathon.svg" },
  { id: "workshops", label: "Workshops", iconSrc: "/assets/SVGs/Style=Fill, Icon=Workshop.svg" },
  { id: "conference", label: "Conference", iconSrc: "/assets/SVGs/Style=Fill, Icon=Conference.svg" },
  { id: "meetups", label: "Meetups", iconSrc: "/assets/SVGs/Style=Fill, Icon=Meetup.svg" },
];

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("meetups");

  const handlePlay = () => {
    if (!videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Ignore play interruption errors
      });
    }
  };

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] pb-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Video Container with border */}
        <div 
          className="relative w-full rounded-[32px] p-[24px]"
          style={{
            background: '#141416',
            border: '1.2px solid #242528'
          }}
        >
          {/* Video Frame */}
          <div 
            className="relative w-full rounded-[24px] overflow-hidden"
            style={{ 
              aspectRatio: '16/9',
              background: '#1B1C1F'
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/assets/promo.mp4"
              poster="/assets/promo-thumbnail.jpg"
              muted
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play Video Button - centered overlay */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center gap-[8px] py-[8px] pl-[8px] pr-[12px] rounded-full"
                style={{
                  background: 'rgba(14, 14, 16, 0.08)',
                  backdropFilter: 'blur(40px)'
                }}
                aria-label="Play video"
              >
                <div 
                  className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(241, 242, 244, 0.1)' }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#F1F2F4"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
                <span 
                  className="text-[16px] font-semibold"
                  style={{ color: '#F1F2F4', fontFamily: 'Figtree, sans-serif' }}
                >
                  Play Video
                </span>
              </button>
            )}

            {/* Slider Tabs - Positioned at bottom center inside video */}
            <div 
              className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex flex-row items-center gap-[24px] p-[8px] rounded-[16px]"
              style={{
                background: '#1B1C1F',
                border: '1.2px solid #242528',
                backdropFilter: 'blur(33px)'
              }}
            >
              {VIDEO_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex flex-row items-center gap-[8px] px-[20px] py-[16px] rounded-[16px] transition-all"
                  style={{
                    background: activeTab === tab.id ? '#F1F2F4' : 'transparent',
                    color: activeTab === tab.id ? '#0E0E10' : '#C9CBD2',
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '16px',
                    fontWeight: activeTab === tab.id ? 700 : 500
                  }}
                >
                  {/* Icon */}
                  <span className="w-[20px] h-[20px] flex items-center justify-center">
                    <img 
                      src={tab.iconSrc} 
                      alt={tab.label} 
                      className="w-[20px] h-[20px]"
                      style={{
                        objectFit: 'contain',
                        filter: activeTab === tab.id 
                          ? 'brightness(0)' 
                          : 'brightness(0) invert(1) opacity(0.8)'
                      }}
                    />
                  </span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
