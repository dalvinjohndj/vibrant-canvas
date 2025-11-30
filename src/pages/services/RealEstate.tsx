import { Building2, Key, FileCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const RealEstate = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-5xl font-bold mb-6">Real Estate Services</h1>
          <p className="text-xl max-w-3xl opacity-90">
            End-to-end support for all your property needs, from acquisition to asset management
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Brokerage & Sales</CardTitle>
                <CardDescription>Professional representation for all property types</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Comprehensive listing presentation and marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Expert negotiation strategies for best outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Complete closing support and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Detailed market analysis and pricing strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Land Acquisition</CardTitle>
                <CardDescription>Strategic land sourcing and due diligence</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Site identification and sourcing services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Comprehensive title verification and checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Zoning analysis and permit assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Full transaction coordination and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Valuation & Appraisal</CardTitle>
                <CardDescription>Accurate property valuations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Professional market valuation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Tax valuation reports and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Asset valuation for financing purposes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Investment analysis and ROI projections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-secondary/30 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Real Estate Services?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Market Expertise</h3>
                <p className="text-muted-foreground">
                  Our team brings deep knowledge of Southern African real estate markets, ensuring you make informed decisions backed by comprehensive market intelligence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Full-Service Support</h3>
                <p className="text-muted-foreground">
                  From initial search to final closing, we provide end-to-end support, managing every detail to ensure smooth transactions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Network Access</h3>
                <p className="text-muted-foreground">
                  Leverage our extensive network of developers, investors, and industry professionals to access off-market opportunities and exclusive listings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Value Creation</h3>
                <p className="text-muted-foreground">
                  We focus on identifying properties with strong appreciation potential and helping you maximize returns on your real estate investments.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Real Estate Journey?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Contact our real estate team today to discuss your property needs
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-dark">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
