import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate name fade in
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );

    // Animate progress bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 1,
      ease: 'power2.inOut',
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        if (percentRef.current) {
          percentRef.current.textContent = `${progress}%`;
        }
      }
    }, '-=0.3');

    // Fade out preloader
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
        onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Floating orbs in background */}
      <div className="glow-orb w-96 h-96 -top-48 -left-48 opacity-30" />
      <div className="glow-orb w-64 h-64 -bottom-32 -right-32 opacity-20" />

      {/* Name */}
      <div ref={nameRef} className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
          Mohammad Yaawar Khan
        </h1>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em]">
          Portfolio
        </p>
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div ref={progressRef} className="progress-bar" />
      </div>

      {/* Percentage */}
      <span ref={percentRef} className="text-primary text-sm font-light mt-4 tracking-widest">
        0%
      </span>
    </div>
  );
};

export default Preloader;
