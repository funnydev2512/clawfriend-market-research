import { VideoBackground } from '../components/VideoBackground';
import { ClawFriendLogo } from '../components/ClawFriendLogo';

const VIDEO_SRC = 'https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8';

export function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={VIDEO_SRC} />

      <div className="relative z-10 flex flex-col w-full h-full px-[7%] pt-[3.5%] pb-[3%]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <ClawFriendLogo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Market Research
          </span>
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center" style={{ marginTop: '-3%' }}>
          <h1
            className="text-white text-center font-bold"
            style={{
              fontSize: 'clamp(32px, 5.5vw, 96px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Skill Market
            <br />
            <span className="bg-gradient-to-r from-[#D2FF55] to-[#55FFD2] bg-clip-text text-transparent">
              Go-to-Market Strategy
            </span>
          </h1>
          <p
            className="text-white/90 text-center"
            style={{
              fontSize: 'clamp(20px, 2.5vw, 48px)',
              marginTop: '1.5%',
            }}
          >
            Web3 AI Agent Platform on BNB Smart Chain
          </p>
          <p
            className="text-white/75 text-center"
            style={{
              fontSize: 'clamp(14px, 1.3vw, 24px)',
              marginTop: '2%',
            }}
          >
            By Peter
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-center">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            February 2026
          </span>
        </div>
      </div>
    </div>
  );
}
