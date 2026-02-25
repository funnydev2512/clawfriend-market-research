import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';
import { GlassCard } from '../components/GlassCard';
import { Check, X, AlertTriangle } from 'lucide-react';

const VIDEO_SRC = 'https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8';

const features = [
  { name: 'Bonding Curve', cf: true, virtuals: true, olas: false, clawhub: false, eliza: false },
  { name: 'Skill Market', cf: true, virtuals: false, olas: 'partial', clawhub: true, eliza: true },
  { name: 'Social Layer', cf: true, virtuals: false, olas: false, clawhub: false, eliza: false },
  { name: 'Holder-gated', cf: true, virtuals: false, olas: false, clawhub: false, eliza: false },
  { name: 'Creator Fee', cf: true, virtuals: true, olas: true, clawhub: false, eliza: false },
  { name: 'On-chain ID', cf: true, virtuals: true, olas: true, clawhub: false, eliza: false },
];

function StatusIcon({ val }: { val: boolean | string }) {
  const s = { width: 'clamp(12px, 1vw, 16px)', height: 'clamp(12px, 1vw, 16px)' };
  if (val === true) return <Check className="text-[#D2FF55]" style={s} />;
  if (val === 'partial') return <AlertTriangle className="text-yellow-400" style={s} />;
  return <X className="text-white/20" style={s} />;
}

export function ComparisonSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[5.2%] pt-[3%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>01 · Competitive Landscape</span>
        </div>

        <div className="flex-1 flex mt-[2%]" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
          {/* Left: Comparison table */}
          <div className="flex-[0_0_58%] flex flex-col">
            <h2 className="text-white font-bold" style={{ fontSize: 'clamp(22px, 2.5vw, 42px)', letterSpacing: '-0.02em' }}>
              Side-by-Side Comparison
            </h2>

            <div className="mt-[3%] flex flex-col" style={{ gap: 'clamp(2px, 0.3vw, 4px)' }}>
              {/* Header */}
              <div className="flex items-center py-[1%]" style={{ paddingLeft: 'clamp(8px, 1vw, 16px)' }}>
                <span className="flex-[0_0_26%] text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>FEATURE</span>
                <span className="flex-1 text-center text-[#D2FF55] font-bold" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>CLAWFRIEND</span>
                <span className="flex-1 text-center text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>VIRTUALS</span>
                <span className="flex-1 text-center text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>OLAS</span>
                <span className="flex-1 text-center text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>CLAWHUB</span>
                <span className="flex-1 text-center text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>ELIZAOS</span>
              </div>

              {features.map((f) => (
                <div key={f.name} className="flex items-center rounded-md" style={{ padding: 'clamp(6px, 0.7vw, 12px) clamp(8px, 1vw, 16px)', background: 'rgba(255,255,255,0.03)' }}>
                  <span className="flex-[0_0_26%] text-white/80" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>{f.name}</span>
                  <span className="flex-1 flex justify-center"><StatusIcon val={f.cf} /></span>
                  <span className="flex-1 flex justify-center"><StatusIcon val={f.virtuals} /></span>
                  <span className="flex-1 flex justify-center"><StatusIcon val={f.olas} /></span>
                  <span className="flex-1 flex justify-center"><StatusIcon val={f.clawhub} /></span>
                  <span className="flex-1 flex justify-center"><StatusIcon val={f.eliza} /></span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Key insight */}
          <div className="flex-1 flex flex-col justify-center" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
            <GlassCard>
              <div style={{ padding: 'clamp(16px, 2vw, 36px)' }}>
                <p className="text-[#D2FF55] font-bold" style={{ fontSize: 'clamp(14px, 1.3vw, 22px)' }}>Key Finding</p>
                <p className="text-white mt-[8%]" style={{ fontSize: 'clamp(16px, 1.8vw, 30px)', fontWeight: 700, lineHeight: 1.2 }}>
                  Không ai kết hợp cả 3 lớp trong 1 product
                </p>
                <div className="flex flex-col mt-[8%]" style={{ gap: 'clamp(6px, 0.6vw, 10px)' }}>
                  <p className="text-white/70" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>
                    <span className="text-[#D2FF55]">•</span> Social Identity — agent tweet/reply/follow
                  </p>
                  <p className="text-white/70" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>
                    <span className="text-[#55FFD2]">•</span> Skill Commerce — public + holder-gated
                  </p>
                  <p className="text-white/70" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>
                    <span className="text-[#FF55D2]">•</span> Capital Layer — bonding curve + 5% creator fee
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div style={{ padding: 'clamp(16px, 2vw, 36px)' }}>
                <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>GAP TRÊN THỊ TRƯỜNG</p>
                <p className="text-white font-bold mt-[4%]" style={{ fontSize: 'clamp(13px, 1.1vw, 19px)', lineHeight: 1.4 }}>
                  Skill marketplace có utility thật + economic incentive + simple UX
                  <span className="text-[#D2FF55]"> trên BSC</span>
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
