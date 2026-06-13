import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, Heart, Landmark, Users, FileCheck, Copy, Scale, ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const SERVICES = [
  {
    num: "01", icon: Building2, title: "Property Registration", href: "/services/property-registration",
    desc: "Complete property registration services for individuals, families, and businesses — handled with unmatched precision and speed across all Tamil Nadu Sub-Registrar offices.",
    items: ["Sale Deed Registration", "Settlement & Partition Deed", "Mortgage Documentation", "Power of Attorney", "Lease & Release Deed", "Partnership Deed"],
  },
  {
    num: "02", icon: Heart, title: "Marriage Registration", href: "/services/marriage-registration",
    desc: "Legal marriage registration under all applicable acts — Hindu, Christian, Muslim, and Special Marriage Act — with complete documentation support and zero stress.",
    items: ["Hindu Marriage Registration", "Christian Marriage Registration", "Muslim Marriage Registration", "Special Marriage Act", "Document Verification", "Certificate Issuance"],
  },
  {
    num: "03", icon: Landmark, title: "Trust Registration", href: "/services/trust-registration",
    desc: "End-to-end trust formation services for charitable, educational, religious, and private purposes — from deed drafting to final government certificate.",
    items: ["Charitable Trust Registration", "Educational Trust Formation", "Private Trust Setup", "Trust Deed Drafting", "Government Compliance", "Post-Registration Support"],
  },
  {
    num: "04", icon: Users, title: "Society Registration", href: "/services/society-registration",
    desc: "Register welfare societies, cultural organisations, sports clubs, and cooperative societies under the Tamil Nadu Societies Registration Act with full compliance.",
    items: ["Welfare Society Registration", "Cultural Organisation Setup", "Sports Club Registration", "Memorandum Drafting", "Bye-laws Preparation", "Registration Certificate"],
  },
  {
    num: "05", icon: FileCheck, title: "Encumbrance Certificate", href: "/services/encumbrance-certificate",
    desc: "Obtain encumbrance certificates for any property and any period — essential for property transactions, bank loans, and comprehensive legal due diligence.",
    items: ["EC for Home Loans", "Property Transaction EC", "Historical Period EC", "Online EC Application", "Sub-Registrar Liaison", "Fast Delivery"],
  },
  {
    num: "06", icon: Copy, title: "Certified Copy Services", href: "/services/certified-copy",
    desc: "Certified copies of all registered documents from Tamil Nadu Sub-Registrar offices — accurate legal reproductions with full evidentiary standing.",
    items: ["Sale Deed Certified Copy", "Marriage Certificate Copy", "Trust Deed Copy", "Historical Document Retrieval", "Court-Admissible Copies", "Apostille Ready"],
  },
  {
    num: "07", icon: Scale, title: "Legal Documentation", href: "/services/legal-documentation",
    desc: "Comprehensive legal drafting, review, notarisation, and consultation services for individuals and businesses across all documentation requirements.",
    items: ["Agreement Drafting", "Affidavit Preparation", "Notarisation Services", "Legal Review & Audit", "Contract Documentation", "Advisory Services"],
  },
];

export default function Services() {
  return (
    <Layout>
      <section
        className="relative bg-[#0A2540] text-white py-32 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", paddingBottom: "6vw" }}
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Services</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">What We Do</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Complete Registration<br /><span className="text-[#D4AF37] italic">& Documentation</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Seven specialised service areas covering every legal registration and documentation need in Tamil Nadu — all under one trusted roof.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp}>
                <div className={`grid lg:grid-cols-5 gap-0 border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 group ${i % 2 === 1 ? "bg-muted/20" : "bg-background"}`}>
                  <div className="bg-[#0A2540] p-10 flex flex-col items-center justify-center text-center lg:col-span-1">
                    <div className="font-serif text-5xl font-bold text-[#D4AF37]/30 group-hover:text-[#D4AF37]/50 transition-colors mb-4">{s.num}</div>
                    <s.icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <div className="p-10 lg:col-span-2 border-l border-border">
                    <h2 className="font-serif text-3xl font-bold text-primary mb-4">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <Link href={s.href} className="inline-flex items-center bg-[#D4AF37] text-[#0A2540] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all" data-testid={`button-service-${s.num}`}>
                      View Full Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                  <div className="p-10 lg:col-span-2 border-l border-border bg-muted/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-5">Includes</p>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">
              Book a free consultation. Our experts will assess your situation and guide you to the right solution in minutes.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-services">
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
