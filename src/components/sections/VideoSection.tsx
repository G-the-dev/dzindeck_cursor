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
  const [activeTab, setActiveTab] = useState("workshops");

  const handlePlay = () => {
    if (!videoRef.current) return;
    const promise = videoRef.current.play();
    if (promise !== undefined) promise.catch(() => {});
  };

  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] pb-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* Outer card */}
        <div
          className="relative w-full rounded-[32px] p-[16px] flex flex-col gap-[16px]"
          style={{
            background: '#141416',
            border: '1.2px solid #242528',
          }}
        >
          {/* Video Frame — standalone, no tabs inside */}
          <div
            className="relative w-full rounded-[24px] overflow-hidden"
            style={{ aspectRatio: '16/9', background: '#0E0E10' }}
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

            {/* Play overlay — centered in video */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center gap-[10px] py-[10px] pl-[10px] pr-[20px] rounded-full"
                style={{
                  background: 'rgba(30, 28, 24, 0.70)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
                aria-label="Play video"
              >
                {/* Play icon circle */}
                <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <img
                    src="/assets/SVGs/Style=Fill, Icon=Play.svg"
                    alt="Play"
                    className="w-[20px] h-[20px]"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span className="text-[15px] font-semibold text-[#F1F2F4] whitespace-nowrap">
                  Play Video
                </span>
              </button>
            )}
          </div>

          {/* Tab bar — BELOW the video, inside the outer card */}
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <div
              className="flex flex-row items-center gap-[4px] p-[5px] rounded-[20px]"
              style={{
                background: '#1B1C1F',
                border: '1px solid #242528',
              }}
            >
              {VIDEO_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex flex-row items-center gap-[8px] px-[16px] py-[10px] rounded-[14px] transition-all duration-200"
                    style={{
                      background: isActive ? '#F1F2F4' : 'transparent',
                      color: isActive ? '#0E0E10' : '#C9CBD2',
                    }}
                  >
                    <img
                      src={tab.iconSrc}
                      alt={tab.label}
                      className="w-[20px] h-[20px] flex-shrink-0"
                      style={{
                        objectFit: 'contain',
                        filter: isActive
                          ? 'brightness(0)'
                          : 'brightness(0) invert(1)',
                      }}
                    />
                    <span className="text-[15px] font-semibold whitespace-nowrap">
                      {tab.label}
                    </span>
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
