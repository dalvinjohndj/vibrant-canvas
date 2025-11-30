import { Pickaxe, Users, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Mining = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-5xl font-bold mb-6">Mining Advisory Services</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Expert guidance for mining investments, concessions, and regulatory compliance
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Pickaxe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Land Sourcing</CardTitle>
                <CardDescription>Strategic mineral rights acquisition</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Concession identification and evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Mineral rights negotiation and acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Land access agreements and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Regulatory liaison and permit support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Joint Ventures</CardTitle>
                <CardDescription>Partnership facilitation and structuring</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Strategic partner matchmaking services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Deal structuring and financial modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Commercial term negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Agreement documentation and execution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Compliance Advisory</CardTitle>
                <CardDescription>Environmental and legal guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Environmental impact assessment support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Social license requirements guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Comprehensive legal due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Ongoing regulatory compliance support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-secondary/30 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Mining Sector Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Regional Knowledge</h3>
                <p className="text-muted-foreground">
                  Deep understanding of Southern African mining regulations, geology, and investment climate across multiple jurisdictions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Mineral Diversity</h3>
                <p className="text-muted-foreground">
                  Experience across various minerals including copper, gold, emeralds, cobalt, and industrial minerals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive due diligence and risk assessment to protect your mining investments and ensure compliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Industry Network</h3>
                <p className="text-muted-foreground">
                  Strong relationships with mining companies, government agencies, and industry stakeholders across the region.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore Mining Opportunities</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Let our mining advisory team help you navigate the complexities of mineral investments
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-dark">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mining;
