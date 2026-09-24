import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Shield, Zap, Users, Star, Award, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const TIMELINE = [
  { year: "2015", title: "Foundation", desc: "A.B. Dhanam Online Services was established in Madurai with a singular vision: to make legal documentation transparent and accessible for every Tamil Nadu family and business." },
  { year: "2018", title: "1000 Clients Milestone", desc: "Crossed 1,000 satisfied clients, earning our reputation as Madurai's most trusted property registration consultancy. Expanded service offerings to include trust and society registrations." },
  { year: "2021", title: "Digital Transformation", desc: "Launched online consultation services, allowing clients across Tamil Nadu to access our expertise without geographical constraints. Processed over 5,000 documents digitally." },
  { year: "2023", title: "5000+ Client Family", desc: "Our client family crossed the 5,000 milestone — a testament to the unwavering trust Tamil Nadu places in A.B. Dhanam's expertise and integrity." },
  { year: "2025", title: "Today", desc: "Continuing our legacy of excellence with a team of dedicated legal professionals, serving clients across all major districts of Tamil Nadu with the same commitment as day one." },
];

const VALUES = [
  { icon: Shield, title: "Integrity", desc: "We never compromise on honesty. Every document, every process, every client interaction is governed by absolute transparency." },
  { icon: Star, title: "Excellence", desc: "Mediocrity has no place here. We hold ourselves to the highest professional standards in everything we deliver." },
  { icon: Zap, title: "Speed", desc: "We respect your time. Our streamlined processes ensure the fastest possible turnaround without sacrificing accuracy." },
  { icon: Award, title: "Precision", desc: "Documentation errors can have serious legal consequences. Our multi-layer review process ensures zero errors, every time." },
  { icon: Users, title: "Client Focus", desc: "Every decision we make is viewed through one lens: what is best for the client. Your interests always come first." },
  { icon: Target, title: "Transparency", desc: "No hidden fees, no surprises. You will know exactly what to expect at every stage of your registration journey." },
];

