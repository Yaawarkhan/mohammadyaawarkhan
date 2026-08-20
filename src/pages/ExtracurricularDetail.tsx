import { useParams, useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Users, 
  Mic, 
  Trophy, 
  FileText, 
  Heart,
  Sparkles,
  Rocket,
  Cog,
  GraduationCap
} from 'lucide-react';

const extracurricularsData = [
  {
    id: 'deputy-headboy',
    icon: Users,
    title: 'Deputy Headboy',
    color: 'text-purple-400',
    description: 'Led initiatives to improve leadership, engagement, and student participation.',
    fullDescription: `As Deputy Headboy, I had the privilege of serving as a bridge between the student body and the school administration. This role taught me invaluable lessons about leadership, responsibility, and the importance of listening to diverse perspectives.

My primary responsibilities included organizing school-wide events, facilitating student council meetings, and representing student interests to the faculty. I worked closely with the Headboy to implement new initiatives that enhanced student life and created a more inclusive school environment.

One of my proudest achievements was spearheading the "Student Voice" initiative, which established regular forums where students could share their concerns and suggestions directly with the administration. This program resulted in several policy changes that improved daily school life for everyone.`,
    details: [
      'Led student council meetings and represented student body',
      'Organized school-wide events and initiatives',
      'Implemented the "Student Voice" program for student feedback',
      'Collaborated with faculty on school improvement projects',
      'Mentored junior student council members'
    ],
    duration: 'Senior Year (2024-2025)',
  },
  {
    id: 'public-speaking',
    icon: Mic,
    title: 'Public Speaking & Workshop',
    color: 'text-yellow-400',
    description: 'Polished persuasive and oratory skills via inter-school events and AI workshop passion project.',
    fullDescription: `Public speaking has been a transformative skill that I've developed through consistent practice and participation in various inter-school competitions. From debates to oratory events, each experience has sharpened my ability to communicate complex ideas clearly and persuasively.

My passion project, ThinkAI by Polaris, emerged from my belief that AI literacy should be accessible to all students. Through this workshop series, I've taught students about artificial intelligence concepts, prompt engineering, and the ethical implications of AI technology.

The workshop combines theoretical knowledge with hands-on activities, making AI concepts approachable for students of all backgrounds. Seeing participants' confidence grow as they understand and apply AI concepts has been incredibly rewarding.`,
    details: [
      'Participated in inter-school debate and oratory competitions',
      'Founded and led ThinkAI by Polaris workshop series',
      'Taught AI fundamentals to over 100+ students',
      'Developed curriculum for AI literacy education',
      'Conducted hands-on prompt engineering sessions'
    ],
    duration: 'Ongoing (2023-Present)',
  },
  {
    id: 'soccer-captain',
    icon: Trophy,
    title: 'Soccer Captain',
    color: 'text-green-400',
    description: "Led the school's football team during my Sophomore year in high school.",
    fullDescription: `Being selected as Soccer Captain was both an honor and a significant responsibility. This role taught me that true leadership isn't about individual glory but about bringing out the best in every team member.

As captain, I focused on building team unity and ensuring every player felt valued regardless of their skill level. I organized extra practice sessions, developed game strategies with our coach, and worked on maintaining team morale through both victories and defeats.

The experience taught me invaluable lessons about resilience, teamwork, and the importance of leading by example. Whether we were celebrating a win or analyzing a loss, I learned that consistent effort and positive attitude are the foundations of any successful team.`,
    details: [
      'Led team practices and coordinated with coaching staff',
      'Developed game strategies and player positioning',
      'Maintained team morale and resolved conflicts',
      'Organized team-building activities',
      'Represented the team in inter-school tournaments'
    ],
    duration: 'Sophomore Year (2022-2023)',
  },
  {
    id: 'research-publication',
    icon: FileText,
    title: 'Research Publication',
    color: 'text-blue-400',
    description: 'Published Three research papers, one about retail and two about Social media and Gen Z.',
    fullDescription: `My journey into academic research began with a curiosity about how technology and social dynamics intersect in modern society. This led me to pursue independent research projects that resulted in three published papers.

My first paper explored the impact of social media on Gen Z's mental health and social behaviors, utilizing surveys and data analysis to draw meaningful conclusions. The second paper delved deeper into social media's influence on consumer behavior among young adults.

The third paper examined how retail spaces are evolving in the digital age, analyzing the integration of AI and data analytics in modern retail environments. Each paper went through rigorous peer review and taught me the importance of methodical research, critical analysis, and clear academic writing.`,
    details: [
      'Published in peer-reviewed journals',
      'Conducted primary research through surveys and interviews',
      'Applied statistical analysis methods',
      'Presented findings at academic forums',
      'Research topics: Social Media, Gen Z behavior, Retail Analytics'
    ],
    duration: '2023-2024',
  },
  {
    id: 'student-mentor',
    icon: GraduationCap,
    title: 'Student Mentor & Tutor',
    color: 'text-orange-400',
    description: 'Helped students excel in their academics by teaching with different methods of studying.',
    fullDescription: `Tutoring has been one of my most fulfilling experiences. I started tutoring classmates informally and gradually developed it into a structured initiative that has helped numerous students improve their academic performance.

My approach to tutoring is personalized—I believe every student learns differently, and a good tutor must adapt their teaching style to match. I use a combination of visual aids, practical examples, and interactive problem-solving to make complex concepts accessible.

Beyond just academic help, I've mentored students on study habits, time management, and exam preparation strategies. Seeing students gain confidence and achieve their academic goals has reinforced my passion for education and my belief in its transformative power.`,
    details: [
      'Tutored students in Mathematics, Science, and Computer Science',
      'Developed personalized learning plans for each student',
      'Created study materials and practice resources',
      'Mentored on study habits and time management',
      'Helped students achieve significant grade improvements'
    ],
    duration: 'Ongoing (2022-Present)',
  },
  {
    id: 'community-involvement',
    icon: Heart,
    title: 'Community Involvement',
    color: 'text-pink-400',
    description: 'Volunteered and led several NGO supported food drives and education drives for children.',
    fullDescription: `Community service has been a cornerstone of my high school experience. Working with various NGOs, I've had the opportunity to contribute to causes that directly impact lives in my community.

I've organized and participated in food drives that provided meals to underprivileged families, understanding firsthand the challenges many face in accessing basic necessities. These experiences have deepened my appreciation for the privileges I have and my commitment to giving back.

The education drives have been particularly meaningful, where we provided educational materials and tutoring to children who lack access to quality education. Seeing the excitement in children's eyes when they receive books and learn new things is a powerful reminder of education's transformative potential.`,
    details: [
      'Organized and led food distribution drives',
      'Volunteered with local NGOs on education initiatives',
      'Provided tutoring to underprivileged children',
      'Coordinated logistics for community events',
      'Raised awareness about social issues in school'
    ],
    duration: 'Ongoing (2021-Present)',
  },
  {
    id: 'solo-app-developer',
    icon: Sparkles,
    title: 'Solo App Developer',
    color: 'text-cyan-400',
    description: 'Currently building an AI powered tutoring app to help students with their academics.',
    fullDescription: `Combining my passion for technology and education, I'm currently developing an AI-powered tutoring application designed to make personalized learning accessible to all students.

The app leverages artificial intelligence to understand each student's learning style, strengths, and areas for improvement. It provides customized study plans, interactive problem-solving sessions, and instant feedback to help students learn more effectively.

This project has been a tremendous learning experience in full-stack development, AI integration, and user experience design. I'm applying everything I've learned about teaching and technology to create a tool that could potentially help thousands of students achieve their academic goals.`,
    details: [
      'Designing and developing full-stack application',
      'Integrating AI for personalized learning experiences',
      'Creating adaptive learning algorithms',
      'Building interactive UI/UX for student engagement',
      'Testing with beta users and iterating based on feedback'
    ],
    duration: 'In Development (2024-Present)',
  },
  {
    id: 'startup-enthusiast',
    icon: Rocket,
    title: 'Startup Enthusiast',
    color: 'text-emerald-400',
    description: 'Launched projects with a focus on innovation & problem solving while also focusing on teamwork.',
    fullDescription: `My entrepreneurial journey has been driven by a desire to solve real-world problems through innovation and technology. I've been involved in various startup initiatives, learning the fundamentals of building products that people actually need.

From ideation to execution, I've experienced the full startup lifecycle—conducting market research, building prototypes, gathering user feedback, and iterating on solutions. Each project has taught me valuable lessons about resilience, adaptability, and the importance of user-centered design.

Working in startup environments has also honed my teamwork skills. Collaborating with peers from diverse backgrounds, managing different perspectives, and working toward common goals has prepared me for the collaborative nature of modern business and technology.`,
    details: [
      'Participated in startup incubators and hackathons',
      'Developed business plans and pitch decks',
      'Built and tested product prototypes',
      'Conducted market research and user interviews',
      'Collaborated in cross-functional teams'
    ],
    duration: 'Ongoing (2023-Present)',
  },
  {
    id: 'robotics-workshops',
    icon: Cog,
    title: 'Robotics Workshops',
    color: 'text-amber-400',
    description: 'Attended several robotics workshops gaining theoretical knowledge and hands-on experience by building robots.',
    fullDescription: `Robotics workshops have been instrumental in developing my understanding of the intersection between hardware and software. Through these programs, I've gained hands-on experience in building and programming robots.

The workshops covered various aspects of robotics including mechanical design, electronics, sensor integration, and programming. Building robots from scratch—from assembling components to writing control algorithms—has given me a practical understanding of embedded systems and automation.

These experiences have fueled my interest in the future of automation and AI. Understanding how physical systems can be programmed to perform complex tasks has broadened my perspective on technology's potential to solve real-world problems.`,
    details: [
      'Built robots using Arduino and Raspberry Pi platforms',
      'Learned mechanical design and electronics basics',
      'Programmed robot control systems',
      'Integrated sensors and actuators',
      'Participated in robotics competitions'
    ],
    duration: '2022-2024',
  },
];

