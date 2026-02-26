import { useVideoBackground } from '../hooks/useVideoBackground';

export function VideoBackground({ src, opacity = 0.35 }: { src: string; opacity?: number }) {
  const videoRef = useVideoBackground(src);

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0, 0, 0, ${opacity})` }}
      />
    </>
  );
}
