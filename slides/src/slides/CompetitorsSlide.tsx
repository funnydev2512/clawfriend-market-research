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
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[5.2%] pt-[3%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>01 · Competitive Landscape</span>
        </div>

        <div className="flex items-baseline mt-[2%]" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.8vw, 48px)', letterSpacing: '-0.02em' }}>
            7 Đối Thủ Phân Tích
          </h2>
          <span className="text-[#D2FF55]" style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>
            Thị trường: Early Growth
          </span>
        </div>

        <div className="flex-1 mt-[2%] flex flex-col" style={{ gap: 'clamp(4px, 0.5vw, 8px)' }}>
          {/* Header */}
          <div className="flex items-center px-[2%] py-[0.5%]">
            <span className="flex-[0_0_28%] text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>TÊN</span>
            <span className="flex-[0_0_12%] text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>LOẠI</span>
            <span className="flex-[0_0_10%] text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>CHAIN</span>
            <span className="flex-[0_0_18%] text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>SỐ LIỆU CHÍNH</span>
            <span className="flex-1 text-white/40" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>GHI CHÚ</span>
          </div>

          {competitors.map((c) => (
            <div key={c.name} className="flex items-center rounded-lg px-[2%]" style={{ padding: 'clamp(8px, 0.9vw, 16px) clamp(16px, 2vw, 32px)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex-[0_0_28%] flex items-center" style={{ gap: 'clamp(8px, 0.8vw, 14px)' }}>
                <div className="rounded-full" style={{ width: 'clamp(8px, 0.6vw, 10px)', height: 'clamp(8px, 0.6vw, 10px)', background: c.color }} />
                <span className="text-white font-medium" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{c.name}</span>
              </div>
              <span className="flex-[0_0_12%] text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>{c.type}</span>
              <span className="flex-[0_0_10%] text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>{c.chain}</span>
              <span className="flex-[0_0_18%] text-white font-bold" style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>{c.stat}</span>
              <span className="flex-1 text-white/50" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>{c.statSub}</span>
            </div>
          ))}
        </div>

        <p className="text-white/40 mt-auto text-right" style={{ fontSize: 'clamp(10px, 0.75vw, 13px)' }}>
          Nguồn: DefiLlama, GitHub, Dune Analytics, olas.network · Snapshot 24/02/2026
        </p>
      </div>
    </div>
  );
}
