import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  company: z.string().max(100).optional(),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().optional(),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, "Please provide more details (at least 10 characters)").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const GetStarted = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      propertyType: "",
      budget: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-background rounded-lg shadow-lg p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your quote request. Our team will review your information and contact you within 24 hours.
            </p>
            <Button size="lg" onClick={() => window.location.href = "/"}>
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Get Started</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-center">
            Tell us about your needs and receive a personalized quote from our expert team
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+255 123 456 789" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interest *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="real-estate-brokerage">Real Estate - Brokerage & Sales</SelectItem>
                          <SelectItem value="real-estate-land">Real Estate - Land Acquisition</SelectItem>
                          <SelectItem value="real-estate-valuation">Real Estate - Valuation & Appraisal</SelectItem>
                          <SelectItem value="real-estate-management">Real Estate - Property Management</SelectItem>
                          <SelectItem value="real-estate-development">Real Estate - Development Advisory</SelectItem>
                          <SelectItem value="real-estate-leasing">Real Estate - Leasing</SelectItem>
                          <SelectItem value="mining-land">Mining - Land Sourcing</SelectItem>
                          <SelectItem value="mining-ventures">Mining - Joint Ventures</SelectItem>
                          <SelectItem value="mining-compliance">Mining - Compliance Advisory</SelectItem>
                          <SelectItem value="mining-offtake">Mining - Offtake & Financing</SelectItem>
                          <SelectItem value="mining-feasibility">Mining - Site Feasibility</SelectItem>
                          <SelectItem value="hospitality-sales">Hospitality - Hotel & Resort Sales</SelectItem>
                          <SelectItem value="hospitality-management">Hospitality - Asset Management</SelectItem>
                          <SelectItem value="hospitality-operations">Hospitality - Operational Advisory</SelectItem>
                          <SelectItem value="hospitality-investment">Hospitality - Investment & Development</SelectItem>
                          <SelectItem value="hospitality-leasing">Hospitality - Leasing & Partnerships</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Type (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                            <SelectItem value="hospitality">Hospitality</SelectItem>
                            <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-500k">Under $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1M</SelectItem>
                            <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                            <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                            <SelectItem value="over-10m">Over $10M</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Location (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dar-es-salaam">Dar es Salaam, Tanzania</SelectItem>
                          <SelectItem value="zanzibar">Zanzibar, Tanzania</SelectItem>
                          <SelectItem value="arusha">Arusha, Tanzania</SelectItem>
                          <SelectItem value="nairobi">Nairobi, Kenya</SelectItem>
                          <SelectItem value="kigali">Kigali, Rwanda</SelectItem>
                          <SelectItem value="other">Other Location</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your project, timeline, and specific requirements..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Get Quote
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    By submitting this form, you agree to our terms of service and privacy policy. We'll contact you within 24 hours.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
