import { Monitor, Shield, Brain, Lightbulb, Search } from 'lucide-react';
import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';

const VIDEO_SRC = 'https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8';

const skills = [
  { icon: Shield, name: 'Rug Pull Detector', pmf: 5, stat: '$17B scam losses/năm', vis: 'Public → Private', priority: true },
  { icon: Monitor, name: 'Whale Tracker', pmf: 5, stat: '2.5M followers (Whale Alert)', vis: 'Holder-gated', priority: false },
  { icon: Brain, name: 'Yield Optimizer', pmf: 4, stat: '$4.4B yield TVL', vis: 'Holder-gated', priority: false },
  { icon: Lightbulb, name: 'Sentiment Analyst', pmf: 4, stat: 'Santiment $49–$249/mo', vis: 'Holder-gated', priority: false },
  { icon: Search, name: 'Airdrop Scanner', pmf: 4, stat: '$2.6B airdrop losses (Dragonfly)', vis: 'Public → Private', priority: false },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex" style={{ gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="rounded-full" style={{ width: 'clamp(6px, 0.5vw, 8px)', height: 'clamp(6px, 0.5vw, 8px)', background: i < count ? '#D2FF55' : 'rgba(255,255,255,0.15)' }} />
      ))}
    </div>
  );
}

export function SkillsOverviewSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[5.2%] pt-[3%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>02 · Skill Research</span>
        </div>

        <div className="flex items-baseline mt-[2%]" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 48px)', letterSpacing: '-0.02em' }}>
            5 Skills Có Demand Thực
          </h2>
          <span className="text-white/50" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>
            Mỗi skill đều có data chứng minh
          </span>
        </div>

        <div className="flex-1 mt-[2.5%] flex flex-col" style={{ gap: 'clamp(6px, 0.7vw, 12px)' }}>
          {skills.map((s) => (
            <div key={s.name} className="flex items-center rounded-xl flex-1" style={{ padding: 'clamp(12px, 1.5vw, 24px) clamp(16px, 2vw, 32px)', background: s.priority ? 'rgba(210,255,85,0.06)' : 'rgba(255,255,255,0.04)', border: s.priority ? '1px solid rgba(210,255,85,0.2)' : '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center flex-[0_0_30%]" style={{ gap: 'clamp(10px, 1.2vw, 20px)' }}>
                <s.icon className="text-white/70" style={{ width: 'clamp(20px, 1.8vw, 30px)', height: 'clamp(20px, 1.8vw, 30px)' }} strokeWidth={1.5} />
                <div>
                  <div className="flex items-center" style={{ gap: 'clamp(6px, 0.6vw, 10px)' }}>
                    <span className="text-white font-bold" style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}>{s.name}</span>
                    {s.priority && <span className="text-[#D2FF55] font-medium" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)', background: 'rgba(210,255,85,0.15)', padding: '2px 8px', borderRadius: '4px' }}>LAUNCH FIRST</span>}
                  </div>
                </div>
              </div>
              <div className="flex-[0_0_15%] flex items-center" style={{ gap: 'clamp(6px, 0.6vw, 10px)' }}>
                <Stars count={s.pmf} />
                <span className="text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>PMF</span>
              </div>
              <span className="flex-[0_0_35%] text-white/70" style={{ fontSize: 'clamp(11px, 0.9vw, 15px)' }}>{s.stat}</span>
              <span className="flex-1 text-white/50 text-right" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>{s.vis}</span>
            </div>
          ))}
        </div>

        <p className="text-white/40 mt-[1%]" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>
          Nguồn: Chainalysis, CoinLaw, Whale Alert, DefiLlama, Santiment, Dragonfly/SEC
        </p>
      </div>
    </div>
  );
}
