import { Layout } from "@/components/layout/Layout";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Rajesh Kumar", role: "Property Buyer", content: "A.B. Dhanam made our property registration seamless. Mr. Alagiri Rajan personally ensured all our documents were flawless." },
  { name: "Meenakshi Sundaram", role: "Trust Founder", content: "Setting up our educational trust was a breeze. Highly professional and completely transparent process." },
  { name: "Anand Rajan", role: "Business Owner", content: "The absolute best in Chennai for legal documentation. Their attention to detail saved us from a potential legal dispute." },
  { name: "Priya Venkatesh", role: "Newlywed", content: "We got our marriage registered under the Special Marriage Act. The team guided us beautifully with zero stress." },
  { name: "Karthik Subramanian", role: "Real Estate Developer", content: "We exclusively use A.B. Dhanam for all our layout registrations. 100% reliable and incredibly fast." },
  { name: "Lakshmi Narayanan", role: "Society Member", content: "Professionalism at its peak. Our society registration was completed weeks ahead of our expected schedule." }
];

export default function Testimonials() {
  return (
    <Layout>
      <div className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-accent">Client Testimonials</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the people who have experienced our unhurried confidence.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-accent text-accent" />)}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="font-bold font-serif text-lg">{t.name}</h4>
                <span className="text-sm text-accent font-medium">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
