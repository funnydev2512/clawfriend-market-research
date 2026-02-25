import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';
import { GlassCard } from '../components/GlassCard';

const VIDEO_SRC = 'https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8';

const comparisons = [
  { tool: 'Nansen Pioneer', price: '$99/mo', yearly: '$1,188/yr', multiplier: '2,400x' },
  { tool: 'Santiment Pro', price: '$49/mo', yearly: '$588/yr', multiplier: '1,200x' },
  { tool: 'Santiment Max', price: '$249/mo', yearly: '$2,988/yr', multiplier: '6,200x' },
  { tool: 'Arkham Paid', price: '~$70/mo', yearly: '~$840/yr', multiplier: '1,750x' },
];

export function PricingSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[5.2%] pt-[3%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>02 · Skill Research</span>
        </div>

        <div className="flex-1 flex items-center" style={{ gap: 'clamp(32px, 4vw, 64px)' }}>
          {/* Left: Big message */}
          <div className="flex-[0_0_40%]">
            <p className="text-[#D2FF55] font-medium" style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>Holder-Gated Model</p>
            <h2 className="text-white font-bold mt-[3%]" style={{ fontSize: 'clamp(24px, 3vw, 52px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              1 share = ~$0.04
              <br />
              <span className="text-white/50" style={{ fontSize: 'clamp(16px, 1.8vw, 30px)' }}>thay vì $99–$999/tháng</span>
            </h2>
            <p className="text-white/70 mt-[5%]" style={{ fontSize: 'clamp(12px, 1vw, 18px)', lineHeight: 1.6 }}>
              User hold 1 share của agent creator → access vĩnh viễn holder-gated skill. Share có thể bán lại. Không subscription, không lock-in.
            </p>
            <div className="mt-[5%]" style={{ padding: 'clamp(12px, 1.5vw, 24px)', background: 'rgba(210,255,85,0.08)', borderRadius: 'clamp(8px, 0.8vw, 12px)' }}>
              <p className="text-white/80" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)', lineHeight: 1.5 }}>
                <span className="text-[#D2FF55] font-bold">Flywheel:</span> Skill hữu ích → user mua share để access → share price tăng → creator earn 5% mỗi trade → tạo thêm skill
              </p>
            </div>
          </div>

          {/* Right: Comparison table */}
          <div className="flex-1 flex flex-col" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
            <GlassCard>
              <div style={{ padding: 'clamp(16px, 2vw, 32px)' }}>
                <div className="flex items-center" style={{ gap: 'clamp(8px, 1vw, 16px)', marginBottom: 'clamp(12px, 1.5vw, 24px)' }}>
                  <span className="text-white/40 flex-[0_0_30%]" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>TOOL</span>
                  <span className="text-white/40 flex-[0_0_22%]" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>GIÁ/THÁNG</span>
                  <span className="text-white/40 flex-[0_0_22%]" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>GIÁ/NĂM</span>
                  <span className="text-white/40 flex-1 text-right" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>CF RẺ HƠN</span>
                </div>

                {comparisons.map((c) => (
                  <div key={c.tool} className="flex items-center" style={{ padding: 'clamp(8px, 0.8vw, 14px) 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-white/80 flex-[0_0_30%]" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{c.tool}</span>
                    <span className="text-white/60 flex-[0_0_22%]" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{c.price}</span>
                    <span className="text-white/60 flex-[0_0_22%]" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{c.yearly}</span>
                    <span className="text-[#D2FF55] font-bold flex-1 text-right" style={{ fontSize: 'clamp(14px, 1.3vw, 22px)' }}>{c.multiplier}</span>
                  </div>
                ))}

                <div className="flex items-center mt-[4%]" style={{ padding: 'clamp(10px, 1.2vw, 20px)', background: 'rgba(210,255,85,0.06)', borderRadius: '8px' }}>
                  <span className="text-white/80 flex-[0_0_30%] font-bold" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>ClawFriend</span>
                  <span className="text-[#D2FF55] font-bold flex-[0_0_22%]" style={{ fontSize: 'clamp(14px, 1.3vw, 22px)' }}>~$0.04</span>
                  <span className="text-[#D2FF55] flex-[0_0_22%]" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>one-time</span>
                  <span className="text-[#D2FF55] font-bold flex-1 text-right" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>+ có thể bán lại</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
