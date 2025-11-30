import { useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import commercialProperty from "@/assets/commercial-property.jpg";
import hotelProperty from "@/assets/hotel-property.jpg";
import farmProperty from "@/assets/farm-property.jpg";
import heroProperty from "@/assets/hero-property.jpg";

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const allProperties = [
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
      id: "4",
      image: heroProperty,
      title: "Luxury Mountain Villa",
      location: "Kilimanjaro, Tanzania",
      price: "$3.8M",
      beds: 6,
      baths: 7,
      area: "8,500 sq ft",
      type: "Residential",
      status: "For Sale" as const,
    },
    {
      id: "5",
      image: commercialProperty,
      title: "Modern Business Park",
      location: "Nairobi, Kenya",
      price: "$5.2M",
      area: "25,000 sq ft",
      type: "Commercial",
      status: "For Sale" as const,
    },
    {
      id: "6",
      image: farmProperty,
      title: "Industrial Development Site",
      location: "Kigali, Rwanda",
      price: "$900K",
      area: "200 Acres",
      type: "Industrial",
      status: "For Sale" as const,
    },
  ];

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = searchTerm === "" || 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = propertyType === "all" || 
      property.type.toLowerCase() === propertyType.toLowerCase();
    
    const propertyPrice = parseFloat(property.price.replace(/[$M,K]/g, "")) * 
      (property.price.includes("M") ? 1000000 : 1000);
    
    let matchesPrice = true;
    if (priceRange === "0-1m") matchesPrice = propertyPrice < 1000000;
    else if (priceRange === "1m-5m") matchesPrice = propertyPrice >= 1000000 && propertyPrice <= 5000000;
    else if (priceRange === "5m-10m") matchesPrice = propertyPrice > 5000000 && propertyPrice <= 10000000;
    else if (priceRange === "10m+") matchesPrice = propertyPrice > 10000000;
    
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Property Listings</h1>
          <p className="text-xl opacity-90">Discover premium investment opportunities across East Africa</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-background sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search by location, property name..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-1m">Under $1M</SelectItem>
                <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                <SelectItem value="10m+">$10M+</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-5 w-5" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProperties.length}</span> properties
            </p>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <Link key={property.id} to={`/listings/${property.id}`}>
                  <PropertyCard {...property} />
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline">Previous</Button>
            <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We have access to exclusive off-market properties. Contact us to discuss your specific requirements.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent-dark">
            Request Custom Search
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Listings;
