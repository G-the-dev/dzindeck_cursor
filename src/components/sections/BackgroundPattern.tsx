export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gradient mask - fades blocks at top (Figma: radial from black to transparent) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, transparent 0%, var(--bg-page) 95%)",
        }}
      />
      {/* Grid of blocks - subtle pattern (Figma: 96x96 blocks, stroke #242424) */}
      <div className="absolute -left-[240px] top-0 w-[1920px] flex flex-row flex-wrap border-t border-border-default/60">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className={`w-24 h-24 border-r border-b border-border-default/50 ${i % 17 === 0 ? "bg-page/30" : ""}`}
            style={{ borderWidth: "0 1px 1px 0" }}
          />
        ))}
      </div>
    </div>
  );
}
