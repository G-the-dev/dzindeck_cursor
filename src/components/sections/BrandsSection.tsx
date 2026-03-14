"use client";

const BRANDS = [
  { name: "Boltshift", svg: "/assets/SVGs/Brand.svg" },
  { name: "Clandestine", svg: "/assets/SVGs/Brand.svg" },
  { name: "Biosynthesis", svg: "/assets/SVGs/Brand.svg" },
  { name: "CloudWatch", svg: "/assets/SVGs/Brand.svg" },
  { name: "Command", svg: "/assets/SVGs/Brand.svg" },
];

export function BrandsSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10] relative overflow-hidden">
      {/* Dotted Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #141414 2px, transparent 2px)`,
          backgroundSize: '19px 19px'
        }}
      />

      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto relative z-10">
        <div className="flex flex-col items-center gap-[80px]">
          {/* Headline */}
          <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.833%] text-center max-w-[1048px]">
            Partnered with 100+ creative brands worldwide grow with dzindeck
          </h2>

          {/* Company Logos Row */}
          <div 
            className="flex flex-row justify-center items-center flex-wrap gap-[32px]"
            style={{ width: '1240px', maxWidth: '100%' }}
          >
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center p-[32px] rounded-[8px]"
                style={{
                  background: 'transparent',
                  border: '1px solid transparent'
                }}
              >
                <div className="flex items-center gap-[8px] text-[#8A8D94]">
                  <img src={brand.svg} alt={brand.name} className="w-[32px] h-[32px]" />
                  <span className="text-[16px] font-medium">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
