import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, FileSearch, Scale, CheckCircle, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LandSourcing = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/mining" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Mining Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Land Sourcing & Acquisition</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Strategic sourcing of mining concessions and mineral rights across East Africa with expert negotiation support
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Concession Identification</CardTitle>
                <CardDescription>Strategic mining area identification</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Geological survey analysis</li>
                  <li>• Mineral deposit mapping</li>
                  <li>• Available concession screening</li>
                  <li>• Historical production data review</li>
                  <li>• Infrastructure accessibility assessment</li>
                  <li>• Regional mining activity analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mineral Rights Negotiation</CardTitle>
                <CardDescription>Securing exploration and extraction rights</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Rights holder identification</li>
                  <li>• Terms and royalty negotiation</li>
                  <li>• Concession agreement structuring</li>
                  <li>• Government liaison and approvals</li>
                  <li>• Community stakeholder engagement</li>
                  <li>• Title and ownership verification</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Land Sourcing Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Target Definition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Understanding your mineral targets, production goals, and investment parameters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Site Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leveraging geological data and local expertise to identify promising concessions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Due Diligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive technical, legal, and regulatory assessment of target areas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Acquisition Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Negotiating terms, securing agreements, and facilitating government approvals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mineral Types We Source</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Precious Metals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Gold, silver, platinum group metals, and rare earth elements with established markets and high value.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Base Metals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Copper, nickel, zinc, lead, and aluminum for industrial applications and infrastructure development.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Industrial Minerals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Graphite, tantalum, lithium, cobalt, and other battery minerals driving the energy transition.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Gemstones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tanzanite, rubies, sapphires, emeralds, and other precious gemstones unique to East Africa.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Regional Expertise</h2>
              <p className="text-muted-foreground mb-6">
                Our team has deep knowledge of mining regulations and mineral potential across East Africa.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Tanzania</h3>
                    <p className="text-sm text-muted-foreground">
                      Gold, tanzanite, diamonds, and coal. Strong geological potential with established mining framework.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Kenya</h3>
                    <p className="text-sm text-muted-foreground">
                      Fluorspar, titanium, gold, and rare earths. Emerging mining sector with government support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Rwanda</h3>
                    <p className="text-sm text-muted-foreground">
                      Tin, tungsten, tantalum, and lithium. Business-friendly mining regulations and infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Other Markets</h3>
                    <p className="text-sm text-muted-foreground">
                      Expanding coverage across Uganda, DRC, and Mozambique based on client requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Value-Added Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <FileSearch className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Geological Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Independent review of geological reports, mineral resource estimates, and exploration potential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Legal Due Diligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Title verification, regulatory compliance review, and risk assessment for mining concessions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Economic Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Financial modeling, production forecasts, and investment return analysis for acquisition decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Source Mining Land?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with our mining advisory team to identify and secure strategic mineral concessions.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Discuss Your Mining Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandSourcing;
