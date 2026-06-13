import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowRight, FileSignature, Users, Landmark, HomeIcon, FileSearch, Copy, FileText } from "lucide-react";

const SERVICES = [
  { id: "property-registration", title: "Property Registration", icon: HomeIcon, desc: "Sale deeds, settlement deeds, and more with complete legal scrutiny." },
  { id: "marriage-registration", title: "Marriage Registration", icon: Users, desc: "Hindu, Christian, Muslim, and Special Marriage Act registrations." },
  { id: "trust-registration", title: "Trust Registration", icon: Landmark, desc: "End-to-end support for setting up charitable and private trusts." },
  { id: "society-registration", title: "Society Registration", icon: FileSignature, desc: "Registration and documentation for societies and associations." },
  { id: "encumbrance-certificate", title: "Encumbrance Certificate", icon: FileSearch, desc: "Verification and retrieval of property encumbrance records." },
  { id: "certified-copy", title: "Certified Copy", icon: Copy, desc: "Procurement of legally certified document copies." },
  { id: "legal-documentation", title: "Legal Documentation", icon: FileText, desc: "Drafting and vetting of all legal agreements and deeds." },
];

export default function Services() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive legal documentation and registration services in Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(s => (
            <Link key={s.id} href={`/services/${s.id}`} className="group bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 block">
              <s.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-muted-foreground mb-6">{s.desc}</p>
              <div className="text-accent font-semibold flex items-center group-hover:underline">
                Explore Service <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
