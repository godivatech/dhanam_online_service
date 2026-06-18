import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { ArrowRight, ArrowLeft, ChevronRight, CheckCircle, User, Calendar, MessageSquare } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SERVICES = [
  "Property Registration", "Marriage Registration", "Trust Registration",
  "Society Registration", "Encumbrance Certificate", "Certified Copy Services",
  "Legal Documentation", "General Enquiry",
];

const TIMES = ["9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"];

const step1Schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
});
const step2Schema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
});
const step3Schema = z.object({
  message: z.string().min(10, "Please describe your requirements"),
});

type Step1 = z.infer<typeof step1Schema>;
type Step2 = z.infer<typeof step2Schema>;
type Step3 = z.infer<typeof step3Schema>;

const STEPS = [
  { num: 1, label: "Personal Info", icon: User },
  { num: 2, label: "Appointment", icon: Calendar },
  { num: 3, label: "Your Query", icon: MessageSquare },
];

export default function BookConsultation() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<Step1 & Step2 & Step3>>({});

  const form1 = useForm<Step1>({ resolver: zodResolver(step1Schema), defaultValues: { name: "", phone: "", email: "" } });
  const form2 = useForm<Step2>({ resolver: zodResolver(step2Schema), defaultValues: { service: "", date: "", time: "" } });
  const form3 = useForm<Step3>({ resolver: zodResolver(step3Schema), defaultValues: { message: "" } });

  const onStep1 = (data: Step1) => { setFormData((p) => ({ ...p, ...data })); setStep(2); };
  const onStep2 = (data: Step2) => { setFormData((p) => ({ ...p, ...data })); setStep(3); };
  const onStep3 = (data: Step3) => { setFormData((p) => ({ ...p, ...data })); setSubmitted(true); };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center bg-background">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-lg px-6">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Consultation Booked</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Thank you, <strong>{formData.name}</strong>. Your consultation request has been received. Our team will call you at <strong>{formData.phone}</strong> to confirm your appointment.
            </p>
            <div className="border-l-4 border-[#D4AF37] bg-muted/30 p-6 text-left mb-8">
              <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-3">Appointment Summary</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><strong className="text-foreground">Service:</strong> {formData.service}</div>
                <div><strong className="text-foreground">Date:</strong> {formData.date}</div>
                <div><strong className="text-foreground">Time:</strong> {formData.time}</div>
              </div>
            </div>
            <Link href="/" className="inline-flex items-center bg-[#D4AF37] text-[#0A2540] px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all" data-testid="button-back-home">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section
        className="relative bg-[#0A2540] text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-10 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#D4AF37]">Book Consultation</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">Free Consultation</p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-8" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4">
              Book Your Free<br /><span className="text-[#D4AF37] italic">Consultation</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {/* Step indicator */}
            <div className="flex items-center mb-16">
              {STEPS.map((s, i) => (
                <div key={s.num} className="flex items-center flex-1 last:flex-none">
                  <div className={`flex items-center gap-3 ${step >= s.num ? "text-[#D4AF37]" : "text-muted-foreground"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step > s.num ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A2540]" : step === s.num ? "border-[#D4AF37] text-[#D4AF37]" : "border-border text-muted-foreground"}`}>
                      {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">{s.label}</span>
                  </div>
                  {i < STEPS.length - 1 && <div className={`flex-1 h-px mx-4 ${step > s.num ? "bg-[#D4AF37]" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Personal Information</h2>
                <Form {...form1}>
                  <form onSubmit={form1.handleSubmit(onStep1)} className="space-y-6">
                    <FormField control={form1.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-semibold">Full Name *</FormLabel>
                        <FormControl><Input {...field} placeholder="Your full name" className="border-border rounded-none h-12" data-testid="input-book-name" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form1.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-semibold">Phone Number *</FormLabel>
                        <FormControl><Input {...field} placeholder="+91 98765 43210" className="border-border rounded-none h-12" data-testid="input-book-phone" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form1.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-semibold">Email Address *</FormLabel>
                        <FormControl><Input {...field} placeholder="your@email.com" className="border-border rounded-none h-12" data-testid="input-book-email" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <button type="submit" className="w-full bg-[#D4AF37] text-[#0A2540] py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all flex items-center justify-center gap-2" data-testid="button-step1-next">
                      Continue to Appointment <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Schedule Your Appointment</h2>
                <Form {...form2}>
                  <form onSubmit={form2.handleSubmit(onStep2)} className="space-y-6">
                    <FormField control={form2.control} name="service" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-semibold">Service Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-border rounded-none h-12" data-testid="select-book-service">
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
                    <FormField control={form2.control} name="date" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-semibold">Preferred Date *</FormLabel>
                        <FormControl><Input {...field} type="date" min={today} className="border-border rounded-none h-12" data-testid="input-book-date" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form2.control} name="time" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-semibold">Preferred Time *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-border rounded-none h-12" data-testid="select-book-time">
                              <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {TIMES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="flex-1 border border-border py-4 font-bold text-sm uppercase tracking-wider hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2" data-testid="button-step2-back">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button type="submit" className="flex-1 bg-[#D4AF37] text-[#0A2540] py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all flex items-center justify-center gap-2" data-testid="button-step2-next">
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Describe Your Query</h2>
                <Form {...form3}>
                  <form onSubmit={form3.handleSubmit(onStep3)} className="space-y-6">
                    <FormField control={form3.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider font-semibold">Your Requirements *</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Please describe your situation and what help you need. The more detail you provide, the better prepared our experts will be for your consultation..." rows={8} className="border-border rounded-none resize-none" data-testid="textarea-book-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(2)} className="flex-1 border border-border py-4 font-bold text-sm uppercase tracking-wider hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2" data-testid="button-step3-back">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button type="submit" className="flex-1 bg-[#D4AF37] text-[#0A2540] py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c9a630] transition-all flex items-center justify-center gap-2" data-testid="button-step3-submit">
                        Book Consultation <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
