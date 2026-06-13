import { Layout } from "@/components/layout/Layout";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react";

const POSTS: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "property-registration-guide-tamil-nadu-2024": {
    title: "The Complete Guide to Property Registration in Tamil Nadu (2024)",
    category: "Property Registration",
    date: "15 March 2024",
    readTime: "12 min read",
    content: `Property registration in Tamil Nadu is governed by the Registration Act, 1908, and the Tamil Nadu Registration Rules. While the process may appear complex, understanding each step clearly makes it manageable — particularly when guided by experienced professionals.

**Why Register Property?**

Registration creates a permanent public record of the transfer of ownership. An unregistered sale deed is not legally valid for more than two years and cannot be used as evidence in court. Registration protects buyers from fraudulent multiple sales of the same property and establishes clear title.

**Step 1: Verify the Title (Encumbrance Certificate)**

Before anything else, obtain an Encumbrance Certificate (EC) from the Sub-Registrar office covering a minimum of 13 years. The EC reveals all registered transactions on the property — mortgages, liens, previous sales — allowing you to confirm the seller has clear, unencumbered title.

**Step 2: Determine Guideline Value and Stamp Duty**

Tamil Nadu's guideline values are set by the state government for every locality and are revised periodically. Stamp duty is calculated at 7% of the higher of guideline value or market value. Registration charges are 4% of this value. For women buyers, a 1% concession on stamp duty applies.

**Step 3: Prepare the Sale Deed**

The Sale Deed is the central document. It must be drafted precisely — including the complete property description, consideration amount, survey numbers, extent, boundaries, seller's title declaration, and warranties. Errors in the Sale Deed can cause significant legal problems later. This is where professional legal assistance is essential.

**Step 4: Pay Stamp Duty**

Stamp duty can be paid at authorised government treasuries or through the SHCIL (Stock Holding Corporation of India Limited) online portal. Once paid, the stamped paper is used for the Sale Deed.

**Step 5: Book Your Appointment**

Appointments at Sub-Registrar offices are booked through the TNREGINET portal. Both seller and buyer (and any authorised representatives with Power of Attorney) must appear in person along with two witnesses.

**Step 6: Attend the Sub-Registrar Office**

On the appointment day, all parties appear with original documents. Biometric verification (fingerprint and photograph) is conducted for all parties. The Sub-Registrar verifies documents and completes the registration.

**Step 7: Collect Registered Document**

The registered Sale Deed is returned after endorsement. The Sub-Registrar's seal, signature, and registration number make the transfer legally final.

**Common Pitfalls to Avoid**

Failing to verify encumbrances, accepting undated agreements, not checking survey numbers match, inadequate stamp duty payment, and missing witnesses are the most common mistakes buyers make. Professional guidance eliminates all of these risks.`,
  },
  "encumbrance-certificate-importance": {
    title: "Why Your Encumbrance Certificate Matters More Than You Think",
    category: "Documentation Tips",
    date: "18 January 2024",
    readTime: "7 min read",
    content: `The Encumbrance Certificate (EC) is arguably the single most important document in any property transaction in Tamil Nadu — yet it is one of the most frequently overlooked by first-time buyers.

**What Is an Encumbrance Certificate?**

An EC is an official record issued by the Sub-Registrar's office that captures all registered transactions on a specific property for a specified period. It shows every mortgage, sale, gift, lease, or lien registered against the property in the government's records.

**What the EC Tells You**

A clean EC shows that no mortgages or claims exist on the property, giving buyers confidence that the seller has clear title. An EC with encumbrances reveals outstanding loans, disputes, or prior sales — warning signs that require investigation before any transaction proceeds.

**Why Banks Require It**

Every bank and housing finance company in India requires an EC before approving a home loan. Typically, banks require an EC for the past 15 years. This is because the bank needs certainty that the property being mortgaged as collateral is free of existing claims.

**Types of EC**

Form 15 EC is issued when transactions are found on the property during the requested period. Form 16 (Nil EC) is issued when no transactions are registered — indicating either a clear title or that the property's records predate computerisation.

**How to Obtain an EC**

ECs can be applied for at the Sub-Registrar office where the property is registered, or online through the TNREGINET portal for recently digitised records. You need to specify the survey number, extent, and time period. A.B. Dhanam handles EC applications on clients' behalf as part of every property registration service.`,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS[slug || ""];

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Article Not Found</h2>
            <Link href="/blog" className="inline-flex items-center text-[#D4AF37] font-bold uppercase tracking-wider gap-2" data-testid="link-back-to-blog">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative bg-[#0A2540] text-white py-28 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", paddingBottom: "5vw" }}
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Article</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">{post.category}</span>
            <div className="w-12 h-0.5 bg-[#D4AF37] my-6" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-8">{post.title}</h1>
            <div className="flex items-center gap-6 text-xs text-white/50">
              <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
              <span>A.B. Dhanam Team</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-strong:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed">
              {post.content.split("\n\n").map((block, i) => {
                if (block.startsWith("**") && block.endsWith("**")) {
                  return <h2 key={i} className="font-serif text-2xl font-bold text-primary mt-10 mb-4">{block.replace(/\*\*/g, "")}</h2>;
                }
                if (block.startsWith("**")) {
                  const parts = block.split("**");
                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                      {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-primary font-semibold">{p}</strong> : p)}
                    </p>
                  );
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-6">{block}</p>;
              })}
            </div>

            <div className="mt-16 border-t border-border pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <Link href="/blog" className="inline-flex items-center text-[#D4AF37] font-bold text-sm uppercase tracking-wider gap-2 hover:gap-3 transition-all" data-testid="link-back-blog">
                <ArrowLeft className="w-4 h-4" /> Back to All Articles
              </Link>
              <Link href="/book-consultation" className="inline-flex items-center bg-[#D4AF37] text-[#0A2540] px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all" data-testid="button-cta-blogpost">
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
