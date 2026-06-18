import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "Property Registration",
  "Marriage Registration",
  "Trust Registration",
  "Society Registration",
  "Encumbrance Certificate",
  "Certified Copy Services",
  "Legal Documentation",
  "General Enquiry",
];

const HOURS = [
  { day: "Monday – Friday", time: "9:30 AM – 6:30 PM" },
  { day: "Saturday", time: "9:30 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  const onSubmit = (_data: FormValues) => {
    setTimeout(() => setSubmitted(true), 500);
  };

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
            <span className="text-[#D4AF37]">Contact</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Reach Us</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Let's Start Your<br /><span className="text-[#D4AF37] italic">Conversation</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">Reach us by phone, WhatsApp, email, or visit us in Madurai. We respond to every enquiry within one business hour.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background -mt-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Send a Message</p>
                <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">How Can We Help?</h2>

                {submitted ? (
                  <div className="border-l-4 border-[#D4AF37] bg-[#D4AF37]/5 p-10 text-center">
                    <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-primary mb-3">Message Received</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">Thank you for reaching out. Our team will contact you within one business hour to discuss your requirements.</p>
                    <button onClick={() => { setSubmitted(false); form.reset(); }} className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider" data-testid="button-send-another">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider font-semibold">Full Name *</FormLabel>
                            <FormControl><Input {...field} placeholder="Your full name" className="border-border focus:border-[#D4AF37] rounded-none h-12" data-testid="input-contact-name" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider font-semibold">Phone Number *</FormLabel>
                            <FormControl><Input {...field} placeholder="+91 98765 43210" className="border-border focus:border-[#D4AF37] rounded-none h-12" data-testid="input-contact-phone" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider font-semibold">Email Address *</FormLabel>
                          <FormControl><Input {...field} placeholder="your@email.com" className="border-border focus:border-[#D4AF37] rounded-none h-12" data-testid="input-contact-email" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="service" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider font-semibold">Service Required *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-border rounded-none h-12" data-testid="select-contact-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider font-semibold">Your Message *</FormLabel>
                          <FormControl><Textarea {...field} placeholder="Briefly describe your requirements..." rows={5} className="border-border focus:border-[#D4AF37] rounded-none resize-none" data-testid="textarea-contact-message" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <button type="submit" className="w-full bg-[#D4AF37] text-[#0A2540] py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all flex items-center justify-center gap-2" data-testid="button-contact-submit">
                        Send Message <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </Form>
                )}
              </motion.div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                {/* Contact info cards */}
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: Mail, label: "Email", value: "contact@abdhanam.com", href: "mailto:contact@abdhanam.com" },
                  { icon: MapPin, label: "Office Address", value: "123, Anna Salai, Madurai, Tamil Nadu 625001", href: "#map" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex gap-5 p-6 border border-border hover:border-[#D4AF37] transition-colors group" data-testid={`link-contact-${item.label.toLowerCase()}`}>
                    <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                      <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#0A2540] transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">{item.label}</div>
                      <div className="text-primary font-medium leading-snug">{item.value}</div>
                    </div>
                  </a>
                ))}

                {/* WhatsApp */}
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#1ebd5a] transition-all" data-testid="button-whatsapp-contact">
                  <WhatsAppIcon className="w-5 h-5" size={20} /> Chat on WhatsApp
                </a>

                {/* Hours */}
                <div className="border border-border p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">Business Hours</span>
                  </div>
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-2.5 border-b border-border last:border-0">
                      <span className="text-sm text-muted-foreground">{h.day}</span>
                      <span className={`text-sm font-medium ${h.time === "Closed" ? "text-destructive" : "text-primary"}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map */}
          <div id="map" className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19565576281!2d78.04639148281313!3d9.917856793138814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b118c53a%3A0x3406e9c390a3098c!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A.B. Dhanam Office Location"
              className="border border-border"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
