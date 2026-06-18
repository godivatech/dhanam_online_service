import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const TESTIMONIALS = [
  { name: "Karthik Subramanian", role: "Real Estate Developer", service: "Property Registration", stars: 5, content: "We have registered over a dozen residential layouts across Tamil Nadu with A.B. Dhanam. Their speed, precision, and deep knowledge of Sub-Registrar procedures is unlike anything I have experienced with any other consultancy. Zero errors across every transaction." },
  { name: "Meenakshi Sundaram", role: "Educational Trust Founder", service: "Trust Registration", stars: 5, content: "Setting up our educational trust for underprivileged children felt like an impossible bureaucratic maze until we contacted A.B. Dhanam. Mr. Alagiri Rajan guided us through every step with extraordinary patience and expertise. The trust was registered in record time." },
  { name: "Rajesh Kumar", role: "Home Buyer", service: "Property Registration", stars: 5, content: "My property purchase involved three co-owners, an existing loan encumbrance, and a very tight timeline set by the seller. A.B. Dhanam handled every complexity with quiet authority. They caught a potential legal issue in the documents that could have cost me lakhs." },
  { name: "Ananya Krishnamurthy", role: "Newlywed", service: "Marriage Registration", stars: 5, content: "We needed a Special Marriage Act registration done quickly for visa purposes. The team at A.B. Dhanam prepared every document flawlessly and accompanied us to the registrar's office. What felt like a stressful process became completely seamless." },
  { name: "V. Raghunathan", role: "Welfare Society Chairman", service: "Society Registration", stars: 5, content: "Our community welfare society had been trying to get registered for eight months before we found A.B. Dhanam. They identified exactly what was wrong with our previous submissions and had us registered within three weeks. Absolutely remarkable professionals." },
  { name: "Priya Venkatesh", role: "Property Seller", service: "Encumbrance Certificate", stars: 5, content: "I needed encumbrance certificates for two properties spanning 20 years for a legal matter. A.B. Dhanam retrieved everything accurately and quickly. Their attention to historical documentation details is impressive." },
  { name: "Senthilkumar Murugan", role: "Business Owner", service: "Legal Documentation", stars: 5, content: "The partnership deed and office lease agreement they drafted for our business partnership were thorough, legally sound, and clearly explained to us. We felt completely confident signing. Highly recommend their legal documentation service." },
  { name: "Lakshmi Narayanan", role: "Society Secretary", service: "Society Registration", stars: 5, content: "Professionalism at its absolute peak. Our cultural society registration was completed weeks ahead of our expected schedule and at the exact cost quoted upfront — no hidden fees whatsoever. Transparency is everything with this firm." },
  { name: "Dr. Arun Balaji", role: "Charitable Trust Director", service: "Trust Registration", stars: 5, content: "We registered our medical charitable trust through A.B. Dhanam and were astonished by their thoroughness. They anticipated regulatory questions before they were asked and had every supporting document prepared in advance. Truly expert consultation." },
  { name: "Nithyanandam P.", role: "Property Buyer", service: "Certified Copy", stars: 5, content: "I urgently needed certified copies of documents from 15 years ago for a court matter. A.B. Dhanam retrieved the exact documents from the Sub-Registrar archives quickly and accurately. Their knowledge of the documentation system is unparalleled." },
];

export default function Testimonials() {
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
            <span className="text-[#D4AF37]">Testimonials</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Client Voices</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              What Our Clients<br /><span className="text-[#D4AF37] italic">Say About Us</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Over 5,000 satisfied clients across Tamil Nadu — each one a story of stress eliminated and trust honoured.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-[#D4AF37] -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-12 text-[#0A2540]">
            {[["98%", "Client Satisfaction"], ["5000+", "Happy Clients"], ["9+", "Years of Trust"], ["0", "Documentation Errors"]].map(([val, lab]) => (
              <div key={lab} className="text-center">
                <div className="font-serif text-3xl font-bold">{val}</div>
                <div className="text-xs uppercase tracking-wider text-[#0A2540]/70 mt-1">{lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials masonry */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="break-inside-avoid bg-white border border-border border-l-4 border-l-[#D4AF37] p-8 hover:shadow-2xl transition-all duration-300 inline-block w-full mb-6">
                <div className="text-5xl font-serif text-[#D4AF37]/20 leading-none mb-4">"</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">{t.content}</p>
                <div className="border-t border-border pt-5">
                  <div className="font-serif font-bold text-primary text-lg">{t.name}</div>
                  <div className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium mt-1">{t.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">Service: {t.service}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Join 5,000+ Satisfied Clients</h2>
            <p className="text-[#0A2540]/70 text-lg mb-10 max-w-xl mx-auto">
              Your registration journey deserves the same precision and care that thousands before you have experienced.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center bg-[#0A2540] text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#0F4C81] transition-all shadow-xl" data-testid="button-cta-testimonials">
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
