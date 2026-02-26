import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';

const VIDEO_SRC = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8';

const competitors = [
  { name: 'Virtuals Protocol', type: 'Direct', chain: 'Base', stat: '$381M MC', statSub: '$69M cumulative fees', color: '#D2FF55' },
  { name: 'Olas (Mech)', type: 'Direct', chain: 'Gnosis', stat: '3,158 agents', statSub: '11M+ A2A transactions', color: '#55FFD2' },
  { name: 'elizaOS', type: 'Adjacent', chain: 'Multi', stat: '17.6K stars', statSub: '180+ plugins, 370 contributors', color: '#55B2FF' },
  { name: 'ClawHub / OpenClaw', type: 'Adjacent', chain: 'No chain', stat: '224K stars', statSub: '5,700+ skills, 0 monetization', color: '#FF55D2' },
  { name: 'Fetch.ai Agentverse', type: 'Adjacent', chain: 'ASI', stat: '1.5K stars', statSub: 'Agent discovery + Almanac', color: '#B2FF55' },
  { name: 'SingularityNET', type: 'Adjacent', chain: 'ETH/ADA', stat: '186 repos', statSub: 'AI service marketplace', color: '#FFD255' },
  { name: 'friend.tech', type: 'Benchmark', chain: 'Base', stat: '913K traders', statSub: '343K ETH volume', color: '#FF8855' },
];

export function CompetitorsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} opacity={0.5} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>01 · Competitive Landscape</span>
        </div>

        <div className="flex items-baseline mt-[2.5%]" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 48px)', letterSpacing: '-0.02em' }}>
            7 Đối Thủ Phân Tích
          </h2>
          <span className="text-[#D2FF55]" style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>
            Thị trường: Early Growth
          </span>
        </div>

        {/* Table */}
        <div className="flex-1 mt-[2.5%] flex flex-col justify-center" style={{ gap: 'clamp(6px, 0.6vw, 10px)' }}>
          {/* Header row */}
          <div
            className="grid items-center rounded-lg"
            style={{
              gridTemplateColumns: '6% 24% 12% 10% 20% 1fr',
              padding: 'clamp(8px, 0.8vw, 14px) clamp(16px, 2vw, 32px)',
            }}
          >
            <span />
            <span className="text-white/50 font-medium" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)', letterSpacing: '0.05em' }}>TÊN</span>
            <span className="text-white/50 font-medium text-center" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)', letterSpacing: '0.05em' }}>LOẠI</span>
            <span className="text-white/50 font-medium text-center" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)', letterSpacing: '0.05em' }}>CHAIN</span>
            <span className="text-white/50 font-medium text-center" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)', letterSpacing: '0.05em' }}>SỐ LIỆU CHÍNH</span>
            <span className="text-white/50 font-medium text-center" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)', letterSpacing: '0.05em' }}>GHI CHÚ</span>
          </div>

          {competitors.map((c) => (
            <div
              key={c.name}
              className="grid items-center rounded-xl"
              style={{
                gridTemplateColumns: '6% 24% 12% 10% 20% 1fr',
                padding: 'clamp(10px, 1vw, 18px) clamp(16px, 2vw, 32px)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex justify-center">
                <div className="rounded-full" style={{ width: 'clamp(8px, 0.6vw, 10px)', height: 'clamp(8px, 0.6vw, 10px)', background: c.color }} />
              </div>
              <span className="text-white font-medium" style={{ fontSize: 'clamp(12px, 1.05vw, 18px)' }}>{c.name}</span>
              <span className="text-white/60 text-center" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>{c.type}</span>
              <span className="text-white/60 text-center" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>{c.chain}</span>
              <span className="text-white font-bold text-center" style={{ fontSize: 'clamp(12px, 1.05vw, 18px)' }}>{c.stat}</span>
              <span className="text-white/60 text-center" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>{c.statSub}</span>
            </div>
          ))}
        </div>

        <p className="text-white/40 mt-auto text-center" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>
          Nguồn: DefiLlama, GitHub, Dune Analytics, olas.network · Snapshot 24/02/2026
        </p>
      </div>
    </div>
  );
}
