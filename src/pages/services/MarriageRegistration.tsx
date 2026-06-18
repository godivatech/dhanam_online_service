import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const TYPES = [
  { title: "Hindu Marriage Registration", desc: "For Hindus, Jains, Buddhists, and Sikhs under the Hindu Marriage Act, 1955. No notice period required; registration typically completed on the day of appointment." },
  { title: "Christian Marriage Registration", desc: "Under the Indian Christian Marriage Act, 1872. The marriage may be solemnised before a Registrar, a Marriage Registrar, or a Minister of Religion." },
  { title: "Muslim Marriage Registration", desc: "Muslim marriages (Nikah) are registered under the Muslim Personal Law. The Nikahnama serves as the official marriage record." },
  { title: "Special Marriage Act", desc: "For inter-religious couples or those wishing to marry under a secular framework. Requires 30-day notice at the Marriage Officer's office before solemnisation." },
];

const DOCS = [
  "Completed application form (signed by both parties)",
  "Proof of age — Birth certificate / 10th mark sheet / Passport",
  "Proof of address — Aadhaar card (both parties)",
  "Passport-size photographs — 4 each for bride and groom",
  "Photographs of the marriage ceremony",
  "Wedding invitation card (if available)",
  "Identity proof of three witnesses",
  "Divorce decree / Death certificate of former spouse (if applicable)",
];

const FAQS = [
  { q: "Is marriage registration mandatory in Tamil Nadu?", a: "Marriage registration is not mandatory for the marriage to be valid under personal law, but a marriage certificate is essential for passport applications, visa processing, property rights, insurance claims, and many other legal purposes. It is strongly advisable for all couples to register their marriage." },
  { q: "What is the 30-day notice period under the Special Marriage Act?", a: "Under the Special Marriage Act, 1954, both parties must give notice to the Marriage Officer of the district where at least one party has resided for 30 days. The notice is displayed publicly for 30 days, during which any person may file an objection. After 30 days (if no valid objection is filed), the marriage can be solemnised and registered." },
  { q: "Can we register a marriage that took place abroad?", a: "Marriages solemnised outside India can be registered in India under certain conditions. The process typically requires an apostilled or attested marriage certificate from the country where the marriage took place, along with translation if in a foreign language. We assist with this process comprehensively." },
  { q: "How long does marriage registration take?", a: "Under the Hindu Marriage Act and Christian Marriage Act, registration is typically completed on the appointment day. Under the Special Marriage Act, the mandatory 30-day notice period makes the minimum timeline 31 days from notice submission. We prepare all documents in advance to ensure no delays." },
  { q: "Do both parties need to be present for registration?", a: "Yes, under all acts, both parties must be physically present at the registration. Three witnesses must also be present with valid identity proof. In exceptional circumstances under some acts, authorised representatives with specific documentation may substitute, but this is fact-specific — please consult us." },
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

export default function MarriageRegistration() {
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
            <span className="text-[#D4AF37]">Marriage Registration</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Services</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Marriage<br /><span className="text-[#D4AF37] italic">Registration</span></h1>
            <p className="text-white/70 text-xl max-w-2xl">Legal marriage registration under all applicable acts — handled with care, precision, and complete documentation support for your most important milestone.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Registration Types</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-4xl font-bold text-primary">Marriage Registration Under All Acts</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {TYPES.map((t) => (
                <motion.div key={t.title} variants={fadeUp} className="p-8 border border-border border-l-4 border-l-[#D4AF37] hover:shadow-xl transition-all duration-300">
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
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Eligibility</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-3xl font-bold mb-8">Eligibility Requirements</h2>
              <div className="space-y-5">
                {[
                  { title: "Age Requirement", desc: "Bride must be minimum 18 years of age; groom must be minimum 21 years of age at the time of marriage." },
                  { title: "Marital Status", desc: "Both parties must be unmarried, or if previously married, the former spouse must be deceased or divorced (supported by appropriate documentation)." },
                  { title: "Mental Capacity", desc: "Both parties must be of sound mind and capable of giving valid consent to the marriage." },
                  { title: "Prohibited Degrees", desc: "Parties must not be within the prohibited degrees of relationship as defined under the applicable act." },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-[#D4AF37] pl-5">
                    <h4 className="font-serif font-bold mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
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
          <h2 className="font-serif text-4xl font-bold text-[#0A2540] mb-6">Ready to Register Your Marriage?</h2>
          <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">Book a free consultation. We'll guide you through the entire process with care and precision.</p>
          <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-marriage">
            Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
