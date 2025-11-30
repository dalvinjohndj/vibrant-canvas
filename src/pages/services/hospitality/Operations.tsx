import { Link } from "react-router-dom";
import { ArrowLeft, Settings, Users, Star, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Operations = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/hospitality" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Hospitality Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Operational Advisory Services</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Expert guidance to optimize hotel and resort operations, enhance guest experience, and improve profitability
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Service Excellence</CardTitle>
                <CardDescription>Guest experience optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Service standards development</li>
                  <li>• Guest journey mapping and improvement</li>
                  <li>• Quality assurance programs</li>
                  <li>• Guest feedback systems implementation</li>
                  <li>• Online reputation management</li>
                  <li>• Mystery shopper programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Staff Development</CardTitle>
                <CardDescription>Team training and culture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Training program design and delivery</li>
                  <li>• Service culture development</li>
                  <li>• Leadership coaching and mentoring</li>
                  <li>• Performance management systems</li>
                  <li>• Succession planning strategies</li>
                  <li>• Employee engagement initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Process Optimization</CardTitle>
                <CardDescription>Operational efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Standard operating procedures (SOPs)</li>
                  <li>• Workflow analysis and improvement</li>
                  <li>• Technology implementation and integration</li>
                  <li>• Inventory and cost control systems</li>
                  <li>• Energy management programs</li>
                  <li>• Sustainability initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Advisory Services Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Operational Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive evaluation of current operations, identifying strengths, weaknesses, and improvement opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Strategy Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creating tailored action plans with specific initiatives, timelines, and success metrics for improvement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Implementation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hands-on assistance with executing recommended changes, training staff, and establishing new processes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Performance Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ongoing monitoring of key metrics and continuous optimization to ensure sustainable improvements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Department-Specific Advisory</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Front Office Operations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Check-in/out process optimization</li>
                      <li>• Guest relations and concierge services</li>
                      <li>• Reservation management efficiency</li>
                      <li>• Upselling and cross-selling techniques</li>
                      <li>• Night audit procedures</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Food & Beverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Menu engineering and optimization</li>
                      <li>• Kitchen operations and food safety</li>
                      <li>• Restaurant service standards</li>
                      <li>• Bar operations and beverage programs</li>
                      <li>• Banquet and catering management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Housekeeping Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Room cleaning standards and productivity</li>
                      <li>• Linen and supplies management</li>
                      <li>• Public area maintenance protocols</li>
                      <li>• Laundry operations optimization</li>
                      <li>• Green cleaning initiatives</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Technology & Systems</h2>
              <p className="text-muted-foreground mb-6">
                Implementing modern technology solutions to streamline operations and enhance guest experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Property Management Systems</h3>
                    <p className="text-sm text-muted-foreground">
                      Selecting and implementing PMS solutions for reservations, front desk, housekeeping, and reporting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Revenue Management Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Implementing pricing engines, channel managers, and business intelligence platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Guest-Facing Technology</h3>
                    <p className="text-sm text-muted-foreground">
                      Mobile check-in, digital concierge, in-room technology, and guest communication platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Back-of-House Systems</h3>
                    <p className="text-sm text-muted-foreground">
                      Point-of-sale, inventory management, accounting interfaces, and staff scheduling software.
                    </p>
                  </div>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Performance Indicators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium mb-1">Operational Metrics</div>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Guest satisfaction scores</li>
                          <li>• Service delivery times</li>
                          <li>• Staff productivity rates</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Financial Metrics</div>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Labor cost percentages</li>
                          <li>• CPOR and departmental profits</li>
                          <li>• Energy cost per room</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Specialized Advisory Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Safety & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Health and safety protocols, security procedures, emergency preparedness, and crisis management planning.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Sustainability Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Environmental management systems, waste reduction, water conservation, and green certification pursuit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Brand Standards Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Meeting franchisor requirements, preparing for brand audits, and maintaining quality certification standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Optimize Your Hotel Operations</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Engage our operational experts to enhance efficiency, elevate guest experience, and improve profitability.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request Operational Review
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;