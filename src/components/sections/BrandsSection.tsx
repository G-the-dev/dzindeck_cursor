"use client";

// 5 brands in row 1, 4 brands in row 2
const BRANDS_ROW1 = [
  { name: "Boltshift" },
  { name: "Boltshift" },
  { name: "Boltshift" },
  { name: "Boltshift" },
  { name: "Boltshift" },
];

const BRANDS_ROW2 = [
  { name: "Boltshift" },
  { name: "Boltshift" },
  { name: "Boltshift" },
  { name: "Boltshift" },
];

// Corner bracket decoration — matches design
function CornerBrackets() {
  const cornerSize = 10;
  const strokeW = 1.5;
  const c = strokeW / 2;
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 140 72"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top-left */}
      <polyline
        points={`${c + cornerSize},${c} ${c},${c} ${c},${c + cornerSize}`}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
      {/* Top-right */}
      <polyline
        points={`${140 - c - cornerSize},${c} ${140 - c},${c} ${140 - c},${c + cornerSize}`}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
      {/* Bottom-left */}
      <polyline
        points={`${c},${72 - c - cornerSize} ${c},${72 - c} ${c + cornerSize},${72 - c}`}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
      {/* Bottom-right */}
      <polyline
        points={`${140 - c},${72 - c - cornerSize} ${140 - c},${72 - c} ${140 - c - cornerSize},${72 - c}`}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandCard({ name }: { name: string }) {
  return (
    <div className="relative flex items-center justify-center px-[24px] py-[20px] flex-shrink-0" style={{ minWidth: '160px' }}>
      <CornerBrackets />
      <div className="flex items-center gap-[10px] z-10">
        {/* Brand icon circle */}
        <div
          className="w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: '#3A3B40' }}
        >
          <img
            src="/assets/SVGs/Brand.svg"
            alt={name}
            className="w-[16px] h-[16px]"
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
        </div>
        <span className="text-[15px] font-medium text-[#C9CBD2] whitespace-nowrap">{name}</span>
      </div>
    </div>
  );
}

export function BrandsSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        <div className="flex flex-col items-center gap-[64px]">
          {/* Headline */}
          <h2 className="text-[44px] md:text-[52px] font-semibold text-[#F1F2F4] leading-[1.15] tracking-[-0.04em] text-center max-w-[800px] text-balance">
            Partnered with 100+ creative brands worldwide grow with dzindeck
          </h2>

          {/* Row 1 — 5 brands */}
          <div className="flex flex-row flex-wrap justify-center gap-[8px]">
            {BRANDS_ROW1.map((brand, i) => (
              <BrandCard key={`r1-${i}`} name={brand.name} />
            ))}
          </div>

          {/* Row 2 — 4 brands, slightly indented */}
          <div className="flex flex-row flex-wrap justify-center gap-[8px]" style={{ marginTop: '-32px' }}>
            {BRANDS_ROW2.map((brand, i) => (
              <BrandCard key={`r2-${i}`} name={brand.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
