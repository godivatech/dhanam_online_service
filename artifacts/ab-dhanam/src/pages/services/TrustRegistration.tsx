import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function TrustRegistration() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Trust Registration</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            End-to-end support for setting up charitable and private trusts in Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold">Secure Your Philanthropic Vision</h2>
            <p className="text-muted-foreground text-lg">
              Whether you are establishing a public charitable trust for social welfare or a private trust for family beneficiaries, our experts provide meticulous drafting of the Trust Deed and facilitate a smooth registration process.
            </p>
            
            <h3 className="text-2xl font-serif font-bold">Benefits of Trust Registration</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Legal recognition and structured operation', 'Eligibility for tax exemptions (80G, 12A)', 'Ability to receive government grants', 'Perpetual succession', 'Asset protection', 'Clear beneficiary directives'].map(benefit => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-serif font-bold">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Details of the Author/Settlor of the Trust</li>
              <li>Details of all Trustees (Name, Address, Age, Occupation)</li>
              <li>Identity and Address Proofs of Settlor and Trustees</li>
              <li>Registered Office Address Proof (NOC from owner)</li>
              <li>Objectives and Rules of the Trust</li>
              <li>Two Witnesses with ID proofs</li>
            </ul>
          </div>
          <div className="bg-muted p-8 rounded-xl h-fit">
            <h3 className="text-xl font-bold font-serif mb-4">Ready to Start?</h3>
            <p className="text-muted-foreground mb-6">Our experts can draft your trust deed within 48 hours.</p>
            <Link href="/book-consultation" className="block w-full text-center bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
