import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, FileSearch, MapPin, DollarSign, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Investment = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/hospitality" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Hospitality Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Investment & Development Advisory</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive support for hospitality development projects from concept through grand opening
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <FileSearch className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Feasibility Studies</CardTitle>
                <CardDescription>Investment viability analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Market demand and competitive analysis</li>
                  <li>• Site evaluation and selection</li>
                  <li>• Financial modeling and projections</li>
                  <li>• Development cost estimation</li>
                  <li>• Return on investment analysis</li>
                  <li>• Risk assessment and mitigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Concept Development</CardTitle>
                <CardDescription>Property positioning and design</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Brand positioning and strategy</li>
                  <li>• Target market definition</li>
                  <li>• Product mix optimization</li>
                  <li>• Design brief development</li>
                  <li>• FF&E specifications and budgeting</li>
                  <li>• Amenity planning and programming</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Operator Selection</CardTitle>
                <CardDescription>Management company sourcing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Operator requirements definition</li>
                  <li>• RFP preparation and distribution</li>
                  <li>• Brand and operator evaluation</li>
                  <li>• Management agreement negotiation</li>
                  <li>• Technical services coordination</li>
                  <li>• Pre-opening support facilitation</li>
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
                  <CardTitle className="text-lg">Concept & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Market analysis, concept development, site selection, and preliminary financial modeling.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Design & Permitting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Architectural oversight, design review, regulatory approvals, and environmental clearances.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Construction Phase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Owner's representation, cost control monitoring, quality assurance, and schedule tracking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Pre-Opening & Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pre-opening planning, staff recruitment, marketing launch, and opening coordination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Investment Analysis Services</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Market Research</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive analysis of tourism trends, demand drivers, competitive supply, and market positioning opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Financial Forecasting</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed revenue and expense projections, occupancy and rate forecasts, and multi-year cash flow modeling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Investment Returns</h3>
                    <p className="text-sm text-muted-foreground">
                      NPV and IRR calculations, sensitivity analysis, scenario modeling, and comparative investment evaluation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileSearch className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Due Diligence Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Coordinating technical, legal, and financial due diligence for acquisition or development financing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Development Project Types</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">New Build Hotels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ground-up development of branded or independent hotels from concept through opening.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Business hotels and conference centers</li>
                      <li>• Luxury and lifestyle properties</li>
                      <li>• Select service and limited service hotels</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Resort Developments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Beachfront, safari, mountain, and other leisure-focused resort properties.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• All-inclusive beach resorts</li>
                      <li>• Safari lodges and eco-lodges</li>
                      <li>• Golf and spa resorts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Conversions & Renovations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Repositioning existing properties or converting other buildings to hospitality use.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Historic building conversions</li>
                      <li>• Major renovations and rebranding</li>
                      <li>• Mixed-use developments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Financing & Capital Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Capital Stack Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Structuring the optimal mix of equity, debt, and alternative financing to maximize returns.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Equity investment structuring</li>
                    <li>• Senior and mezzanine debt arrangement</li>
                    <li>• Construction financing coordination</li>
                    <li>• DFI and development bank financing</li>
                    <li>• Joint venture and partnership structures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lender Coordination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Managing relationships with lenders and ensuring compliance with financing requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Financing package preparation</li>
                    <li>• Lender presentations and negotiations</li>
                    <li>• Loan agreement review and oversight</li>
                    <li>• Draw request coordination</li>
                    <li>• Reporting and covenant compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16 bg-secondary/30 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Owner's Representation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Project Management</h3>
                <p className="text-sm text-muted-foreground">
                  Acting as owner's agent to coordinate architects, contractors, and consultants throughout development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Budget Control</h3>
                <p className="text-sm text-muted-foreground">
                  Monitoring costs, reviewing change orders, and ensuring project stays within approved budget parameters.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSearch className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Regular inspections, punch list management, and verification of work quality and brand standards.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Develop Your Hospitality Project</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with our development team to bring your hotel or resort vision to successful reality.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;