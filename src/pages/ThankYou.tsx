import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function ThankYou() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FAFBFC] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl px-6"
        >
          <div className="w-20 h-20 rounded-full bg-[#E5A019]/10 border-2 border-[#E5A019] flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-[#E5A019]" />
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-semibold mb-4">Submission Received</p>
          <h1 className="font-serif text-5xl font-bold text-[#102F56] mb-6">Thank You!</h1>
          <p className="text-[#334155] text-xl leading-relaxed mb-10">
            Your enquiry has been received. A member of our team will contact you within one business hour to discuss your requirements and schedule your consultation.
          </p>
          <div className="border border-[#DCE3EA] border-l-4 border-l-[#E5A019] bg-[#F1F5F9] p-8 text-left mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5A019] font-bold mb-3">What Happens Next</p>
            <ol className="space-y-3 text-[#334155]">
              <li className="flex items-start gap-3"><span className="font-bold text-[#102F56]">1.</span> Our team reviews your enquiry and assigns the most relevant expert.</li>
              <li className="flex items-start gap-3"><span className="font-bold text-[#102F56]">2.</span> We call you at your provided number to confirm your requirements.</li>
              <li className="flex items-start gap-3"><span className="font-bold text-[#102F56]">3.</span> Your consultation is scheduled at a time convenient for you.</li>
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center bg-[#123E73] hover:bg-[#092747] text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all shadow-md" data-testid="button-thankyou-home">
              Back to Home
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center border border-[#DCE3EA] hover:border-[#123E73] hover:text-[#123E73] text-[#334155] px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all" data-testid="button-thankyou-call">
              <Phone className="mr-2 w-4 h-4" /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
