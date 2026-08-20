import { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '@/components/Seo';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AcademicsSection from '@/components/AcademicsSection';
import ExtracurricularsSection from '@/components/ExtracurricularsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const PRELOADER_KEY = 'myk-preloader-shown';
const SCROLL_KEY = 'myk-home-scroll';

const Index = () => {
  // Preloader only on a fresh load / hard refresh, not on in-app back navigation
  const [hasSeenPreloader] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem(PRELOADER_KEY) === '1'
  );
  const [isLoading, setIsLoading] = useState(!hasSeenPreloader);
  const location = useLocation();
  const restoredRef = useRef(false);

  useSmoothScroll();

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem(PRELOADER_KEY, '1');
    setIsLoading(false);
  }, []);

  // Persist scroll position so returning to the home page feels instant
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const saveScroll = () => {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    };

    window.addEventListener('scroll', saveScroll, { passive: true });
    window.addEventListener('beforeunload', saveScroll);
    return () => {
      saveScroll();
      window.removeEventListener('scroll', saveScroll);
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, []);

  useEffect(() => {
    if (restoredRef.current || isLoading) return;
    restoredRef.current = true;

    if (hasSeenPreloader) {
      const saved = Number(sessionStorage.getItem(SCROLL_KEY) || 0);
      if (saved > 0) {
        requestAnimationFrame(() => window.scrollTo(0, saved));
      }
    }
  }, [isLoading, hasSeenPreloader, location.key]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Seo
        title="Mohammad Yaawar Khan — Student Founder, AI & Research Portfolio"
        description="Portfolio of Mohammad Yaawar Khan: AI projects, startup ventures, independent research, and education initiatives by a student founder from India."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Mohammad Yaawar Khan',
          jobTitle: 'Student Founder',
          url: 'https://mohammadyaawarkhan.lovable.app/',
          sameAs: ['https://instagram.com/yaawar_khan'],
        }}
      />
      {!hasSeenPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <AcademicsSection />
          <ExtracurricularsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
