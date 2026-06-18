import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Clock, Calendar } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const CATEGORIES = ["All", "Property Registration", "Marriage Registration", "Trust Registration", "Society Registration", "Documentation Tips", "Legal Updates"];

const POSTS = [
  { slug: "property-registration-guide-tamil-nadu-2024", title: "The Complete Guide to Property Registration in Tamil Nadu (2024)", category: "Property Registration", date: "15 March 2024", readTime: "12 min read", excerpt: "Everything you need to know about registering property in Tamil Nadu — from required documents and stamp duty to Sub-Registrar procedures and common pitfalls that could delay your registration by months.", featured: true },
  { slug: "special-marriage-act-registration", title: "Special Marriage Act Registration in Tamil Nadu: A Step-by-Step Guide", category: "Marriage Registration", date: "2 February 2024", readTime: "9 min read", excerpt: "The Special Marriage Act allows individuals of different faiths or nationalities to solemnise and register their marriage. Here is a comprehensive walkthrough of the notice period, objection process, and documentation." },
  { slug: "encumbrance-certificate-importance", title: "Why Your Encumbrance Certificate Matters More Than You Think", category: "Documentation Tips", date: "18 January 2024", readTime: "7 min read", excerpt: "Before signing any property deal, the Encumbrance Certificate is the single most important document to verify. This guide explains what it reveals, how to read it, and why buyers skip it at their peril." },
  { slug: "charitable-trust-registration-benefits", title: "Registering a Charitable Trust in Tamil Nadu: Benefits, Process & Requirements", category: "Trust Registration", date: "5 December 2023", readTime: "11 min read", excerpt: "A registered charitable trust in Tamil Nadu unlocks significant tax exemptions, credibility, and legal protections. This article walks through the complete registration process and key requirements under the Indian Trusts Act." },
  { slug: "society-registration-vs-trust", title: "Society Registration vs Trust Registration: Which Is Right for Your Organisation?", category: "Society Registration", date: "20 November 2023", readTime: "8 min read", excerpt: "Many organisations are unsure whether to register as a society or a trust. Each has distinct legal structures, governance requirements, and advantages. Here is a clear comparison to help you decide." },
  { slug: "stamp-duty-registration-charges-2024", title: "Stamp Duty and Registration Charges in Tamil Nadu: Complete 2024 Breakdown", category: "Legal Updates", date: "8 November 2023", readTime: "10 min read", excerpt: "Stamp duty rates and registration charges in Tamil Nadu have important nuances based on property type, location, and buyer category. This guide breaks down every applicable rate with practical examples." },
  { slug: "sale-deed-vs-agreement-to-sell", title: "Sale Deed vs Agreement to Sell: Understanding the Critical Difference", category: "Property Registration", date: "25 October 2023", readTime: "6 min read", excerpt: "Confusing a Sale Deed with an Agreement to Sell can have serious legal consequences for property buyers. This article clearly explains what each document does, when each is used, and how to protect yourself." },
  { slug: "certified-copy-when-do-you-need", title: "Certified Copies of Registered Documents: When You Need Them and How to Get Them", category: "Documentation Tips", date: "10 October 2023", readTime: "5 min read", excerpt: "Certified copies are legally equal to original registered documents and are required in courts, banks, and government offices. Here is exactly when you need them and how to obtain them from Sub-Registrar offices." },
];

export default function Blog() {
  const [active, setActive] = useState("All");
  const featured = POSTS.find((p) => p.featured);
  const filtered = POSTS.filter((p) => !p.featured && (active === "All" || p.category === active));

  return (
    <Layout>
      <section
        className="relative bg-[#0A2540] text-white py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Blog & Resources</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Knowledge Centre</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Legal Insights &<br /><span className="text-[#D4AF37] italic">Resources</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">Expert guides and updates on property, marriage, trust, and society registration in Tamil Nadu.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Featured */}
          {featured && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-8">Featured Article</p>
              <Link href={`/blog/${featured.slug}`} data-testid="link-featured-post" className="group grid lg:grid-cols-2 gap-0 border border-border hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-[#0A2540] to-[#0F4C81] flex items-end p-10">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1">{featured.category}</span>
                </div>
                <div className="p-10 lg:p-12">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-4 group-hover:text-[#0F4C81] transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-6 text-xs text-muted-foreground mb-8">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center text-[#D4AF37] font-bold text-sm uppercase tracking-wider gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${active === cat ? "bg-[#D4AF37] text-[#0A2540]" : "border border-border text-muted-foreground hover:border-[#D4AF37] hover:text-[#D4AF37]"}`}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full border border-border hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white" data-testid={`card-post-${post.slug}`}>
                  <div className="h-44 bg-gradient-to-br from-[#0A2540] to-[#0F4C81] flex items-end p-6">
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">{post.category}</span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-primary mb-3 leading-snug group-hover:text-[#0F4C81] transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