const ExtracurricularDetail = () => {
  const { extracurricularId } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const currentIndex = extracurricularsData.findIndex((e) => e.id === extracurricularId);
  const extracurricular = extracurricularsData[currentIndex];
  const nextExtracurricular = extracurricularsData[currentIndex + 1];
  const prevExtracurricular = extracurricularsData[currentIndex - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [extracurricularId]);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [extracurricularId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (nextExtracurricular) {
      navigate(`/extracurricular/${nextExtracurricular.id}`);
    }
  };

  const handlePrev = () => {
    if (prevExtracurricular) {
      navigate(`/extracurricular/${prevExtracurricular.id}`);
    }
  };

  if (!extracurricular) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Extracurricular Not Found</h1>
          <button onClick={handleGoBack} className="text-primary hover:underline">
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const Icon = extracurricular.icon;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${extracurricular.title} | Mohammad Yaawar Khan`}
        description={extracurricular.description}
        path={`/extracurricular/${extracurricular.id}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: extracurricular.title,
          description: extracurricular.description,
          url: `https://mohammadyaawarkhan.lovable.app/extracurricular/${extracurricular.id}`,
          author: { '@type': 'Person', name: 'Mohammad Yaawar Khan' },
        }}
      />
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="glow-orb w-[600px] h-[600px] top-0 right-0 opacity-10" />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 left-0 opacity-10" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>

          {/* Navigation arrows */}
          <div className="flex items-center gap-4">
            {prevExtracurricular && (
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Previous</span>
              </button>
            )}
            {nextExtracurricular && (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div ref={contentRef} className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Title Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-card/50 border border-border/30 flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${extracurricular.color}`} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {extracurricular.title}
                </h1>
                <p className="text-muted-foreground mt-2">{extracurricular.duration}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
            <div className="prose prose-invert max-w-none">
              {extracurricular.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground font-light leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Key Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Key Highlights</h2>
            <div className="grid gap-4">
              {extracurricular.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/20"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${extracurricular.color.replace('text-', 'bg-')}`} />
                  <p className="text-foreground font-light">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="flex items-center justify-between pt-8 border-t border-border/30">
            {prevExtracurricular ? (
              <button
                onClick={handlePrev}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Previous</p>
                  <p className="font-medium">{prevExtracurricular.title}</p>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextExtracurricular && (
              <button
                onClick={handleNext}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Next</p>
                  <p className="font-medium">{nextExtracurricular.title}</p>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularDetail;
