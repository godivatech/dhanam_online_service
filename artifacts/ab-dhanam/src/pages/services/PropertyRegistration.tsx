import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, FileText, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const TYPES = [
  { title: "Sale Deed Registration", desc: "The primary document for transferring ownership of immovable property from seller to buyer. Must be registered at the Sub-Registrar office to be legally valid." },
  { title: "Settlement Deed", desc: "Transfers property from one family member to another as a gift or settlement, typically used for ancestral property distribution." },
  { title: "Partition Deed", desc: "Formally divides jointly-owned property among co-owners, creating separate legal ownership for each party's share." },
  { title: "Release Deed", desc: "Used to relinquish one's share in jointly-owned property in favour of other co-owners without monetary consideration." },
  { title: "Lease Deed", desc: "Legally records a long-term lease arrangement for immovable property, protecting both landlord and tenant." },
  { title: "Mortgage Documentation", desc: "Creates a legal charge on property as security for a loan — essential for housing finance and loan agreements." },
  { title: "Power of Attorney", desc: "Authorises an agent to act on behalf of the property owner for registration and other legal matters." },
  { title: "Partnership Deed", desc: "Records a business partnership agreement, including property contributions and profit-sharing arrangements." },
];

const DOCS = [
  "Original title deed / mother deed",
  "Encumbrance Certificate (minimum 13 years)",
  "Property tax receipts (latest)",
  "Identity proof of all parties (Aadhaar + PAN)",
  "Passport-size photographs (4 each)",
  "Stamp duty payment challan",
  "Witness identity proofs (2 witnesses)",
  "NOC from housing society (if applicable)",
  "Survey sketch from Survey Department",
];

const STEPS = [
  { num: "01", title: "Initial Consultation & Title Verification", desc: "We review your documents, verify title through EC, and identify any legal concerns before proceeding." },
  { num: "02", title: "Stamp Duty Calculation & Payment", desc: "We calculate the exact stamp duty and guide you through online or treasury payment." },
  { num: "03", title: "Deed Drafting & Review", desc: "Our team prepares the complete deed with precise legal language and reviews it with you before finalisation." },
  { num: "04", title: "Sub-Registrar Appointment", desc: "We book the appointment through TNREGINET and prepare all original documents for submission." },
  { num: "05", title: "Registration Day Attendance", desc: "We accompany you to the Sub-Registrar office, handle all formalities, and complete biometric verification." },
  { num: "06", title: "Document Collection", desc: "We collect the registered document on your behalf and deliver it to you with a complete explanation." },
];

const FAQS = [
  { q: "How long does property registration take in Tamil Nadu?", a: "The registration itself takes 30 minutes to 3 hours on the day. The end-to-end process, including EC verification, stamp duty, deed preparation, and appointment, typically takes 3 to 14 working days depending on complexity." },
  { q: "What is the stamp duty rate in Tamil Nadu?", a: "Stamp duty is 7% of the property's guideline value or market value (whichever is higher). Registration charges are an additional 4%. Women buyers receive a 1% stamp duty concession." },
  { q: "Can NRIs register property in Tamil Nadu?", a: "Yes, NRIs can purchase and register most types of immovable property in India. They must provide their OCI/PIO card and passport in addition to standard documents. A Power of Attorney can be granted to a representative for the actual registration if the NRI cannot be present." },
  { q: "What happens if stamp duty is underpaid?", a: "Underpayment of stamp duty can result in the document being impounded and a penalty of up to 10 times the deficient duty. The document will also not be accepted as evidence in legal proceedings. We calculate exact stamp duty to prevent this." },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button className="w-full flex items-center justify-between py-5 text-left gap-6 group" onClick={() => setOpen(!open)} data-testid={`faq-${q.slice(0, 15).replace(/\s+/g, "-").toLowerCase()}`}>
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

export default function PropertyRegistration() {
  return (
    <Layout>
      <section className="relative bg-[#0A2540] text-white py-32 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", paddingBottom: "6vw" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider flex-wrap">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Property Registration</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Services</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Property<br /><span className="text-[#D4AF37] italic">Registration</span></h1>
            <p className="text-white/70 text-xl max-w-2xl">Complete property registration services across Tamil Nadu — sale deeds, partition deeds, mortgage documentation, and more, handled with precision and speed.</p>
          </motion.div>
        </div>
      </section>

      {/* Types */}
      <section className="py-24 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Registration Types</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h2 className="font-serif text-4xl font-bold text-primary">Property Registration Services</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TYPES.map((t) => (
              <motion.div key={t.title} variants={fadeUp} className="p-7 border border-border border-l-4 border-l-[#D4AF37] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-serif text-lg font-bold text-primary mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Docs + Process */}
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
              <p className="mt-6 text-sm text-white/50 italic">Additional documents may be required based on your specific situation. We provide a complete checklist during your free consultation.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Process</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-3xl font-bold mb-8">How We Handle Your Registration</h2>
              <div className="space-y-6">
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

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Timeline</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-8" />
            <h2 className="font-serif text-4xl font-bold text-primary mb-12">Typical Processing Timeline</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: FileText, label: "Simple Sale Deed", time: "3–5 Working Days" },
                { icon: Clock, label: "Complex Multi-party Transaction", time: "7–10 Working Days" },
                { icon: FileText, label: "Partition / Settlement Deed", time: "5–8 Working Days" },
              ].map((item) => (
                <div key={item.label} className="p-8 border border-border bg-white">
                  <item.icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
                  <div className="font-serif text-2xl font-bold text-primary mb-2">{item.time}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Common Questions</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h2 className="font-serif text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </motion.div>
          <div className="border border-border divide-y-0 mb-12">
            {FAQS.map((f) => <FAQ key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#0A2540] mb-6">Ready to Register Your Property?</h2>
          <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">Book a free consultation. We'll review your documents and guide you through every step.</p>
          <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-property">
            Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
