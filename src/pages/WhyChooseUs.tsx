import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Clock, Users, FileCheck, Headphones, Target, ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const REASONS = [
  {
    icon: Users,
    num: "5000+",
    title: "Customers Served With Distinction",
    desc: "Over five thousand clients — individuals buying their first home, developers registering entire townships, families completing marriages, and educators establishing trusts — have trusted A.B. Dhanam with their most important legal documents. Each case is handled with the same meticulous attention regardless of scale. This depth of experience means we have seen virtually every documentation challenge Tamil Nadu's registration landscape can present, and we know precisely how to navigate each one.",
  },
  {
    icon: Clock,
    num: "9+",
    title: "Years of Proven Legal Expertise",
    desc: "Nine years in Tamil Nadu's registration ecosystem builds a knowledge base that cannot be replicated from textbooks. We know every Sub-Registrar office across the state, their specific procedural preferences, their document formatting requirements, and their processing timelines. This insider knowledge translates directly into faster, smoother registration experiences for our clients. We don't learn your process — we already know it.",
  },
  {
    icon: FileCheck,
    num: "100%",
    title: "Zero Documentation Errors",
    desc: "Every document that leaves our office passes through a multi-layer verification process before submission. Our senior review protocol checks legal accuracy, formatting compliance, information consistency, and regulatory adherence. Since our founding, we have maintained a perfect track record — zero rejections due to documentation errors across thousands of submissions. In legal documentation, there is no acceptable margin for error. We operate with that understanding every single day.",
  },
  {
    icon: Shield,
    num: "Full",
    title: "Transparent Process, Zero Hidden Fees",
    desc: "From your first consultation, you will receive a clear, comprehensive breakdown of every cost, every step, and every expected timeline. We do not believe in ambiguity when it comes to your money or your legal affairs. If a situation changes, we communicate immediately and proactively. The price we quote is the price you pay — no additional fees appear at submission, at collection, or anywhere in between. Complete financial transparency is a non-negotiable standard at A.B. Dhanam.",
  },
  {
    icon: Clock,
    num: "Fast",
    title: "Fastest Legally Possible Service",
    desc: "Speed and accuracy are not in tension at A.B. Dhanam — they are both delivered as standard. Our streamlined document preparation workflows, established relationships with Sub-Registrar offices, and proactive submission tracking ensure your registration moves at the fastest pace the legal system permits. We don't wait; we anticipate next steps and prepare for them in advance. Time is valuable, and we treat it that way.",
  },
  {
    icon: Headphones,
    num: "24/7",
    title: "Dedicated Support at Every Step",
    desc: "Every A.B. Dhanam client is assigned a dedicated relationship manager from consultation to completion. You will never have to explain your situation to a new person or chase for updates. Your manager knows your case inside out, keeps you informed at every milestone, and is directly reachable when you have questions. Legal documentation can be stressful — we take that weight off your shoulders from start to finish.",
  },
  {
    icon: Target,
    num: "You",
    title: "Genuinely Client-Centric Approach",
    desc: "Our success is measured by one metric alone: our clients' peace of mind. Every process we have designed, every protocol we follow, and every standard we uphold is oriented towards the single question: 'What is best for the client?' We don't recommend unnecessary services. We don't rush processes that require care. We don't make promises we cannot keep. What we do is deliver exactly what we promised, every single time, because your trust is the most valuable thing we can earn.",
  },
];

export default function WhyChooseUs() {
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
            <span className="text-[#D4AF37]">Why Choose Us</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">The A.B. Dhanam Difference</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Seven Reasons to<br /><span className="text-[#D4AF37] italic">Trust A.B. Dhanam</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              In legal documentation, the difference between ordinary and extraordinary is everything. Here is what sets us apart.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-0 border-b border-border ${i === 0 ? "border-t" : ""}`}
              >
                {/* Left: Icon + Number */}
                <div className={`p-12 lg:p-16 flex items-center gap-8 ${i % 2 === 1 ? "lg:order-2 bg-muted/20" : "bg-background"}`}>
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mb-4">
                      <r.icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="font-serif text-4xl font-bold text-[#D4AF37]">{r.num}</div>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary leading-snug">{r.title}</h2>
                </div>
                {/* Right: Description */}
                <div className={`p-12 lg:p-16 border-l border-border ${i % 2 === 1 ? "lg:order-1 border-r lg:border-r-0" : ""}`}>
                  <p className="text-muted-foreground leading-relaxed text-lg">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Experience the A.B. Dhanam Standard</h2>
            <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">
              Book a free consultation and discover why over 5,000 clients in Tamil Nadu trust us with their most important documents.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-why-choose-us">
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
