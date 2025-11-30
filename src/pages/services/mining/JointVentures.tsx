import { Link } from "react-router-dom";
import { ArrowLeft, Handshake, Users, FileText, TrendingUp, Scale, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const JointVentures = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/mining" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Mining Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Joint Ventures & Partnership Facilitation</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Structuring successful mining partnerships with optimal commercial terms and shared risk frameworks
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Handshake className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Partnership Structuring</CardTitle>
                <CardDescription>Optimal joint venture frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Ownership structure design</li>
                  <li>• Capital contribution arrangements</li>
                  <li>• Profit and loss sharing mechanisms</li>
                  <li>• Management and control frameworks</li>
                  <li>• Exit strategy planning</li>
                  <li>• Dispute resolution mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Commercial Terms</CardTitle>
                <CardDescription>Negotiation and agreement drafting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Revenue and cost sharing agreements</li>
                  <li>• Funding and dilution provisions</li>
                  <li>• Operational responsibilities allocation</li>
                  <li>• Technology and IP arrangements</li>
                  <li>• Performance milestones and penalties</li>
                  <li>• Change of control provisions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Joint Venture Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Partner Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identifying compatible partners with complementary resources, expertise, and strategic fit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Deal Structuring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Designing the optimal partnership structure, ownership split, and commercial terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Negotiation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Facilitating negotiations, mediating differences, and achieving mutually beneficial agreements.
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
                    Drafting comprehensive agreements and coordinating regulatory approvals and closing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Partnership Types</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Exploration Joint Ventures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Risk-sharing arrangements for early-stage exploration with earn-in provisions and staged funding.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Earn-in and farm-out agreements</li>
                      <li>• Exploration funding frameworks</li>
                      <li>• Resource discovery incentives</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Development Joint Ventures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Partnerships for project development, financing, and construction with defined contribution schedules.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Capital deployment structures</li>
                      <li>• Development milestone agreements</li>
                      <li>• Construction management frameworks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Production Joint Ventures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Operational partnerships for producing mines with revenue sharing and operational responsibilities.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Production sharing arrangements</li>
                      <li>• Operating committee structures</li>
                      <li>• Cash flow distribution mechanisms</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Considerations</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Partner Alignment</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensuring strategic fit, compatible objectives, and aligned risk tolerance between partners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Legal Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive legal documentation covering all scenarios and protecting partner interests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Value Creation</h3>
                    <p className="text-sm text-muted-foreground">
                      Structuring deals to maximize value creation through synergies and complementary capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Risk Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Allocating risks appropriately and establishing mechanisms to manage operational and financial risks.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Common Partnership Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Operator + Financier</span>
                      <span className="text-muted-foreground">60/40 - 70/30</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Concession Holder + Developer</span>
                      <span className="text-muted-foreground">50/50 - 40/60</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Local + International Partner</span>
                      <span className="text-muted-foreground">30/70 - 49/51</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Strategic Equity Partnership</span>
                      <span className="text-muted-foreground">Variable</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Looking for a Mining Partner?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let us help you structure and negotiate a successful joint venture that creates value for all parties.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Explore Partnership Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JointVentures;
