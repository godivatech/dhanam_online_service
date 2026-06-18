import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const SECTIONS = [
  { title: "Acceptance of Terms", content: "By accessing this website or engaging with A.B. Dhanam Online Services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services or website." },
  { title: "Services", content: "A.B. Dhanam Online Services provides legal documentation consultancy, registration facilitation, and related services. Our services constitute professional consultancy and facilitation — they do not constitute legal advice or legal representation in the formal sense. For legal representation in court proceedings, you should engage a qualified advocate." },
  { title: "Fees and Payment", content: "Our professional fees are quoted upfront and in full before any work commences. Government charges (stamp duty, registration fees, Sub-Registrar charges) are collected separately and paid directly to the relevant government authority. No fees will be charged without prior quotation and your acceptance." },
  { title: "Client Responsibilities", content: "Clients are responsible for providing accurate, complete, and truthful information for all documentation purposes. Any inaccuracies in documents resulting from incorrect information provided by the client are the client's responsibility. A.B. Dhanam cannot be held liable for consequences arising from incorrect information provided by clients." },
  { title: "Confidentiality", content: "All information shared with A.B. Dhanam in the course of providing services is treated as strictly confidential. We do not disclose client information to any third party except as necessary to complete the requested service (e.g., filing with government authorities) or as required by law." },
  { title: "Limitation of Liability", content: "A.B. Dhanam Online Services' liability is limited to the professional fees paid for the specific service in question. We are not liable for delays or outcomes attributable to government processing times, third-party actions, or circumstances beyond our reasonable control." },
  { title: "Governing Law", content: "These Terms and Conditions are governed by the laws of India and the State of Tamil Nadu. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts of Madurai, Tamil Nadu." },
  { title: "Contact", content: "For questions regarding these Terms and Conditions, please contact us at contact@abdhanam.com or +91 98765 43210." },
];

export default function Terms() {
  return (
    <Layout>
      <section className="relative bg-[#0A2540] text-white py-28 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", paddingBottom: "5vw" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Terms & Conditions</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Legal</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-white/60 text-sm">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="space-y-10">
              {SECTIONS.map((s, i) => (
                <div key={s.title} className="border-l-4 border-[#D4AF37] pl-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4">{i + 1}. {s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
