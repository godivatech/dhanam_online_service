import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { MessageCircle, Menu, X, ChevronDown, Moon, Sun, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  { title: "Property Registration", href: "/services/property-registration", icon: "🏢", desc: "Sale & settlement deeds" },
  { title: "Marriage Registration", href: "/services/marriage-registration", icon: "💍", desc: "Under all marriage acts" },
  { title: "Trust Registration", href: "/services/trust-registration", icon: "🤝", desc: "Charitable & private trusts" },
  { title: "Society Registration", href: "/services/society-registration", icon: "👥", desc: "Associations & NGOs" },
  { title: "Encumbrance Certificate", href: "/services/encumbrance-certificate", icon: "📄", desc: "Property history verification" },
  { title: "Certified Copy", href: "/services/certified-copy", icon: "📑", desc: "Official document copies" },
  { title: "Legal Documentation", href: "/services/legal-documentation", icon: "⚖️", desc: "Drafting & vetting" },
];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground"
      aria-label="Toggle theme"
      data-testid="button-theme-toggle"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#0A2540]/90 backdrop-blur-md border-b border-accent/20 transition-all duration-300">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="group flex flex-col justify-center" data-testid="link-home-logo">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl md:text-4xl font-bold text-accent tracking-tight">A.B.</span>
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary dark:text-white tracking-tight">Dhanam</span>
          </div>
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-primary/70 dark:text-white/70 font-semibold mt-0.5">Online Services</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold tracking-wide text-foreground relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-semibold tracking-wide text-foreground relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full transition-colors">About Us</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold tracking-wide text-foreground relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full transition-colors" data-testid="button-services-menu">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${showServices ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showServices && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-background border-t-4 border-accent shadow-2xl rounded-b-lg overflow-hidden mt-0"
                >
                  <div className="p-6 grid grid-cols-2 gap-4">
                    {SERVICES.map((s, i) => (
                      <Link key={i} href={s.href} className="group p-3 rounded-lg hover:bg-muted transition-colors flex items-start gap-3">
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{s.icon}</span>
                        <div>
                          <span className="block text-sm font-bold text-foreground group-hover:text-accent transition-colors">{s.title}</span>
                          <span className="block text-xs text-muted-foreground mt-1">{s.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-muted p-4 text-center border-t border-border">
                    <Link href="/services" className="text-sm font-bold text-accent hover:text-accent/80 transition-colors">
                      View All Services &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" className="text-sm font-semibold tracking-wide text-foreground relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full transition-colors">Projects</Link>
          <Link href="/contact" className="text-sm font-semibold tracking-wide text-foreground relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full transition-colors">Contact</Link>
          <ThemeToggle />
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/book-consultation" className="hidden md:inline-flex bg-accent text-[#0A2540] px-6 py-3 rounded-none text-sm font-bold tracking-wide hover:bg-accent/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" data-testid="link-book-consultation-header">
            Book Consultation
          </Link>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} data-testid="button-mobile-menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-[300px] max-w-[80vw] bg-background shadow-2xl z-[70] lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-border">
                <span className="font-serif font-bold text-xl text-accent">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2" data-testid="button-close-mobile-menu">
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                <Link href="/" className="text-lg font-serif font-bold text-foreground border-b border-border pb-2">Home</Link>
                <Link href="/about" className="text-lg font-serif font-bold text-foreground border-b border-border pb-2">About Us</Link>
                
                <div className="pb-2 border-b border-border">
                  <span className="text-lg font-serif font-bold text-accent mb-4 block">Services</span>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-muted">
                    <Link href="/services" className="text-sm font-bold text-foreground">All Services</Link>
                    {SERVICES.map((s, i) => (
                      <Link key={i} href={s.href} className="text-sm text-muted-foreground hover:text-accent">{s.title}</Link>
                    ))}
                  </div>
                </div>
                
                <Link href="/projects" className="text-lg font-serif font-bold text-foreground border-b border-border pb-2">Projects</Link>
                <Link href="/contact" className="text-lg font-serif font-bold text-foreground border-b border-border pb-2">Contact</Link>
                
                <div className="flex justify-between items-center py-2">
                  <span className="font-serif font-bold">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
              
              <div className="p-6 border-t border-border">
                <Link href="/book-consultation" className="block w-full text-center bg-accent text-[#0A2540] px-4 py-4 font-bold tracking-wide hover:bg-accent/90 transition-colors">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#060f1a] text-white pt-20 pb-10 border-t-2 border-accent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl font-bold text-accent tracking-tight">A.B.</span>
                <span className="font-serif text-3xl font-bold text-white tracking-tight">Dhanam</span>
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/60 font-semibold mt-1 block">Online Services</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Tamil Nadu's most trusted name in registration and documentation consultancy. 
            </p>
            <p className="text-accent/80 font-serif italic text-lg">Fast • Reliable • Professional</p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-white/50 border-b border-white/10 pb-4">Company</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></span> About Us</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></span> Why Choose Us</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></span> Projects</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></span> Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></span> Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-white/50 border-b border-white/10 pb-4">Services</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="/services/property-registration" className="hover:text-accent transition-colors block truncate">Property Registration</Link></li>
              <li><Link href="/services/marriage-registration" className="hover:text-accent transition-colors block truncate">Marriage Registration</Link></li>
              <li><Link href="/services/trust-registration" className="hover:text-accent transition-colors block truncate">Trust Registration</Link></li>
              <li><Link href="/services/society-registration" className="hover:text-accent transition-colors block truncate">Society Registration</Link></li>
              <li><Link href="/services" className="text-accent font-semibold mt-4 inline-block hover:text-white transition-colors">View All Services &rarr;</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-white/50 border-b border-white/10 pb-4">Contact Info</h4>
            <div className="space-y-5 text-sm text-white/80">
              <p className="flex flex-col gap-1">
                <strong className="text-white">Address</strong>
                <span className="leading-relaxed">123, Anna Salai,<br />Chennai, Tamil Nadu 600002</span>
              </p>
              <p className="flex flex-col gap-1">
                <strong className="text-white">Phone</strong>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex flex-col gap-1">
                <strong className="text-white">Email</strong>
                <span>contact@abdhanam.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50 tracking-wide uppercase">
          <p>© {new Date().getFullYear()} A.B. Dhanam Online Services. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group"
      aria-label="Chat on WhatsApp"
      data-testid="link-whatsapp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-70" />
      <div className="relative bg-[#25D366] p-4 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white/20">
        <MessageCircle className="w-8 h-8" />
      </div>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Chat with us
      </span>
    </a>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-accent shadow-[0_0_10px_rgba(212,175,55,0.8)]" 
        style={{ width: `${progress * 100}%`, transition: 'width 0.1s ease-out' }}
      />
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col font-sans bg-background text-foreground selection:bg-accent selection:text-black">
      <ScrollProgress />
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
