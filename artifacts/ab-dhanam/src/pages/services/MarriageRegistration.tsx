import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function MarriageRegistration() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Marriage Registration</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Legally valid marriage registration services under all applicable acts in Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold">Legitimise Your Union</h2>
            <p className="text-muted-foreground text-lg">
              Registering your marriage is essential for legal recognition, visa processing, and joint property ownership. We guide you through the process under various acts depending on your eligibility.
            </p>
            
            <h3 className="text-2xl font-serif font-bold">Acts Covered</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Hindu Marriage Act, 1955', 'Special Marriage Act, 1954', 'Christian Marriage Act, 1872', 'Tamil Nadu Marriage Registration Act, 2009'].map(act => (
                <li key={act} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{act}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-serif font-bold">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Age proof (Birth Certificate / School Mark Sheet / Passport)</li>
              <li>Address proof (Aadhaar / Voter ID / Passport)</li>
              <li>Passport size photographs of bride and groom</li>
              <li>Wedding invitation card</li>
              <li>Marriage photograph (showing the couple)</li>
              <li>Three witnesses with ID proof</li>
            </ul>
          </div>
          <div className="bg-muted p-8 rounded-xl h-fit">
            <h3 className="text-xl font-bold font-serif mb-4">Need Assistance?</h3>
            <p className="text-muted-foreground mb-6">Let our team handle the paperwork so you can focus on your life together.</p>
            <Link href="/book-consultation" className="block w-full text-center bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
