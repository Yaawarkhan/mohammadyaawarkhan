import { useState, useCallback } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AcademicsSection from '@/components/AcademicsSection';
import ExtracurricularsSection from '@/components/ExtracurricularsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useSmoothScroll();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Main Content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <main>
          <HeroSection />
          <AcademicsSection />
          <ExtracurricularsSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
