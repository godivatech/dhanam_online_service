import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

export default function GenericService({ title, description }: { title: string, description: string }) {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">{description}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="prose dark:prose-invert max-w-4xl">
          <h2>Professional Service You Can Trust</h2>
          <p>
            At A.B. Dhanam Online Services, we provide end-to-end assistance for {title.toLowerCase()}. With over 9 years of experience, we ensure your documentation is precise and compliant with all local laws and regulations in Tamil Nadu.
          </p>
          <div className="mt-8">
            <Link href="/book-consultation" className="inline-flex bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors no-underline">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
