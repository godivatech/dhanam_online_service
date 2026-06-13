import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { MessageCircle, Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  { title: "Property Registration", href: "/services/property-registration" },
  { title: "Marriage Registration", href: "/services/marriage-registration" },
  { title: "Trust Registration", href: "/services/trust-registration" },
  { title: "Society Registration", href: "/services/society-registration" },
  { title: "Encumbrance Certificate", href: "/services/encumbrance-certificate" },
  { title: "Certified Copy", href: "/services/certified-copy" },
  { title: "Legal Documentation", href: "/services/legal-documentation" },
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
      className="p-2 rounded-full hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-3xl font-bold text-primary dark:text-accent tracking-tight">
          A.B. Dhanam
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-accent">Home</Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-accent">About Us</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent py-2">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {showServices && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-card border border-border shadow-lg rounded-md overflow-hidden py-2"
                >
                  <Link href="/services" className="block px-4 py-2 text-sm font-bold border-b hover:bg-muted text-accent">View All Services</Link>
                  {SERVICES.map((s, i) => (
                    <Link key={i} href={s.href} className="block px-4 py-2 text-sm hover:bg-muted hover:text-accent transition-colors">
                      {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-accent">Projects</Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/book-consultation" className="hidden lg:inline-flex bg-accent text-primary px-6 py-2.5 rounded-md text-sm font-bold hover:bg-accent/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Book Consultation
          </Link>
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="text-base font-medium py-2 border-b">Home</Link>
              <Link href="/about" className="text-base font-medium py-2 border-b">About Us</Link>
              <div className="py-2 border-b">
                <span className="text-base font-medium mb-2 block">Services</span>
                <div className="flex flex-col pl-4 gap-2">
                  <Link href="/services" className="text-sm font-bold text-accent">All Services</Link>
                  {SERVICES.map((s, i) => (
                    <Link key={i} href={s.href} className="text-sm text-muted-foreground">{s.title}</Link>
                  ))}
                </div>
              </div>
              <Link href="/projects" className="text-base font-medium py-2 border-b">Projects</Link>
              <Link href="/contact" className="text-base font-medium py-2 border-b">Contact</Link>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Theme</span>
                <ThemeToggle />
              </div>
              <Link href="/book-consultation" className="w-full text-center bg-accent text-primary px-4 py-3 rounded-md text-base font-bold mt-4">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-3xl font-bold text-accent mb-6">A.B. Dhanam</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Tamil Nadu's most trusted name in registration and documentation consultancy. Fast, Reliable, Professional service with over 9 years of excellence.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> About Us</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Why Choose Us</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Projects & Clients</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Blog & Resources</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Key Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/services/property-registration" className="hover:text-accent transition-colors">Property Registration</Link></li>
              <li><Link href="/services/marriage-registration" className="hover:text-accent transition-colors">Marriage Registration</Link></li>
              <li><Link href="/services/trust-registration" className="hover:text-accent transition-colors">Trust Registration</Link></li>
              <li><Link href="/services/society-registration" className="hover:text-accent transition-colors">Society Registration</Link></li>
              <li><Link href="/services/encumbrance-certificate" className="hover:text-accent transition-colors">Encumbrance Certificate</Link></li>
              <li><Link href="/services" className="text-accent font-semibold mt-2 inline-block">View All Services &rarr;</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4 text-sm text-primary-foreground/80">
              <p><strong>Address:</strong><br />123, Anna Salai,<br />Chennai, Tamil Nadu 600002</p>
              <p><strong>Phone:</strong><br />+91 98765 43210</p>
              <p><strong>Email:</strong><br />contact@abdhanam.com</p>
              <p><strong>Hours:</strong><br />Mon-Sat: 9:30 AM - 6:30 PM</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} A.B. Dhanam Online Services. All rights reserved.</p>
          <div className="flex gap-6">
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
      className="fixed bottom-6 right-6 p-4 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#1ebd5a] transition-all hover:scale-110 z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-foreground text-background px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
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
      const scroll = `${totalScroll / windowHeight}`;
      setProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
      <div 
        className="h-full bg-accent" 
        style={{ width: `${progress * 100}%`, transition: 'width 0.1s ease-out' }}
      />
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <ScrollProgress />
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
