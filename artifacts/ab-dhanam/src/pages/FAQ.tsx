import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

const FAQS: Record<string, { q: string; a: string }[]> = {
  "Property Registration": [
    { q: "What is the process for registering a property in Tamil Nadu?", a: "Property registration in Tamil Nadu involves: (1) Obtaining an Encumbrance Certificate to verify clear title, (2) Paying the applicable stamp duty at a government treasury or online, (3) Preparing the sale deed through a qualified legal consultant, (4) Booking an appointment at the relevant Sub-Registrar office, (5) Appearing with all parties and witnesses on the appointed date, and (6) Completing biometric verification. A.B. Dhanam handles every one of these steps on your behalf." },
    { q: "What documents are required for property registration?", a: "The essential documents include: the original title deed or mother deed, previous property tax receipts, Encumbrance Certificate (minimum 13 years), identity proof of all parties (Aadhaar, PAN), passport-size photographs, the sale deed draft, stamp duty payment receipt, and NOC from the housing society if applicable. Our team will review your specific documents and prepare a complete checklist tailored to your situation." },
    { q: "How is stamp duty calculated in Tamil Nadu?", a: "Stamp duty in Tamil Nadu is calculated at 7% of the property's guideline value or market value, whichever is higher. Registration charges are an additional 4%. For women buyers, there is a 1% concession on stamp duty. The guideline value is set by the state government and varies by locality. We provide a precise stamp duty calculation as part of our initial consultation at no charge." },
    { q: "What is the difference between a Sale Deed and an Agreement to Sell?", a: "An Agreement to Sell (also called Sale Agreement or Agreement of Sale) is a promise to transfer property in the future upon fulfilment of certain conditions. It does not transfer ownership. A Sale Deed is the actual legal document that transfers ownership from seller to buyer and must be registered at the Sub-Registrar office. Until the Sale Deed is registered, the legal title remains with the seller — this distinction has significant legal consequences." },
    { q: "How long does property registration take in Tamil Nadu?", a: "The registration process at the Sub-Registrar office typically takes 30 minutes to 3 hours on the day of registration, depending on document volume and office workload. However, the complete end-to-end process — including EC verification, stamp duty payment, deed preparation, and appointment booking — takes 3 to 14 days, depending on the complexity of the transaction. With A.B. Dhanam managing the process, we target the minimum possible timeline." },
    { q: "Can property be registered online in Tamil Nadu?", a: "As of 2024, Tamil Nadu requires physical presence at the Sub-Registrar office for the actual registration, including biometric verification. However, appointment booking, stamp duty payment, and some document submissions can be done through the TNREGINET portal. Our team handles the online components and accompanies you for the in-person portion, minimising the time you spend at the government office." },
  ],
  "Marriage Registration": [
    { q: "Is marriage registration mandatory in Tamil Nadu?", a: "While marriage registration is not mandatory for the marriage to be legally valid under personal laws in India, a registered marriage certificate is essential for numerous official purposes — passport applications, visa applications, property inheritance, insurance claims, and bank account joint-holding. It is strongly advisable to register your marriage, and the process is straightforward when handled professionally." },
    { q: "What are the different acts under which marriage can be registered?", a: "In Tamil Nadu, marriages can be registered under: (1) Hindu Marriage Act, 1955 — for Hindus, Buddhists, Jains, and Sikhs; (2) Indian Christian Marriage Act, 1872 — for Christians; (3) Muslim Personal Law — Muslim marriages are registered as Nikahnama; (4) Special Marriage Act, 1954 — for inter-religious couples or those who wish to marry regardless of religion, requiring a 30-day notice period." },
    { q: "What documents are required for marriage registration?", a: "The required documents include: completed application form, proof of age (birth certificate, 10th mark sheet, or passport) for both parties, proof of address for both parties (Aadhaar card preferred), passport-size photographs of bride and groom (4 each), wedding invitation card, marriage photograph, and identity proofs of three witnesses. For Special Marriage Act registration, additional documentation related to the notice period applies." },
    { q: "How long does marriage registration take?", a: "Under the Hindu Marriage Act and Indian Christian Marriage Act, registration is typically completed on the day of the appointment, assuming all documents are in order. Under the Special Marriage Act, there is a mandatory 30-day notice period during which objections can be raised, making the minimum timeline 31 days from notice submission. A.B. Dhanam prepares all documents in advance to ensure no delays on your appointment day." },
    { q: "Can we register a marriage that took place years ago?", a: "Yes. Tamil Nadu law allows late registration of marriages that occurred in the past. You will need to provide evidence of the marriage — such as wedding photographs, invitation cards, temple/church/mosque records, and affidavits from witnesses. The process involves additional documentation but is absolutely achievable. We have successfully registered marriages that took place decades ago." },
  ],
  "Trust Registration": [
    { q: "What is the difference between a private trust and a public trust?", a: "A private trust benefits specific, defined individuals (such as family members), while a public trust benefits an indefinite or general class of people (such as the public, poor, or students). Public charitable trusts — set up for education, medical relief, poverty alleviation, or religious purposes — are eligible for significant income tax exemptions under Sections 11 and 12 of the Income Tax Act. The registration process and requirements differ significantly between the two." },
    { q: "What documents are required to register a trust?", a: "Documents required for trust registration include: Trust Deed (prepared by our legal team), identity proof and address proof of all trustees (Aadhaar + PAN), passport-size photographs of trustees, proof of registered office (rental agreement + NOC from owner), and any specific sectoral approvals required. The Trust Deed is the most critical document — it defines the trust's objects, powers, and governance, and must be drafted with precision." },
    { q: "What are the tax benefits of a registered charitable trust?", a: "A registered public charitable trust can apply for exemption under Section 12A and Section 80G of the Income Tax Act. Section 12A exemption means the trust's income applied to charitable purposes is not taxable. Section 80G registration allows donors to claim 50% of their donation as a tax deduction, making your organisation significantly more attractive to corporate and individual donors." },
    { q: "How many trustees are required to form a trust?", a: "A minimum of two trustees is required to form a trust under the Indian Trusts Act, 1882. There is no maximum limit, though 3 to 7 is practical for governance. At least one trustee must be a resident of India. We advise on the ideal trustee structure based on your trust's objectives, activity scale, and governance requirements during our initial consultation." },
    { q: "How long does trust registration take in Tamil Nadu?", a: "The Trust Deed must be executed on stamp paper of appropriate value and registered at the Sub-Registrar office. The registration itself typically takes one to two working days. However, preparing the Trust Deed correctly — including all legal provisions, objects, powers, and dispute resolution mechanisms — takes 5 to 10 working days. A.B. Dhanam manages the complete process from deed drafting to registration." },
  ],
  "Society Registration": [
    { q: "Under which law are societies registered in Tamil Nadu?", a: "Societies in Tamil Nadu are registered under the Tamil Nadu Societies Registration Act, 1975 (and its amendments). This Act governs the registration and functioning of literary, scientific, charitable, and other societies in the state. Registration under this Act gives the society legal entity status, allowing it to hold property, enter into contracts, and sue or be sued in its own name." },
    { q: "What is the minimum number of members required to register a society?", a: "A minimum of seven members (individuals) is required to form and register a society under the Tamil Nadu Societies Registration Act. These founding members are designated as the Governing Body. At least one member must be a resident of Tamil Nadu. We assist in structuring the founding membership and drafting the Memorandum of Association to reflect the society's governance correctly." },
    { q: "What documents are required for society registration?", a: "Required documents include: Memorandum of Association (detailing the society's name, objects, and registered address), Rules and Bye-Laws (governing the society's functioning), list of founding members with their designations, identity proof and address proof of all members (Aadhaar + PAN), proof of registered office, and minutes of the inaugural meeting. Our team drafts all formation documents as part of our service." },
    { q: "How is a society different from a trust?", a: "A society is a democratic, member-driven organisation governed by its members through an elected committee. Its governance document is the Memorandum of Association and Bye-Laws. A trust is managed by trustees defined at formation, with governance determined by the Trust Deed. Societies are better suited for organisations with larger, active memberships (welfare organisations, clubs, associations), while trusts are better for founder-controlled charitable activities." },
    { q: "Can a registered society receive foreign funding?", a: "Yes, but only after obtaining FCRA (Foreign Contribution Regulation Act) registration from the Government of India's Ministry of Home Affairs. FCRA registration is separate from society registration and requires the society to have been in operation for at least three years and have demonstrable charitable activity. We advise on FCRA eligibility and the application process as part of our post-registration consultation." },
  ],
  "General": [
    { q: "What are your office hours?", a: "A.B. Dhanam Online Services operates Monday through Saturday, 9:30 AM to 6:30 PM. We are available via WhatsApp outside these hours for urgent queries. Our office is closed on Sundays and public holidays, though we often respond to WhatsApp messages on these days as well." },
    { q: "Do you offer home visits or consultations outside your office?", a: "Yes, for clients who are unable to visit our office due to health, mobility, or scheduling constraints, we offer home visit consultations in Chennai and its suburbs. For clients in other districts, we conduct detailed video consultations and coordinate all documentation via courier and digital submission where legally permissible. Please contact us to arrange an alternative consultation format." },
    { q: "Are your fees fixed, or do they vary?", a: "Our professional fees are quoted upfront and in full before any work begins — there are no hidden charges, no surcharges, and no fees that emerge at the end of the process. Government charges (stamp duty, registration fees) are paid directly by the client to the government; we collect only our professional service fee as quoted. Our pricing is transparent and competitive for the quality of service delivered." },
    { q: "How do I get started?", a: "The easiest way to begin is to book a free consultation — either by calling us directly, sending a WhatsApp message, or using the Book Consultation form on our website. During the consultation, we will assess your specific situation, explain the exact process and documents required, and provide a complete fee and timeline estimate. There is no obligation and no charge for the initial consultation." },
    { q: "Do you handle urgent registrations?", a: "Yes. We understand that property transactions and life events don't always follow convenient timelines. When clients face urgent requirements — court orders, visa applications, property sales with tight closing dates — we prioritise accordingly and mobilise our resources to achieve the fastest possible outcome within legal constraints. Please communicate the urgency upfront so we can plan your service accordingly." },
  ],
};

