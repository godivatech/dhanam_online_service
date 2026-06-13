import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

export default function FAQ() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Clear answers to your legal documentation queries.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-8">
          {[
            { q: "What is an Encumbrance Certificate (EC)?", a: "An EC is a legal document that assures that the property in question is free from any legal or monetary liabilities such as uncleared loans or uncleared mortgages." },
            { q: "How long does property registration take?", a: "Typically, if all documents are in order, the actual registration takes only a day at the Sub-Registrar's office, followed by the delivery of the registered document within a week." },
            { q: "Is physical presence mandatory for marriage registration?", a: "Yes, both the bride and groom, along with three witnesses, must be physically present at the Registrar's office for the registration." }
          ].map((faq, i) => (
            <div key={i} className="border-b pb-6">
              <h3 className="text-xl font-bold font-serif mb-3">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
