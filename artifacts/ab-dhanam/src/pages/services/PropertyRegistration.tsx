import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function PropertyRegistration() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Property Registration</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Expert legal scrutiny and seamless registration of property documents in Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold">Comprehensive Property Documentation</h2>
            <p className="text-muted-foreground text-lg">
              Property registration is a crucial legal process that transfers the ownership of property from one party to another. Our experienced team ensures that all documents are drafted with precision and registered without hassle.
            </p>
            
            <h3 className="text-2xl font-serif font-bold">Types of Deeds We Handle</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Sale Deed', 'Settlement Deed', 'Partition Deed', 'Release Deed', 'Lease Deed', 'Mortgage Documentation', 'Power of Attorney', 'Partnership Deed'].map(deed => (
                <li key={deed} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{deed}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-serif font-bold">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Original title deeds of the property</li>
              <li>Encumbrance Certificate (EC) for the last 30 years</li>
              <li>Identity proof of buyer, seller, and witnesses</li>
              <li>PAN card and Aadhaar card</li>
              <li>Passport size photographs</li>
              <li>Patta and property tax receipts</li>
            </ul>
          </div>
          <div className="bg-muted p-8 rounded-xl h-fit">
            <h3 className="text-xl font-bold font-serif mb-4">Need Assistance?</h3>
            <p className="text-muted-foreground mb-6">Our legal experts are ready to help you with your property registration needs.</p>
            <Link href="/book-consultation" className="block w-full text-center bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
