import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  Building2, Heart, Landmark, Scale, CheckCircle, 
  ArrowRight, ShieldCheck, HelpCircle, FileText, Landmark as GovernmentIcon 
} from "lucide-react";

interface Step {
  step: string;
  label: string;
  desc: string;
}

interface ServiceData {
  id: string;
  title: string;
  icon: any;
  docs: string[];
  timeline: Step[];
  fees: {
    government: string;
    drafting: string;
    note: string;
  };
}

const SERVICES_DATA: Record<string, ServiceData> = {
  property: {
    id: "property",
    title: "Property Registry",
    icon: Building2,
    docs: [
      "Parent Deeds (tracing trace links up to 30 years)",
      "Patta, Chitta, and Adangal land registry copies",
      "Latest Encumbrance Certificate (EC) history",
      "Property Tax Receipt (current financial year paid bill)",
      "Buyer & Seller PAN Cards, Aadhaar Cards & Photos",
      "Draft Sale Deed prepared by authorized counsel"
    ],
    timeline: [
      { step: "1", label: "Title Verification", desc: "Checking parent deeds and EC history to verify clear market title." },
      { step: "2", label: "Deed Drafting", desc: "Drafting the Sale or Settlement Deed with precise boundary descriptions." },
      { step: "3", label: "Duty Payment", desc: "Paying the online stamp duty and scheduling the jurisdictional SRO slot." },
      { step: "4", label: "SRO Registration", desc: "Physical presentation and bio-metric registry at the Sub-Registrar Office." }
    ],
    fees: {
      government: "7% Stamp Duty + 4% Registration Fee based on Guideline/Market Value",
      drafting: "Standard nominal preparation and drafting consultation fee",
      note: "Guidelines values are subject to Tamil Nadu registration department changes."
    }
  },
  marriage: {
    id: "marriage",
    title: "Marriage Registry",
    icon: Heart,
    docs: [
      "Proof of Marriage (Wedding card or temple/church certificate)",
      "Proof of Birth (Birth Certificate, School Transfer Certificate, or Passport)",
      "Proof of Address (Aadhaar Card, Passport, or Voter ID)",
      "4 passport size photos of Groom and Bride (individually)",
      "3 witnesses with valid government IDs and address proofs",
      "Divorce decree or death certificate (if previously married)"
    ],
    timeline: [
      { step: "1", label: "Eligibility Check", desc: "Verifying age limits (Groom 21+, Bride 18+) and jurisdictional proofs." },
      { step: "2", label: "Form Preparation", desc: "Preparing Form I declarations and witness statements." },
      { step: "3", label: "SRO Scheduling", desc: "Filing digital application and scheduling registry day." },
      { step: "4", label: "Oath & Signature", desc: "Appearing at SRO with witnesses for signing and instant certificate issuance." }
    ],
    fees: {
      government: "₹100 (Hindu Marriage Act) / ₹150 (Special Marriage Act) stamp fee",
      drafting: "Nominal document processing and affidavit drafting charges",
      note: "Highly recommended to register within 90 days of solemnization."
    }
  },
  trust: {
    id: "trust",
    title: "Trust / NGO Registry",
    icon: Landmark,
    docs: [
      "Trust Deed structuring objectives, rules, and dissolution rules",
      "Address proof of Trust Office (Rent Agreement or Tax receipt)",
      "NOC from premises owner with identity proof",
      "PAN Card, Aadhaar Card, and passport photos of Founder (Settlor)",
      "ID & Address proofs of minimum 2 Trustees",
      "Consent Letter signed by all designated trustees"
    ],
    timeline: [
      { step: "1", label: "Structuring Objects", desc: "Drafting trust purposes: educational, public welfare, medical, or charity." },
      { step: "2", label: "Trustee Execution", desc: "Drafting the legal Trust Deed with all trustee signatures." },
      { step: "3", label: "Booking Slot", desc: "Filing deed with Sub-Registrar and booking presentation slot." },
      { step: "4", label: "Deed Execution", desc: "Founder and Trustees presenting at local SRO to register the NGO/Trust." }
    ],
    fees: {
      government: "₹100 official registration fee + ₹100 stamp paper duty",
      drafting: "Custom legal drafting based on charitable/private objectives",
      note: "Charitable trusts can apply for tax exemption (12A/80G) after registration."
    }
  },
  deeds: {
    id: "deeds",
    title: "Legal Deed Drafting",
    icon: Scale,
    docs: [
      "Identity details of both executing parties (Settlor, Executant, or Tenant)",
      "Property boundaries, rental values, or business partnership percentages",
      "Aadhaar Cards and PAN Cards of both parties",
      "Requisite stamp paper (determined by contract value)",
      "ID details of two witnesses executing the agreement"
    ],
    timeline: [
      { step: "1", label: "Covenants Setup", desc: "Consulting to define terms: tenancy terms, shares, or POA powers." },
      { step: "2", label: "Legal Drafting", desc: "Writing legal statements with precise clauses safeguarding interest." },
      { step: "3", label: "Draft Review", desc: "Client preview to review and adjust terms before printing." },
      { step: "4", label: "Printing & Notary", desc: "Printing on stamp paper with notary seal execution." }
    ],
    fees: {
      government: "Varies depending on stamp paper (₹20, ₹100, or ₹500 options)",
      drafting: "Standard nominal legal drafting and notary execution fees",
      note: "Rental agreements commonly require stamp duty matching lease values."
    }
  }
};

