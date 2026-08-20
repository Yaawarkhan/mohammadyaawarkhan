import { useParams, useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import { ArrowLeft, ArrowUpRight } from 'phosphor-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aicademia1 from '@/assets/aicademia-1.jpeg';
import aicademia2 from '@/assets/aicademia-2.jpeg';
import aicademia3 from '@/assets/aicademia-3.jpeg';
import thinkai1 from '@/assets/thinkai-1.jpeg';
import thinkai2 from '@/assets/thinkai-2.jpeg';
import thinkai3 from '@/assets/thinkai-3.jpeg';
import tutoring1 from '@/assets/tutoring-1.jpeg';
import tutoring2 from '@/assets/tutoring-2.jpeg';
import tutoring3 from '@/assets/tutoring-3.png';
import paperSocial from '@/assets/paper-social.png';
import paperRetail from '@/assets/paper-retail.png';
import paperKmeans from '@/assets/paper-kmeans.png';
import osintEye from '@/assets/osint-eye.jpg';
import hifazatAi from '@/assets/hifazat-ai.jpg';
import startupBook from '@/assets/startup-book.jpg';

gsap.registerPlugin(ScrollTrigger);

export interface ProjectData {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string[];
  tech: string[];
  category: string;
  link?: string;
  linkText?: string;
  gallery?: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: 'aicademia',
    image: aicademia1,
    title: 'Aicademia',
    subtitle: 'The All-in-One EdTech App',
    description: 'AI-powered study platform providing students with a focused learning ecosystem',
    fullDescription: [
      "Aicademia is an AI-powered all-in-one study platform that emerged as a direct outcome of my earlier tutoring startup, which, despite strong intent and effort, did not scale to the extent we had envisioned.",
      "Being a student myself and working closely with other students through that venture gave me firsthand insight into the deeper, systemic problems in learning—fragmented study resources, lack of structure outside classrooms, and constant digital distractions that limited students' ability to study independently.",
      "Determined to address these challenges at scale, I spent over a year independently designing and building Aicademia with the help of AI to provide students with a single, focused learning ecosystem that integrates academic content, lectures, planning tools, AI-driven doubt support, and discipline-focused features.",
      "The project was later incubated by Aligarh Muslim University, offering institutional validation and guidance, while I continued developing it as a student-founder with the aim of solving these learning challenges not for a few students, but for the wider student community."
    ],
    tech: ['React', 'AI/ML', 'TypeScript', 'Tailwind CSS'],
    category: 'Startup',
    link: 'https://aicademia.lovable.app/',
    linkText: 'Visit Aicademia',
    gallery: [aicademia1, aicademia2, aicademia3]
  },
  {
    id: 'startup-book',
    image: startupBook,
    title: 'Startups: Everything You Need To Know',
    subtitle: 'A Book In Progress',
    description: 'A book I am writing that breaks down everything you need to know about startups',
    fullDescription: [
      "I'm currently writing a book that covers everything you need to know about startups \u2014 from the very first idea to building, launching, and growing a real company.",
      "The book draws directly from my own journey as a student founder: running a tutoring venture, building Aicademia, getting incubated, pitching, failing, iterating, and learning what actually moves a startup forward versus what only looks productive.",
      "It walks through idea validation, understanding your users, building an MVP, branding and marketing, sales, team building, fundraising basics, and the mindset required to keep going when things stall.",
      "My aim is to write the guide I wish I had when I started \u2014 practical, honest, and written in plain language for students and first-time founders rather than in corporate jargon.",
      "The book is a work in progress, and I'm writing it alongside my studies and projects."
    ],
    tech: ['Writing', 'Entrepreneurship', 'Startups', 'Research'],
    category: 'Book'
  },
  {
    id: 'hifazat-ai',
    image: hifazatAi,
    title: 'Hifazat AI',
    subtitle: 'AI-Powered CCTV Security System',
    description: 'Hackathon-winning smart surveillance system with facial recognition and voice features',
    fullDescription: [
      "Hifazat AI is an AI-powered CCTV system built to turn ordinary security cameras into an intelligent safety layer, and it went on to win a hackathon.",
      "The system performs real-time facial recognition, identifying known individuals and flagging unrecognised faces instantly so that security teams get alerts the moment something looks off.",
      "It also includes voice features — voice-based alerts and interaction — so the system can communicate warnings rather than relying solely on a screen someone has to be watching.",
      "Beyond recognition, the project explored activity monitoring, event logging, and instant notifications, making surveillance proactive rather than something you only review after an incident.",
      "Building Hifazat AI under hackathon time pressure taught me rapid prototyping, computer vision pipelines, and how to present a technical product convincingly to judges."
    ],
    tech: ['Python', 'Computer Vision', 'Facial Recognition', 'AI/ML', 'Voice AI'],
    category: 'AI Project'
  },
  {
    id: 'osint-eye',
    image: osintEye,
    title: 'OSINT Eye',
    subtitle: 'Unified Open-Source Intelligence Toolkit',
    description: 'An OSINT tool combining multiple investigation utilities into one workflow',
    fullDescription: [
      "OSINT Eye is an open-source intelligence tool that brings together several existing OSINT utilities under a single, unified workflow for online investigations.",
      "Instead of jumping between a dozen scattered scripts and websites, the tool lets an investigator run lookups from one place and see the results side by side.",
      "It covers common investigative needs such as username and profile discovery across platforms, domain and IP reconnaissance, metadata inspection, and correlation of publicly available data points.",
      "The goal was to reduce the friction in early-stage research — collecting only publicly accessible information, responsibly and ethically, for legitimate research and security purposes.",
      "Building it deepened my understanding of APIs, automation, data correlation, and the ethics of digital investigation."
    ],
    tech: ['Python', 'OSINT', 'Automation', 'APIs', 'Cybersecurity'],
    category: 'Cybersecurity'
  },
  {
    id: 'ai-workshop',
    image: thinkai1,
    title: 'ThinkAI by Polaris',
    subtitle: 'Making AI Accessible to Young Minds',
    description: 'Interactive workshops introducing AI concepts to school students',
    fullDescription: [
      "Following my growing interest in AI, teaching, and entrepreneurship, I wanted to bring all three together in a meaningful way. That's how the idea for an AI Workshop for school students began — a space where young minds, especially those with little exposure to emerging technologies, could understand what AI really is, how it works, and how they can use it to learn better.",
      "The goal was simple: make AI accessible. We introduced students to real AI concepts, explained how these tools think, shared the top AI resources they can use for studying and everyday life, and showed them how to apply them responsibly.",
      "To bring this idea to life, I formed a team of four, and we secured support from Polaris Cultural and Educational Trust, which backed our project and helped us scale it.",
      "We then reached out to principals, met with multiple schools across Aligarh, and received permission to conduct our free AI workshop. Each session was fun, interactive, and designed to remove the fear and mystery around AI. At the end, students received e-certificates for participation.",
      "This project taught us networking, public speaking, hosting, entrepreneurship, sales, marketing, leadership, teaching, content creation, and most importantly, how to connect with people through a shared curiosity for technology."
    ],
    tech: ['Public Speaking', 'Education', 'AI', 'Workshop Design'],
    category: 'Initiative',
    gallery: [thinkai1, thinkai2, thinkai3]
  },
  {
    id: 'tutoring-business',
    image: tutoring1,
    title: 'Tutoring Business',
    subtitle: 'Connecting Students with Quality Educators',
    description: 'Platform connecting students with knowledgeable, compassionate teachers',
    fullDescription: [
      "Growing up in India, I've witnessed firsthand how access to quality education can shape futures, open doors, and transform lives. This awareness became the foundation of my passion for learning and ultimately led me to start my own tutoring business.",
      "My goal was simple but powerful: to connect students with knowledgeable, compassionate teachers who could help them unlock their full potential. I've always believed that education should be personal, flexible, and accessible — and through this venture, I've worked to create a platform that makes that belief a reality.",
      "As a student myself, I understand the pressures and gaps that can exist in our current academic system. That's why I've focused on bridging those gaps through personalized guidance and consistent support.",
      "My entrepreneurial journey has taught me valuable lessons in communication, time management, and problem-solving, all while fueling my desire to give back to my community.",
      "This business isn't just a project — it's a purpose. It reflects my deep-rooted belief that every student, regardless of their circumstances, deserves the opportunity to learn and grow."
    ],
    tech: ['Business Development', 'Education', 'Mentoring', 'Marketing'],
    category: 'Startup',
    link: 'https://www.instagram.com/tutor_edge_',
    linkText: 'Visit Instagram Page',
    gallery: [tutoring1, tutoring2, tutoring3]
  },
  {
    id: 'social-media-research',
    image: paperSocial,
    title: 'Social Media Research',
    subtitle: 'Gen Z Usage Patterns Study',
    description: 'Published research on social media usage among Indian Generation Z users',
    fullDescription: [
      "This research explores the impact of social media on Indian youth (ages 15–25), focusing on usage habits, preferences, and participation. Data covered demographics, site favorites, privacy views, and interaction styles.",
      "Instagram, WhatsApp, and YouTube emerged as the most-used apps. Researchers identified 29 distinct behavior patterns, showing diverse user intentions.",
      "Entertainment, networking, and education were key reasons for usage, though respondents reported frustrations like overselling, algorithmic bias, and platform overload.",
      "Participants suggested more customization, stronger privacy controls, and distraction-free features. Short videos, reels, and interactive content drove the highest engagement, offering insights for platform design and digital well-being.",
      "Published in IJCRT (International Journal Of Creative Research Thoughts)"
    ],
    tech: ['Research', 'Data Analysis', 'Survey Design', 'Publication'],
    category: 'Research',
    link: 'https://ijcrt.org/viewfull.php?&p_id=IJCRT2509605',
    linkText: 'View Full Research Paper'
  },
  {
    id: 'retail-research',
    image: paperRetail,
    title: 'Retail Space Management Research',
    subtitle: 'Evolution of Organized Grocery Retail',
    description: 'Research conducted with Aligarh Muslim University on retail space optimization',
    fullDescription: [
      "This research, conducted with Aligarh Muslim University, examines the evolution of organized grocery retail in India from the perspective of space management.",
      "It investigates how internal layout design, shelving, product groupings, customer routing, and display strategies have transformed over time to balance competing demands of efficiency, experience, and profitability.",
      "Drawing on literature in retailing, merchandising, and atmospheric design, the authors situate the contemporary challenges of grocery retail in India—such as limited real estate, rising consumer expectations, and technological adoption—within a historical and theoretical framework.",
      "The study foregrounds the role of spatial optimization as not just a logistical concern but a strategic lever in shaping consumer behavior and retailer competitiveness.",
      "Published in IJIRT (International Journal of Innovative Research in Technology)"
    ],
    tech: ['Research', 'Space Management', 'Retail Analytics', 'AMU Collaboration'],
    category: 'Research',
    link: 'https://ijirt.org/article?manuscript=178214',
    linkText: 'View Full Research Paper'
  },
  {
    id: 'kmeans-research',
    image: paperKmeans,
    title: 'K-Means Cluster Analysis',
    subtitle: 'Gen Z Social Media User Segmentation',
    description: 'Advanced statistical analysis of Generation Z social media behavior patterns',
    fullDescription: [
      "This study examines Gen Z social media users, primarily aged 15–25, using data collected through an online questionnaire.",
      "It explores whether dependency or addiction, creator-versus-consumer behavior, and digital privacy concerns influence users' willingness to switch social media platforms.",
      "Although about 30 variables were gathered, the data was clustered and indexed to focus on key causes. The research aims to provide a holistic understanding of long-term usage patterns and switching behavior, while also analyzing the role of gender.",
      "Its novelty lies in the strictly online data collection, Gen Z–specific sample, and the use of dependency, creator–consumer, and privacy indices.",
      "Published in JAAFR (Journal Of Advance And Future Research)"
    ],
    tech: ['K-Means Clustering', 'Statistical Analysis', 'Python', 'Research'],
    category: 'Research',
    link: 'https://rjwave.org/jaafr/viewpaperforall.php?paper=JAAFR2511134',
    linkText: 'View Full Research Paper'
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === projectId);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top when project page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }
  }, [projectId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <button onClick={handleGoBack} className="text-primary hover:underline">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${project.title} — ${project.subtitle} | Mohammad Yaawar Khan`}
        description={project.description}
        path={`/project/${project.id}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          headline: project.title,
          description: project.description,
          about: project.category,
          url: `https://mohammadyaawarkhan.lovable.app/project/${project.id}`,
          author: { '@type': 'Person', name: 'Mohammad Yaawar Khan' },
        }}
      />
      {/* Background orbs */}
      <div className="glow-orb w-[500px] h-[500px] top-0 -left-64 opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bottom-1/4 -right-48 opacity-15" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-5">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6" ref={contentRef}>
          {/* Category Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            {project.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary font-light mb-8">
            {project.subtitle}
          </p>

          {/* Hero Image(s) */}
          {project.gallery && project.gallery.length > 1 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {project.gallery.map((img, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={img}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-[300px] md:h-[400px] object-cover object-top"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/10 blur-3xl -z-10" />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative rounded-2xl overflow-hidden mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/10 blur-3xl -z-10" />
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-full bg-secondary/50 text-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-4xl space-y-6 mb-12">
            {project.fullDescription.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground font-light leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2"
            >
              {project.linkText || 'View Project'}
              <ArrowUpRight size={20} weight="bold" />
            </a>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Mohammad Yaawar Khan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
