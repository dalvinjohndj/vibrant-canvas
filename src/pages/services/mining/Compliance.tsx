import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileCheck, Leaf, Users, Scale, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Compliance = () => {
  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/services/mining" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Mining Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">Mining Compliance Advisory</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive guidance on environmental, social, and legal requirements for mining operations across East Africa
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Environmental Compliance</CardTitle>
                <CardDescription>Impact assessment and management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Environmental impact assessments (EIA)</li>
                  <li>• Environmental management plans</li>
                  <li>• Waste management and disposal compliance</li>
                  <li>• Water resource management and permits</li>
                  <li>• Air quality and emissions monitoring</li>
                  <li>• Mine closure and rehabilitation planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Social License</CardTitle>
                <CardDescription>Community engagement and CSR</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Community consultation and engagement</li>
                  <li>• Social impact assessment (SIA)</li>
                  <li>• Resettlement action plans (RAP)</li>
                  <li>• Corporate social responsibility programs</li>
                  <li>• Indigenous peoples' rights compliance</li>
                  <li>• Grievance mechanisms and conflict resolution</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Legal & Regulatory</CardTitle>
                <CardDescription>Permitting and legal compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Mining license and permit applications</li>
                  <li>• Regulatory framework navigation</li>
                  <li>• Tax and royalty compliance</li>
                  <li>• Labor law and safety regulations</li>
                  <li>• Land use and surface rights compliance</li>
                  <li>• Export and import license management</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Compliance Process Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Gap Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive audit of current operations against all applicable regulatory requirements and standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Action Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Development of detailed remediation plans, timelines, and resource allocation for compliance achievement.
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
                    Hands-on assistance with implementing compliance measures, obtaining permits, and stakeholder engagement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">Monitoring & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ongoing compliance monitoring, audit preparation, and regulatory reporting to maintain good standing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Regional Regulatory Expertise</h2>
              <p className="text-muted-foreground mb-6">
                We provide country-specific compliance guidance across East Africa's diverse regulatory landscapes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Tanzania</h3>
                    <p className="text-sm text-muted-foreground">
                      Mining Act 2010, Environmental Management Act, local content requirements, and community development obligations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Kenya</h3>
                    <p className="text-sm text-muted-foreground">
                      Mining Act 2016, EMCA regulations, community benefit sharing, and county government requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Rwanda</h3>
                    <p className="text-sm text-muted-foreground">
                      Mining and Quarry Law, environmental protection regulations, ITSCI compliance, and export procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Regional Standards</h3>
                    <p className="text-sm text-muted-foreground">
                      EAC harmonization protocols, ICGLR regional certification, and international best practices (IFC, Equator Principles).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Risk Mitigation Services</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Regulatory Risk Assessment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Identifying potential compliance vulnerabilities before they become costly violations or project delays.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <FileCheck className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Audit Preparation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Preparing for government inspections, investor due diligence, and lender compliance audits.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Stakeholder Relations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Managing relationships with regulators, communities, NGOs, and other stakeholders to maintain social license.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">International Standards & Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Environmental Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• IFC Performance Standards</li>
                    <li>• Equator Principles</li>
                    <li>• ISO 14001 EMS</li>
                    <li>• World Bank ESF</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Responsible Mining</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• IRMA Standard</li>
                    <li>• RJC Code of Practices</li>
                    <li>• Conflict Minerals Compliance</li>
                    <li>• OECD Due Diligence Guidance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Safety & Labor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• ISO 45001 OH&S</li>
                    <li>• ILO Conventions</li>
                    <li>• Voluntary Principles on Security</li>
                    <li>• Human Rights Due Diligence</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ensure Mining Compliance</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with our compliance experts to navigate complex regulations and maintain your mining license to operate.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request Compliance Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;