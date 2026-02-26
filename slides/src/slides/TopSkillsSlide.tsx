import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';
import { GlassCard } from '../components/GlassCard';

const VIDEO_SRC = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8';

export function TopSkillsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>02 · Skill Research</span>
        </div>

        <h2 className="text-white font-bold mt-[2%]" style={{ fontSize: 'clamp(22px, 2.5vw, 42px)', letterSpacing: '-0.02em' }}>
          Deep Dive: <span className="text-[#D2FF55]">Top 2 Skills</span>
        </h2>

        <div className="flex-1 flex mt-[2%]" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
          {/* Rug Pull Detector */}
          <GlassCard className="flex-1">
            <div className="flex flex-col h-full" style={{ padding: 'clamp(20px, 2.5vw, 44px)' }}>
              <span className="text-[#D2FF55] font-medium" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>#1 PRIORITY — LAUNCH FIRST</span>
              <h3 className="text-white font-bold mt-[3%]" style={{ fontSize: 'clamp(18px, 2vw, 32px)' }}>AI Rug Pull Detector</h3>
              <p className="text-white/60 mt-[2%]" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Auto-scan token mới trên BSC · Risk score 0–100 · Alert real-time</p>

              <div className="flex-1 flex flex-col justify-center" style={{ gap: 'clamp(10px, 1.2vw, 20px)' }}>
                <div>
                  <span className="text-white font-bold" style={{ fontSize: 'clamp(28px, 3.2vw, 56px)' }}>$17B</span>
                  <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>crypto scam losses năm 2025 — Chainalysis</p>
                </div>
                <div className="flex" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
                  <div>
                    <span className="text-[#D2FF55] font-bold" style={{ fontSize: 'clamp(20px, 2.2vw, 36px)' }}>71%</span>
                    <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>rug pulls trên BSC</p>
                  </div>
                  <div>
                    <span className="text-white font-bold" style={{ fontSize: 'clamp(20px, 2.2vw, 36px)' }}>20M</span>
                    <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>GoPlus API calls/ngày</p>
                  </div>
                </div>
                <p className="text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>70% nạn nhân là retail investor &lt;$10K — CoinLaw</p>
              </div>

              <div className="mt-auto" style={{ padding: 'clamp(8px, 1vw, 16px)', background: 'rgba(210,255,85,0.08)', borderRadius: '8px' }}>
                <p className="text-white/80" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>
                  <span className="text-[#D2FF55] font-bold">Tại sao launch first:</span> Pain point #1 trên BSC, free tier tạo viral loop, GoPlus API free = build nhanh
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Whale Tracker */}
          <GlassCard className="flex-1">
            <div className="flex flex-col h-full" style={{ padding: 'clamp(20px, 2.5vw, 44px)' }}>
              <span className="text-[#55FFD2] font-medium" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>HIGHEST SHARE DEMAND POTENTIAL</span>
              <h3 className="text-white font-bold mt-[3%]" style={{ fontSize: 'clamp(18px, 2vw, 32px)' }}>Whale Movement Tracker</h3>
              <p className="text-white/60 mt-[2%]" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Monitor 500 whale wallets · Alert &lt;60s · Context analysis</p>

              <div className="flex-1 flex flex-col justify-center" style={{ gap: 'clamp(10px, 1.2vw, 20px)' }}>
                <div>
                  <span className="text-white font-bold" style={{ fontSize: 'clamp(28px, 3.2vw, 56px)' }}>2.5M</span>
                  <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>Whale Alert followers — demand validated</p>
                </div>
                <div className="flex" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
                  <div>
                    <span className="text-[#55FFD2] font-bold" style={{ fontSize: 'clamp(20px, 2.2vw, 36px)' }}>$99–999</span>
                    <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>Nansen pricing/tháng</p>
                  </div>
                  <div>
                    <span className="text-white font-bold" style={{ fontSize: 'clamp(20px, 2.2vw, 36px)' }}>10K+</span>
                    <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>whale tx tracked/ngày</p>
                  </div>
                </div>
                <p className="text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>Arkham raised $12M Series A = VC-validated</p>
              </div>

              <div className="mt-auto" style={{ padding: 'clamp(8px, 1vw, 16px)', background: 'rgba(85,255,210,0.08)', borderRadius: '8px' }}>
                <p className="text-white/80" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>
                  <span className="text-[#55FFD2] font-bold">Drive share demand:</span> Nansen $99/mo → holder-gated skill chỉ cần 1 share (~$0.04) = rẻ hơn 2,400x
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
