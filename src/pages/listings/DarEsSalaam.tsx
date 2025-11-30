import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import { ArrowLeft } from "lucide-react";
import commercialProperty from "@/assets/commercial-property.jpg";
import heroProperty from "@/assets/hero-property.jpg";

const DarEsSalaam = () => {
  const properties = [
    {
      id: "1",
      image: commercialProperty,
      title: "Premium Office Complex",
      location: "Dar es Salaam, Tanzania",
      price: "$2.5M",
      area: "15,000 sq ft",
      type: "Commercial",
      status: "For Sale" as const,
    },
    {
      id: "4",
      image: heroProperty,
      title: "Waterfront Business Center",
      location: "Dar es Salaam, Tanzania",
      price: "$4.2M",
      beds: 0,
      area: "22,000 sq ft",
      type: "Commercial",
      status: "For Sale" as const,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/listings" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to All Listings
          </Link>
          <h1 className="text-5xl font-bold mb-4">Properties in Dar es Salaam</h1>
          <p className="text-xl opacity-90">Premium investment opportunities in Tanzania's commercial hub</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link key={property.id} to={`/listings/${property.id}`}>
                <PropertyCard {...property} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DarEsSalaam;
