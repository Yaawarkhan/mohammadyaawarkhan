import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  // Only render the WebGL scene while the hero is on screen — a hidden
  // Spline canvas keeps rendering and makes the rest of the page choppy.
  const [splineVisible, setSplineVisible] = useState(true);

  useEffect(() => {
    const el = splineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setSplineVisible(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);


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

    // Background text scroll animation
    if (bgTextRef.current) {
      gsap.fromTo(
        bgTextRef.current,
        { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          delay: 3,
          ease: 'power2.out',
        }
      );

      // Parallax scroll effect
      gsap.to(bgTextRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

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
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-20">
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
              <span className="block mt-4 text-lg sm:text-xl md:text-2xl font-light text-muted-foreground">
                Student, Researcher &amp; Founder
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg mb-10"
            >
              High school student focused on research, technology, and expanding access to meaningful education.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-neon"
              >
                Get in Touch
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
            {/* Background descriptors with glow effect */}
            <div ref={bgTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative">
                <h2 className="bg-text-glow text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black uppercase tracking-tighter leading-tight text-center select-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-foreground/10 to-foreground/5 drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                  AI Enthusiast<br/>Entrepreneur<br/>Student<br/>Founder<br/>Researcher
                </h2>
                {/* Glow layer behind text */}
                <div className="absolute inset-0 blur-2xl opacity-20">
                  <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black uppercase tracking-tighter leading-tight text-center select-none whitespace-nowrap text-primary">
                    AI Enthusiast<br/>Entrepreneur<br/>Student<br/>Founder<br/>Researcher
                  </h2>
                </div>
              </div>
            </div>
            {/* Spline iframe with watermark covered */}
            <div className="relative z-10 w-full h-full">
              {splineVisible && (
                <iframe
                  src="https://my.spline.design/nexbotrobotcharacterconcept-jl6Ig26Gwdpk5XEE7VFmlnng/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="rounded-2xl pointer-events-auto"
                  title="3D Robot Character"
                />
              )}

              {/* Solid cover for Spline watermark */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-background pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-30">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
