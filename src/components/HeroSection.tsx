import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.8 });

    // Animate headline
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 60, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    );

    // Animate subtitle
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );

    // Animate CTA
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Animate Spline container
    tl.fromTo(
      splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
      '-=0.8'
    );

    // Floating orbs animation
    gsap.to('.hero-orb-1', {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.hero-orb-2', {
      y: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.hero-orb-3', {
      y: -15,
      x: 10,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="hero-orb-1 glow-orb w-[600px] h-[600px] -top-64 -left-64" />
      <div className="hero-orb-2 glow-orb w-[400px] h-[400px] top-1/2 left-1/4 opacity-20" />
      <div className="hero-orb-3 glow-orb w-[300px] h-[300px] bottom-32 right-1/4 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="text-primary text-glow">Mohammad</span>
              <br />
              <span className="text-foreground/90">Yaawar Khan</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg mb-10"
            >
              Student, AI Enthusiast, Entrepreneur — Building the future with 
              cutting-edge technology and creative innovation.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-neon"
              >
                Hire Me
              </button>
              <button
                onClick={() => handleScroll('#projects')}
                className="btn-outline-neon"
              >
                View Work
              </button>
            </div>
          </div>

          {/* Right - Spline 3D */}
          <div
            ref={splineRef}
            className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-jl6Ig26Gwdpk5XEE7VFmlnng/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="rounded-2xl"
              title="3D Robot Character"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
