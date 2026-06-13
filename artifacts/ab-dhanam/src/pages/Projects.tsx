import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, MapPin, Calendar, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const PROJECTS = [
  { num: "01", name: "Srinivasa Nagar Layout", location: "Chennai, Tamil Nadu", type: "Residential Layout", year: "2018", services: ["Property Registration", "Layout Approval Documentation", "Sale Deed Registration"], desc: "A premium residential layout spanning 4.5 acres with 48 plots, fully registered with title verification and encumbrance clearance for all individual plots." },
  { num: "02", name: "Srinivasa Nagar Extension", location: "Chennai, Tamil Nadu", type: "Residential Layout", year: "2019", services: ["Property Registration", "Partition Deed", "Encumbrance Certificate"], desc: "Extension of the flagship Srinivasa Nagar project with 32 additional plots — all documentation handled seamlessly with zero legal disputes." },
  { num: "03", name: "Srinivasa Nagar Phase II", location: "Chennai, Tamil Nadu", type: "Residential Layout", year: "2021", services: ["Property Registration", "Legal Documentation", "EC Services"], desc: "Phase II development bringing the Srinivasa Nagar township to completion — full property registration and certified documentation for 56 plots." },
  { num: "04", name: "Yoga Narasimhar Nagar", location: "Kancheepuram, Tamil Nadu", type: "Residential Layout", year: "2019", services: ["Property Registration", "Layout Documentation", "Sale Deed Registration"], desc: "A heritage-inspired residential community of 36 plots in Kancheepuram — registered with thorough title verification tracing 30 years of property history." },
  { num: "05", name: "AR Residency", location: "Chennai, Tamil Nadu", type: "Apartment Complex", year: "2020", services: ["Property Registration", "Undivided Share Documentation", "Certified Copies"], desc: "A 24-unit residential apartment complex — complete registration of undivided land share for each unit, approved building plan documentation, and individual sale deed registration." },
  { num: "06", name: "Meenakshi Amman Nagar", location: "Madurai, Tamil Nadu", type: "Residential Layout", year: "2021", services: ["Property Registration", "Legal Documentation", "EC Services"], desc: "Devotionally named and legally immaculate — 40 residential plots near Madurai registered with complete documentation and government compliance." },
  { num: "07", name: "Sathyabama Nagar", location: "Chennai, Tamil Nadu", type: "Residential Layout", year: "2022", services: ["Property Registration", "Partition Deed", "Legal Documentation"], desc: "A sought-after residential layout of 28 premium plots — full registration services including complex partition deed documentation for co-owned land." },
  { num: "08", name: "Andal Alagar Garden", location: "Sriperumbudur, Tamil Nadu", type: "Premium Villa Community", year: "2022", services: ["Property Registration", "Legal Documentation", "Society Registration"], desc: "Luxury villa community registration — 18 premium villas with full legal documentation, residents' association formation, and society registration." },
  { num: "09", name: "Viceroy's Garden", location: "OMR, Chennai", type: "Premium Villa Community", year: "2023", services: ["Property Registration", "Legal Documentation", "EC Services"], desc: "An exclusive community of 12 premium villas on Chennai's prestigious OMR corridor — meticulous title verification, mortgage clearance documentation, and registration." },
  { num: "10", name: "Amman Nagar", location: "Tambaram, Tamil Nadu", type: "Residential Layout", year: "2024", services: ["Property Registration", "Layout Documentation", "Certified Copies"], desc: "Our most recent landmark project — 52 residential plots in Tambaram's growing corridor, fully registered with A-register verification and clean title documentation." },
];

export default function Projects() {
  return (
    <Layout>
      <section
        className="relative bg-[#0A2540] text-white py-32 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", paddingBottom: "6vw" }}
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

      <section className="py-24 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p) => (
              <motion.div key={p.name} variants={fadeUp} className="group border border-border hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#0A2540] to-[#0F4C81] flex items-end p-6 relative">
                  <div className="font-serif text-6xl font-bold text-[#D4AF37]/20 absolute top-4 right-4">{p.num}</div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1">{p.type}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3 leading-snug">{p.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />{p.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />{p.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">Services Provided</p>
                    {p.services.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                        <CheckCircle className="w-3 h-3 text-[#D4AF37] shrink-0" /> {s}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all" data-testid={`link-project-${p.num}`}>
                    Enquire About Similar Project <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
