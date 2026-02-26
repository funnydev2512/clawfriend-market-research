import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';
import { Target, Search, Rocket } from 'lucide-react';

const VIDEO_SRC = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8';

const items = [
  { icon: Search, label: 'Competitive Landscape', time: '3 min', weight: '25%', desc: '7 đối thủ · Gap analysis · Positioning' },
  { icon: Target, label: 'Skill Research', time: '5 min', weight: '25%', desc: '5 skill có demand thực · Holder-gated model' },
  { icon: Rocket, label: 'Distribution Plan', time: '7 min', weight: '40%', desc: '$10K budget · 7 kênh · Month 1 timeline' },
];

export function AgendaSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>Agenda</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center" style={{ gap: 'clamp(16px, 2vw, 36px)' }}>
          <h2 className="text-white font-bold text-center" style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', letterSpacing: '-0.02em' }}>
            Hôm nay chúng ta sẽ cover
          </h2>

          <div className="flex w-full justify-center" style={{ gap: 'clamp(16px, 2.5vw, 48px)', maxWidth: '85%' }}>
            {items.map((item, i) => (
              <div key={item.label} className="flex-1 flex flex-col items-center text-center" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
                <div className="flex items-center justify-center rounded-full" style={{ width: 'clamp(48px, 5vw, 80px)', height: 'clamp(48px, 5vw, 80px)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <item.icon className="text-[#D2FF55]" style={{ width: 'clamp(22px, 2.5vw, 36px)', height: 'clamp(22px, 2.5vw, 36px)' }} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-white/40" style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>0{i + 1}</span>
                  <h3 className="text-white font-bold" style={{ fontSize: 'clamp(16px, 1.6vw, 28px)' }}>{item.label}</h3>
                  <span className="text-[#D2FF55]" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>{item.weight} · {item.time}</span>
                </div>
                <p className="text-white/60" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)', lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
