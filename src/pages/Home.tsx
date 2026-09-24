import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Building2, Heart, Landmark, Users, FileCheck,
  Copy, Scale, CheckCircle, ChevronRight, Phone, Star
} from "lucide-react";
import RegistryAssistant from "@/components/RegistryAssistant";

const SERVICES = [
  { icon: Building2, title: "Property Registration", desc: "Sale deeds, partition deeds, mortgage documentation, and power of attorney with complete legal scrutiny.", href: "/services/property-registration" },
  { icon: Heart, title: "Marriage Registration", desc: "Hindu, Christian, Muslim, and Special Marriage Act registrations handled with care and precision.", href: "/services/marriage-registration" },
  { icon: Landmark, title: "Trust Registration", desc: "End-to-end trust formation — charitable, public, and private trusts registered with full compliance.", href: "/services/trust-registration" },
  { icon: Users, title: "Society Registration", desc: "Welfare societies, cultural organisations, and cooperative societies registered under Tamil Nadu law.", href: "/services/society-registration" },
  { icon: FileCheck, title: "Encumbrance Certificate", desc: "Obtain encumbrance certificates for any property period — essential proof of clear title.", href: "/services/encumbrance-certificate" },
  { icon: Copy, title: "Certified Copy", desc: "Certified copies of registered documents from the Sub-Registrar office, fast and accurate.", href: "/services/certified-copy" },
  { icon: Scale, title: "Legal Documentation", desc: "Comprehensive legal drafting, review, and notarisation services for individuals and businesses.", href: "/services/legal-documentation" },
];

