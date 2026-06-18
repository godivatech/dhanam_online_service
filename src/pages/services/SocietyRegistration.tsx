import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const TYPES = [
  { title: "Welfare Societies", desc: "Community welfare, neighbourhood associations, and social service organisations serving specific communities." },
  { title: "Cultural Organisations", desc: "Music, dance, arts, and cultural promotion societies preserving and promoting Tamil and Indian heritage." },
  { title: "Sports Clubs", desc: "Athletic, recreational, and sports promotion organisations registered for official competitions and activities." },
  { title: "Educational Societies", desc: "Organisations running schools, coaching centres, vocational training institutes, and educational programmes." },
];

const DOCS = [
  "Memorandum of Association (stating name, objects, and address)",
  "Rules and Bye-Laws of the society",
  "List of founding members with designations (minimum 7)",
  "Identity proof of all founding members (Aadhaar + PAN)",
  "Address proof of all founding members",
  "Proof of registered office address",
  "Owner's NOC for the registered office premises",
  "Minutes of the first meeting (inaugural meeting)",
  "Passport-size photographs of all founding members",
];

const STEPS = [
  { num: "01", title: "Name Availability Check", desc: "We verify your proposed society name against existing registrations to confirm it is available and compliant." },
  { num: "02", title: "Memorandum & Bye-Laws Drafting", desc: "Our team drafts the Memorandum of Association and Bye-Laws tailored to your society's specific objectives and governance structure." },
  { num: "03", title: "Inaugural Meeting Documentation", desc: "We prepare the inaugural meeting minutes, member list, and all required resolutions for the founding general body meeting." },
  { num: "04", title: "Application Filing", desc: "Complete application with all supporting documents is filed with the Registrar of Societies, Tamil Nadu." },
  { num: "05", title: "Certificate Collection", desc: "Upon approval, we collect the Certificate of Registration — the official document establishing your society as a legal entity." },
];

const FAQS = [
  { q: "How many members are required to register a society?", a: "A minimum of seven members is required under the Tamil Nadu Societies Registration Act, 1975. These founding members form the Governing Body. There is no upper limit on the number of members." },
  { q: "What is the difference between a society and a trust?", a: "A society is democratically governed by its members through an elected committee, with governance defined by its Memorandum and Bye-Laws. A trust is managed by trustees defined at formation, governed by the Trust Deed. Societies suit member-driven organisations (associations, clubs), while trusts suit founder-directed charitable activities." },
  { q: "Can a registered society receive government grants?", a: "Yes. Registered societies are eligible to apply for government grants, CSR funding, and foreign contributions (with additional FCRA registration). Registration significantly enhances credibility with funding bodies." },
  { q: "How long does society registration take?", a: "End-to-end society registration typically takes 2–4 weeks, including Memorandum and Bye-Laws preparation, documentation, and the Registrar's processing time. We manage the entire process to ensure the fastest possible approval." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button className="w-full flex items-center justify-between py-5 text-left gap-6 group" onClick={() => setOpen(!open)}>
        <span className="font-serif text-lg font-semibold text-primary group-hover:text-[#0F4C81] transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 text-muted-foreground leading-relaxed border-l-4 border-[#D4AF37] pl-5 ml-1">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SocietyRegistration() {
  return (
    <Layout>
      <section className="relative bg-[#0A2540] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider flex-wrap">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Society Registration</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Services</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Society<br /><span className="text-[#D4AF37] italic">Registration</span></h1>
            <p className="text-white/70 text-xl max-w-2xl">Complete society registration under the Tamil Nadu Societies Registration Act — from Memorandum drafting to Certificate of Registration.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Society Types</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-4xl font-bold text-primary">Societies We Register</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {TYPES.map((t) => (
                <motion.div key={t.title} variants={fadeUp} className="p-8 border border-border border-l-4 border-l-[#D4AF37] hover:shadow-xl transition-all">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2540] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Documentation</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-3xl font-bold mb-8">Required Documents</h2>
              <ul className="space-y-3">
                {DOCS.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Process</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-3xl font-bold mb-8">Our Registration Process</h2>
              <div className="space-y-5">
                {STEPS.map((s) => (
                  <div key={s.num} className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0A2540] text-xs font-bold flex items-center justify-center shrink-0">{s.num}</div>
                    <div>
                      <h3 className="font-serif font-bold mb-1">{s.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Common Questions</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h2 className="font-serif text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </motion.div>
          <div className="border border-border divide-y-0">
            {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#0A2540] mb-6">Ready to Register Your Society?</h2>
          <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">Book a free consultation. Our team handles every document and every step from formation to certificate.</p>
          <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-society">
            Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
