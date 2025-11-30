import { Link } from "react-router-dom";
import { ArrowLeft, FileSignature, Handshake, Building2, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Leasing = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/hospitality" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Hospitality Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Hotel Leasing & Partnership Structuring</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Strategic lease arrangements and partnership structures for hospitality properties and operations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <FileSignature className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Hotel Lease Structures</CardTitle>
                <CardDescription>Property lease arrangements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Fixed rent vs. percentage rent leases</li>
                  <li>• Revenue-based lease structuring</li>
                  <li>• Lease vs. management agreement analysis</li>
                  <li>• Ground lease and land lease arrangements</li>
                  <li>• Lease term negotiation and renewal options</li>
                  <li>• Capital expenditure allocation and funding</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Handshake className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Partnership Structures</CardTitle>
                <CardDescription>Joint venture and collaboration models</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Property owner and operator partnerships</li>
                  <li>• Joint venture structuring and agreements</li>
                  <li>• Profit-sharing and distribution models</li>
                  <li>• Management fee structures and incentives</li>
                  <li>• Exit strategies and buy-out provisions</li>
                  <li>• Dispute resolution mechanisms</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Leasing Process Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Structure Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Evaluating lease vs. management options and recommending optimal structure for owner objectives.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Tenant/Partner Sourcing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identifying qualified hotel operators or partners with appropriate brand, experience, and financial capacity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Terms Negotiation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Negotiating lease terms, rent structures, capital requirements, and operational responsibilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Documentation & Closing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Finalizing lease agreements, partnership documents, and coordinating handover or opening procedures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Lease Structure Options</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Fixed Rent Lease</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Tenant pays predetermined fixed rent regardless of hotel performance, providing stable income for owner.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Predictable cash flow for property owner</li>
                      <li>• Operator bears all performance risk</li>
                      <li>• Limited upside potential in strong markets</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Percentage Rent Lease</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Rent based on percentage of gross revenue or gross operating profit with minimum rent guarantees.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Aligned interests between owner and operator</li>
                      <li>• Owner participates in upside performance</li>
                      <li>• Minimum rent provides downside protection</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Hybrid Structures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Combination of fixed and variable components to balance risk and reward between parties.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Base rent plus percentage over threshold</li>
                      <li>• Revenue sharing with performance triggers</li>
                      <li>• Seasonal or graduated rent structures</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Lease Considerations</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Rent Structure & Escalations</h3>
                    <p className="text-sm text-muted-foreground">
                      Base rent amounts, percentage rent formulas, annual escalations, CPI adjustments, and rent review provisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Capital Expenditure Responsibilities</h3>
                    <p className="text-sm text-muted-foreground">
                      FF&E replacement reserves, building improvements, deferred maintenance, and renovation funding mechanisms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Performance Standards & Reporting</h3>
                    <p className="text-sm text-muted-foreground">
                      Operating standards, brand compliance, financial reporting requirements, and audit rights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Lease Term & Renewal Options</h3>
                    <p className="text-sm text-muted-foreground">
                      Initial term length, renewal options, termination rights, and conditions for early exit.
                    </p>
                  </div>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Typical Lease Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Initial Term</span>
                        <span className="text-muted-foreground">15-25 years</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Renewal Options</span>
                        <span className="text-muted-foreground">2-3 x 5-10 years</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Fixed Rent (% of value)</span>
                        <span className="text-muted-foreground">6-10%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">% Rent (of revenue)</span>
                        <span className="text-muted-foreground">15-25%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Partnership Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Building2 className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Property Owner + Brand</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Owner provides real estate and capital, brand brings operating expertise and reservation system.
                  </p>
                  <div className="text-sm font-medium text-primary">Management Agreement Model</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Handshake className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Joint Venture Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Shared ownership and investment with defined profit-sharing based on capital contributions and roles.
                  </p>
                  <div className="text-sm font-medium text-primary">Equity Partnership Model</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Developer + Investor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Developer manages construction and initial operations, investor provides capital with preferred returns.
                  </p>
                  <div className="text-sm font-medium text-primary">Development Partnership</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16 bg-secondary/30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Operator vs. Management vs. Lease</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 pr-4">Aspect</th>
                    <th className="text-left py-3 px-4">Franchise</th>
                    <th className="text-left py-3 px-4">Management Agreement</th>
                    <th className="text-left py-3 pl-4">Lease</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium">Control</td>
                    <td className="py-3 px-4">Owner operates</td>
                    <td className="py-3 px-4">Operator manages</td>
                    <td className="py-3 pl-4">Tenant controls</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium">Financial Risk</td>
                    <td className="py-3 px-4">Owner bears all</td>
                    <td className="py-3 px-4">Owner bears all</td>
                    <td className="py-3 pl-4">Tenant bears most</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium">Income to Owner</td>
                    <td className="py-3 px-4">Net profit after fees</td>
                    <td className="py-3 px-4">Net profit after fees</td>
                    <td className="py-3 pl-4">Fixed or % rent</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Typical Cost</td>
                    <td className="py-3 px-4">5-7% fees + license</td>
                    <td className="py-3 px-4">3-5% base + incentive</td>
                    <td className="py-3 pl-4">15-25% of revenue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Structure Your Hotel Partnership</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let us help you evaluate lease vs. management options and structure the optimal partnership arrangement.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Explore Partnership Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leasing;