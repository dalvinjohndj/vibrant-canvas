import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import { ArrowLeft } from "lucide-react";
import farmProperty from "@/assets/farm-property.jpg";
import heroProperty from "@/assets/hero-property.jpg";

const Arusha = () => {
  const properties = [
    {
      id: "3",
      image: farmProperty,
      title: "Prime Agricultural Land",
      location: "Arusha, Tanzania",
      price: "$1.2M",
      area: "500 Acres",
      type: "Land",
      status: "For Sale" as const,
    },
    {
      id: "7",
      image: heroProperty,
      title: "Luxury Mountain Villa",
      location: "Arusha, Tanzania",
      price: "$3.8M",
      beds: 6,
      baths: 7,
      area: "8,500 sq ft",
      type: "Residential",
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
          <h1 className="text-5xl font-bold mb-4">Properties in Arusha</h1>
          <p className="text-xl opacity-90">Agricultural land and luxury properties near Mount Kilimanjaro</p>
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

export default Arusha;
