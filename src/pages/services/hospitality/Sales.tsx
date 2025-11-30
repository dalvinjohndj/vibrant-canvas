import { Link } from "react-router-dom";
import { ArrowLeft, Hotel, Building2, MapPin, TrendingUp, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Sales = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/hospitality" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Hospitality Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Hotel & Resort Sales</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Specialized brokerage services for hotels, resorts, lodges, and hospitality assets across East Africa
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Hotel className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Hotels & Resorts</CardTitle>
                <CardDescription>Urban and beach properties</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Luxury beachfront resorts</li>
                  <li>• Urban business hotels</li>
                  <li>• Boutique hotels and guesthouses</li>
                  <li>• All-inclusive resort properties</li>
                  <li>• Extended-stay and apartment hotels</li>
                  <li>• Conference and convention hotels</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Safari & Eco Lodges</CardTitle>
                <CardDescription>Wildlife and nature tourism</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Luxury safari lodges and tented camps</li>
                  <li>• Eco-lodges and sustainable properties</li>
                  <li>• National park and reserve concessions</li>
                  <li>• Bush camps and mobile operations</li>
                  <li>• Mountain lodges and adventure properties</li>
                  <li>• Private game reserves with lodging</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Special Purpose</CardTitle>
                <CardDescription>Unique hospitality assets</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Spa and wellness retreats</li>
                  <li>• Golf resorts and country clubs</li>
                  <li>• Marina and waterfront properties</li>
                  <li>• Historic properties and heritage hotels</li>
                  <li>• Mixed-use developments with hospitality</li>
                  <li>• Serviced apartment complexes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Sales Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Property Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive evaluation of property condition, financial performance, market position, and sale potential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Marketing Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Targeted marketing to qualified buyers including hotel operators, investors, and international hospitality groups.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Buyer Qualification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Thorough vetting of prospective buyers, financial capability verification, and due diligence coordination.
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
                    Negotiation, contract execution, and seamless property handover with post-sale transition support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seller Services</h2>
              <p className="text-muted-foreground mb-6">
                We help property owners achieve optimal value through strategic marketing and expert transaction management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Property Valuation & Positioning</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive valuation analysis and strategic pricing to maximize sale value while ensuring market competitiveness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Confidential Marketing</h3>
                    <p className="text-sm text-muted-foreground">
                      Discreet outreach to qualified buyers through our extensive network while maintaining operational confidentiality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Documentation & Preparation</h3>
                    <p className="text-sm text-muted-foreground">
                      Organizing financials, licenses, operating data, and property information for due diligence readiness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Transaction Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Managing all aspects from offer negotiation through closing, including coordination with operators and staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Buyer Representation</h2>
              <p className="text-muted-foreground mb-6">
                We assist investors and operators in identifying, evaluating, and acquiring hospitality properties.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Property Sourcing</h3>
                    <p className="text-sm text-muted-foreground">
                      Identifying on-market and off-market opportunities that match investment criteria and operational goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Due Diligence Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Coordinating property inspections, financial analysis, license verification, and operational assessments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Investment Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed financial modeling, market analysis, and return projections to support acquisition decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Hotel className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Operator Coordination</h3>
                    <p className="text-sm text-muted-foreground">
                      Facilitating connections with hotel management companies and negotiating operator agreements if required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tanzania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Zanzibar beach resorts, Dar es Salaam hotels, Serengeti safari lodges, and Kilimanjaro mountain properties.
                  </p>
                  <div className="text-sm font-medium text-primary">Strong Tourism Growth</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kenya</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Nairobi business hotels, Mombasa beach resorts, Maasai Mara lodges, and conference facilities.
                  </p>
                  <div className="text-sm font-medium text-primary">Established Market</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rwanda</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Kigali hotels, gorilla tracking lodges, Lake Kivu resorts, and eco-tourism properties.
                  </p>
                  <div className="text-sm font-medium text-primary">Emerging Destination</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Buying or Selling a Hospitality Property?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with our hospitality specialists for expert guidance and access to exclusive opportunities.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Contact Hospitality Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sales;