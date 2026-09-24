import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, Heart, Landmark, Users, FileCheck, Copy, Scale, ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const SERVICES = [
  {
    num: "01", icon: Building2, title: "Property Registration", href: "/services/property-registration",
    image: "/images/services/Property Registration.png",
    desc: "Complete property registration services for individuals, families, and businesses — handled with unmatched precision and speed across all Tamil Nadu Sub-Registrar offices.",
    items: ["Sale Deed Registration", "Settlement & Partition Deed", "Mortgage Documentation", "Power of Attorney", "Lease & Release Deed", "Partnership Deed"],
  },
  {
    num: "02", icon: Heart, title: "Marriage Registration", href: "/services/marriage-registration",
    image: "/images/services/Marriage Registration.png",
    desc: "Legal marriage registration under all applicable acts — Hindu, Christian, Muslim, and Special Marriage Act — with complete documentation support and zero stress.",
    items: ["Hindu Marriage Registration", "Christian Marriage Registration", "Muslim Marriage Registration", "Special Marriage Act", "Document Verification", "Certificate Issuance"],
  },
  {
    num: "03", icon: Landmark, title: "Trust Registration", href: "/services/trust-registration",
    image: "/images/services/Trust Registration.png",
    desc: "End-to-end trust formation services for charitable, educational, religious, and private purposes — from deed drafting to final government certificate.",
    items: ["Charitable Trust Registration", "Educational Trust Formation", "Private Trust Setup", "Trust Deed Drafting", "Government Compliance", "Post-Registration Support"],
  },
  {
    num: "04", icon: Users, title: "Society Registration", href: "/services/society-registration",
    image: "/images/services/Society Registration.png",
    desc: "Register welfare societies, cultural organisations, sports clubs, and cooperative societies under the Tamil Nadu Societies Registration Act with full compliance.",
    items: ["Welfare Society Registration", "Cultural Organisation Setup", "Sports Club Registration", "Memorandum Drafting", "Bye-laws Preparation", "Registration Certificate"],
  },
  {
    num: "05", icon: FileCheck, title: "Encumbrance Certificate", href: "/services/encumbrance-certificate",
    image: "/images/services/Encumbrance Certificate.png",
    desc: "Obtain encumbrance certificates for any property and any period — essential for property transactions, bank loans, and comprehensive legal due diligence.",
    items: ["EC for Home Loans", "Property Transaction EC", "Historical Period EC", "Online EC Application", "Sub-Registrar Liaison", "Fast Delivery"],
  },
  {
    num: "06", icon: Copy, title: "Certified Copy Services", href: "/services/certified-copy",
    image: "/images/services/Certified Copy Services.png",
    desc: "Certified copies of all registered documents from Tamil Nadu Sub-Registrar offices — accurate legal reproductions with full evidentiary standing.",
    items: ["Sale Deed Certified Copy", "Marriage Certificate Copy", "Trust Deed Copy", "Historical Document Retrieval", "Court-Admissible Copies", "Apostille Ready"],
  },
  {
    num: "07", icon: Scale, title: "Legal Documentation", href: "/services/legal-documentation",
    image: "/images/services/Legal Documentation and Advisory.png",
    desc: "Comprehensive legal drafting, review, notarisation, and consultation services for individuals and businesses across all documentation requirements.",
    items: ["Agreement Drafting", "Affidavit Preparation", "Notarisation Services", "Legal Review & Audit", "Contract Documentation", "Advisory Services"],
  },
];

export default function Services() {
  return (
    <Layout>
      <section
        className="relative bg-[#102F56] text-white py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#E5A019] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E5A019]">Services</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">What We Do</p>
            <div className="w-12 h-0.5 bg-[#E5A019] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Complete Registration<br /><span className="text-[#E5A019] italic">& Documentation</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Seven specialised service areas covering every legal registration and documentation need in Tamil Nadu — all under one trusted roof.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp}>
                <div className={`grid lg:grid-cols-12 gap-0 border border-[#DCE3EA] overflow-hidden hover:shadow-2xl transition-all duration-300 group rounded-xl ${i % 2 === 1 ? "bg-[#F1F5F9]" : "bg-white"}`}>
                  
                  {/* Service Image with Number Badge & Icon Overlay */}
                  <div className="relative lg:col-span-4 min-h-[240px] lg:min-h-[300px] overflow-hidden bg-[#102F56]">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102F56]/85 via-transparent to-black/20" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#102F56]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                      <s.icon className="w-4 h-4 text-[#E5A019]" />
                      <span className="font-bold text-xs uppercase tracking-widest text-[#E5A019]">{s.num}</span>
                    </div>
                  </div>

                  {/* Main Service Info */}
                  <div className="p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#DCE3EA]">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs uppercase tracking-[0.25em] text-[#E5A019] font-bold">Service Area</span>
                      </div>
                      <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#102F56] mb-4 group-hover:text-[#123E73] transition-colors">{s.title}</h2>
                      <p className="text-[#334155] text-sm md:text-base leading-relaxed mb-6">{s.desc}</p>
                    </div>
                    <div>
                      <Link href={s.href} className="inline-flex items-center bg-[#123E73] hover:bg-[#092747] text-white px-6 py-3 rounded font-bold text-xs md:text-sm uppercase tracking-wider transition-all shadow-sm hover:gap-3 gap-2" data-testid={`button-service-${s.num}`}>
                        View Full Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Includes / Key Deliverables */}
                  <div className="p-8 lg:p-10 lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#DCE3EA] bg-[#F1F5F9]/60 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#102F56] font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E5A019]" /> Key Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-[#334155]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E5A019] shrink-0 mt-1.5" />
                          <span>{item}</span>
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

      <section className="py-24 bg-[#102F56] text-white border-t border-[#DCE3EA]/20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-[#DCE3EA]/80 text-lg mb-10 max-w-xl mx-auto">
              Book a free consultation. Our experts will assess your situation and guide you to the right solution in minutes.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center bg-[#123E73] hover:bg-[#092747] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider transition-all shadow-xl border border-[#E5A019]/40" data-testid="button-cta-services">
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