const STATS = [
  { value: 5000, suffix: "+", label: "Customers Served" },
  { value: 9, suffix: "+", label: "Years Experience" },
  { value: 10000, suffix: "+", label: "Documents Processed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const TESTIMONIALS = [
  { name: "Karthik Subramanian", role: "Real Estate Developer", content: "We exclusively use A.B. Dhanam for all our layout registrations across Tamil Nadu. Their speed and zero-error track record is unmatched in the industry.", stars: 5 },
  { name: "Meenakshi Sundaram", role: "Trust Founder", content: "Setting up our educational trust felt daunting until we met Mr. Alagiri Rajan. The entire process was transparent, swift, and stress-free.", stars: 5 },
  { name: "Rajesh Kumar", role: "Property Buyer", content: "My property deal was complex — multiple co-owners, a loan, and a tight timeline. A.B. Dhanam handled everything with quiet authority. Remarkable professionals.", stars: 5 },
];

const PROJECTS = [
  { num: "01", name: "Srinivasa Nagar Layout", type: "Residential Layout" },
  { num: "02", name: "Yoga Narasimhar Nagar", type: "Residential Layout" },
  { num: "03", name: "AR Residency", type: "Apartment Complex" },
  { num: "04", name: "Viceroy's Garden", type: "Premium Villa Community" },
];

const PROCESS = [
  { step: "01", icon: Phone, title: "Initial Consultation", desc: "Discuss your requirements with our experts. We assess your case and outline the exact documents needed." },
  { step: "02", icon: FileCheck, title: "Document Preparation", desc: "Our team meticulously prepares and verifies all documents, ensuring legal accuracy at every step." },
  { step: "03", icon: Scale, title: "Submission & Processing", desc: "We handle all Sub-Registrar submissions and follow up on your behalf until processing is complete." },
  { step: "04", icon: CheckCircle, title: "Certificate Delivery", desc: "Receive your certified documents. We brief you on next steps and remain available for any queries." },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} translate="no" className="notranslate">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const slides = ["/images/hero section/1.png", "/images/hero section/2.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-[#102F56]">
        {/* Background Image Slider with Crossfade */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slides[currentSlide]}')` }}
            />
          </AnimatePresence>
          {/* Subtle vignette gradient for a premium polish */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102F56]/60 via-[#102F56]/20 to-transparent z-10 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-20 lg:py-32 flex items-center justify-start">
          {/* Elegant Floating Light Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl bg-[#FAFBFC]/95 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(16,47,86,0.15)] border border-[#DCE3EA]"
          >
            <motion.div variants={stagger} initial="hidden" animate="show">
              {/* Tagline */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-[#E5A019]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#E5A019] font-bold">
                  AB DHANAM GROUP
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold leading-[1.2] mb-6 tracking-tight text-[#102F56]">
                Premier Legal & <br />
                <span className="text-[#E5A019]">Registration Advisory</span>
              </motion.h1>

              {/* Supporting Subheadline */}
              <motion.p variants={fadeUp} className="text-[#334155] text-sm md:text-base leading-relaxed mb-8">
                Fast, secure, and error-free legal documentation and registry services for property, marriage, trusts, and societies across Tamil Nadu.
              </motion.p>

              {/* Call to Actions */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center bg-[#123E73] text-white px-7 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-[#092747] transition-all rounded shadow-sm hover:-translate-y-0.5 gap-2"
                  data-testid="button-book-consultation-hero"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-[#DCE3EA] text-[#334155] hover:border-[#123E73] hover:text-[#102F56] transition-all hover:bg-[#F1F5F9] px-7 py-3.5 font-bold text-xs uppercase tracking-wider rounded"
                  data-testid="button-explore-services-hero"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Slide Indicator & Caption */}
        <div className="absolute bottom-8 right-8 z-30 flex flex-col items-end gap-3 pointer-events-auto">
          {/* Caption */}
          <div className="text-[10px] font-semibold text-white tracking-widest uppercase flex items-center gap-2 bg-[#102F56]/85 backdrop-blur-md px-3.5 py-1.5 rounded shadow-lg border border-white/10">
            <span>{currentSlide === 0 ? "Property & Deeds Registry" : "Marriage & Trust Documentation"}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A019]" />
            <span>Tamil Nadu</span>
          </div>
          {/* Indicators */}
          <div className="flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === currentSlide ? "bg-[#E5A019] w-10" : "bg-white/40 hover:bg-white/70 w-6"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS (Main Background #FAFBFC) ─────────────────────────────────── */}
      <section className="py-20 bg-[#FAFBFC] relative z-10 border-b border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#DCE3EA] divide-x divide-y lg:divide-y-0 divide-[#DCE3EA] bg-white rounded-lg shadow-xs overflow-hidden"
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="p-8 md:p-10 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#102F56] mb-2 tracking-tight">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#334155] font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW (Alternating Section #F1F5F9) ────────────────────── */}
      <section className="py-28 bg-[#F1F5F9]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-3">Our Legacy</p>
              <div className="w-12 h-0.5 bg-[#E5A019] mb-6" />
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#102F56] leading-tight mb-6">
                Built on a Decade of Unwavering Client Trust
              </h2>
              <p className="text-[#334155] leading-relaxed mb-6 text-base md:text-lg">
                A.B. Dhanam Online Services was founded with a single mission: to make Tamil Nadu's complex registration landscape navigable and accessible for every citizen. Managing Director A.B. Alagiri Rajan has personally guided over 5,000 clients through property, marriage, trust, and society registrations.
              </p>
              <p className="text-[#334155]/80 leading-relaxed mb-8">
                Our approach is meticulous, legally grounded, and client-first. We don't just process documents — we protect your rights and future.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#123E73] hover:text-[#092747] font-bold text-sm uppercase tracking-wider gap-2 group transition-all" data-testid="link-read-our-story">
                Read Our Story <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#E5A019]" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              {[
                { label: "Founding Year", value: "2015", desc: "Established in Madurai with a vision to simplify legal documentation for Tamil Nadu families and enterprises." },
                { label: "Practice Areas", value: "7+", desc: "Specialised services spanning property registration, marriage deeds, trust structuring, and society certifications." },
                { label: "Major Registrations", value: "10+", desc: "Landmark residential layouts and commercial real estate titles registered with zero disputes." },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 p-6 border border-[#DCE3EA] border-l-4 border-l-[#E5A019] bg-white rounded shadow-xs">
                  <div className="font-serif text-3xl font-bold text-[#102F56] w-16 shrink-0">{item.value}</div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#E5A019] font-bold mb-1">{item.label}</div>
                    <p className="text-sm text-[#334155] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES (Deep Navy #102F56 Section) ────────────────────────────── */}
      <section className="py-28 bg-[#102F56] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-3">What We Do</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">Comprehensive Registration Services</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10"
          >
            {SERVICES.map((s, idx) => {
              const isLast = idx === SERVICES.length - 1;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className={isLast ? "md:col-span-2 lg:col-span-3" : ""}
                >
                  <Link
                    href={s.href}
                    className={`group flex flex-col h-full p-8 md:p-10 bg-[#102F56] hover:bg-[#123E73]/50 border-l-4 border-l-transparent hover:border-l-[#E5A019] transition-all duration-300 ${
                      isLast ? "md:flex-row md:items-center md:justify-between md:gap-10" : ""
                    }`}
                    data-testid={`card-service-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {isLast ? (
                      <>
                        <div className="flex items-start gap-6 md:max-w-3xl">
                          <s.icon className="w-9 h-9 mt-1 text-[#E5A019] shrink-0" />
                          <div>
                            <h3 className="font-serif text-xl font-bold mb-2 text-white">{s.title}</h3>
                            <p className="text-[#DCE3EA]/80 text-sm leading-relaxed">{s.desc}</p>
                          </div>
                        </div>
                        <span className="text-[#E5A019] text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all shrink-0 mt-6 md:mt-0">
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </>
                    ) : (
                      <>
                        <s.icon className="w-8 h-8 text-[#E5A019] mb-5" />
                        <h3 className="font-serif text-xl font-bold mb-2 text-white">{s.title}</h3>
                        <p className="text-[#DCE3EA]/80 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                        <span className="text-[#E5A019] text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center border border-[#E5A019] text-[#E5A019] hover:bg-[#E5A019] hover:text-[#102F56] px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-all gap-2"
              data-testid="button-view-all-services"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE (Main Background #FAFBFC) ────────────────────── */}
      <section className="py-28 bg-[#FAFBFC] relative overflow-hidden border-b border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-3">How It Works</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#102F56]">Our Four-Step Process</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Horizontal Interactive Steps Progress Bar */}
            <div className="relative mb-20 px-4 md:px-10">
              {/* Background horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#DCE3EA] -translate-y-1/2" />
              {/* Active filled horizontal line */}
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-[#123E73] -translate-y-1/2 transition-all duration-500 ease-out"
                style={{
                  width: `${(activeStep / (PROCESS.length - 1)) * 100}%`,
                }}
              />

              {/* Step circle nodes */}
              <div className="relative flex justify-between items-center z-10">
                {PROCESS.map((p, idx) => {
                  const isActive = idx <= activeStep;
                  const isSelected = idx === activeStep;
                  const StepIcon = p.icon;
                  return (
                    <button
                      key={p.step}
                      onClick={() => setActiveStep(idx)}
                      className="flex flex-col items-center focus:outline-none group relative"
                    >
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#123E73] border-[#123E73] text-white scale-110 shadow-md"
                            : isActive
                            ? "bg-white border-[#123E73] text-[#123E73] shadow-xs"
                            : "bg-white border-[#DCE3EA] text-[#64748B] hover:border-[#123E73]/50"
                        }`}
                      >
                        <StepIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span
                        className={`absolute mt-14 md:mt-18 text-[10px] md:text-xs font-bold tracking-wider uppercase transition-colors duration-300 whitespace-nowrap ${
                          isSelected ? "text-[#123E73]" : "text-[#64748B] group-hover:text-[#334155]"
                        }`}
                      >
                        {p.title.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step Content Card with Cross-fade transition */}
            <div className="mt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid md:grid-cols-12 gap-8 items-center bg-white border border-[#DCE3EA] p-8 md:p-12 rounded-xl shadow-xs min-h-[300px]"
                >
                  {/* Left Column: text content */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 rounded bg-[#E5A019]/10 text-[#E5A019] text-[10px] font-bold tracking-widest uppercase border border-[#E5A019]/30">
                        Step 0{activeStep + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#102F56]">
                      {PROCESS[activeStep].title}
                    </h3>
                    <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                      {PROCESS[activeStep].desc}
                    </p>
                  </div>

                  {/* Right Column: graphical badge */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#DCE3EA] bg-[#F1F5F9] flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white border border-[#DCE3EA] shadow-xs flex items-center justify-center">
                        {(() => {
                          const CurrentIcon = PROCESS[activeStep].icon;
                          return <CurrentIcon className="w-10 h-10 text-[#123E73]" />;
                        })()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW (Alternating Section #F1F5F9) ──────────────────── */}
      <section className="py-28 bg-[#F1F5F9]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-3">Our Portfolio</p>
              <div className="w-12 h-0.5 bg-[#E5A019] mb-6" />
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#102F56]">Landmark Projects Across Tamil Nadu</h2>
            </div>
            <Link href="/projects" className="shrink-0 text-xs font-bold text-[#123E73] hover:text-[#092747] uppercase tracking-wider flex items-center gap-2 group transition-all" data-testid="link-view-all-projects">
              See All Projects <ChevronRight className="w-4 h-4 text-[#E5A019] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PROJECTS.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <Link href="/projects" className="group block p-8 bg-white border border-[#DCE3EA] hover:border-[#123E73] hover:shadow-md transition-all duration-300 rounded" data-testid={`card-project-${p.num}`}>
                  <div className="font-serif text-4xl font-bold text-[#123E73]/20 group-hover:text-[#E5A019] transition-colors mb-3">{p.num}</div>
                  <h3 className="font-serif text-lg font-bold text-[#102F56] mb-2 leading-snug">{p.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-[#334155]/70 mb-5">{p.type}</p>
                  <span className="text-xs font-bold text-[#123E73] group-hover:text-[#092747] uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                    View Details <ArrowRight className="w-3 h-3 text-[#E5A019]" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW (Deep Navy #102F56 Section) ───────────────── */}
      <section className="py-28 bg-[#102F56] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-3">Client Trust</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">Trusted by Thousands Across Tamil Nadu</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="p-8 border border-white/10 bg-white/5 rounded hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5A019] text-[#E5A019]" />
                  ))}
                </div>
                <p className="text-[#DCE3EA] leading-relaxed mb-6 text-sm italic">"{t.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-serif font-bold text-base text-white">{t.name}</div>
                  <div className="text-[#E5A019] text-xs font-semibold uppercase tracking-wider mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/testimonials" className="text-xs font-bold text-[#E5A019] hover:text-white uppercase tracking-wider inline-flex items-center gap-2 transition-colors" data-testid="link-all-testimonials">
              Read All Reviews <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION (Clean, Trustworthy Deep Navy #102F56 Background) ───── */}
      <section className="py-24 bg-[#102F56] text-white border-t border-[#E5A019]/30 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-4">Get Started Today</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Begin Your<br />Registration Journey?
            </h2>
            <p className="text-[#DCE3EA]/90 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free consultation today. Our consultants guide you through each documentation step with complete transparency and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center bg-[#123E73] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-[#092747] transition-all rounded shadow-md border border-[#E5A019]/40 hover:border-[#E5A019] gap-2"
                data-testid="button-book-consultation-cta"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#102F56] transition-all rounded gap-2"
                data-testid="button-call-now-cta"
              >
                <Phone className="w-4 h-4 text-[#E5A019]" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US PREVIEW (Main Background #FAFBFC) ────────────────── */}
      <section className="py-24 bg-[#FAFBFC] border-t border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-3">Why A.B. Dhanam</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#102F56]">The Standard of Excellence</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: CheckCircle, title: "Zero Documentation Errors", desc: "Every document is reviewed by our senior experts before submission. We maintain a perfect error-free record across 9+ years." },
              { icon: Users, title: "Dedicated Client Manager", desc: "Every client is assigned a dedicated manager who remains your single point of contact throughout the entire process." },
              { icon: Building2, title: "Deep Tamil Nadu Expertise", desc: "We know every Sub-Registrar office across Tamil Nadu — their procedures, timelines, and requirements." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="p-8 border border-[#DCE3EA] border-l-4 border-l-[#E5A019] bg-white rounded shadow-xs hover:shadow-md transition-all duration-300">
                <item.icon className="w-7 h-7 text-[#123E73] mb-4" />
                <h3 className="font-serif text-lg font-bold text-[#102F56] mb-2">{item.title}</h3>
                <p className="text-[#334155] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link href="/why-choose-us" className="inline-flex items-center text-[#123E73] hover:text-[#092747] font-bold text-xs uppercase tracking-wider gap-2 group transition-all" data-testid="link-why-choose-us">
              Discover All Reasons <ChevronRight className="w-4 h-4 text-[#E5A019] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
