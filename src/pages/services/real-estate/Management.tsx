import { Link } from "react-router-dom";
import { ArrowLeft, Users, Wrench, DollarSign, FileCheck, Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Management = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/real-estate" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Real Estate Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Property & Asset Management</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive management services for tenant relations, maintenance, and income optimization
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Tenant Management</CardTitle>
                <CardDescription>Complete tenant lifecycle services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Tenant screening and selection</li>
                  <li>• Lease agreement preparation</li>
                  <li>• Rent collection and accounting</li>
                  <li>• Tenant communication and relations</li>
                  <li>• Lease renewals and negotiations</li>
                  <li>• Eviction management when necessary</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Maintenance & Repairs</CardTitle>
                <CardDescription>Property upkeep and improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Preventive maintenance programs</li>
                  <li>• 24/7 emergency repair services</li>
                  <li>• Vendor management and coordination</li>
                  <li>• Property inspections and reports</li>
                  <li>• Capital improvement planning</li>
                  <li>• Quality control and oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Financial Management</CardTitle>
                <CardDescription>Revenue optimization and reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Monthly financial statements</li>
                  <li>• Budget preparation and management</li>
                  <li>• Operating expense optimization</li>
                  <li>• Cash flow analysis and forecasting</li>
                  <li>• Tax documentation support</li>
                  <li>• Investment performance tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Management Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Home className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Residential Property Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Full-service management for single-family homes, apartments, condominiums, and multi-family residential properties.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Single-family home management</li>
                    <li>• Apartment complex operations</li>
                    <li>• Condominium association management</li>
                    <li>• Vacation rental management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileCheck className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Commercial Property Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Specialized management for office buildings, retail centers, industrial facilities, and mixed-use developments.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Office building management</li>
                    <li>• Retail center operations</li>
                    <li>• Industrial facility management</li>
                    <li>• Mixed-use property coordination</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Income Optimization Strategies</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Market Rate Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular market studies to ensure competitive pricing and maximize rental income.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Occupancy Maximization</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategic marketing and tenant retention programs to minimize vacancy periods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Cost Control</h3>
                    <p className="text-sm text-muted-foreground">
                      Negotiating vendor contracts and implementing efficient operating procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Value-Add Improvements</h3>
                    <p className="text-sm text-muted-foreground">
                      Identifying and implementing property improvements that increase rental rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Management</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Professional Expertise</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Licensed property managers with extensive experience across all property types and markets.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Transparent Reporting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Detailed monthly statements and online portal access to track property performance in real-time.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Wrench className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Responsive Service</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      24/7 emergency support and proactive property maintenance to protect your investment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Property?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let our professional management team maximize your property's performance and value.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Management Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
