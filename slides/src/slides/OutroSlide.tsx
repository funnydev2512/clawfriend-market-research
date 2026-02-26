import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';
import { GlassCard } from '../components/GlassCard';

const VIDEO_SRC = 'https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8';

const qas = [
  {
    q: '"Virtuals có $381M — sao họ không copy?"',
    a: 'BSC first-mover, network effect 2 mặt, holder lock-in 10% round-trip, social graph không portable, OpenClaw partnership exclusive.',
  },
  {
    q: '"$10K có đủ cho 1,000 user không?"',
    a: 'Conservative: 730+ signups tháng 1. CAC < $20. Retention plan: D7 40%, MAU 60%. Tháng 2 → 1,000+ cumulative.',
  },
  {
    q: '"Sao user không dùng ChatGPT?"',
    a: 'ChatGPT không có: on-chain data real-time, wallet integration, holder-gated access, social stream.',
  },
  {
    q: '"Holder-gated chỉ rẻ ở early $0.04?"',
    a: 'Share là asset (bán lại được), không phải expense. 1 share = access TẤT CẢ premium skills. Supply 10–50 = $3.75–$93 vẫn < Nansen $99/mo.',
  },
];

export function OutroSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>Q&A</span>
        </div>

        <div className="flex-1 flex mt-[2%]" style={{ gap: 'clamp(32px, 4vw, 64px)' }}>
          {/* Left: Q&A prep */}
          <div className="flex-[0_0_55%] flex flex-col">
            <h2 className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 48px)', letterSpacing: '-0.02em' }}>
              Sẵn sàng cho <span className="text-[#D2FF55]">Q&A</span>
            </h2>

            <div className="flex flex-col mt-[4%]" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
              {qas.map((qa) => (
                <GlassCard key={qa.q}>
                  <div style={{ padding: 'clamp(14px, 1.8vw, 28px)' }}>
                    <p className="text-white/50" style={{ fontSize: 'clamp(11px, 0.9vw, 15px)' }}>{qa.q}</p>
                    <p className="text-white mt-[4%]" style={{ fontSize: 'clamp(12px, 1vw, 17px)', lineHeight: 1.5 }}>{qa.a}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right: Summary + Contact */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-white font-bold" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Cảm ơn!
              </h3>
              <p className="text-white/60 mt-[4%]" style={{ fontSize: 'clamp(13px, 1.1vw, 19px)', lineHeight: 1.5 }}>
                Market Research & Go-to-Market Strategy
                <br />
                for ClawFriend Skill Market
              </p>
            </div>

            <div className="flex flex-col items-center mt-[8%]" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
              <div className="flex items-center" style={{ gap: '8px' }}>
                <div className="rounded-full" style={{ width: '6px', height: '6px', background: '#D2FF55' }} />
                <span className="text-white/70" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>Peter</span>
              </div>
              <div className="flex items-center" style={{ gap: '8px' }}>
                <div className="rounded-full" style={{ width: '6px', height: '6px', background: '#55FFD2' }} />
                <span className="text-white/50" style={{ fontSize: 'clamp(11px, 0.9vw, 15px)' }}>github.com/clawfriend-market-research</span>
              </div>
            </div>

            <div className="mt-[8%] text-center">
              <p className="text-white/30 italic" style={{ fontSize: 'clamp(11px, 0.9vw, 15px)' }}>
                "Biết bán &gt; Biết build."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
