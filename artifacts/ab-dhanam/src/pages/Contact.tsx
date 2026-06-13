import { Layout } from "@/components/layout/Layout";
import { Link, useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(10, "Please provide more details"),
});

export default function Contact() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLocation("/thank-you");
    }, 1000);
  }

  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Get in touch with A.B. Dhanam for expert legal consultation.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+91 98765 43210" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="service" render={({ field }) => (
                  <FormItem><FormLabel>Service Required</FormLabel><FormControl><Input placeholder="e.g. Property Registration" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" className="w-full bg-accent text-primary hover:bg-accent/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-muted p-8 rounded-xl h-fit">
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Office Address</h4>
                  <p className="text-muted-foreground">123, Anna Salai, Chennai,<br/>Tamil Nadu 600002</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Phone Numbers</h4>
                  <p className="text-muted-foreground">+91 98765 43210<br/>+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="text-muted-foreground">contact@abdhanam.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Saturday<br/>9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
