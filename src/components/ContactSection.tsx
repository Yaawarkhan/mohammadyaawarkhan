import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, PaperPlaneTilt } from 'phosphor-react';
import { toast } from 'sonner';
gsap.registerPlugin(ScrollTrigger);
const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const heading = headingRef.current;

    // Heading animation
    gsap.fromTo(heading, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    // Form elements stagger
    if (form) {
      gsap.fromTo(form.children, {
        opacity: 0,
        x: -30
      }, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  return <section ref={sectionRef} id="contact" className="relative py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[500px] h-[500px] -top-64 left-1/2 opacity-10" />

      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-heading">Contact Me</h2>
          <p className="text-muted-foreground font-light mt-6 max-w-md mx-auto">
            Have a project in mind or just want to say hello? Drop me a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info - Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground font-light">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91 8859033083  </p>
                </div>
              </a>

              <a href="mailto:yaawar@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <EnvelopeSimple size={22} weight="fill" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">emailyaawar@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <GithubLogo size={22} weight="light" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <LinkedinLogo size={22} weight="light" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required className="glass-input" />
              </div>

              <div>
                <input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required className="glass-input" />
              </div>

              <div>
                <textarea placeholder="Your Message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} required rows={4} className="glass-input resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn btn-neon w-full flex items-center justify-center gap-3">
                {isSubmitting ? 'Sending...' : <>
                    Send Message
                    <PaperPlaneTilt size={20} weight="bold" />
                  </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;