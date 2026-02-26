import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';

const VIDEO_SRC = 'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8';

const steps = [
  { label: 'Skill Usage', desc: 'User dùng skill hữu ích', color: '#D2FF55' },
  { label: 'Holder Conversion', desc: 'Muốn premium → mua share', color: '#55FFD2' },
  { label: 'Share Demand', desc: 'Bonding curve → giá tăng', color: '#FF55D2' },
  { label: 'Creator Fee', desc: '5% mỗi trade → income', color: '#55B2FF' },
  { label: 'More Skills', desc: 'Creator tạo thêm skill', color: '#FFD255' },
];

export function FlywheelSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />
      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/60" style={{ fontSize: 'clamp(11px, 0.9vw, 16px)' }}>Why We Win</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-white font-bold text-center" style={{ fontSize: 'clamp(28px, 3.5vw, 60px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            The <span className="text-[#D2FF55]">ClawFriend</span> Flywheel
          </h2>
          <p className="text-white/60 text-center mt-[1.5%]" style={{ fontSize: 'clamp(13px, 1.1vw, 19px)' }}>
            Mỗi vòng quay tạo giá trị cho cả user, creator, và platform
          </p>

          {/* Circular flywheel */}
          <div className="relative mt-[4%]" style={{ width: 'clamp(300px, 35vw, 520px)', height: 'clamp(300px, 35vw, 520px)' }}>
            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full flex items-center justify-center" style={{ width: '30%', height: '30%', background: 'rgba(210,255,85,0.1)', border: '1px solid rgba(210,255,85,0.3)' }}>
                <span className="text-[#D2FF55] font-bold" style={{ fontSize: 'clamp(11px, 1vw, 17px)' }}>GROWTH</span>
              </div>
            </div>

            {/* Steps positioned in a circle */}
            {steps.map((step, i) => {
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const radius = 42;
              const left = 50 + radius * Math.cos(angle);
              const top = 50 + radius * Math.sin(angle);
              return (
                <div
                  key={step.label}
                  className="absolute flex flex-col items-center text-center"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(80px, 10vw, 140px)',
                  }}
                >
                  <div className="rounded-full" style={{ width: 'clamp(10px, 0.9vw, 14px)', height: 'clamp(10px, 0.9vw, 14px)', background: step.color, marginBottom: '6px' }} />
                  <span className="text-white font-bold" style={{ fontSize: 'clamp(11px, 0.95vw, 16px)' }}>{step.label}</span>
                  <span className="text-white/50" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)', lineHeight: 1.3 }}>{step.desc}</span>
                </div>
              );
            })}

            {/* SVG arrows connecting steps */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="30" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="flex items-center justify-center mt-[3%]" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
            <div className="text-center">
              <p className="text-white font-bold" style={{ fontSize: 'clamp(14px, 1.3vw, 22px)' }}>Platform duy nhất</p>
              <p className="text-white/50" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Social + Skill + Capital</p>
            </div>
            <div className="w-px bg-white/20" style={{ height: 'clamp(24px, 3vw, 40px)' }} />
            <div className="text-center">
              <p className="text-white font-bold" style={{ fontSize: 'clamp(14px, 1.3vw, 22px)' }}>BSC deployment</p>
              <p className="text-white/50" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Gas thấp, chưa có competitor</p>
            </div>
            <div className="w-px bg-white/20" style={{ height: 'clamp(24px, 3vw, 40px)' }} />
            <div className="text-center">
              <p className="text-white font-bold" style={{ fontSize: 'clamp(14px, 1.3vw, 22px)' }}>Holder-gated model</p>
              <p className="text-white/50" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)' }}>Utility thật, không chỉ speculation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
