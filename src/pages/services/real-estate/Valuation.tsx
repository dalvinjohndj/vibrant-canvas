import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, TrendingUp, FileText, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Valuation = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/real-estate" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Real Estate Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Valuation & Appraisal</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Professional property valuation services for market assessment, tax purposes, and financing requirements
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Market Valuation</CardTitle>
                <CardDescription>Current market value assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Comparative market analysis</li>
                  <li>• Fair market value determination</li>
                  <li>• Sale price recommendations</li>
                  <li>• Investment value assessment</li>
                  <li>• Market trend analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Tax Valuation</CardTitle>
                <CardDescription>Property tax and assessment purposes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Property tax assessment support</li>
                  <li>• Estate and inheritance valuations</li>
                  <li>• Capital gains tax calculations</li>
                  <li>• Tax appeal documentation</li>
                  <li>• Charitable donation valuations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calculator className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Financing Valuation</CardTitle>
                <CardDescription>Mortgage and loan security assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Mortgage lending valuations</li>
                  <li>• Loan-to-value assessments</li>
                  <li>• Refinancing valuations</li>
                  <li>• Collateral security reports</li>
                  <li>• Investment property analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Valuation Methodology</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle>Property Inspection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive on-site inspection documenting property condition, features, improvements, and physical characteristics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle>Market Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Analysis of comparable properties, recent sales data, market trends, and economic factors affecting property value.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle>Valuation Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed written report with valuation conclusion, methodology explanation, market analysis, and supporting documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Valuation Approaches</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Sales Comparison Approach
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Analyzing recent sales of comparable properties to determine market value based on actual transaction data.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    Income Capitalization Approach
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Evaluating investment properties based on income generation potential, capitalization rates, and cash flow analysis.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Cost Approach
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Determining value based on land value plus construction cost of improvements, adjusted for depreciation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Property Types We Value</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Residential Homes",
                  "Commercial Buildings",
                  "Industrial Facilities",
                  "Vacant Land",
                  "Agricultural Properties",
                  "Mixed-Use Developments",
                  "Hotels & Resorts",
                  "Special Purpose Properties",
                ].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Property Valuation?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get an accurate, professional property valuation from our certified appraisers.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request Valuation Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Valuation;
