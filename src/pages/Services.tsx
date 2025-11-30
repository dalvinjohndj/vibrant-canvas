import ServiceCard from "@/components/ServiceCard";
import { Building2, Pickaxe, Hotel, FileCheck, TrendingUp, Users, Shield, Key, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const realEstateServices = [
    {
      icon: Building2,
      title: "Brokerage & Sales",
      description: "Professional representation for residential, commercial, luxury, and off-market properties.",
      features: [
        "Comprehensive listing presentation",
        "Expert negotiation strategies",
        "Complete closing support",
        "Market analysis and pricing",
      ],
      linkTo: "/services/real-estate",
    },
    {
      icon: Key,
      title: "Land Acquisition",
      description: "Strategic sourcing of farms, industrial sites, and development land with thorough due diligence.",
      features: [
        "Site identification and sourcing",
        "Title verification and checks",
        "Zoning and permit assessment",
        "Transaction coordination",
      ],
      linkTo: "/services/real-estate",
    },
    {
      icon: FileCheck,
      title: "Valuation & Appraisal",
      description: "Accurate property valuations for various purposes including sales, taxation, and financing.",
      features: [
        "Market valuation services",
        "Tax valuation reports",
        "Asset valuation for financing",
        "Investment analysis",
      ],
      linkTo: "/services/real-estate",
    },
  ];

  const miningServices = [
    {
      icon: Pickaxe,
      title: "Land Sourcing",
      description: "Identifying and securing mining concessions with strategic mineral rights negotiations.",
      features: [
        "Concession identification",
        "Mineral rights negotiation",
        "Land access agreements",
        "Regulatory liaison",
      ],
      linkTo: "/services/mining",
    },
    {
      icon: Users,
      title: "Joint Ventures",
      description: "Facilitating partnerships and structuring commercial terms for mining operations.",
      features: [
        "Partner matchmaking",
        "Deal structuring",
        "Commercial term negotiation",
        "Agreement documentation",
      ],
      linkTo: "/services/mining",
    },
    {
      icon: Shield,
      title: "Compliance Advisory",
      description: "Expert guidance on environmental, social, and legal requirements for mining projects.",
      features: [
        "Environmental impact assessment",
        "Social license requirements",
        "Legal due diligence",
        "Regulatory compliance",
      ],
      linkTo: "/services/mining",
    },
  ];

  const hospitalityServices = [
    {
      icon: Hotel,
      title: "Hotel & Resort Sales",
      description: "Specialized brokerage for hotels, resorts, lodges, and hospitality assets.",
      features: [
        "Property marketing strategies",
        "Buyer qualification",
        "Transaction management",
        "Post-sale transition support",
      ],
      linkTo: "/services/hospitality",
    },
    {
      icon: TrendingUp,
      title: "Asset Management",
      description: "Optimizing revenue and operations for maximum return on hospitality investments.",
      features: [
        "Revenue optimization strategies",
        "Operator selection and oversight",
        "Property repositioning",
        "Performance monitoring",
      ],
      linkTo: "/services/hospitality",
    },
    {
      icon: FileSearch,
      title: "Investment Advisory",
      description: "Comprehensive support for hospitality development and acquisition projects.",
      features: [
        "Feasibility studies",
        "Market analysis",
        "Operator search and selection",
        "Development coordination",
      ],
      linkTo: "/services/hospitality",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive solutions across Real Estate, Mining, and Hospitality sectors
          </p>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real Estate Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end support for all your property needs, from acquisition to asset management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realEstateServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Mining Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Mining Advisory Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert guidance for mining investments, concessions, and regulatory compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {miningServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hospitality Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized support for hotel and resort investments from acquisition to operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hospitalityServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and discover how we can help achieve your investment goals
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
