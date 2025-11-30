import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, BarChart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Management = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/hospitality" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Hospitality Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Hospitality Asset Management</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Strategic oversight and revenue optimization for hotel and resort investments to maximize returns
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Revenue Optimization</CardTitle>
                <CardDescription>Maximizing property income</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Revenue management strategies</li>
                  <li>• Pricing and yield optimization</li>
                  <li>• Distribution channel management</li>
                  <li>• Occupancy rate improvement</li>
                  <li>• ADR and RevPAR growth initiatives</li>
                  <li>• Ancillary revenue development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Operator Oversight</CardTitle>
                <CardDescription>Management company coordination</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Operator selection and contracts</li>
                  <li>• Performance monitoring and KPIs</li>
                  <li>• Brand compliance and standards</li>
                  <li>• Management contract negotiations</li>
                  <li>• Operator relationship management</li>
                  <li>• Transition and takeover coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Financial Performance</CardTitle>
                <CardDescription>Investment return maximization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Budget preparation and approval</li>
                  <li>• Financial reporting and analysis</li>
                  <li>• Cost control and optimization</li>
                  <li>• Capital expenditure planning</li>
                  <li>• Cash flow management</li>
                  <li>• Investment performance tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Asset Management Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Strategic Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developing comprehensive business plans, positioning strategies, and long-term value enhancement roadmaps.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Active Oversight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Regular property inspections, performance reviews, and hands-on involvement in key operational decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Performance Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tracking operational metrics, financial performance, and market positioning against benchmarks and targets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Value Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Implementing repositioning initiatives, capital improvements, and operational enhancements to increase asset value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Revenue Management Services</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Dynamic Pricing Strategies</h3>
                    <p className="text-sm text-muted-foreground">
                      Implementing sophisticated pricing algorithms based on demand patterns, competitive analysis, and booking pace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Channel Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Balancing distribution across direct bookings, OTAs, travel agents, and corporate channels to maximize net revenue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Demand Forecasting</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced analytics to predict booking patterns, optimize inventory allocation, and adjust pricing proactively.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Ancillary Revenue</h3>
                    <p className="text-sm text-muted-foreground">
                      Developing F&B, spa, events, and other revenue streams beyond room sales to improve overall profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Operational Excellence</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Star className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Guest Experience Enhancement</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Elevating service standards, implementing guest feedback systems, and driving online reputation management.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Staff Development</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ensuring proper training programs, performance management, and organizational culture aligned with brand standards.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cost Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Optimizing operating expenses through procurement efficiency, energy management, and process improvements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Capital Planning & Repositioning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Property Improvement Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Strategic capital expenditure planning to maintain competitiveness and drive value appreciation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Renovation scope and budget development</li>
                    <li>• FF&E replacement planning</li>
                    <li>• Technology upgrades and systems</li>
                    <li>• Energy efficiency improvements</li>
                    <li>• Amenity additions and enhancements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Repositioning Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Transforming underperforming assets through strategic repositioning and operational improvements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Brand affiliation evaluation and changes</li>
                    <li>• Target market redefinition</li>
                    <li>• Property use conversion feasibility</li>
                    <li>• Management company transitions</li>
                    <li>• Service level adjustments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Maximize Your Hospitality Investment</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with our asset management team to enhance property performance and investment returns.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Discuss Asset Management
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;