import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'phosphor-react';
import { projectsData } from '@/pages/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const cards = cardsRef.current;

      // Heading animation
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

      // Cards stagger animation
      if (cards) {
        gsap.fromTo(
          cards.children,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
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
    <section ref={sectionRef} id="projects" className="relative py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[400px] h-[400px] top-1/4 -left-48 opacity-15" />
      <div className="glow-orb w-[300px] h-[300px] bottom-1/4 -right-32 opacity-10" />

      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            My Work
          </span>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card group cursor-pointer block"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={20} weight="bold" className="text-primary" />
                </div>

                {/* Category badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-light tracking-wide rounded-full bg-secondary/50 text-muted-foreground border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs font-light tracking-wide rounded-full bg-secondary/50 text-muted-foreground border border-border/30">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
