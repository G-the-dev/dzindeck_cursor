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
      playPromise.catch(() => {});
    }
  };

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] pb-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Outer card */}
        <div
          className="relative w-full rounded-[32px] p-[16px]"
          style={{
            background: '#141416',
            border: '1.2px solid #242528',
          }}
        >
          {/* Video Frame */}
          <div
            className="relative w-full rounded-[24px] overflow-hidden"
            style={{
              aspectRatio: '16/9',
              background: '#0E0E10',
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

            {/* Play overlay */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center gap-[10px] py-[8px] pl-[8px] pr-[16px] rounded-full"
                style={{
                  background: 'rgba(14,14,16,0.60)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                aria-label="Play video"
              >
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(241,242,244,0.15)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F1F2F4">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
                <span className="text-[16px] font-semibold text-[#F1F2F4]">
                  Play Video
                </span>
              </button>
            )}

            {/* Bottom tabs inside video */}
            <div
              className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex flex-row items-center gap-[4px] p-[6px] rounded-[20px]"
              style={{
                background: 'rgba(27,28,31,0.85)',
                border: '1.2px solid #242528',
                backdropFilter: 'blur(20px)',
                whiteSpace: 'nowrap',
              }}
            >
              {VIDEO_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex flex-row items-center gap-[8px] px-[16px] py-[10px] rounded-[14px] transition-all"
                    style={{
                      background: isActive ? '#F1F2F4' : 'transparent',
                      color: isActive ? '#0E0E10' : '#C9CBD2',
                      fontSize: '15px',
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    <img
                      src={tab.iconSrc}
                      alt={tab.label}
                      className="w-[18px] h-[18px]"
                      style={{
                        objectFit: 'contain',
                        filter: isActive
                          ? 'brightness(0)'
                          : 'brightness(0) invert(1) opacity(0.8)',
                      }}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
