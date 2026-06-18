import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const USES = [
  { title: "Legal Proceedings", desc: "Certified copies are admissible as evidence in courts of law, carrying the same legal weight as the original registered document." },
  { title: "Lost Original Documents", desc: "When original registered documents are lost, damaged, or destroyed, a certified copy is the only legal substitute." },
  { title: "Property Transactions", desc: "Buyers and financiers may request certified copies of all parent documents in the chain of title for due diligence." },
  { title: "Bank Loan Applications", desc: "Banks require certified copies of title documents when originals are already pledged with another institution." },
];

const DOCS = [
  "Name of the document (e.g., Sale Deed, Settlement Deed)",
  "Registration number of the document",
  "Date of registration",
  "Sub-Registrar office where the document was registered",
  "Names of the executing parties",
  "Identity proof of the applicant",
];

const FAQS = [
  { q: "Is a certified copy legally equivalent to the original?", a: "Yes. A certified copy issued by the Sub-Registrar's office is legally admissible as evidence of the original registered document. It carries full legal validity for court proceedings, bank submissions, and government applications." },
  { q: "Can I get a certified copy of any registered document?", a: "Yes, any person may obtain a certified copy of any registered document from the Sub-Registrar office where it was registered, upon payment of the prescribed fee. You do not need to be a party to the document." },
  { q: "How do I get a certified copy if I don't know the registration number?", a: "If you have the names of the parties and approximate date and know the Sub-Registrar office, we can conduct a manual search of the indexes to locate the document. Our experience with Tamil Nadu Sub-Registrar records makes this feasible even for documents registered decades ago." },
  { q: "How long does it take to get a certified copy?", a: "For recently registered documents (post-computerisation), certified copies can be obtained in 3–7 working days. For older handwritten records, physical manual search is required and may take 1–3 weeks. We provide a realistic timeline after assessing your specific document." },
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

export default function CertifiedCopy() {
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
            <span className="text-[#D4AF37]">Certified Copy</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Services</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Certified<br /><span className="text-[#D4AF37] italic">Copy Services</span></h1>
            <p className="text-white/70 text-xl max-w-2xl">Certified copies of any registered document from Tamil Nadu Sub-Registrar offices — accurate, legally valid, and quickly obtained.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">When You Need It</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h2 className="font-serif text-4xl font-bold text-primary">Common Uses of Certified Copies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {USES.map((u) => (
              <div key={u.title} className="p-8 border border-border border-l-4 border-l-[#D4AF37] hover:shadow-xl transition-all">
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{u.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2540] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">What We Need</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-3xl font-bold mb-8">Information Required</h2>
              <ul className="space-y-3">
                {DOCS.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/50 italic">If registration number is unknown, we can conduct a manual index search. Please contact us with the details you have.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Documents We Retrieve</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
              <h2 className="font-serif text-3xl font-bold mb-8">Any Registered Document</h2>
              <div className="space-y-3">
                {["Sale Deed Certified Copy", "Settlement / Gift Deed Copy", "Partition Deed Copy", "Marriage Certificate Copy", "Trust Deed Certified Copy", "Power of Attorney Copy", "Lease Deed Copy", "Any Registered Agreement"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
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
          <h2 className="font-serif text-4xl font-bold text-[#0A2540] mb-6">Need a Certified Copy?</h2>
          <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">Contact us with your document details and we will retrieve your certified copy from the relevant Sub-Registrar office.</p>
          <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-cc">
            Request Certified Copy <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
