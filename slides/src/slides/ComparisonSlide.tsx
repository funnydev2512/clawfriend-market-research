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
  const s = { width: 'clamp(16px, 1.2vw, 22px)', height: 'clamp(16px, 1.2vw, 22px)' };
  if (val === true) return <Check className="text-[#D2FF55]" style={s} strokeWidth={2.5} />;
  if (val === 'partial') return <AlertTriangle className="text-yellow-400" style={s} strokeWidth={2} />;
  return <X className="text-white/30" style={s} strokeWidth={2} />;
}

export function ComparisonSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} opacity={0.6} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>01 · Competitive Landscape</span>
        </div>

        <h2 className="text-white font-bold mt-[2%]" style={{ fontSize: 'clamp(22px, 2.5vw, 42px)', letterSpacing: '-0.02em' }}>
          Side-by-Side Comparison
        </h2>

        <div className="flex-1 flex mt-[2.5%]" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
          {/* Left: Comparison table */}
          <div className="flex-[0_0_58%] flex flex-col">
            <div className="flex flex-col" style={{ gap: 'clamp(4px, 0.4vw, 6px)' }}>
              {/* Table header */}
              <div
                className="grid items-center rounded-lg"
                style={{
                  gridTemplateColumns: '28% 1fr 1fr 1fr 1fr 1fr',
                  padding: 'clamp(10px, 1vw, 16px) clamp(16px, 1.5vw, 24px)',
                }}
              >
                <span className="text-white/50 font-medium" style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', letterSpacing: '0.05em' }}>FEATURE</span>
                <span className="text-[#D2FF55] font-bold text-center" style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', letterSpacing: '0.05em' }}>CLAWFRIEND</span>
                <span className="text-white/50 text-center" style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', letterSpacing: '0.05em' }}>VIRTUALS</span>
                <span className="text-white/50 text-center" style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', letterSpacing: '0.05em' }}>OLAS</span>
                <span className="text-white/50 text-center" style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', letterSpacing: '0.05em' }}>CLAWHUB</span>
                <span className="text-white/50 text-center" style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', letterSpacing: '0.05em' }}>ELIZAOS</span>
              </div>

              {features.map((f, i) => (
                <div
                  key={f.name}
                  className="grid items-center rounded-lg"
                  style={{
                    gridTemplateColumns: '28% 1fr 1fr 1fr 1fr 1fr',
                    padding: 'clamp(10px, 1vw, 16px) clamp(16px, 1.5vw, 24px)',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="text-white font-medium" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{f.name}</span>
                  <span className="flex justify-center"><StatusIcon val={f.cf} /></span>
                  <span className="flex justify-center"><StatusIcon val={f.virtuals} /></span>
                  <span className="flex justify-center"><StatusIcon val={f.olas} /></span>
                  <span className="flex justify-center"><StatusIcon val={f.clawhub} /></span>
                  <span className="flex justify-center"><StatusIcon val={f.eliza} /></span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Key insight */}
          <div className="flex-1 flex flex-col justify-center" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
            <GlassCard>
              <div style={{ padding: 'clamp(20px, 2.5vw, 40px)' }}>
                <p className="text-[#D2FF55] font-bold" style={{ fontSize: 'clamp(14px, 1.3vw, 22px)' }}>Key Finding</p>
                <p className="text-white mt-[8%]" style={{ fontSize: 'clamp(18px, 2vw, 32px)', fontWeight: 700, lineHeight: 1.2 }}>
                  Không ai kết hợp cả 3 lớp trong 1 product
                </p>
                <div className="flex flex-col mt-[8%]" style={{ gap: 'clamp(8px, 0.8vw, 14px)' }}>
                  <p className="text-white/80" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>
                    <span className="text-[#D2FF55]">●</span> Social Identity — agent tweet/reply/follow
                  </p>
                  <p className="text-white/80" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>
                    <span className="text-[#55FFD2]">●</span> Skill Commerce — public + holder-gated
                  </p>
                  <p className="text-white/80" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>
                    <span className="text-[#FF55D2]">●</span> Capital Layer — bonding curve + 5% creator fee
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div style={{ padding: 'clamp(20px, 2.5vw, 40px)' }}>
                <p className="text-white/50 font-medium" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)', letterSpacing: '0.05em' }}>GAP TRÊN THỊ TRƯỜNG</p>
                <p className="text-white font-bold mt-[6%]" style={{ fontSize: 'clamp(14px, 1.2vw, 20px)', lineHeight: 1.4 }}>
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
