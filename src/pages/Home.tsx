import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Pickaxe, Hotel, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import commercialProperty from "@/assets/commercial-property.jpg";
import hotelProperty from "@/assets/hotel-property.jpg";
import farmProperty from "@/assets/farm-property.jpg";

const Home = () => {
  const featuredProperties = [
    {
      image: commercialProperty,
      title: "Premium Office Complex",
      location: "Dar es Salaam, Tanzania",
      price: "$2.5M",
      area: "15,000 sq ft",
      type: "Commercial",
      status: "For Sale" as const,
    },
    {
      image: hotelProperty,
      title: "Luxury Beachfront Resort",
      location: "Zanzibar, Tanzania",
      price: "$8.5M",
      beds: 50,
      baths: 52,
      area: "50,000 sq ft",
      type: "Hospitality",
      status: "For Sale" as const,
    },
    {
      image: farmProperty,
      title: "Prime Agricultural Land",
      location: "Arusha, Tanzania",
      price: "$1.2M",
      area: "500 Acres",
      type: "Land",
      status: "For Sale" as const,
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Comprehensive brokerage, valuation, and property management services for residential, commercial, and industrial assets.",
      features: [
        "Brokerage & Sales",
        "Land Acquisition",
        "Property Valuation",
        "Development Advisory",
      ],
    },
    {
      icon: Pickaxe,
      title: "Mining",
      description: "Expert advisory for land sourcing, concessions, joint ventures, and regulatory compliance in the mining sector.",
      features: [
        "Land Sourcing & Acquisition",
        "Joint Venture Facilitation",
        "Permitting & Compliance",
        "Investment Matchmaking",
      ],
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "End-to-end support for hotel and resort investments, from acquisition to operational excellence.",
      features: [
        "Hotel & Resort Sales",
        "Asset Management",
        "Operational Advisory",
        "Investment & Development",
      ],
    },
  ];

  return (
    <div>
      <Hero />

      {/* Featured Properties */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Explore our handpicked selection of premium properties across East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent-dark w-full sm:w-auto">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Comprehensive solutions across Real Estate, Mining, and Hospitality sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-12 md:py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Market Insights & Intelligence</h2>
              <p className="text-white/90 text-base md:text-lg mb-4 md:mb-6">
                Stay ahead with our comprehensive market research, price indices, and sector studies covering Real Estate, Mining, and Hospitality across East Africa.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Real-time market data and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Quarterly sector performance reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Investment opportunity alerts</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                Download Latest Report
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { value: "12.5%", label: "Avg. ROI" },
                { value: "350+", label: "Active Listings" },
                { value: "$4.2B", label: "Annual Transaction Volume" },
                { value: "25+", label: "Industry Partners" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-accent">{stat.value}</div>
                  <div className="text-white/80 text-xs md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Ready to Invest?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Connect with our team of experts to explore exclusive opportunities and receive bespoke advisory services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Request Investor Pack
            </Button>
            <Button size="lg" variant="outline" className="border-white text-accent bg-background hover:bg-accent hover:text-white hover:border-white w-full sm:w-auto">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
