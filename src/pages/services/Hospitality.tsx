import { Hotel, TrendingUp, FileSearch, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Hospitality = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-5xl font-bold mb-6">Hospitality Services</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Specialized support for hotel and resort investments from acquisition to operations
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Hotel className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Hotel & Resort Sales</CardTitle>
                <CardDescription>Specialized hospitality brokerage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Comprehensive property marketing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Buyer qualification and due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Full transaction management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Post-sale transition support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Asset Management</CardTitle>
                <CardDescription>Revenue and operations optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Revenue optimization strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Operator selection and oversight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Property repositioning plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Performance monitoring and reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileSearch className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Investment Advisory</CardTitle>
                <CardDescription>Development and acquisition support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Comprehensive feasibility studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Detailed market analysis and trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Operator search and selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Development coordination and oversight</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-secondary/30 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Hospitality Market Insight</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Tourism Growth</h3>
                <p className="text-muted-foreground">
                  Southern Africa's growing tourism sector presents significant opportunities for hospitality investments, from luxury safari lodges to urban hotels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Diverse Portfolio</h3>
                <p className="text-muted-foreground">
                  We work across all hospitality segments including luxury resorts, boutique hotels, safari lodges, business hotels, and conference facilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Operational Excellence</h3>
                <p className="text-muted-foreground">
                  Our team helps optimize operations through strategic partnerships with leading hotel operators and management companies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Investment Returns</h3>
                <p className="text-muted-foreground">
                  Focus on maximizing returns through strategic positioning, effective marketing, and operational efficiency improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Invest in Hospitality</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Discover hospitality investment opportunities with our expert team
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-dark">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;
