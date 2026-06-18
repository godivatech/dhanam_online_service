import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, ChevronDown, AlertTriangle } from "lucide-react";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const WHY = [
  { title: "Before Buying Property", desc: "Verify that the property has no existing mortgages, liens, or prior unresolved sales. Protects buyers from fraudulent transactions." },
  { title: "For Home Loan Approval", desc: "Banks and NBFCs require an EC (typically 15 years) before approving any home loan or mortgage against property." },
  { title: "Legal Due Diligence", desc: "Advocates and legal consultants require EC as foundational evidence of clean title in property legal matters." },
  { title: "Government Schemes", desc: "Various government housing and subsidy schemes require a current EC as part of the application documentation." },
];

const DOCS = [
  "Survey number and extent of the property",
  "Name of the property owner (as per title deed)",
  "Period for which EC is required",
  "Application form (Sub-Registrar office)",
  "Identity proof of the applicant",
];

const STEPS = [
  { num: "01", title: "Information Collection", desc: "We collect property survey number, owner details, and the specific period for which the EC is required." },
  { num: "02", title: "Application Filing", desc: "Application is filed at the relevant Sub-Registrar office or through the TNREGINET online portal." },
  { num: "03", title: "Follow-up & Tracking", desc: "We monitor the application status and follow up with the Sub-Registrar office on your behalf." },
  { num: "04", title: "EC Delivery", desc: "The completed Encumbrance Certificate is collected and delivered to you with a clear explanation of its contents." },
];

const FAQS = [
  { q: "What information does an Encumbrance Certificate reveal?", a: "An EC reveals all registered transactions on a property during the specified period — including sales, mortgages, gifts, leases, court attachments, and any other registered encumbrances. A clean EC (Form 16 / Nil EC) means no transactions were registered during that period." },
  { q: "What is the difference between Form 15 and Form 16 EC?", a: "Form 15 EC is issued when registered transactions are found on the property during the requested period — it lists each transaction. Form 16 (Nil EC) is issued when no transactions are found — indicating the property has no registered encumbrances for that period." },
  { q: "How many years of EC should I obtain before buying property?", a: "A minimum of 13 years is the general recommendation, as this covers the standard limitation period for most property disputes. Banks typically require 15 years for home loan approval. For high-value or dispute-prone properties, 30 years is advisable." },
  { q: "Can I obtain an EC online in Tamil Nadu?", a: "Yes, Tamil Nadu's TNREGINET portal allows online EC applications for properties registered post-1987 in districts where records are digitised. For older records, a physical application at the Sub-Registrar office is required. We handle both online and physical applications." },
  { q: "How long does it take to get an EC?", a: "Online ECs can sometimes be obtained within 2–3 working days. Physical applications at the Sub-Registrar office typically take 3–7 working days. For historical records (pre-computerisation), it may take longer. We provide realistic timelines after assessing your specific property and period." },
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

export default function EncumbranceCertificate() {
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
            <span className="text-[#D4AF37]">Encumbrance Certificate</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Services</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Encumbrance<br /><span className="text-[#D4AF37] italic">Certificate</span></h1>
            <p className="text-white/70 text-xl max-w-2xl">Obtain encumbrance certificates for any property and any time period — fast, accurate, and essential for every property transaction.</p>
          </motion.div>
        </div>
      </section>

      {/* Alert banner */}
      <div className="bg-[#D4AF37]/10 border-y border-[#D4AF37]/30 py-4">
        <div className="container mx-auto px-6 lg:px-12 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <p className="text-sm text-foreground"><strong>Important:</strong> Never purchase property without first verifying an Encumbrance Certificate. An EC is your primary protection against fraudulent transactions and undisclosed mortgages.</p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Why You Need It</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-4xl font-bold text-primary">When an EC Is Required</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {WHY.map((w) => (
                <motion.div key={w.title} variants={fadeUp} className="p-8 border border-border border-l-4 border-l-[#D4AF37] hover:shadow-xl transition-all">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
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
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">What We Need</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-3xl font-bold mb-8">Required Information</h2>
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
              <h2 className="font-serif text-3xl font-bold mb-8">How We Obtain Your EC</h2>
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
            <h2 className="font-serif text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </motion.div>
          <div className="border border-border divide-y-0">
            {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#0A2540] mb-6">Need an Encumbrance Certificate?</h2>
          <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">Contact us today. We obtain ECs for properties across all Tamil Nadu districts, quickly and accurately.</p>
          <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-ec">
            Get Your EC Now <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
