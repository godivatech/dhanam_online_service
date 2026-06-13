import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Shield, Clock, Users, FileCheck, ThumbsUp, Ear, Target } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <Layout>
      <div className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-accent">Why Choose A.B. Dhanam</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Decades of trust. Thousands of satisfied clients. Uncompromising legal precision.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "5000+ Customers", desc: "A vast portfolio of satisfied clients across Tamil Nadu who trust our expertise." },
            { icon: Clock, title: "9+ Years Experience", desc: "Deep industry knowledge navigating complex registration laws." },
            { icon: FileCheck, title: "Professional Team", desc: "Expert documentation handled by seasoned professionals." },
            { icon: Shield, title: "Transparent Process", desc: "No hidden fees. Complete clarity at every step of your legal journey." },
            { icon: Target, title: "Fast Service", desc: "Expedited processing without compromising on legal accuracy." },
            { icon: Ear, title: "Client-Centric Approach", desc: "We listen, we understand, and we deliver solutions tailored to your needs." },
          ].map((item, i) => (
            <div key={i} className="bg-card p-8 rounded-xl shadow-md border border-border hover:-translate-y-1 transition-transform">
              <item.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold font-serif mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
