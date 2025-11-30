import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, ClipboardCheck, Building2, FileText, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Development = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/real-estate" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Real Estate Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Development Advisory</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Strategic guidance for property development projects including feasibility studies, site selection, zoning, and permitting
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Feasibility Studies</CardTitle>
                <CardDescription>Comprehensive project analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Market demand analysis</li>
                  <li>• Financial modeling and projections</li>
                  <li>• Cost-benefit analysis</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Development timeline planning</li>
                  <li>• Investment return forecasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Site Selection</CardTitle>
                <CardDescription>Strategic location identification</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Location suitability assessment</li>
                  <li>• Demographic and traffic analysis</li>
                  <li>• Infrastructure evaluation</li>
                  <li>• Environmental impact review</li>
                  <li>• Competitive landscape study</li>
                  <li>• Site acquisition negotiation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Zoning & Permitting</CardTitle>
                <CardDescription>Regulatory compliance support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Zoning regulation analysis</li>
                  <li>• Permit application preparation</li>
                  <li>• Variance and rezoning support</li>
                  <li>• Environmental clearances</li>
                  <li>• Building code compliance</li>
                  <li>• Government liaison services</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Development Process Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Concept Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Initial project conceptualization, highest and best use analysis, and preliminary design direction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Feasibility & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Market studies, financial analysis, regulatory review, and development strategy formulation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Approvals & Entitlements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Securing all necessary permits, zoning approvals, and regulatory clearances for project execution.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Implementation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ongoing advisory during construction, marketing strategy, and pre-leasing or sales activities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Development Types</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Residential Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Single-family subdivisions, multi-family apartments, condominiums, and mixed-income housing projects.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Master-planned communities</li>
                      <li>• Urban infill projects</li>
                      <li>• Luxury residential towers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Commercial Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Office buildings, retail centers, mixed-use developments, and commercial plazas.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Business parks and campuses</li>
                      <li>• Shopping centers and malls</li>
                      <li>• Mixed-use urban developments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Special Purpose Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Hotels, resorts, healthcare facilities, educational institutions, and industrial complexes.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Hospitality and tourism projects</li>
                      <li>• Healthcare and senior living</li>
                      <li>• Industrial and logistics facilities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Advisory Expertise</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Market Intelligence</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep understanding of East African real estate markets, trends, and development opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Professional Network</h3>
                    <p className="text-sm text-muted-foreground">
                      Connections with architects, engineers, contractors, and financing sources to streamline development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ClipboardCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Regulatory Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Navigate complex zoning laws, building codes, and environmental regulations efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Financial Structuring</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimize capital structure, identify financing options, and maximize project returns.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Success Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">$2.5B+</div>
                      <div className="text-sm text-muted-foreground">Projects Advised</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">120+</div>
                      <div className="text-sm text-muted-foreground">Developments</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Approval Success</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Planning a Development Project?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with our development advisory team to turn your vision into a successful project.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Discuss Your Development
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;
