import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '@/assets/profile.png';
import { 
  FileHtml, 
  FileCss, 
  FileJs, 
  Atom, 
  Brain,
  Database
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

// Custom Python icon component
const PythonIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 256 256" 
    className={className}
    fill="currentColor"
  >
    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-82.34L139.31,152l18.35,18.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32Zm-37.32-24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L103.37,152,85.02,133.66a8,8,0,0,1,11.32-11.32Z"/>
  </svg>
);

const skills = [
  { icon: FileHtml, name: 'HTML5' },
  { icon: FileCss, name: 'CSS3' },
  { icon: FileJs, name: 'JavaScript' },
  { icon: Atom, name: 'React' },
  { icon: Database, name: 'MySQL' },
  { icon: Brain, name: 'AI/ML' },
  { icon: FileJs, name: 'TypeScript' },
  { icon: PythonIcon, name: 'Python', isCustom: true },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const skillsContainer = skillsRef.current;

    // Section fade in with blur
    gsap.fromTo(
      section,
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );

    // Image entrance from right
    gsap.fromTo(
      image,
      { opacity: 0, x: 100, rotate: 10 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Content entrance
    gsap.fromTo(
      content,
      { opacity: 0, y: 50, filter: 'blur(5px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Skills stagger animation
    if (skillsContainer) {
      gsap.fromTo(
        skillsContainer.children,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsContainer,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      // Only kill ScrollTriggers created by this component
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[500px] h-[500px] top-0 right-0 opacity-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Left side */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h3>

            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              I'm a student driven by curiosity and a belief that learning should extend beyond classrooms. Whether through research, building technology, or teaching others, I focus on turning ideas into work that has real-world value. My experiences span independent research, hands-on AI projects, workshops, and running a tutoring initiative aimed at making education more accessible. Growing up in India has shaped my understanding of how impactful the right opportunities can be, and I'm deeply interested in using technology and education to create meaningful, scalable change.
            </p>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-4 gap-4">
              {skills.map(({ icon: Icon, name, isCustom }) => (
                <div key={name} className="skill-icon group" title={name}>
                  {isCustom ? (
                    <Icon 
                      size={28} 
                      className="text-muted-foreground group-hover:text-primary transition-colors" 
                    />
                  ) : (
                    <Icon 
                      size={28} 
                      weight="light" 
                      className="text-muted-foreground group-hover:text-primary transition-colors" 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image - Right side */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect behind frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl blur-xl opacity-40" />
              
              {/* Image frame */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                <img
                  src={profileImage}
                  alt="Mohammad Yaawar Khan"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
