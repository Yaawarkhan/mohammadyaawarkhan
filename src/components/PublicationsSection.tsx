import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BookOpen, Article } from 'phosphor-react';
import { projectsData } from '@/pages/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

export const publicationCategories = ['Research', 'Book'];

const PublicationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const publications = projectsData.filter((p) =>
    publicationCategories.includes(p.category)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = cardsRef.current;
      if (cards) {
        gsap.fromTo(
          cards.children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.7,
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
    <section ref={sectionRef} id="publications" className="relative py-32 overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] top-1/3 -right-48 opacity-10" />

      <div className="container mx-auto px-6">
        <div ref={headingRef} className="text-center mb-20">
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Writing &amp; Research
          </span>
          <h2 className="section-heading">Publications</h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((item) => {
            const Icon = item.category === 'Book' ? BookOpen : Article;
            return (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                className="project-card group cursor-pointer block"
              >
                <div className="relative p-4 bg-secondary/30 border-b border-border/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
                      <Icon size={14} weight="light" />
                      {item.category === 'Book' ? 'Book' : 'Research Paper'}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={16} weight="bold" className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary/80 text-xs uppercase tracking-widest mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm font-light">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
