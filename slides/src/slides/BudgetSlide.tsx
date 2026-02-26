import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';

const VIDEO_SRC = 'https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8';

const channels = [
  { name: 'Twitter/X Ads', budget: '$4,000', pct: 40, signups: '120–400', cac: '$10–33', color: '#D2FF55', type: 'Paid' },
  { name: 'Crypto KOL', budget: '$3,000', pct: 30, signups: '75–150', cac: '$20–40', color: '#55FFD2', type: 'Paid' },
  { name: 'Zealy/Galxe', budget: '$2,000', pct: 20, signups: '440–1,600 wallets', cac: '$1.25–4.55', color: '#FF55D2', type: 'Paid' },
  { name: 'BNB Ecosystem', budget: '$1,000', pct: 10, signups: '30–50 leads', cac: '$20–33', color: '#55B2FF', type: 'Paid' },
];

const organics = [
  { name: 'Blog (Mirror.xyz)', signups: '80+', note: '8 bài/tháng' },
  { name: 'Community (TG + Discord)', signups: '100+', note: 'Word-of-mouth' },
  { name: 'Partnership (OpenClaw)', signups: '50–200', note: '224K stars ecosystem' },
];

export function BudgetSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>03 · Distribution Plan</span>
        </div>

        <div className="flex items-baseline mt-[2%]" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 48px)', letterSpacing: '-0.02em' }}>
            <span className="text-[#D2FF55]">$10,000</span> First Month
          </h2>
          <span className="text-white/50" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>
            4 paid + 3 organic channels
          </span>
        </div>

        <div className="flex-1 flex mt-[2%]" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
          {/* Left: Paid channels with bars */}
          <div className="flex-[0_0_60%] flex flex-col">
            <span className="text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)', marginBottom: 'clamp(8px, 0.8vw, 14px)' }}>PAID CHANNELS</span>

            <div className="flex flex-col" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
              {channels.map((ch) => (
                <div key={ch.name} className="flex items-center" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
                  <div className="flex-[0_0_25%]">
                    <p className="text-white font-medium" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{ch.name}</p>
                    <p className="text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>{ch.budget}</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-full rounded-full" style={{ height: 'clamp(8px, 0.7vw, 12px)', background: 'rgba(255,255,255,0.06)' }}>
                      <div className="rounded-full" style={{ width: `${ch.pct}%`, height: '100%', background: ch.color, opacity: 0.8 }} />
                    </div>
                  </div>
                  <div className="flex-[0_0_25%] text-right">
                    <p className="text-white/80" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>{ch.signups} signups</p>
                    <p className="text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>CAC {ch.cac}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[4%]">
              <span className="text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>ORGANIC CHANNELS ($0)</span>
              <div className="flex mt-[2%]" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
                {organics.map((o) => (
                  <div key={o.name} className="flex-1 rounded-lg" style={{ padding: 'clamp(10px, 1.2vw, 20px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="text-white font-medium" style={{ fontSize: 'clamp(11px, 0.9vw, 15px)' }}>{o.name}</p>
                    <p className="text-[#D2FF55]" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{o.signups}</p>
                    <p className="text-white/40" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>{o.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key metrics */}
          <div className="flex-1 flex flex-col justify-center" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
            <div>
              <span className="text-[#D2FF55] font-bold" style={{ fontSize: 'clamp(40px, 5vw, 80px)' }}>500–800</span>
              <p className="text-white/70" style={{ fontSize: 'clamp(13px, 1.1vw, 19px)' }}>Target signups tháng 1</p>
            </div>
            <div className="flex" style={{ gap: 'clamp(20px, 2.5vw, 40px)' }}>
              <div>
                <span className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 44px)' }}>$12–20</span>
                <p className="text-white/50" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Average CAC</p>
              </div>
              <div>
                <span className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 44px)' }}>300+</span>
                <p className="text-white/50" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Skill downloads</p>
              </div>
            </div>
            <div>
              <span className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 44px)' }}>50+</span>
              <p className="text-white/50" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Share purchases driven by skills</p>
            </div>
          </div>
        </div>

        <p className="text-white/40 mt-auto text-right" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>
          Benchmarks: WebFX, MediaX, rzlt.io, KOLxGrowth 2026
        </p>
      </div>
    </div>
  );
}
