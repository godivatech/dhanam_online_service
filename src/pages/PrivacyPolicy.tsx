import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const SECTIONS = [
  { title: "Information We Collect", content: "When you contact us, book a consultation, or submit a form on our website, we collect information you provide — including your name, phone number, email address, and details about your legal documentation requirements. We may also collect general usage information such as the pages you visit and how you found our website." },
  { title: "How We Use Your Information", content: "We use the information you provide solely to respond to your enquiries, schedule and conduct consultations, deliver the services you have requested, and improve our service quality. We do not use your information for automated marketing without your consent, and we do not sell or rent your data to any third party." },
  { title: "Data Protection", content: "We take the security of your personal information seriously. All consultation communications and client documents are treated with strict confidentiality under professional legal obligations. Digital information is stored securely and access is restricted to authorised team members directly involved in your service." },
  { title: "Sharing of Information", content: "A.B. Dhanam Online Services does not sell, trade, or transfer your personal information to outside parties. Information may only be shared with government authorities (Sub-Registrar offices, etc.) as necessary to complete your registration or documentation service, and only with your knowledge and consent." },
  { title: "Cookies", content: "Our website may use basic cookies to improve your browsing experience. These do not collect personally identifiable information and can be disabled through your browser settings at any time." },
  { title: "Your Rights", content: "You have the right to access the personal information we hold about you, request corrections, and request deletion. To exercise any of these rights, please contact us at the details provided below. We will respond within a reasonable timeframe." },
  { title: "Contact", content: "If you have questions about this Privacy Policy or how we handle your information, please contact us at contact@abdhanam.com or call +91 98765 43210." },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="relative bg-[#0A2540] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Privacy Policy</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Legal</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/60 text-sm">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground leading-relaxed text-lg mb-12">
              A.B. Dhanam Online Services is committed to protecting your privacy and handling your personal information with complete transparency and care. This policy describes how we collect, use, and safeguard your information.
            </p>
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
