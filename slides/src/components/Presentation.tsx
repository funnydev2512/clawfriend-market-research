import { useState, useEffect, useCallback, useRef, type ReactElement } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';

interface PresentationProps {
  slides: ReactElement[];
}

export function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  const goTo = useCallback(
    (dir: 'next' | 'prev') => {
      if (isTransitioning) return;
      const next = dir === 'next' ? current + 1 : current - 1;
      if (next < 0 || next >= total) return;
      setDirection(dir);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(next);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 250);
    },
    [current, total, isTransitioning],
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goTo('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goTo('prev');
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, toggleFullscreen]);

  const resetHideTimer = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), 3000);
  }, []);

  useEffect(() => {
    const onMove = () => resetHideTimer();
    window.addEventListener('mousemove', onMove);
    resetHideTimer();
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [resetHideTimer]);

  const getSlideStyle = (index: number): React.CSSProperties => {
    const isCurrent = index === current;
    const isPast = index < current;
    const scale = isCurrent ? 1 : isPast ? 0.95 : 1.05;
    return {
      position: 'absolute',
      inset: 0,
      opacity: isCurrent ? 1 : 0,
      transform: `scale(${scale})`,
      transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
      pointerEvents: isCurrent ? 'auto' : 'none',
      zIndex: isCurrent ? 1 : 0,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-black overflow-hidden select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {slides.map((slide, i) => (
        <div key={i} style={getSlideStyle(i)}>
          {slide}
        </div>
      ))}

      <div
        className="absolute top-0 right-0 z-50 pt-[2%] pr-[3%]"
        style={{
          opacity: controlsVisible ? 1 : 0,
          transition: 'opacity 300ms ease',
          pointerEvents: controlsVisible ? 'auto' : 'none',
        }}
      >
        <span
          className="text-white/40"
          style={{ fontSize: 'clamp(9px, 0.85vw, 13px)' }}
        >
          ← → Navigate · F Fullscreen
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between px-[3%] pb-[2%]"
        style={{
          opacity: controlsVisible ? 1 : 0,
          transition: 'opacity 300ms ease',
          pointerEvents: controlsVisible ? 'auto' : 'none',
        }}
      >
        <span
          className="text-white/50 tabular-nums"
          style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}
        >
          {current + 1} / {total}
        </span>

        <div className="flex items-center gap-[6px]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === current || isTransitioning) return;
                setDirection(i > current ? 'next' : 'prev');
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrent(i);
                  setTimeout(() => setIsTransitioning(false), 50);
                }, 250);
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => goTo('prev')}
            className="p-1.5 rounded-md text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors"
            disabled={current === 0}
          >
            <ChevronLeft style={{ width: 'clamp(14px, 1.2vw, 20px)', height: 'clamp(14px, 1.2vw, 20px)' }} />
          </button>
          <button
            onClick={() => goTo('next')}
            className="p-1.5 rounded-md text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors"
            disabled={current === total - 1}
          >
            <ChevronRight style={{ width: 'clamp(14px, 1.2vw, 20px)', height: 'clamp(14px, 1.2vw, 20px)' }} />
          </button>
          <div className="w-px h-4 bg-white/20 mx-1" />
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-md text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors"
          >
            {isFullscreen ? (
              <Minimize style={{ width: 'clamp(14px, 1.2vw, 20px)', height: 'clamp(14px, 1.2vw, 20px)' }} />
            ) : (
              <Maximize style={{ width: 'clamp(14px, 1.2vw, 20px)', height: 'clamp(14px, 1.2vw, 20px)' }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
