import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';

const VIDEO_SRC = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8';

const weeks = [
  {
    week: 'Tuần 1',
    label: 'Setup & Test',
    items: ['Setup Twitter Ads — 3 ad sets, $500', 'Research 20 KOLs + outreach', 'Setup Galxe + Zealy quests', 'Publish 2 blog posts (Mirror)'],
    color: '#D2FF55',
  },
  {
    week: 'Tuần 2',
    label: 'Launch & Optimize',
    items: ['Kill losers, scale winners — $1K', 'Brief KOLs + negotiate rates', 'Launch quest campaign', 'First X Space (AMA)'],
    color: '#55FFD2',
  },
  {
    week: 'Tuần 3',
    label: 'Scale',
    items: ['Scale winning ads — $1.5K', 'Wave 1: 3 KOLs post — $1.5K', 'Add retargeting campaign', 'X Space: Rug Pull live demo'],
    color: '#FF55D2',
  },
  {
    week: 'Tuần 4',
    label: 'Maximize & Report',
    items: ['Final push + retarget — $1K', 'Wave 2: 3–4 KOLs — $1.5K', 'Close quest + distribute rewards', 'Month 1 report + plan Month 2'],
    color: '#55B2FF',
  },
];

export function TimelineSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>03 · Distribution Plan</span>
        </div>

        <h2 className="text-white font-bold mt-[2%]" style={{ fontSize: 'clamp(22px, 2.5vw, 42px)', letterSpacing: '-0.02em' }}>
          Month 1 Timeline
        </h2>

        <div className="flex-1 flex mt-[2.5%]" style={{ gap: 'clamp(10px, 1.2vw, 20px)' }}>
          {weeks.map((w) => (
            <div key={w.week} className="flex-1 flex flex-col rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div className="flex items-center" style={{ padding: 'clamp(10px, 1.2vw, 20px) clamp(12px, 1.5vw, 24px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="rounded-full mr-[8px]" style={{ width: 'clamp(8px, 0.6vw, 10px)', height: 'clamp(8px, 0.6vw, 10px)', background: w.color }} />
                <div>
                  <p className="text-white font-bold" style={{ fontSize: 'clamp(13px, 1.1vw, 19px)' }}>{w.week}</p>
                  <p style={{ fontSize: 'clamp(10px, 0.8vw, 14px)', color: w.color }}>{w.label}</p>
                </div>
              </div>
              <div className="flex flex-col flex-1" style={{ padding: 'clamp(10px, 1.2vw, 20px) clamp(12px, 1.5vw, 24px)', gap: 'clamp(6px, 0.7vw, 12px)' }}>
                {w.items.map((item, i) => (
                  <div key={i} className="flex items-start" style={{ gap: 'clamp(6px, 0.6vw, 10px)' }}>
                    <div className="rounded-sm mt-[5px]" style={{ width: 'clamp(4px, 0.35vw, 6px)', height: 'clamp(4px, 0.35vw, 6px)', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
                    <span className="text-white/70" style={{ fontSize: 'clamp(10px, 0.85vw, 15px)', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-[2%]" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span className="text-white/40" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>Tháng 1:</span>
            <span className="text-[#D2FF55] font-bold" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>Validate channels</span>
          </div>
          <div className="w-px bg-white/20" style={{ height: '16px' }} />
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span className="text-white/40" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>Tháng 2:</span>
            <span className="text-white/70 font-medium" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>Scale winners, kill losers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
