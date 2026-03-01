"use client";

import { useRef, useState } from "react";

export function VideoContainer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full flex flex-col justify-stretch items-stretch gap-2 p-6 md:p-[24px] min-h-[300px] md:min-h-[400px] lg:min-h-[525px] xl:min-h-[645px] rounded-2xl bg-app border border-border-default">
      <div className="flex-1 relative w-full rounded-[16px] md:rounded-[24px] overflow-hidden bg-surface/40 min-h-[200px] md:min-h-[350px]">
        {/* Video with poster thumbnail, muted, first-frame preview */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-[16px] md:rounded-[24px]"
          src="/assets/promo.mp4"
          poster="/assets/promo-thumbnail.jpg"
          muted
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Play Video button - centered overlay, hidden when playing */}
        {!isPlaying && (
          <button
            type="button"
            onClick={() => {
              if (!videoRef.current) return;
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Ignore play interruption errors (e.g., autoplay policies)
                });
              }
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center gap-2 py-2 pl-2 pr-3 rounded-full bg-page/[0.08] backdrop-blur-[40px] hover:bg-page/[0.16] transition-colors border-0"
            aria-label="Play video"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </div>
            <span className="text-regular font-semibold text-primary">
              Play Video
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
