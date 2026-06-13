import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About A.B. Dhanam</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Tamil Nadu's premier registration and documentation consultancy, bringing clarity and confidence to your legal processes.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h2>Our Legacy</h2>
          <p>Founded by A.B. Alagiri Rajan, A.B. Dhanam Online Services has stood as a pillar of trust in the Tamil Nadu legal documentation landscape for over 9 years. We have successfully guided more than 5,000 clients through complex registration procedures.</p>
        </div>
      </div>
    </Layout>
  );
}
