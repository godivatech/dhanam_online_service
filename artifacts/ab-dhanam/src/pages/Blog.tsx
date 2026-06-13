import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

const BLOG_POSTS = [
  { slug: "understanding-ec-tamil-nadu", title: "Understanding Encumbrance Certificates in Tamil Nadu", category: "Property Registration", excerpt: "A complete guide to why an EC is the most important document before buying property." },
  { slug: "special-marriage-act-guide", title: "A Guide to the Special Marriage Act", category: "Marriage Registration", excerpt: "Step-by-step process for registering your marriage under the Special Marriage Act." },
  { slug: "trust-vs-society", title: "Trust vs Society: Which is right for your NGO?", category: "Legal Updates", excerpt: "Analyzing the legal differences and benefits of trusts and societies in India." },
  { slug: "property-registration-checklist", title: "The Ultimate Property Registration Checklist", category: "Documentation Tips", excerpt: "Never miss a document. Ensure your property registration goes smoothly with this checklist." },
  { slug: "power-of-attorney-risks", title: "Understanding Power of Attorney", category: "Legal Documentation", excerpt: "How to safely draft and execute a Power of Attorney for property matters." },
  { slug: "settlement-deed-family", title: "Executing a Settlement Deed within Family", category: "Property Registration", excerpt: "The tax benefits and legal procedures for transferring property among family members." }
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-accent">Legal Knowledge Center</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Insights, updates, and expert guidance on registration and documentation in Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                <div className="h-48 bg-muted flex items-center justify-center p-6 text-center">
                  <span className="font-serif text-2xl text-muted-foreground/50 font-bold group-hover:text-accent/30 transition-colors">A.B. Dhanam</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-3">{post.category}</span>
                  <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{post.excerpt}</p>
                  <span className="text-primary font-medium text-sm mt-6 inline-flex items-center group-hover:underline">
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
