import { useVideoBackground } from '../hooks/useVideoBackground';

export function VideoBackground({ src }: { src: string }) {
  const videoRef = useVideoBackground(src);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