const CATEGORY_KEYS = Object.keys(FAQS);

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-serif text-lg font-semibold text-primary group-hover:text-[#0F4C81] transition-colors pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed border-l-4 border-[#D4AF37] pl-6 ml-1">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_KEYS[0]);
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? Object.values(FAQS).flat().filter((f) => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))
    : FAQS[activeCategory] || [];

  return (
    <Layout>
      <section
        className="relative bg-[#0A2540] text-white py-32 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", paddingBottom: "6vw" }}
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">FAQ</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Frequently Asked</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Questions &<br /><span className="text-[#D4AF37] italic">Answers</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">Everything you need to know about registration and documentation services in Tamil Nadu.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search all questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-border pl-14 pr-6 py-5 text-base focus:outline-none focus:border-[#D4AF37] transition-colors bg-background"
              data-testid="input-faq-search"
            />
          </div>

          {!search.trim() && (
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {CATEGORY_KEYS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${activeCategory === cat ? "bg-[#D4AF37] text-[#0A2540]" : "border border-border text-muted-foreground hover:border-[#D4AF37] hover:text-[#D4AF37]"}`}
                  data-testid={`faq-cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto border border-border divide-y-0">
            {search.trim() && filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16">No results found for "{search}". Try different keywords or <Link href="/contact" className="text-[#D4AF37] font-medium">contact us directly</Link>.</p>
            )}
            {filtered.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Still have questions? We are happy to help.</p>
            <Link href="/book-consultation" className="inline-flex items-center bg-[#D4AF37] text-[#0A2540] px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all" data-testid="button-cta-faq">
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
