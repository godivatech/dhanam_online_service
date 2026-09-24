import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Building2, Heart, Landmark, Users, FileCheck, Copy, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

const SERVICES = [
  { title: "Property Registration", href: "/services/property-registration", icon: Building2, desc: "Sale & settlement deeds" },
  { title: "Marriage Registration", href: "/services/marriage-registration", icon: Heart, desc: "Under all marriage acts" },
  { title: "Trust Registration", href: "/services/trust-registration", icon: Landmark, desc: "Charitable & private trusts" },
  { title: "Society Registration", href: "/services/society-registration", icon: Users, desc: "Associations & NGOs" },
  { title: "Encumbrance Certificate", href: "/services/encumbrance-certificate", icon: FileCheck, desc: "Property history verification" },
  { title: "Certified Copy", href: "/services/certified-copy", icon: Copy, desc: "Official document copies" },
];

function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<"en" | "ta">("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Check for Google Translate cookie value
    const getLanguageFromCookie = () => {
      const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
      if (match && (match[1] === "en" || match[1] === "ta")) {
        return match[1] as "en" | "ta";
      }
      return "en";
    };

    // Periodically search for combo dropdown and sync state
    const checkSelect = setInterval(() => {
      const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (googleSelect) {
        setCurrentLang((googleSelect.value as "en" | "ta") || getLanguageFromCookie());
        clearInterval(checkSelect);
      }
    }, 500);

    return () => clearInterval(checkSelect);
  }, []);

  const changeLanguage = (langCode: "en" | "ta") => {
    setCurrentLang(langCode);
    setDropdownOpen(false);

    // 1. Explicitly set cookie values to hold the translation choice
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=`;
    }

    // 2. Trigger real-time translation widget selector
    const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event("change"));
    } else {
      // 3. Fallback: reload the page to initialize cookie-based translation on startup
      window.location.reload();
    }
  };

  return (
    <div className="relative font-sans">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-[#334155] hover:text-[#102F56] hover:bg-[#F1F5F9] border border-[#DCE3EA] transition-colors"
        aria-label="Select Language"
        data-testid="button-language-selector"
      >
        <Globe className="w-3.5 h-3.5 text-[#E5A019]" />
        <span>{currentLang === "en" ? "English" : "தமிழ்"}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-1.5 w-32 bg-white border border-[#DCE3EA] shadow-lg rounded overflow-hidden z-50"
            >
              <div className="py-1">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors ${
                    currentLang === "en" ? "text-[#123E73] bg-[#F1F5F9] font-bold" : "text-[#334155] hover:bg-[#F1F5F9]"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ta")}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors ${
                    currentLang === "ta" ? "text-[#123E73] bg-[#F1F5F9] font-bold" : "text-[#334155] hover:bg-[#F1F5F9]"
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
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
    <header className="sticky top-0 z-50 w-full bg-[#FAFBFC]/95 backdrop-blur-md border-b border-[#DCE3EA] shadow-[0_1px_3px_rgba(16,47,86,0.04)] transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 h-32 md:h-36 flex items-center justify-between">
        {/* Official Logo Only */}
        <Link href="/" className="group flex items-center py-1" data-testid="link-home-logo" aria-label="AB DHANAM GROUP">
          <img
            src="/images/Logo.png"
            alt="AB DHANAM GROUP"
            className="w-28 h-28 md:w-36 md:h-36 object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium tracking-wide text-[#334155] hover:text-[#102F56] relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5A019] after:transition-all hover:after:w-full transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium tracking-wide text-[#334155] hover:text-[#102F56] relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5A019] after:transition-all hover:after:w-full transition-colors">About Us</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium tracking-wide text-[#334155] hover:text-[#102F56] relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5A019] after:transition-all hover:after:w-full transition-colors" data-testid="button-services-menu">
              Services <ChevronDown className={`w-4 h-4 text-[#102F56] transition-transform ${showServices ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showServices && (
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border-t-4 border-[#E5A019] border-x border-b border-[#DCE3EA] shadow-xl rounded-b-lg overflow-hidden mt-0 z-50"
                >
                  <div className="p-6 grid grid-cols-2 gap-4">
                    {SERVICES.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <Link key={i} href={s.href} className="group p-3 rounded-lg hover:bg-[#F1F5F9] transition-colors flex items-start gap-3 border border-transparent hover:border-[#DCE3EA]">
                          <Icon className="w-5 h-5 text-[#E5A019] mt-1 shrink-0" />
                          <div>
                            <span className="block text-sm font-bold text-[#102F56] group-hover:text-[#123E73] transition-colors">{s.title}</span>
                            <span className="block text-xs text-[#334155]/80 mt-0.5">{s.desc}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="bg-[#F1F5F9] p-3.5 text-center border-t border-[#DCE3EA]">
                    <Link href="/services" className="text-xs font-bold uppercase tracking-wider text-[#123E73] hover:text-[#092747] transition-colors inline-flex items-center gap-1.5">
                      View All Services &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <Link href="/projects" className="text-sm font-medium tracking-wide text-[#334155] hover:text-[#102F56] relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5A019] after:transition-all hover:after:w-full transition-colors">Projects</Link> */}
          <Link href="/contact" className="text-sm font-medium tracking-wide text-[#334155] hover:text-[#102F56] relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5A019] after:transition-all hover:after:w-full transition-colors">Contact</Link>
          <LanguageSelector />
        </nav>
        
        {/* Header Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link 
            href="/book-consultation" 
            className="hidden sm:inline-flex bg-[#123E73] text-white px-5 py-2.5 rounded text-xs md:text-sm font-semibold tracking-wide hover:bg-[#092747] shadow-sm transition-all duration-200"
            data-testid="link-book-consultation-header"
          >
            Book Consultation
          </Link>
          <button 
            className="lg:hidden p-2 text-[#102F56] hover:bg-[#F1F5F9] rounded transition-colors" 
            onClick={() => setIsOpen(!isOpen)} 
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
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
              className="fixed inset-0 bg-[#092747]/60 backdrop-blur-xs z-[60] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-[100dvh] w-[300px] max-w-[85vw] bg-[#FAFBFC] shadow-2xl z-[70] lg:hidden flex flex-col border-l border-[#DCE3EA]"
            >
              <div className="flex justify-between items-center p-5 border-b border-[#DCE3EA] bg-white">
                <Link href="/" onClick={() => setIsOpen(false)} aria-label="AB DHANAM GROUP">
                  <img
                    src="/images/Logo.png"
                    alt="AB DHANAM GROUP"
                    className="w-20 h-20 object-contain"
                  />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 text-[#334155] hover:text-[#102F56] rounded hover:bg-[#F1F5F9]" 
                  data-testid="button-close-mobile-menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                <Link href="/" className="text-base font-semibold text-[#102F56] py-2 border-b border-[#DCE3EA]/60">Home</Link>
                <Link href="/about" className="text-base font-semibold text-[#102F56] py-2 border-b border-[#DCE3EA]/60">About Us</Link>
                
                <div className="py-2 border-b border-[#DCE3EA]/60">
                  <span className="text-base font-semibold text-[#102F56] mb-3 block">Services</span>
                  <div className="flex flex-col gap-2.5 pl-3 border-l-2 border-[#E5A019]/40">
                    <Link href="/services" className="text-xs font-bold text-[#123E73] uppercase tracking-wider">All Services</Link>
                    {SERVICES.map((s, i) => (
                      <Link key={i} href={s.href} className="text-sm text-[#334155] hover:text-[#102F56] py-0.5">{s.title}</Link>
                    ))}
                  </div>
                </div>
                
                {/* <Link href="/projects" className="text-base font-semibold text-[#102F56] py-2 border-b border-[#DCE3EA]/60">Projects</Link> */}
                <Link href="/contact" className="text-base font-semibold text-[#102F56] py-2 border-b border-[#DCE3EA]/60">Contact</Link>
                
                <div className="flex justify-between items-center py-3 border-b border-[#DCE3EA]/60">
                  <span className="text-xs font-semibold text-[#334155] uppercase tracking-wider">Language</span>
                  <LanguageSelector />
                </div>
              </div>
              
              <div className="p-6 border-t border-[#DCE3EA] bg-white">
                <Link 
                  href="/book-consultation" 
                  className="block w-full text-center bg-[#123E73] text-white py-3.5 rounded font-bold text-sm tracking-wide hover:bg-[#092747] transition-colors shadow-sm"
                >
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
    <footer className="bg-[#102F56] text-white pt-20 pb-12 border-t-2 border-[#E5A019] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A019]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6 group" data-testid="link-footer-logo" aria-label="AB DHANAM GROUP">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white p-3 shadow-md flex items-center justify-center border border-[#E5A019]/40 group-hover:border-[#E5A019] transition-all">
                <img
                  src="/images/Logo.png"
                  alt="AB DHANAM GROUP"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#DCE3EA]/85 leading-relaxed mb-6">
              Tamil Nadu's premier registration and legal documentation consultancy. Fast, dependable, and precision-driven advisory.
            </p>
            <p className="text-[#E5A019] font-serif italic text-base">Fast • Reliable • Professional</p>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-bold text-xs mb-6 uppercase tracking-[0.22em] text-[#DCE3EA]/70 border-b border-[#DCE3EA]/15 pb-3">Company</h4>
            <ul className="space-y-3.5 text-sm text-[#DCE3EA]/85">
              <li><Link href="/about" className="hover:text-[#E5A019] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#E5A019]/40 group-hover:bg-[#E5A019] transition-colors"></span> About Us</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-[#E5A019] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#E5A019]/40 group-hover:bg-[#E5A019] transition-colors"></span> Why Choose Us</Link></li>
              {/* <li><Link href="/projects" className="hover:text-[#E5A019] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#E5A019]/40 group-hover:bg-[#E5A019] transition-colors"></span> Landmark Projects</Link></li> */}
              <li><Link href="/faq" className="hover:text-[#E5A019] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#E5A019]/40 group-hover:bg-[#E5A019] transition-colors"></span> FAQs & Answers</Link></li>
              <li><Link href="/blog" className="hover:text-[#E5A019] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#E5A019]/40 group-hover:bg-[#E5A019] transition-colors"></span> Legal Blog</Link></li>
            </ul>
          </div>
          
          {/* Key Services */}
          <div>
            <h4 className="font-bold text-xs mb-6 uppercase tracking-[0.22em] text-[#DCE3EA]/70 border-b border-[#DCE3EA]/15 pb-3">Key Services</h4>
            <ul className="space-y-3.5 text-sm text-[#DCE3EA]/85">
              <li><Link href="/services/property-registration" className="hover:text-[#E5A019] transition-colors block truncate">Property Registration</Link></li>
              <li><Link href="/services/marriage-registration" className="hover:text-[#E5A019] transition-colors block truncate">Marriage Registration</Link></li>
              <li><Link href="/services/trust-registration" className="hover:text-[#E5A019] transition-colors block truncate">Trust Registration</Link></li>
              <li><Link href="/services/society-registration" className="hover:text-[#E5A019] transition-colors block truncate">Society Registration</Link></li>
              <li><Link href="/services" className="text-[#E5A019] font-semibold mt-4 inline-block hover:underline">View All Services &rarr;</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xs mb-6 uppercase tracking-[0.22em] text-[#DCE3EA]/70 border-b border-[#DCE3EA]/15 pb-3">Contact Info</h4>
            <div className="space-y-4 text-sm text-[#DCE3EA]/85">
              <p className="flex flex-col gap-0.5">
                <strong className="text-white text-xs uppercase tracking-wider">Office Address</strong>
                <span className="leading-relaxed">123, Anna Salai,<br />Madurai, Tamil Nadu 625001</span>
              </p>
              <p className="flex flex-col gap-0.5">
                <strong className="text-white text-xs uppercase tracking-wider">Phone</strong>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex flex-col gap-0.5">
                <strong className="text-white text-xs uppercase tracking-wider">Email</strong>
                <span>contact@abdhanam.com</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Sub-bar */}
        <div className="pt-8 border-t border-[#DCE3EA]/15 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#DCE3EA]/70 tracking-wide">
          <div className="space-y-1.5 text-center md:text-left">
            <p>© {new Date().getFullYear()} AB DHANAM GROUP (A.B. Dhanam Online Services). All rights reserved.</p>
            <p>
              Designed and developed by{" "}
              <a
                href="https://godivatech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5A019] hover:text-white transition-colors font-semibold"
              >
                godivatech
              </a>
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-[#E5A019] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#E5A019] transition-colors">Terms & Conditions</Link>
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
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60" />
      <div className="relative bg-[#25D366] p-4 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white/20">
        <WhatsAppIcon className="w-7 h-7" size={28} />
      </div>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#102F56] text-white px-3 py-1.5 rounded text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-[#DCE3EA]/20">
        Chat with us
      </span>
    </a>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col font-sans bg-[#FAFBFC] text-[#334155] selection:bg-[#E5A019]/30 selection:text-[#102F56]">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
