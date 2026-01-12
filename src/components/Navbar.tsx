import { useState, useEffect } from 'react';
import { List, X } from 'phosphor-react';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Academics', href: '#academics' },
  { name: 'Extracurriculars', href: '#extracurriculars' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-menu-item',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold tracking-tight text-foreground">
            <span className="text-primary">M</span>YK
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="nav-link"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleLinkClick('#contact')}
            className="hidden md:block btn-outline-neon"
          >
            Contact Me
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            <List size={28} weight="light" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="container mx-auto px-6 py-5 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-foreground p-2">
            <X size={28} weight="light" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="mobile-menu-item text-3xl font-light text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('#contact')}
            className="mobile-menu-item btn-neon mt-4"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
