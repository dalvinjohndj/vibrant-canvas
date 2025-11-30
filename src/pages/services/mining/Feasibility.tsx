import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, LineChart, Calculator, FileText, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Feasibility = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/mining" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Mining Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Site Feasibility & Technical Studies</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive technical and economic evaluations to determine mining project viability and investment potential
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Geological Assessment</CardTitle>
                <CardDescription>Resource estimation and evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Mineral resource estimation (JORC/NI 43-101)</li>
                  <li>• Ore reserve classification</li>
                  <li>• Geological modeling and interpretation</li>
                  <li>• Drilling program design and oversight</li>
                  <li>• Geotechnical and hydrogeological studies</li>
                  <li>• Exploration target generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mining & Processing</CardTitle>
                <CardDescription>Technical design and optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Mining method selection and design</li>
                  <li>• Processing flowsheet development</li>
                  <li>• Metallurgical testing and optimization</li>
                  <li>• Equipment selection and sizing</li>
                  <li>• Production scheduling and mine planning</li>
                  <li>• Infrastructure requirements assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calculator className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Financial Modeling</CardTitle>
                <CardDescription>Economic analysis and valuation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Capital and operating cost estimation</li>
                  <li>• Cash flow modeling and NPV analysis</li>
                  <li>• Sensitivity and risk analysis</li>
                  <li>• Financing structure optimization</li>
                  <li>• Commodity price forecasting</li>
                  <li>• Project valuation and IRR calculations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Study Levels & Progression</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Scoping Study</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Preliminary assessment of project viability, conceptual mining approach, and order-of-magnitude economics.
                  </p>
                  <div className="text-sm font-medium text-primary">±40-50% Accuracy</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Pre-Feasibility (PFS)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Detailed technical evaluation with defined mining method, processing route, and comprehensive cost estimates.
                  </p>
                  <div className="text-sm font-medium text-primary">±25-35% Accuracy</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Feasibility Study (DFS)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive engineering study suitable for project financing decisions and construction commitment.
                  </p>
                  <div className="text-sm font-medium text-primary">±10-15% Accuracy</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Bankable Feasibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Detailed engineering and financial package meeting lender requirements for project debt financing.
                  </p>
                  <div className="text-sm font-medium text-primary">±5-10% Accuracy</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Study Components</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Technical Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Mining methods, processing design, tailings management, water management, and infrastructure layout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Environmental & Social</h3>
                    <p className="text-sm text-muted-foreground">
                      Environmental impact assessment, social impact study, stakeholder engagement, and closure planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Capital Cost Estimate</h3>
                    <p className="text-sm text-muted-foreground">
                      Direct costs (equipment, construction), indirect costs (EPCM, commissioning), and contingency provisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Operating Cost Model</h3>
                    <p className="text-sm text-muted-foreground">
                      Mining, processing, administration, and sustaining capital costs across life-of-mine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Economic Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      NPV, IRR, payback period, sensitivity analysis, and risk assessment under various scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Implementation Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Development schedule, permitting timeline, procurement strategy, and execution approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Team</h2>
              <p className="text-muted-foreground mb-6">
                We coordinate multidisciplinary teams of international specialists to deliver comprehensive feasibility studies.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Technical Specialists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Mining engineers and geologists</li>
                      <li>• Metallurgists and process engineers</li>
                      <li>• Geotechnical and hydrogeological experts</li>
                      <li>• Environmental scientists and social consultants</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Financial & Commercial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Financial modelers and economists</li>
                      <li>• Market analysts and commodity experts</li>
                      <li>• Cost estimators and quantity surveyors</li>
                      <li>• Project managers and schedulers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Legal & Regulatory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Mining law and permitting specialists</li>
                      <li>• Environmental compliance experts</li>
                      <li>• Tax and fiscal regime advisors</li>
                      <li>• Social license and stakeholder relations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Deliverables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Technical Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive report documenting all technical work, methodology, results, and recommendations compliant with international standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <LineChart className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Financial Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed Excel-based financial model with full flexibility for scenario testing, sensitivity analysis, and investor presentations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Engineering Drawings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Site layouts, process flowsheets, infrastructure designs, and 3D models suitable for permitting and construction planning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Evaluate Your Mining Project?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Engage our technical team to conduct a comprehensive feasibility study and unlock your project's potential.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request Feasibility Study
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feasibility;