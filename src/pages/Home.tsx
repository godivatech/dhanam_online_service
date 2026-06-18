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
  { step: "01", title: "Initial Consultation", desc: "Discuss your requirements with our experts. We assess your case and outline the exact documents needed." },
  { step: "02", title: "Document Preparation", desc: "Our team meticulously prepares and verifies all documents, ensuring legal accuracy at every step." },
  { step: "03", title: "Submission & Processing", desc: "We handle all Sub-Registrar submissions and follow up on your behalf until processing is complete." },
  { step: "04", title: "Certificate Delivery", desc: "Receive your certified documents. We brief you on next steps and remain available for any queries." },
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
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-900">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 z-10 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-20 lg:py-32 flex items-center justify-start">
          {/* Elegant Floating Light Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-slate-100/50"
          >
            <motion.div variants={stagger} initial="hidden" animate="show">
              {/* Tagline */}
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-5 font-sans">
                A.B. Dhanam Online Services
              </motion.p>

              {/* Main Headline */}
              <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold leading-[1.2] mb-6 tracking-tight font-sans text-[#0A2540]">
                Professional <br />
                <span className="text-[#D4AF37]">Registration Services</span>
              </motion.h1>

              {/* Supporting Subheadline */}
              <motion.p variants={fadeUp} className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-sans">
                Fast, secure, and error-free legal documentation and registry services for property, marriage, and trusts in Tamil Nadu.
              </motion.p>

              {/* Call to Actions */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 font-sans">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center bg-[#0A2540] text-white px-7 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-[#12355a] transition-all rounded-lg shadow-md hover:-translate-y-0.5"
                  data-testid="button-book-consultation-hero"
                >
                  Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all hover:bg-slate-50 px-7 py-3.5 font-bold text-xs uppercase tracking-wider rounded-lg"
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
          <div className="text-[10px] font-semibold text-white tracking-widest uppercase flex items-center gap-2 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-md shadow-lg border border-white/5">
            <span>{currentSlide === 0 ? "Property & Deeds Office" : "Marriage & Trust Signing"}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Tamil Nadu</span>
          </div>
          {/* Indicators */}
          <div className="flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 transition-all duration-300 rounded-full ${
                  index === currentSlide ? "bg-[#D4AF37] w-12" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-border divide-x divide-y lg:divide-y-0 divide-border"
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="p-10 text-center">
                <div className="font-sans text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-2">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Story</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-8">
                Built on a Decade of Unwavering Client Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                A.B. Dhanam Online Services was founded with a single purpose: to make Tamil Nadu's complex registration landscape navigable for every citizen. Managing Director A.B. Alagiri Rajan has personally guided over 5,000 clients through property, marriage, trust, and society registrations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Our approach is unhurried, precise, and always client-first. We don't process paperwork — we protect your interests, every document, every time.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#D4AF37] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all gap-2" data-testid="link-read-our-story">
                Read Our Story <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {[
                { label: "Founding Year", value: "2015", desc: "Established in Chennai with a vision to simplify legal documentation for Tamil Nadu families and businesses." },
                { label: "Areas of Expertise", value: "7+", desc: "Specialised services spanning property, marriage, trust, society, and legal documentation consultancy." },
                { label: "Projects Completed", value: "10+", desc: "Landmark residential layouts and commercial projects registered with zero disputes." },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 p-6 border-l-4 border-[#D4AF37] bg-muted/30">
                  <div className="font-serif text-3xl font-bold text-primary w-16 shrink-0">{item.value}</div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">{item.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0A2540] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">What We Do</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Comprehensive Registration Services</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
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
                    className={`group flex flex-col h-full p-10 bg-[#0A2540] border-l-4 border-[#D4AF37]/0 hover:border-[#D4AF37] hover:bg-[#0F4C81]/30 transition-all duration-300 ${
                      isLast ? "md:flex-row md:items-center md:justify-between md:gap-10" : ""
                    }`}
                    data-testid={`card-service-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {isLast ? (
                      <>
                        <div className="flex items-start gap-6 md:max-w-3xl">
                          <s.icon className="w-10 h-10 mt-1 text-[#D4AF37] shrink-0" />
                          <div>
                            <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                          </div>
                        </div>
                        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all shrink-0 mt-6 md:mt-0">
                          Learn More <ArrowRight className="w-3 h-3" />
                        </span>
                      </>
                    ) : (
                      <>
                        <s.icon className="w-9 h-9 text-[#D4AF37] mb-6" />
                        <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                          Learn More <ArrowRight className="w-3 h-3" />
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
              className="inline-flex items-center border border-[#D4AF37] text-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0A2540] transition-all"
              data-testid="button-view-all-services"
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── REGISTRY ASSISTANT (HIDDEN BY CUSTOMER REQUEST - UNCOMMENT THE LINE BELOW TO ENABLE IT) ── */}
      {/* <RegistryAssistant /> */}

      {/* ── PROCESS TIMELINE ─────────────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">How It Works</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Our Four-Step Process</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {/* Connecting line on desktop */}
            <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent hidden lg:block" />

            {PROCESS.map((p, i) => (
              <motion.div key={p.step} variants={fadeUp} className="relative">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0A2540] flex items-center justify-center font-bold text-sm font-serif mb-6 relative z-10 shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                    {i + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ─────────────────────────────────────────────── */}
      <section className="py-28 bg-muted/40">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Portfolio</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Landmark Projects Across Tamil Nadu</h2>
            </div>
            <Link href="/projects" className="shrink-0 text-sm font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all" data-testid="link-view-all-projects">
              See All Projects <ChevronRight className="w-4 h-4" />
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
                <Link href="/projects" className="group block p-8 bg-white border border-border hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" data-testid={`card-project-${p.num}`}>
                  <div className="font-serif text-5xl font-bold text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors mb-4">{p.num}</div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2 leading-snug">{p.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">{p.type}</p>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#0A2540] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">What Clients Say</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Trusted by Thousands Across Tamil Nadu</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-8 text-sm italic">"{t.content}"</p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-serif font-bold text-lg">{t.name}</div>
                  <div className="text-[#D4AF37] text-xs font-medium uppercase tracking-wider mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/testimonials" className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2 justify-center hover:gap-3 transition-all" data-testid="link-all-testimonials">
              Read All Reviews <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#0A2540]/60 font-semibold mb-6">Get Started Today</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
              Ready to Begin Your<br />Registration Journey?
            </h2>
            <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">
              Book a free consultation today. Our experts will guide you through every step with complete transparency and zero stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl hover:shadow-2xl"
                data-testid="button-book-consultation-cta"
              >
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center border-2 border-[#0A2540] text-[#0A2540] px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0A2540] hover:text-white transition-all"
                data-testid="button-call-now-cta"
              >
                <Phone className="mr-2 w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US PREVIEW ─────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Why A.B. Dhanam</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">The Standard of Excellence</h2>
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
              <motion.div key={item.title} variants={fadeUp} className="p-8 border border-border border-l-4 border-l-[#D4AF37] hover:shadow-xl transition-all duration-300">
                <item.icon className="w-8 h-8 text-[#D4AF37] mb-5" />
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link href="/why-choose-us" className="inline-flex items-center text-[#D4AF37] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all gap-2" data-testid="link-why-choose-us">
              Discover All Reasons <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
