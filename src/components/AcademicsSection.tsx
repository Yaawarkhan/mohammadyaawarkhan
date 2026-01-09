import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Target,
  Award,
  FileCheck
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const academics = [
  {
    icon: BookOpen,
    title: 'Freshman (9th Grade)',
    details: 'GPA: 4.0',
    subtext: 'Ranking: Valedictorian out of 250+ students',
    color: 'text-blue-400',
  },
  {
    icon: BookOpen,
    title: 'Sophomore (10th Grade)',
    details: 'GPA: 4.0',
    subtext: 'Ranking: Salutatorian out of 250+ students',
    color: 'text-green-400',
  },
  {
    icon: BookOpen,
    title: 'Junior (11th Grade)',
    details: 'GPA: 4.0',
    subtext: 'Ranking: top 1 percent out of 650+ students',
    color: 'text-orange-400',
  },
  {
    icon: BookOpen,
    title: 'Senior (12th Grade)',
    details: 'Awaiting Results',
    subtext: '',
    color: 'text-red-400',
  },
  {
    icon: FileCheck,
    title: 'SAT Score',
    details: '---- / 1600',
    subtext: '',
    color: 'text-yellow-400',
  },
  {
    icon: Target,
    title: 'ACT Score',
    details: 'To be updated',
    subtext: '',
    color: 'text-pink-400',
  },
  {
    icon: GraduationCap,
    title: 'TOEFL',
    details: '-- / 120',
    subtext: '',
    color: 'text-cyan-400',
  },
  {
    icon: Trophy,
    title: 'Olympiads',
    details: 'To be updated',
    subtext: '',
    color: 'text-purple-400',
  },
];

const AcademicsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const cards = cardsRef.current;

      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (cards) {
        gsap.fromTo(
          cards.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: cards,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="academics" className="relative py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[400px] h-[400px] top-0 right-0 opacity-10" />

      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div ref={headingRef} className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academics</h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {academics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-lg font-medium text-primary mb-1">{item.details}</p>
                  {item.subtext && (
                    <p className="text-sm text-muted-foreground font-light">{item.subtext}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
