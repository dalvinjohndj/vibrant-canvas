import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Home, Briefcase, Key, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Brokerage = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/real-estate" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Real Estate Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Brokerage & Sales</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive brokerage services for residential, commercial, luxury, and off-market properties across East Africa
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Residential Sales</CardTitle>
                <CardDescription>Premium homes, villas, and apartments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Luxury estates and waterfront properties</li>
                  <li>• Urban apartments and condominiums</li>
                  <li>• Gated community residences</li>
                  <li>• Investment rental properties</li>
                  <li>• Vacation and second homes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Commercial Sales</CardTitle>
                <CardDescription>Office buildings, retail, and mixed-use</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Office towers and business parks</li>
                  <li>• Shopping centers and retail spaces</li>
                  <li>• Industrial warehouses and facilities</li>
                  <li>• Mixed-use developments</li>
                  <li>• Special-purpose commercial properties</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Luxury & Off-Market</CardTitle>
                <CardDescription>Exclusive high-end property transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Ultra-luxury estates and penthouses</li>
                  <li>• Private islands and resort properties</li>
                  <li>• Discreet off-market transactions</li>
                  <li>• High-net-worth client services</li>
                  <li>• Confidential buyer representation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Brokerage Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Property Evaluation & Listing</h3>
                    <p className="text-muted-foreground">
                      Comprehensive property assessment, professional photography, and strategic pricing to maximize market appeal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Marketing & Exposure</h3>
                    <p className="text-muted-foreground">
                      Multi-channel marketing campaigns, virtual tours, targeted outreach to qualified buyers, and international network promotion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Negotiation & Due Diligence</h3>
                    <p className="text-muted-foreground">
                      Expert negotiation on your behalf, coordination of inspections, title searches, and all legal documentation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Closing Support</h3>
                    <p className="text-muted-foreground">
                      Full transaction management from offer acceptance through final closing, ensuring smooth handover and post-sale support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Brokerage</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Market Expertise</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Deep knowledge of East African real estate markets, pricing trends, and investment opportunities across all sectors.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Trust & Transparency</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Licensed professionals, ethical practices, and transparent communication throughout every transaction.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Key className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">End-to-End Service</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      From initial consultation to post-closing support, we handle every detail to ensure a seamless experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Buy or Sell?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with our experienced brokers to discuss your property goals and explore available opportunities.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Contact Our Brokerage Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brokerage;