const ACHIEVEMENTS = [
  { value: "5000+", label: "Clients Served" },
  { value: "9+", label: "Years of Operation" },
  { value: "10+", label: "Major Projects" },
  { value: "7", label: "Service Categories" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative bg-[#102F56] text-white py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#E5A019] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E5A019]">About Us</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Our Story</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Tamil Nadu's Most<br /><span className="text-[#E5A019] italic">Trusted</span> Consultancy
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Nine years of excellence, 5,000+ satisfied clients, and an uncompromising commitment to precision in every document we touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-28 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Company Overview</p>
              <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
              <h2 className="font-serif text-4xl font-bold text-[#102F56] mb-8">A Firm Built on Clarity, Speed, and Trust</h2>
              <p className="text-[#334155] leading-relaxed mb-6 text-lg">
                A.B. Dhanam Online Services is Tamil Nadu's premier registration and documentation consultancy. We exist because navigating India's legal documentation system should not be a source of stress, confusion, or financial uncertainty for ordinary citizens.
              </p>
              <p className="text-[#334155] leading-relaxed mb-6">
                From the moment a client walks in — or calls — until their final certified document is in hand, we handle everything. Our promise is simple: zero errors, complete transparency, and the fastest legally possible turnaround.
              </p>
              <p className="text-[#334155] leading-relaxed mb-10">
                We serve individuals buying their first home, developers registering entire layouts, families registering marriages, educators forming trusts, and communities establishing societies. Each case receives the same meticulous attention regardless of scale.
              </p>
              <Link href="/book-consultation" className="inline-flex items-center bg-[#123E73] hover:bg-[#092747] text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all" data-testid="button-book-from-about">
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-0">
              <div className="grid grid-cols-2 gap-px bg-[#DCE3EA]">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.label} className="bg-[#FAFBFC] p-10 text-center">
                    <div className="font-serif text-4xl font-bold text-[#102F56] mb-2">{a.value}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#334155]/80">{a.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-8 border-l-4 border-[#E5A019] bg-[#F1F5F9] border border-[#DCE3EA]">
                <p className="text-[#334155] text-sm italic leading-relaxed">
                  "Our clients trust us with the most important documents of their lives — their homes, their marriages, their legacies. That trust is something we protect with every resource we have."
                </p>
                <div className="mt-4 font-serif font-bold text-[#102F56]">A.B. Alagiri Rajan</div>
                <div className="text-xs text-[#E5A019] uppercase tracking-wider font-medium mt-1">Managing Director</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-28 bg-[#102F56] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-[#123E73] flex items-center justify-center border-4 border-[#E5A019]">
                  <div className="text-center">
                    <div className="font-serif text-7xl font-bold text-[#E5A019]">AR</div>
                    <div className="text-white/70 text-xs uppercase tracking-wider mt-2">Managing Director</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#E5A019] px-6 py-3">
                  <div className="font-serif text-2xl font-bold text-[#102F56]">9+</div>
                  <div className="text-xs text-[#102F56]/80 uppercase tracking-wide">Years</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Founder Profile</p>
              <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
              <h2 className="font-serif text-4xl font-bold mb-6">A.B. Alagiri Rajan</h2>
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                Managing Director of A.B. Dhanam Online Services, Mr. Alagiri Rajan is a veteran legal documentation consultant with over nine years of hands-on experience in Tamil Nadu's registration and documentation ecosystem.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Having personally guided more than 5,000 clients through complex property registrations, trust formations, society registrations, and marriage registrations, he brings a depth of practical knowledge that no textbook can replicate.
              </p>
              <p className="text-white/70 leading-relaxed mb-10">
                His philosophy is simple: every client deserves the same level of precision, transparency, and dedication — whether they are registering a modest residential property or a multi-crore commercial layout. Under his leadership, A.B. Dhanam has maintained a zero-error record on all submitted documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Property Registration Expert", "Trust Law Specialist", "Documentation Consultant", "Tamil Nadu Sub-Registrar Liaison"].map((tag) => (
                  <span key={tag} className="text-xs border border-white/20 text-white/70 px-4 py-2 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 bg-[#F1F5F9]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Purpose & Direction</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#102F56]">Our Mission & Vision</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="p-10 bg-[#102F56] text-white border-l-4 border-[#E5A019]">
              <Target className="w-10 h-10 text-[#E5A019] mb-6" />
              <h3 className="font-serif text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To eliminate confusion, delay, and error from Tamil Nadu's legal documentation process — delivering every client the certainty and peace of mind they deserve, one precisely prepared document at a time.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-10 bg-white border border-[#DCE3EA] border-l-4 border-l-[#E5A019]">
              <Eye className="w-10 h-10 text-[#E5A019] mb-6" />
              <h3 className="font-serif text-3xl font-bold text-[#102F56] mb-6">Our Vision</h3>
              <p className="text-[#334155] leading-relaxed text-lg">
                To become the benchmark of excellence for legal documentation services across all of Tamil Nadu — the firm that every citizen instinctively trusts with their most important documents.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">What We Stand For</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#102F56]">Our Core Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="p-8 bg-white border border-[#DCE3EA] border-l-4 border-l-[#E5A019] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <v.icon className="w-8 h-8 text-[#E5A019] mb-5" />
                <h3 className="font-serif text-xl font-bold text-[#102F56] mb-3">{v.title}</h3>
                <p className="text-[#334155] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-[#102F56] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Our Journey</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">A Decade of Milestones</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#E5A019] text-[#102F56] flex items-center justify-center font-bold text-xs font-serif shrink-0 shadow-md">
                    {t.year.slice(2)}
                  </div>
                  {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-[#E5A019]/30 mt-3" />}
                </div>
                <div className="pb-12 last:pb-0">
                  <div className="text-[#E5A019] text-xs uppercase tracking-[0.2em] font-semibold mb-1">{t.year}</div>
                  <h3 className="font-serif text-2xl font-bold mb-3">{t.title}</h3>
                  <p className="text-white/70 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#102F56] text-white border-t border-[#DCE3EA]/20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-[#DCE3EA]/80 text-lg mb-10 max-w-xl mx-auto">
              Join over 5,000 satisfied clients who have trusted A.B. Dhanam with their most important legal documents.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center bg-[#123E73] hover:bg-[#092747] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider transition-all shadow-xl border border-[#E5A019]/40" data-testid="button-cta-about-bottom">
              Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
