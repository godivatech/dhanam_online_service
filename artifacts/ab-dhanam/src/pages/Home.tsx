import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Building, Users, FileText, Clock } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Expert Legal Documentation & Registration Services in <span className="text-accent">Tamil Nadu</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Led by A.B. Alagiri Rajan, we bring 9+ years of unhurried confidence and precise expertise to your property, marriage, and trust registrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" className="inline-flex justify-center items-center bg-accent text-accent-foreground px-8 py-3 rounded-md text-base font-semibold hover:bg-accent/90 transition-colors">
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/services" className="inline-flex justify-center items-center border border-primary-foreground/20 px-8 py-3 rounded-md text-base font-semibold hover:bg-primary-foreground/10 transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4 text-accent"><Users className="w-10 h-10" /></div>
              <h3 className="text-3xl font-bold font-serif mb-2 text-foreground">5000+</h3>
              <p className="text-muted-foreground">Customers Served</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 text-accent"><Clock className="w-10 h-10" /></div>
              <h3 className="text-3xl font-bold font-serif mb-2 text-foreground">9+ Years</h3>
              <p className="text-muted-foreground">Of Experience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 text-accent"><FileText className="w-10 h-10" /></div>
              <h3 className="text-3xl font-bold font-serif mb-2 text-foreground">10k+</h3>
              <p className="text-muted-foreground">Documents Processed</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 text-accent"><Building className="w-10 h-10" /></div>
              <h3 className="text-3xl font-bold font-serif mb-2 text-foreground">100%</h3>
              <p className="text-muted-foreground">Professionalism</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive registration and documentation solutions tailored for your peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Property Registration", desc: "Sale deeds, settlement deeds, and more with complete legal scrutiny." },
              { title: "Marriage Registration", desc: "Hindu, Christian, Muslim, and Special Marriage Act registrations." },
              { title: "Trust Registration", desc: "End-to-end support for setting up charitable and private trusts." },
            ].map((service, i) => (
              <div key={i} className="bg-card border border-card-border p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/services" className="text-accent font-semibold flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
