import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function SocietyRegistration() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Society Registration</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Registration and documentation for societies and associations under the Tamil Nadu Societies Registration Act, 1975.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold">Formalize Your Association</h2>
            <p className="text-muted-foreground text-lg">
              A registered society provides a legal framework for groups working towards literary, scientific, or charitable purposes. We guide you through the complex drafting of the Memorandum of Association and By-laws.
            </p>
            
            <h3 className="text-2xl font-serif font-bold">Services Provided</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Drafting Memorandum of Association', 'Drafting Rules & Regulations (By-laws)', 'Registration with Registrar of Societies', 'PAN/TAN Application Assistance', 'Filing Annual Returns', 'Amendment of By-laws'].map(service => (
                <li key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-serif font-bold">Requirements</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Minimum 7 members (subscribers)</li>
              <li>ID and Address proofs of all executive committee members</li>
              <li>Address proof for the registered office</li>
              <li>NOC from the landlord of the registered office</li>
              <li>A clearly defined set of objectives</li>
            </ul>
          </div>
          <div className="bg-muted p-8 rounded-xl h-fit">
            <h3 className="text-xl font-bold font-serif mb-4">Need Assistance?</h3>
            <p className="text-muted-foreground mb-6">Let us handle the legalities while you focus on your society's objectives.</p>
            <Link href="/book-consultation" className="block w-full text-center bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
