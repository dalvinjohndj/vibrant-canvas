import { Link } from "react-router-dom";
import { ArrowLeft, Handshake, DollarSign, TrendingUp, FileText, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Offtake = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/mining" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Mining Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Offtake & Project Financing</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Securing strategic offtake agreements and arranging project financing for mining development and operations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Handshake className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Offtake Agreements</CardTitle>
                <CardDescription>Securing guaranteed mineral sales</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Buyer identification and matchmaking</li>
                  <li>• Offtake term negotiation and structuring</li>
                  <li>• Pricing mechanisms and formulas</li>
                  <li>• Delivery terms and logistics coordination</li>
                  <li>• Quality specifications and penalties</li>
                  <li>• Contract enforcement and dispute resolution</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Project Financing</CardTitle>
                <CardDescription>Capital raising and financial structuring</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Financial modeling and feasibility studies</li>
                  <li>• Debt financing arrangement (banks, DFIs)</li>
                  <li>• Equity financing and investor relations</li>
                  <li>• Streaming and royalty agreements</li>
                  <li>• Export credit agency (ECA) financing</li>
                  <li>• Prepayment and advance payment structures</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Project Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Evaluating project economics, mineral resources, production profile, and financing requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Market Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identifying target buyers, lenders, and investors aligned with project characteristics and requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Deal Structuring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Negotiating commercial terms, financial covenants, and security packages that balance all party interests.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Transaction Close</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Managing due diligence, documentation, and closing procedures to achieve financial close.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Offtake Agreement Types</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Traditional Offtake</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Standard purchase agreements with volume commitments, pricing formulas, and delivery schedules.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Fixed-price or market-linked pricing</li>
                      <li>• Take-or-pay provisions</li>
                      <li>• Quality and specification standards</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Prepayment Offtake</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Buyers provide upfront capital in exchange for future mineral deliveries at discounted prices.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Development capital without equity dilution</li>
                      <li>• Flexible repayment in kind</li>
                      <li>• Lower financing costs than traditional debt</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Streaming Agreements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Upfront payment for the right to purchase a percentage of production at below-market prices.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• By-product and precious metal streams</li>
                      <li>• Life-of-mine commitments</li>
                      <li>• No production or cost risk to buyer</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Financing Sources</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Development Finance Institutions (DFIs)</h3>
                    <p className="text-sm text-muted-foreground">
                      IFC, AfDB, DEG, Proparco, and other DFIs providing long-term project debt with favorable terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Commercial Banks</h3>
                    <p className="text-sm text-muted-foreground">
                      Project finance facilities from international and regional banks with mining sector expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Private Equity & Venture Capital</h3>
                    <p className="text-sm text-muted-foreground">
                      Mining-focused funds providing equity capital for exploration, development, and expansion stages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Handshake className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Strategic Partners</h3>
                    <p className="text-sm text-muted-foreground">
                      Mining companies and commodity traders providing project investment in exchange for offtake or equity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Export Credit Agencies</h3>
                    <p className="text-sm text-muted-foreground">
                      Government-backed financing tied to procurement of equipment and services from specific countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Minerals & Markets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Target className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Battery Metals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    High demand from EV manufacturers and battery producers.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Lithium, Cobalt, Nickel</li>
                    <li>• Graphite, Manganese</li>
                    <li>• Strong offtake appetite</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Precious Metals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Established markets with multiple financing options.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Gold, Silver, PGMs</li>
                    <li>• Streaming opportunities</li>
                    <li>• Royalty financing available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Industrial Minerals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Growing demand from infrastructure and technology sectors.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Copper, Zinc, Lead</li>
                    <li>• Rare earth elements</li>
                    <li>• Tantalum, Tungsten</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your Mining Project Financing</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let us help you arrange strategic offtake agreements and secure the capital needed for your mining project.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Discuss Financing Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offtake;