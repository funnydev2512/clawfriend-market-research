import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';

const VIDEO_SRC = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8';

export function IntroSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />

      <div className="relative z-10 flex flex-col w-full h-full px-[5.2%] pt-[3%] pb-[3%]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Market Research
          </span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Page 001
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-white font-bold"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 64px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            marginTop: '2.5%',
          }}
        >
          Competitive Landscape
          <br />
          <span className="text-[#D2FF55]">7 Đối Thủ Phân Tích</span>
        </h2>

        {/* Three-column layout */}
        <div className="flex mt-[3.5%] gap-[4%]" style={{ flex: 1, minHeight: 0 }}>
          {/* Column 1 — Market overview + big stat */}
          <div className="flex-[0_0_22%] flex flex-col justify-between">
            <p
              className="text-white/90"
              style={{ fontSize: 'clamp(12px, 0.95vw, 18px)', lineHeight: 1.5 }}
            >
              <span className="text-[#D2FF55] font-bold">TAM: $47.1B</span> (AI Agent market 2030).
              Thị trường đang ở giai đoạn{' '}
              <span className="font-bold">Early Growth</span>.
              Virtuals dẫn đầu $381M MC nhưng thiếu skill depth.
              ClawHub có 5,700+ skills nhưng không monetization.
            </p>
            <div className="mt-auto">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-white font-bold"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 64px)' }}
                >
                  $381M
                </span>
                <span className="text-white/80" style={{ fontSize: 'clamp(13px, 1.05vw, 20px)' }}>
                  Top MC
                </span>
              </div>
              <p className="text-white/60 mt-1" style={{ fontSize: 'clamp(11px, 0.85vw, 16px)' }}>
                Virtuals Protocol — market leader
              </p>
            </div>
          </div>

          {/* Column 2 — Main insight */}
          <div className="flex-[0_0_38%]">
            <p
              className="text-white/90"
              style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', lineHeight: 1.5 }}
            >
              Không ai kết hợp cả 3 lớp trong 1 product: <strong>Social Identity</strong> (agent tweet/reply/follow),{' '}
              <strong>Skill Commerce</strong> (public + holder-gated marketplace), và{' '}
              <strong>Capital Layer</strong> (bonding curve shares + 5% creator fee).
              <br /><br />
              Virtuals có capital nhưng thiếu skill utility. ClawHub có skill distribution
              nhưng thiếu monetization. Olas có A2A marketplace nhưng UX quá phức tạp
              cho retail user. Gap lớn nhất: skill marketplace có utility thật +
              economic incentive + simple UX trên BSC.
              <br /><br />
              <span className="text-[#D2FF55] font-bold">→ ClawFriend là platform duy nhất lấp đầy gap này.</span>
            </p>
          </div>

          {/* Column 3 — Key stat + mini chart */}
          <div className="flex-[0_0_20%] flex flex-col justify-between">
            <div>
              <span
                className="text-white font-bold"
                style={{ fontSize: 'clamp(28px, 3.5vw, 64px)' }}
              >
                224K
              </span>
              <p className="text-white/80" style={{ fontSize: 'clamp(12px, 0.95vw, 18px)', marginTop: '4px' }}>
                GitHub Stars — ClawHub
              </p>
              <p className="text-white/60 mt-2" style={{ fontSize: 'clamp(11px, 0.85vw, 16px)', lineHeight: 1.5 }}>
                Repo tăng nhanh nhất lịch sử GitHub.
                5,700+ skills, 900+ contributors nhưng
                không có monetization cho creators.
              </p>
            </div>

            {/* Mini SVG line graph */}
            <div className="mt-auto">
              <svg viewBox="0 0 200 80" className="w-full" style={{ maxHeight: '80px' }}>
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D2FF55" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#D2FF55" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M10,65 Q40,60 60,50 T100,35 T140,20 T180,10"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M10,65 Q40,60 60,50 T100,35 T140,20 T180,10 L180,75 L10,75 Z"
                  fill="url(#chartFill)"
                />
                <circle cx="10" cy="65" r="4" fill="#B750B2" stroke="white" strokeWidth="1.5" />
                <circle cx="180" cy="10" r="4" fill="#B750B2" stroke="white" strokeWidth="1.5" />
              </svg>
              <div className="flex justify-between mt-1">
                <span className="text-white/50" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>2024</span>
                <span className="text-white/50" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-auto">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Competitive Landscape
          </span>
        </div>
      </div>
    </div>
  );
}
