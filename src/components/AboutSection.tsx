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

// Custom Python icon component (snake-like)
const PythonIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 256 256" 
    className={className}
    fill="currentColor"
  >
    <path d="M216,80a8,8,0,0,1-8,8H173.93a8,8,0,0,0-7.79,6.22L152.35,152H176a8,8,0,0,1,0,16H147.76l-9.5,47.52a8,8,0,0,1-7.83,6.48H120a8,8,0,0,1-7.83-9.52L120.51,168H88a8,8,0,0,1,0-16h36.93a8,8,0,0,0,7.79-6.22L146.51,88H120a8,8,0,0,1,0-16h31.76l9.5-47.52A8,8,0,0,1,169.09,18H180a8,8,0,0,1,7.83,9.52L179.49,72H208A8,8,0,0,1,216,80ZM56,72a40,40,0,1,0,40,40A40,40,0,0,0,56,72Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,56,136Zm144,48a40,40,0,1,0,40,40A40,40,0,0,0,200,184Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,200,248Z"/>
  </svg>
);

// Custom TypeScript icon component
const TypeScriptIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 256 256" 
    className={className}
    fill="currentColor"
  >
    <path d="M48,36H208a12,12,0,0,1,12,12V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36Zm160,168V52H52V204H204ZM128,100H72v16h20v68h16V116h20Zm72,36a20,20,0,0,0-20-20H156v16h20v8H156a20,20,0,0,0-20,20v12a20,20,0,0,0,20,20h28V136Zm-16,36H156v-8h28Z"/>
  </svg>
);

const skills = [
  { icon: FileHtml, name: 'HTML5' },
  { icon: FileCss, name: 'CSS3' },
  { icon: FileJs, name: 'JavaScript' },
  { icon: Atom, name: 'React' },
  { icon: Database, name: 'MySQL' },
  { icon: Brain, name: 'AI/ML' },
  { icon: TypeScriptIcon, name: 'TypeScript', isCustom: true },
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
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
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
    <section ref={sectionRef} id="about" className="relative py-24 overflow-hidden">
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
                <div key={name} className="flex flex-col items-center gap-2">
                  <div className="skill-icon group" title={name}>
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
                  <span className="text-xs font-light tracking-wide text-muted-foreground text-center">
                    {name}
                  </span>
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
              <div className="relative w-80 h-[26rem] md:w-96 md:h-[32rem] rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                <img
                  src={profileImage}
                  alt="Mohammad Yaawar Khan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
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
