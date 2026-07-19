"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  mayContact: z.boolean().optional(),
  phone: z.string().optional(),
  bestTimeToCall: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call to a backend service like Resend or Formspree
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Submitted Data:", data);
    setIsSuccess(true);
    setIsSubmitting(false);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputClass = "flex h-12 w-full rounded-md border border-primary-light bg-primary/10 px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors";

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-neutral mb-12 max-w-md">
              Whether you're looking for an industrial wastewater solution or a compact purification system, our team is ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary-light/30">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Our Office</h3>
                  <p className="text-neutral">2021 Bukit Batok St 23, #04-224<br/>Bukit Batok Industrial Estate Park A<br/>Singapore 659526</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary-light/30">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-neutral">6909 3588<br/><span className="text-sm">Weekdays 8:30am - 5:30pm</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary-light/30">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                  <p className="text-neutral flex flex-col gap-2">
                    <a href="mailto:Bashir@liquinex.com" className="hover:text-accent transition-colors">
                      Bashir@liquinex.com
                    </a>
                    <a href="mailto:Riaz@liquinex.com" className="hover:text-accent transition-colors">
                      Riaz@liquinex.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-primary/5">
            <CardContent className="p-8">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-accent" />
                  <h3 className="font-heading text-2xl font-bold">Message Sent!</h3>
                  <p className="text-neutral">Thank you for your enquiry. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <input {...register("name")} className={inputClass} placeholder="John Doe" />
                      {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <input {...register("email")} type="email" className={inputClass} placeholder="john@example.com" />
                      {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enquiry Type *</label>
                    <select {...register("enquiryType")} className={inputClass}>
                      <option value="">Select a category...</option>
                      <option value="suitcase">Suitcase</option>
                      <option value="industrial">Industrial Water Treatment</option>
                      <option value="humanitarian">Humanitarian Systems</option>
                      <option value="municipal">Municipal Projects</option>
                      <option value="oil-gas">Oil & Gas Produced Water</option>
                      <option value="product">Product Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.enquiryType && <p className="text-red-400 text-xs">{errors.enquiryType.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description *</label>
                    <textarea 
                      {...register("description")} 
                      className={`${inputClass} min-h-[120px] py-3`} 
                      placeholder="Let us know!"
                    />
                    {errors.description && <p className="text-red-400 text-xs">{errors.description.message}</p>}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-primary-light/20">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        {...register("mayContact")} 
                        id="mayContact"
                        className="w-5 h-5 rounded border-primary-light text-accent focus:ring-accent"
                      />
                      <label htmlFor="mayContact" className="text-sm font-medium cursor-pointer">May We Contact You?</label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <input {...register("phone")} className={inputClass} placeholder="+65 1234 5678" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Best Time to Call</label>
                        <input {...register("bestTimeToCall")} className={inputClass} placeholder="e.g. Morning, 2pm - 4pm" />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Map */}
      <section className="h-96 md:h-[30rem] w-full bg-primary/20 border-t border-primary-light/30 relative">
        <iframe
          src="https://maps.google.com/maps?q=2021%20Bukit%20Batok%20Street%2023,%20Singapore%20659526%20(Liquinex%20Group)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </div>
  );
}
