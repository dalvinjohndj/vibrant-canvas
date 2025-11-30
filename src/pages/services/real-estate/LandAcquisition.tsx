import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, FileSearch, Tractor, Factory, TreePine, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LandAcquisition = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/real-estate" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Real Estate Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Land Acquisition & Disposition</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Expert guidance for acquiring farms, industrial sites, development land, with comprehensive due diligence and title verification
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Tractor className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Agricultural Land</CardTitle>
                <CardDescription>Farms and agricultural properties</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Large-scale farming operations</li>
                  <li>• Crop and livestock ranches</li>
                  <li>• Irrigation-equipped farmland</li>
                  <li>• Agroforestry properties</li>
                  <li>• Organic farming land</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Factory className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Industrial Sites</CardTitle>
                <CardDescription>Manufacturing and logistics facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Manufacturing plant sites</li>
                  <li>• Warehouse and distribution centers</li>
                  <li>• Special economic zone plots</li>
                  <li>• Industrial park developments</li>
                  <li>• Processing facility land</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TreePine className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Development Land</CardTitle>
                <CardDescription>Prime plots for residential and commercial development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Residential subdivision land</li>
                  <li>• Mixed-use development sites</li>
                  <li>• Commercial development plots</li>
                  <li>• Urban infill opportunities</li>
                  <li>• Master-planned communities</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Due Diligence Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileSearch className="h-6 w-6 text-primary" />
                    <CardTitle>Title Verification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete title search and verification</li>
                    <li>• Chain of ownership documentation</li>
                    <li>• Lien and encumbrance checks</li>
                    <li>• Boundary survey confirmation</li>
                    <li>• Legal ownership validation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <CardTitle>Site Assessment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Topographical and soil analysis</li>
                    <li>• Environmental impact assessment</li>
                    <li>• Access and infrastructure evaluation</li>
                    <li>• Zoning and land use verification</li>
                    <li>• Utility availability confirmation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <CardTitle>Regulatory Compliance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Zoning regulations and permits</li>
                    <li>• Building codes and restrictions</li>
                    <li>• Environmental compliance review</li>
                    <li>• Tax assessment and obligations</li>
                    <li>• Community development requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <CardTitle>Financial Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Market value assessment</li>
                    <li>• Development potential evaluation</li>
                    <li>• Investment return projections</li>
                    <li>• Tax implications analysis</li>
                    <li>• Financing options review</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Acquisition Services</h2>
              <p className="text-muted-foreground mb-6">
                We guide buyers through every step of the land acquisition process, from initial site identification to final closing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Site Identification & Selection</h3>
                    <p className="text-sm text-muted-foreground">Identify suitable properties based on your specific requirements and investment criteria.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Negotiation & Purchase Agreement</h3>
                    <p className="text-sm text-muted-foreground">Expert negotiation to secure favorable terms and comprehensive purchase agreements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Transaction Coordination</h3>
                    <p className="text-sm text-muted-foreground">Manage all aspects of the transaction including documentation, financing, and closing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Disposition Services</h2>
              <p className="text-muted-foreground mb-6">
                Strategic marketing and sales execution to achieve optimal value for your land holdings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Market Positioning & Valuation</h3>
                    <p className="text-sm text-muted-foreground">Strategic pricing and positioning to maximize market appeal and sale value.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Targeted Marketing Campaign</h3>
                    <p className="text-sm text-muted-foreground">Reach qualified buyers through our extensive network and marketing channels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Sale Execution & Closing</h3>
                    <p className="text-sm text-muted-foreground">Manage buyer qualification, negotiations, and all closing procedures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Looking to Acquire or Sell Land?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with our land specialists for thorough due diligence and expert transaction management.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Speak with a Land Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandAcquisition;
