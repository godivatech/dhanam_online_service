import { Layout } from "@/components/layout/Layout";
import { Link, useParams } from "wouter";

export default function BlogPost() {
  const { slug } = useParams();
  
  return (
    <Layout>
      <div className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="text-accent hover:underline mb-8 inline-block">&larr; Back to Blog</Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 capitalize">{slug?.replace(/-/g, ' ')}</h1>
          <p className="text-primary-foreground/60">Published by A.B. Dhanam Legal Team</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto font-sans text-muted-foreground leading-relaxed">
          <p>
            This is a comprehensive guide on the topic. In Tamil Nadu, ensuring your legal documentation is handled with precision is paramount. A single error can lead to years of litigation.
          </p>
          <h2 className="text-foreground font-serif">Understanding the Nuances</h2>
          <p>
            When dealing with high-value transactions or sensitive family matters, the expertise of a seasoned consultant like A.B. Alagiri Rajan provides invaluable peace of mind. We meticulously verify all precursor documents, ensure compliance with the latest state amendments, and facilitate a smooth registration process.
          </p>
          <h3 className="text-foreground font-serif">Key Takeaways</h3>
          <ul>
            <li>Always verify the Encumbrance Certificate for the last 30 years.</li>
            <li>Ensure all identities and addresses match exactly across all submitted proofs.</li>
            <li>Consult a professional before drafting the final deed.</li>
          </ul>
          <div className="mt-12 p-8 bg-muted rounded-xl border border-border not-prose">
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Need Expert Guidance?</h3>
            <p className="mb-6">Our team is ready to assist you with your registration needs.</p>
            <Link href="/book-consultation" className="inline-flex bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}
