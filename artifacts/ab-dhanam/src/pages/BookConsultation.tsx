import { Layout } from "@/components/layout/Layout";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  serviceType: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

export default function BookConsultation() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", serviceType: "", preferredDate: "", preferredTime: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLocation("/thank-you");
    }, 1500);
  }

  return (
    <Layout>
      <div className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-accent">Book a Consultation</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Schedule a dedicated session with our legal experts to discuss your requirements.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-12">
            <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-muted'}`} />
            <div className="px-4 font-bold text-sm">Step {step} of 2</div>
            <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-muted'}`} />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-serif font-bold border-b pb-4">Personal Details</h2>
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+91 98765 43210" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="john@example.com" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <Button type="button" onClick={() => form.trigger(['name', 'phone', 'email']).then(valid => valid && setStep(2))} className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                    Next Step &rarr;
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8">
                  <h2 className="text-2xl font-serif font-bold border-b pb-4">Consultation Details</h2>
                  
                  <FormField control={form.control} name="serviceType" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select a service" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="property">Property Registration</SelectItem>
                          <SelectItem value="marriage">Marriage Registration</SelectItem>
                          <SelectItem value="trust">Trust Registration</SelectItem>
                          <SelectItem value="society">Society Registration</SelectItem>
                          <SelectItem value="other">Other Documentation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="preferredDate" render={({ field }) => (
                      <FormItem><FormLabel>Preferred Date</FormLabel><FormControl><Input type="date" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="preferredTime" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12"><SelectValue placeholder="Select a time" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (10 AM - 1 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (2 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Additional Notes</FormLabel><FormControl><Textarea placeholder="Briefly describe your requirements..." className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />

                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-14 px-8">Back</Button>
                    <Button type="submit" className="flex-1 h-14 text-lg bg-accent text-primary hover:bg-accent/90" disabled={isSubmitting}>
                      {isSubmitting ? "Confirming Booking..." : "Confirm Booking"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
