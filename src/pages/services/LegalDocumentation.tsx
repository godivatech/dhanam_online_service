import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, ChevronDown, Scale } from "lucide-react";
import { useState } from "react";

const SERVICES_LIST = [
  { title: "Agreement Drafting", desc: "Precisely drafted agreements for sale, purchase, lease, service, employment, partnership, and business transactions." },
  { title: "Affidavit Preparation", desc: "Legally sound affidavits for all purposes — name change, date of birth, address proof, and statutory declarations." },
  { title: "Notarisation Services", desc: "Documents notarised by commissioned notaries for domestic and international legal use." },
  { title: "Legal Review & Audit", desc: "Thorough review of existing agreements, deeds, and contracts to identify legal risks before signing." },
  { title: "Power of Attorney", desc: "General and specific Power of Attorney documents for property management, banking, and personal matters." },
  { title: "Will Drafting", desc: "Carefully drafted Wills that accurately reflect your wishes and minimise future family disputes." },
  { title: "Partnership Deeds", desc: "Business partnership agreements covering capital, profit-sharing, roles, and dissolution provisions." },
  { title: "Rental Agreements", desc: "Legally sound rental and lease agreements protecting the rights of both landlords and tenants." },
];

const FAQS = [
  { q: "Why is professional legal documentation important?", a: "Poorly drafted legal documents are one of the most common causes of disputes, litigation, and financial loss. A document that seems adequate today may have ambiguous clauses, missing provisions, or incorrect legal language that creates serious problems tomorrow. Professional legal documentation from the outset protects your interests comprehensively." },
  { q: "What is the difference between a notarised document and a registered document?", a: "A notarised document is attested by a Notary Public, confirming that the signatures were made in the notary's presence. This is sufficient for many purposes but does not create a public record. A registered document is recorded in the government's registration records at the Sub-Registrar office, creating a permanent public record. Registration is required for immovable property transactions above a certain value." },
  { q: "Do you draft documents in Tamil?", a: "Yes, we draft legal documents in both English and Tamil as required. Some documents (such as certain affidavits for government submissions) may specifically need to be in Tamil. We accommodate all language requirements for Tamil Nadu legal documentation." },
  { q: "How long does legal documentation take?", a: "Simple documents (affidavits, agreements) are typically ready within 2–4 working days. Complex documents (wills, partnership deeds, joint development agreements) may take 5–10 working days depending on the specifics. We communicate timelines clearly at the outset and adhere to them." },
  { q: "Can you review documents prepared by someone else?", a: "Absolutely. Legal document review is one of our most important services. If you have received a draft agreement, sale deed, or any legal document and want a professional assessment of its fairness and legal soundness before signing, we provide a thorough review identifying all risks, gaps, and recommended amendments." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#DCE3EA] last:border-0">
      <button className="w-full flex items-center justify-between py-5 text-left gap-6 group" onClick={() => setOpen(!open)}>
        <span className="font-serif text-lg font-semibold text-[#102F56] group-hover:text-[#123E73] transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#E5A019] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 text-[#334155] leading-relaxed border-l-4 border-[#E5A019] pl-5 ml-1">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LegalDocumentation() {
  return (
    <Layout>
      <section className="relative bg-[#102F56] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/50 mb-10 uppercase tracking-wider flex-wrap">
            <Link href="/" className="hover:text-[#E5A019] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#E5A019] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E5A019]">Legal Documentation</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Our Services</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Legal<br /><span className="text-[#E5A019] italic">Documentation</span></h1>
            <p className="text-white/80 text-xl max-w-2xl leading-relaxed">Comprehensive legal drafting, review, notarisation, and advisory services — precise documentation that protects your interests in every transaction.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Services Offered</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
            <h2 className="font-serif text-4xl font-bold text-[#102F56]">Legal Documentation Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SERVICES_LIST.map((s) => (
              <div key={s.title} className="p-7 bg-white border border-[#DCE3EA] border-l-4 border-l-[#E5A019] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-serif text-lg font-bold text-[#102F56] mb-3">{s.title}</h3>
                <p className="text-sm text-[#334155] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Consultation process */}
          <div className="bg-[#102F56] p-10 lg:p-16 text-white mt-12 border border-[#DCE3EA]/20 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Scale className="w-12 h-12 text-[#E5A019] mb-6" />
                <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Our Approach</p>
                <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
                <h2 className="font-serif text-3xl font-bold mb-6 text-white">Consultation to Completion</h2>
                <p className="text-white/80 leading-relaxed text-lg">Every legal documentation engagement begins with a thorough consultation to understand your specific situation, objectives, and concerns. We never use generic templates — every document is crafted for your exact circumstances.</p>
              </div>
              <div className="space-y-5">
                {["In-depth consultation to understand your requirements", "Research and analysis of applicable laws and precedents", "First draft preparation and client review", "Revisions based on feedback", "Final review and legalisation (notarisation/registration)", "Complete explanation of all document terms"].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#E5A019] shrink-0 mt-0.5" />
                    <span className="text-white/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F1F5F9]">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Questions</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
            <h2 className="font-serif text-4xl font-bold text-[#102F56]">Frequently Asked Questions</h2>
          </motion.div>
          <div className="bg-white border border-[#DCE3EA] p-8 divide-y-0">
            {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#102F56] text-white border-t border-[#DCE3EA]/20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-6" />
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Need Legal Documentation Support?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Book a free consultation. Our legal documentation team will assess your needs and provide a clear plan and quote.</p>
          <Link href="/book-consultation" className="inline-flex items-center bg-[#123E73] hover:bg-[#092747] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider border border-[#E5A019]/40 shadow-xl transition-all" data-testid="button-cta-legal">
            Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
