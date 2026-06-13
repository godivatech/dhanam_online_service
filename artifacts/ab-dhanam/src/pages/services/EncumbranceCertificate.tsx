import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function EncumbranceCertificate() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Encumbrance Certificate (EC)</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Quick and reliable retrieval of property encumbrance records in Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold">Ensure Property is Free from Liabilities</h2>
            <p className="text-muted-foreground text-lg">
              An Encumbrance Certificate is crucial before buying any property. It proves that the property is free from monetary and legal liabilities. We procure ECs swiftly, saving you multiple visits to the Sub-Registrar's office.
            </p>
            
            <h3 className="text-2xl font-serif font-bold">Why You Need an EC</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Before purchasing property', 'Applying for a home loan', 'Withdrawing PF for home buying', 'Property mutation (Patta transfer)', 'Selling a property'].map(reason => (
                <li key={reason} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{reason}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-serif font-bold">Information Required</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Property details (Survey Number, Village, Taluk, District)</li>
              <li>Document number and year of the previous registration</li>
              <li>Period for which the EC is required (e.g., last 30 years)</li>
              <li>Applicant details</li>
            </ul>
          </div>
          <div className="bg-muted p-8 rounded-xl h-fit">
            <h3 className="text-xl font-bold font-serif mb-4">Get Your EC Fast</h3>
            <p className="text-muted-foreground mb-6">We provide express EC retrieval services for clients across Tamil Nadu.</p>
            <Link href="/book-consultation" className="block w-full text-center bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors">
              Request EC
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
