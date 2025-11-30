import { Link } from "react-router-dom";
import { ArrowLeft, Building2, FileSignature, Users, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Leasing = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/real-estate" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Real Estate Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Commercial & Industrial Leasing</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Expert lease negotiation and management services for commercial and industrial properties
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Building2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Commercial Leasing</CardTitle>
                <CardDescription>Office, retail, and mixed-use spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Office space leasing and subleasing</li>
                  <li>• Retail storefront and shopping center leases</li>
                  <li>• Restaurant and entertainment venue leasing</li>
                  <li>• Medical and professional office spaces</li>
                  <li>• Co-working and flexible office solutions</li>
                  <li>• Mixed-use development leasing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileSignature className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Industrial Leasing</CardTitle>
                <CardDescription>Warehouses, manufacturing, and logistics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Warehouse and distribution center leasing</li>
                  <li>• Manufacturing facility leases</li>
                  <li>• Cold storage and specialized facilities</li>
                  <li>• Industrial park and flex space leasing</li>
                  <li>• Logistics and fulfillment center spaces</li>
                  <li>• Research and development facilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Leasing Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Tenant Representation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Understanding tenant needs, space requirements, budget parameters, and ideal location preferences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Property Sourcing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identifying suitable properties, conducting site tours, and evaluating options against tenant criteria.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Lease Negotiation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Negotiating favorable terms including rent, lease duration, tenant improvements, and renewal options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Lease Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Finalizing lease documentation, coordinating move-in, and providing ongoing lease administration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Landlord Services</h2>
              <p className="text-muted-foreground mb-6">
                We help property owners maximize occupancy and lease value through strategic marketing and tenant placement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Property Marketing</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive marketing campaigns to reach qualified tenants through multiple channels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Tenant Screening</h3>
                    <p className="text-sm text-muted-foreground">
                      Thorough due diligence on prospective tenants including financial analysis and reference checks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Lease Structuring</h3>
                    <p className="text-sm text-muted-foreground">
                      Crafting lease terms that protect your interests while remaining competitive in the market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Lease Administration</h3>
                    <p className="text-sm text-muted-foreground">
                      Ongoing management of lease obligations, renewals, and tenant relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Tenant Services</h2>
              <p className="text-muted-foreground mb-6">
                Representing tenants to secure optimal lease terms and find the perfect commercial or industrial space.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Space Planning</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyzing your business needs to determine ideal space requirements and configuration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Market Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Providing market insights on rental rates, availability, and optimal locations for your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Lease Negotiation</h3>
                    <p className="text-sm text-muted-foreground">
                      Advocating for favorable terms including rent concessions, tenant improvement allowances, and flexibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Transaction Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Coordinating all aspects from lease execution through move-in and occupancy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Lease Considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Lease Terms & Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Base rent and escalations</li>
                    <li>• Lease duration and renewal options</li>
                    <li>• Operating expense allocations</li>
                    <li>• Tenant improvement allowances</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Financial Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Security deposits and guarantees</li>
                    <li>• Rent abatement periods</li>
                    <li>• CAM charges and utilities</li>
                    <li>• Sublease and assignment rights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileSignature className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Legal Protections</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use restrictions and exclusivity</li>
                    <li>• Termination and default provisions</li>
                    <li>• Insurance and liability requirements</li>
                    <li>• Dispute resolution mechanisms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Commercial or Industrial Space?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let our leasing specialists help you find the perfect space or tenant for your property.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Your Leasing Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leasing;
