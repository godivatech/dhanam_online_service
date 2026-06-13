import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Building, ArrowRight } from "lucide-react";

const PROJECTS = [
  "Srinivasa Nagar Layout", "Srinivasa Nagar Extension", "Srinivasa Nagar Phase II",
  "Yoga Narasimhar Nagar", "AR Residency", "Meenakshi Amman Nagar", 
  "Sathyabama Nagar", "Andal Alagar Garden", "Viceroy's Garden", "Amman Nagar"
];

export default function Projects() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Projects & Clients</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A showcase of our successful registrations and documentation projects across Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Building className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold font-serif mb-2">{project}</h3>
              <p className="text-muted-foreground text-sm mb-4">Comprehensive layout registration, individual plot deeds, and legal vetting completed successfully.</p>
              <div className="text-sm font-semibold text-primary/70 dark:text-primary-foreground/70">
                Completed &bull; Layout Documentation
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
