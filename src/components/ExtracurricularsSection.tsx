import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  Mic, 
  Trophy, 
  FileText, 
  Heart,
  Sparkles,
  Rocket,
  Cog,
  GraduationCap,
  Globe
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const extracurriculars = [
  {
    icon: Users,
    title: 'Deputy Headboy',
    description: 'Led initiatives to improve leadership, engagement, and student participation.',
    color: 'text-purple-400',
  },
  {
    icon: Mic,
    title: 'Public Speaking & Workshop',
    description: 'Polished persuasive and oratory skills via inter-school events and AI workshop passion project.',
    color: 'text-yellow-400',
  },
  {
    icon: Trophy,
    title: 'Soccer Captain',
    description: "Led the school's football team during my Sophomore year in high school.",
    color: 'text-green-400',
  },
  {
    icon: FileText,
    title: 'Research Publication',
    description: 'Published Three research papers, one about retail and two about Social media and Gen Z.',
    color: 'text-blue-400',
  },
  {
    icon: GraduationCap,
    title: 'Student Mentor & Tutor',
    description: 'Helped students excel in their academics by teaching with different methods of studying.',
    color: 'text-orange-400',
  },
  {
    icon: Heart,
    title: 'Community Involvement',
    description: 'Volunteered and led several NGO supported food drives and education drives for children.',
    color: 'text-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Solo App Developer',
    description: 'Currently building an AI powered tutoring app to help students with their academics.',
    color: 'text-cyan-400',
  },
  {
    icon: Rocket,
    title: 'Startup Enthusiast',
    description: 'Launched projects with a focus on innovation & problem solving while also focusing on teamwork.',
    color: 'text-emerald-400',
  },
  {
    icon: Cog,
    title: 'Robotics Workshops',
    description: 'Attended several robotics workshops gaining theoretical knowledge and hands-on experience by building robots.',
    color: 'text-amber-400',
  },
];

const ExtracurricularsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="extracurriculars" className="relative py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[500px] h-[500px] bottom-0 -left-64 opacity-10" />

      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div ref={headingRef} className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Extracurriculars</h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {extracurriculars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;
