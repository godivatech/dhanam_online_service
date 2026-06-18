import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, MapPin, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const PROJECTS = [
  { num: "01", name: "Srinivasa Nagar Layout", location: "Madurai, Tamil Nadu", type: "Residential Layout", year: "2018", services: ["Property Registration", "Layout Approval Documentation", "Sale Deed Registration"], desc: "A premium residential layout spanning 4.5 acres with 48 plots, fully registered with title verification and encumbrance clearance for all individual plots." },
  { num: "02", name: "Srinivasa Nagar Extension", location: "Madurai, Tamil Nadu", type: "Residential Layout", year: "2019", services: ["Property Registration", "Partition Deed", "Encumbrance Certificate"], desc: "Extension of the flagship Srinivasa Nagar project with 32 additional plots — all documentation handled seamlessly with zero legal disputes." },
  { num: "03", name: "Srinivasa Nagar Phase II", location: "Madurai, Tamil Nadu", type: "Residential Layout", year: "2021", services: ["Property Registration", "Legal Documentation", "EC Services"], desc: "Phase II development bringing the Srinivasa Nagar township to completion — full property registration and certified documentation for 56 plots." },
  { num: "04", name: "Yoga Narasimhar Nagar", location: "Kancheepuram, Tamil Nadu", type: "Residential Layout", year: "2019", services: ["Property Registration", "Layout Documentation", "Sale Deed Registration"], desc: "A heritage-inspired residential community of 36 plots in Kancheepuram — registered with thorough title verification tracing 30 years of property history." },
  { num: "05", name: "AR Residency", location: "Madurai, Tamil Nadu", type: "Apartment Complex", year: "2020", services: ["Property Registration", "Undivided Share Documentation", "Certified Copies"], desc: "A 24-unit residential apartment complex — complete registration of undivided land share for each unit, approved building plan documentation, and individual sale deed registration." },
  { num: "06", name: "Meenakshi Amman Nagar", location: "Madurai, Tamil Nadu", type: "Residential Layout", year: "2021", services: ["Property Registration", "Legal Documentation", "EC Services"], desc: "Devotionally named and legally immaculate — 40 residential plots near Madurai registered with complete documentation and government compliance." },
  { num: "07", name: "Sathyabama Nagar", location: "Madurai, Tamil Nadu", type: "Residential Layout", year: "2022", services: ["Property Registration", "Partition Deed", "Legal Documentation"], desc: "A sought-after residential layout of 28 premium plots — full registration services including complex partition deed documentation for co-owned land." },
  { num: "08", name: "Andal Alagar Garden", location: "Sriperumbudur, Tamil Nadu", type: "Premium Villa Community", year: "2022", services: ["Property Registration", "Legal Documentation", "Society Registration"], desc: "Luxury villa community registration — 18 premium villas with full legal documentation, residents' association formation, and society registration." },
  { num: "09", name: "Viceroy's Garden", location: "Madurai, Tamil Nadu", type: "Premium Villa Community", year: "2023", services: ["Property Registration", "Legal Documentation", "EC Services"], desc: "An exclusive community of 12 premium villas — meticulous title verification, mortgage clearance documentation, and registration." },
  { num: "10", name: "Amman Nagar", location: "Tambaram, Tamil Nadu", type: "Residential Layout", year: "2024", services: ["Property Registration", "Layout Documentation", "Certified Copies"], desc: "Our most recent landmark project — 52 residential plots in Tambaram's growing corridor, fully registered with A-register verification and clean title documentation." },
];

const CATEGORIES = ["All", "Residential Layout", "Premium Villa Community", "Apartment Complex"];

const CATEGORY_NAMES: Record<string, string> = {
  All: "All Projects",
  "Residential Layout": "Residential Layouts",
  "Premium Villa Community": "Villa Communities",
  "Apartment Complex": "Apartment Complexes",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === activeCategory);

  return (
    <Layout>
      <section
        className="relative bg-[#0A2540] text-white py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Projects</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Portfolio</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Landmark Projects<br /><span className="text-[#D4AF37] italic">Across Tamil Nadu</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Ten major residential and commercial projects — each representing the gold standard of legal documentation precision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Modern Category Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive 
                      ? "text-[#0A2540]" 
                      : "text-muted-foreground hover:text-[#0A2540]"
                  }`}
                >
                  {/* Sliding Pill Background using Framer Motion */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#D4AF37]/10 border border-[#D4AF37]/40 z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{CATEGORY_NAMES[cat]}</span>
                </button>
              );
            })}
          </div>

          {/* Morphing Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  key={p.name} 
                  className="group relative border border-border/80 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden bg-white p-8 rounded-none flex flex-col justify-between min-h-[460px]"
                >
                  {/* Gold Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]" />
                  
                  {/* Background Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Number Watermark */}
                  <div className="absolute top-6 right-8 font-sans text-6xl font-extrabold text-slate-100 group-hover:text-[#D4AF37]/10 transition-colors duration-300 pointer-events-none select-none">
                    {p.num}
                  </div>

                  <div className="flex-1 flex flex-col">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-2.5 py-1">
                        {p.type}
                      </span>
                    </div>

                    {/* Project Name */}
                    <h3 className="text-xl font-bold text-primary mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                      {p.name}
                    </h3>

                    {/* Meta (Location & Year) */}
                    <div className="flex items-center gap-4 mb-5 pb-4 border-b border-dashed border-border">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {p.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {p.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-auto">
                    {/* Services Provided Section */}
                    <div className="mb-6 pt-5 border-t border-border/60">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-3">
                        Services Provided
                      </p>
                      <div className="space-y-2">
                        {p.services.map((s) => (
                          <div key={s} className="flex items-start gap-2 text-xs text-primary">
                            <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider hover:text-primary transition-colors duration-300"
                      data-testid={`link-project-${p.num}`}
                    >
                      Enquire About Similar Project 
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Planning a Layout or Development Project?</h2>
            <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">
              Let our team handle all documentation and registration for your residential or commercial development — from day one to final certificate.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-projects">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