export default function RegistryAssistant() {
  const [activeTab, setActiveTab] = useState<string>("property");
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const currentService = SERVICES_DATA[activeTab];

  const handleCheckboxChange = (docName: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [docName]: !prev[docName]
    }));
  };

  // Calculate percentage of docs checked for active service
  const serviceDocs = currentService.docs;
  const checkedCount = serviceDocs.filter(doc => checkedDocs[doc]).length;
  const progressPercent = Math.round((checkedCount / serviceDocs.length) * 100);

  // Switch tabs and reset checklist progress
  const selectService = (id: string) => {
    setActiveTab(id);
    setCheckedDocs({});
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-border">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#635bff]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#635bff] font-bold mb-4">Interactive Tool</p>
          <div className="w-12 h-0.5 bg-[#635bff] mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0b0f1d] mb-4">
            Smart Registry & Document Assistant
          </h2>
          <p className="text-muted-foreground text-sm">
            Select a service to verify your required documents, calculate government guidelines, and track registration steps.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {Object.values(SERVICES_DATA).map((service) => {
            const isActive = activeTab === service.id;
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => selectService(service.id)}
                className={`flex items-center gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isActive 
                    ? "bg-[#0b0f1d] text-white border-[#0b0f1d] shadow-lg" 
                    : "bg-white text-muted-foreground border-border hover:bg-slate-50 hover:text-[#0b0f1d]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#635bff]" : "text-muted-foreground"}`} />
                {service.title}
              </button>
            );
          })}
        </div>

        {/* Main Assistant Panel */}
        <div className="bg-white border border-border shadow-xl overflow-hidden min-h-[500px]">
          {/* Top Bar with Dynamic Progress Tracker */}
          <div className="bg-[#0b0f1d] text-white px-8 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#635bff]/25">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#635bff] font-bold">Currently Inspecting</span>
              <h3 className="text-lg font-bold flex items-center gap-2 mt-0.5">
                <currentService.icon className="w-5 h-5 text-[#635bff]" />
                {currentService.title} Guide
              </h3>
            </div>
            
            {/* Checklist progress tracker */}
            <div className="w-full md:w-64">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-1">
                <span className="text-[#635bff]">Document Readiness</span>
                <span>{progressPercent}% Ready ({checkedCount}/{serviceDocs.length})</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-[#635bff]" 
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* 1. INTERACTIVE CHECKLIST */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-sm font-bold text-[#0b0f1d] uppercase tracking-wider">
                  <FileText className="w-4.5 h-4.5 text-[#635bff]" />
                  <span>1. Required Documents</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  Mark off the documents you have ready. We will verify original authenticity checks during registration.
                </p>
                <div className="space-y-3.5">
                  {currentService.docs.map((doc) => {
                    const isChecked = !!checkedDocs[doc];
                    return (
                      <label 
                        key={doc} 
                        className={`flex items-start gap-3 p-3 border transition-colors cursor-pointer select-none ${
                          isChecked 
                            ? "bg-slate-50 border-[#635bff]/40 text-[#0b0f1d]" 
                            : "border-border hover:bg-slate-50/50 text-muted-foreground"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(doc)}
                          className="mt-0.5 h-4 w-4 rounded border-border text-[#635bff] focus:ring-[#635bff] cursor-pointer"
                        />
                        <span className="text-xs leading-normal">{doc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {progressPercent === 100 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-3 bg-[#635bff]/5 border border-[#635bff]/25 flex items-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5 text-[#635bff] shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider text-[#635bff] font-bold">All Documents Checklist Checked!</span>
                </motion.div>
              )}
            </div>

            {/* 2. REGISTRATION TIMELINE */}
            <div className="p-8 bg-slate-50/40">
              <div className="flex items-center gap-2 mb-6 text-sm font-bold text-[#0b0f1d] uppercase tracking-wider">
                <HelpCircle className="w-4.5 h-4.5 text-[#635bff]" />
                <span>2. Step-by-Step Registry Flow</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                Our team handles the heavy lifting, keeping you informed at every key milestone.
              </p>
              
              <div className="relative pl-6 border-l border-border space-y-6">
                {currentService.timeline.map((item) => (
                  <div key={item.step} className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[35px] top-0.5 w-[19px] h-[19px] rounded-full bg-white border border-[#635bff] flex items-center justify-center font-sans text-[9px] font-bold text-[#635bff] shadow-sm">
                      {item.step}
                    </div>
                    
                    <h4 className="text-xs font-bold text-[#0b0f1d] mb-1">{item.label}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. TN FEE GUIDELINES & DRAFTING */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-sm font-bold text-[#0b0f1d] uppercase tracking-wider">
                  <GovernmentIcon className="w-4.5 h-4.5 text-[#635bff]" />
                  <span>3. Stamp Duty & Fees</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  Calculated according to current Tamil Nadu Registration Department rules.
                </p>

                <div className="space-y-5">
                  <div className="p-4 bg-slate-50 border border-border">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Government Rates</span>
                    <p className="text-xs font-bold text-[#0b0f1d] mt-1 leading-normal">{currentService.fees.government}</p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-border">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Drafting Charges</span>
                    <p className="text-xs font-bold text-[#0b0f1d] mt-1 leading-normal">{currentService.fees.drafting}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-[10px] text-muted-foreground leading-normal mb-5 italic">
                  * Note: {currentService.fees.note}
                </p>
                <Link
                  href={`/book-consultation?service=${currentService.id}`}
                  className="w-full inline-flex items-center justify-center bg-[#635bff] text-white py-3.5 px-4 font-bold text-xs uppercase tracking-wider hover:bg-[#4f46e5] transition-all shadow-md gap-2"
                  data-testid="assistant-cta-button"
                >
                  Consult on {currentService.title} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
