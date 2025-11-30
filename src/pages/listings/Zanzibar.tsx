import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import { ArrowLeft } from "lucide-react";
import hotelProperty from "@/assets/hotel-property.jpg";

const Zanzibar = () => {
  const properties = [
    {
      id: "2",
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
  ];

  return (
    <div>
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/listings" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to All Listings
          </Link>
          <h1 className="text-5xl font-bold mb-4">Properties in Zanzibar</h1>
          <p className="text-xl opacity-90">Exclusive hospitality and resort opportunities in paradise</p>
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

export default Zanzibar;
