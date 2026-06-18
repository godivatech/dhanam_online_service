import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl px-6"
        >
          <div className="font-serif text-[12rem] font-bold text-[#D4AF37]/15 leading-none mb-4">404</div>
          <h1 className="font-serif text-4xl font-bold text-primary mb-4 -mt-8">Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            The page you are looking for does not exist or has been moved. Return to our homepage or explore our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center bg-[#D4AF37] text-[#0A2540] px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all" data-testid="button-404-home">
              <Home className="mr-2 w-4 h-4" /> Back to Home
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-border px-8 py-4 font-bold text-sm uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all" data-testid="button-404-contact">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
