import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center max-w-md">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-24 h-24 text-green-500" />
          </div>
          <h1 className="text-4xl font-serif font-bold mb-4">Thank You!</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Your request has been successfully submitted. Our team at A.B. Dhanam will review your details and contact you shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
              Return Home
            </Link>
            <Link href="/services" className="border border-border px-6 py-3 rounded-md font-semibold hover:bg-muted transition-colors">
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
