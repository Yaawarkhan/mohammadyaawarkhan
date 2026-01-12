import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const footer = footerRef.current;

      gsap.fromTo(
        footer,
        { opacity: 0, y: 60, filter: 'blur(5px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Floating particles in footer
      gsap.to('.footer-particle', {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);


  return (
    <footer ref={footerRef} className="relative py-16 border-t border-border/30 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="footer-particle absolute w-2 h-2 rounded-full bg-primary/30 top-8 left-[10%]" />
        <div className="footer-particle absolute w-3 h-3 rounded-full bg-primary/20 top-16 left-[30%]" />
        <div className="footer-particle absolute w-1.5 h-1.5 rounded-full bg-primary/40 top-12 left-[50%]" />
        <div className="footer-particle absolute w-2 h-2 rounded-full bg-primary/25 top-6 left-[70%]" />
        <div className="footer-particle absolute w-2.5 h-2.5 rounded-full bg-primary/30 top-20 left-[85%]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm font-light">
            © 2026 Mohammad Yaawar Khan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
