"use client";

import { Button } from "@/components/ui/Button";

export function HostEventSection() {
  return (
    <section className="w-full px-[16px] md:px-[32px] lg:px-[64px] xl:px-[100px] py-[80px] bg-[#0E0E10]">
      <div className="w-full max-w-[380px] md:max-w-[704px] lg:max-w-[1312px] xl:max-w-[1240px] mx-auto">
        {/* CTA Container - 32px radius, bg-app */}
        <div className="relative w-full rounded-[32px] bg-[#141416] overflow-hidden">
          {/* Background pattern effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_95%)]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-[32px] py-[80px] px-[80px] text-center">
            {/* Logo Icon with shine effect */}
            <div className="relative w-[76px] h-[76px]">
              {/* Shine effect behind logo */}
              <div className="absolute inset-0 rounded-[16px] bg-[rgba(243,244,246,0.5)] blur-[48px]" />
              {/* Logo container */}
              <div className="relative w-[76px] h-[76px] rounded-[16px] bg-[#141416] flex items-center justify-center"
                style={{
                  border: '1.2px solid transparent',
                  backgroundImage: 'linear-gradient(#141416, #141416), linear-gradient(-46deg, rgba(241,242,244,1) 0%, rgba(241,242,244,0) 37%), linear-gradient(140deg, rgba(241,242,244,1) 5%, rgba(241,242,244,0) 14%), linear-gradient(-45deg, rgba(241,242,244,0) 83%, rgba(241,242,244,1) 93%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box, border-box, border-box',
                  boxShadow: 'inset 3px 3px 14px rgba(255,255,255,0.3)'
                }}
              >
                <img
                  src="/assets/SVGs/Icon Shine.svg"
                  alt="Dzindeck"
                  className="w-[32px] h-[32px]"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-[20px] max-w-[1054px]">
              <h2 className="text-[48px] font-semibold text-[#F1F2F4] leading-[1.208] tracking-[-0.833%]">
                Host Your Event on Dzindeck
              </h2>
              <p className="text-[20px] font-medium text-[#8A8D94] leading-[1.4]">
                Reach the right audience - designers, developers, product people - all in one platform
              </p>
            </div>

            {/* CTA Button with Hero shadow */}
            <Button 
              variant="primary" 
              size="md"
              className="rounded-[16px] px-[24px] py-[16px] bg-[#F1F2F4] text-[#0E0E10] text-[16px] font-bold border-2 border-[rgba(241,242,244,0.1)]"
              style={{ 
                boxShadow: '0px 4px 8px rgba(200,200,200,0.19), 0px 16px 16px rgba(200,200,200,0.17), 0px 34px 20px rgba(200,200,200,0.1), 0px 60px 24px rgba(200,200,200,0.03), inset 10px 10px 16px rgba(255,255,255,0.15), inset -10px -10px 20px rgba(48,48,48,0.1)',
                backdropFilter: 'blur(4px)'
              }}
            >
              Organize an Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
