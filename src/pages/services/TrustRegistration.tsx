import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const BENEFITS = [
  { title: "Legal Entity Status", desc: "A registered trust can hold property, open bank accounts, enter contracts, and sue or be sued in its own name." },
  { title: "Tax Exemptions", desc: "Registered charitable trusts can apply for Section 12A and 80G status, providing significant income tax benefits and donor deductions." },
  { title: "Credibility & Trust", desc: "Registration lends official credibility to the trust, making it significantly more trusted by donors, government bodies, and the public." },
  { title: "Perpetual Succession", desc: "The trust continues indefinitely despite changes in trustees, ensuring your charitable mission is carried forward without interruption." },
  { title: "Asset Protection", desc: "Trust assets are legally separated from the personal assets of the trustees, providing important protection against personal liability." },
  { title: "Grant Eligibility", desc: "Registered trusts with 12A/80G status are eligible to receive CSR funding, government grants, and international donations." },
];

const DOCS = [
  "Trust Deed (drafted on stamp paper of appropriate value)",
  "Identity proof of all trustees (Aadhaar + PAN)",
  "Address proof of all trustees",
  "Passport-size photographs of all trustees",
  "Proof of registered office (rental agreement + owner NOC)",
  "No Objection Certificate from the property owner (if applicable)",
  "Details of trust corpus (initial assets or funds)",
];

const STEPS = [
  { num: "01", title: "Consultation & Trust Structure Planning", desc: "We assess your objectives and advise on the optimal trust structure — private or public, charitable objects, trustee composition." },
  { num: "02", title: "Trust Deed Drafting", desc: "Our legal team drafts a comprehensive Trust Deed covering all objects, powers, trustee duties, succession, and dispute resolution." },
  { num: "03", title: "Stamp Paper & Review", desc: "The Trust Deed is printed on stamp paper of the appropriate value. You review and approve the final draft." },
  { num: "04", title: "Sub-Registrar Registration", desc: "All trustees attend the Sub-Registrar office. The Trust Deed is registered and returns with an official registration number." },
  { num: "05", title: "Post-Registration Compliance", desc: "We advise on PAN application for the trust, bank account opening, and eligibility for 12A/80G income tax exemptions." },
];

const FAQS = [
  { q: "What is the minimum number of trustees required?", a: "A minimum of two trustees is required to form a trust under the Indian Trusts Act, 1882. At least one trustee must be a resident of India. We advise on the optimal number and composition based on your trust's objectives." },
  { q: "How long does trust registration take?", a: "Trust Deed preparation takes 5–10 working days. The Sub-Registrar registration itself is completed on the day of the appointment. End-to-end, the process typically takes 7–14 working days." },
  { q: "What is the difference between 12A and 80G registration?", a: "Section 12A registration exempts the trust's income (applied to charitable purposes) from income tax. Section 80G registration allows donors to claim a tax deduction on their donations (typically 50%). Both are applied for separately with the Income Tax Department after trust registration." },
  { q: "Can a trust own immovable property?", a: "Yes. A registered trust can hold, acquire, and dispose of immovable property in its own name. The property must be used for the trust's stated objects. All property transactions must be authorised by the trustees in accordance with the Trust Deed." },
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

export default function TrustRegistration() {
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
            <span className="text-[#D4AF37]">Trust Registration</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Our Services</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Trust<br /><span className="text-[#D4AF37] italic">Registration</span></h1>
            <p className="text-white/70 text-xl max-w-2xl">End-to-end trust formation services — from Trust Deed drafting to final registration certificate, with expert guidance on tax exemptions and compliance.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Why Register</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h2 className="font-serif text-4xl font-bold text-primary">Benefits of Trust Registration</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <motion.div key={b.title} variants={fadeUp} className="p-8 border border-border border-l-4 border-l-[#D4AF37] hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
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
          <h2 className="font-serif text-4xl font-bold text-[#0A2540] mb-6">Ready to Register Your Trust?</h2>
          <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">Book a free consultation and let our experts guide your trust formation from deed drafting to final registration.</p>
          <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-trust">
            Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
