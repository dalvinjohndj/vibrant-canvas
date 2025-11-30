import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, ArrowLeft, Phone, Mail } from "lucide-react";
import PropertyGallery from "@/components/PropertyGallery";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import commercialProperty from "@/assets/commercial-property.jpg";
import hotelProperty from "@/assets/hotel-property.jpg";
import farmProperty from "@/assets/farm-property.jpg";
import heroProperty from "@/assets/hero-property.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock property data - in production this would come from the CMS
  const properties = [
    {
      id: "1",
      images: [commercialProperty, heroProperty, farmProperty],
      title: "Premium Office Complex",
      location: "Dar es Salaam, Tanzania",
      price: "$2.5M",
      beds: undefined,
      baths: undefined,
      area: "15,000 sq ft",
      type: "Commercial",
      status: "For Sale" as const,
      description: "Prime commercial property in the heart of Dar es Salaam's business district. This modern office complex features state-of-the-art facilities, ample parking, and excellent accessibility. Perfect for corporate headquarters or investment opportunities.",
      features: ["24/7 Security", "Backup Generator", "High-Speed Elevators", "Central AC", "Parking for 50+ vehicles", "Fiber Optic Internet"],
      coordinates: { lat: -6.7924, lng: 39.2083 }
    },
    {
      id: "2",
      images: [hotelProperty, heroProperty, commercialProperty],
      title: "Luxury Beachfront Resort",
      location: "Zanzibar, Tanzania",
      price: "$8.5M",
      beds: 50,
      baths: 52,
      area: "50,000 sq ft",
      type: "Hospitality",
      status: "For Sale" as const,
      description: "Exceptional beachfront resort featuring 50 luxury rooms with ocean views. This turnkey operation includes restaurant, spa facilities, and private beach access. Consistent high occupancy rates and strong revenue performance.",
      features: ["Private Beach", "Spa & Wellness Center", "Ocean View Restaurant", "Swimming Pool", "Conference Facilities", "Water Sports Equipment"],
      coordinates: { lat: -6.1659, lng: 39.2026 }
    },
    {
      id: "3",
      images: [farmProperty, heroProperty, commercialProperty],
      title: "Prime Agricultural Land",
      location: "Arusha, Tanzania",
      price: "$1.2M",
      beds: undefined,
      baths: undefined,
      area: "500 Acres",
      type: "Land",
      status: "For Sale" as const,
      description: "Expansive agricultural land with fertile soil and reliable water access. Ideal for large-scale farming operations, eco-tourism, or development projects. Clear title and all necessary permits available.",
      features: ["Water Access", "Fertile Soil", "Road Access", "Clear Title", "Electricity Available", "Fenced Perimeter"],
      coordinates: { lat: -3.3869, lng: 36.6830 }
    },
  ];

  const property = properties.find(p => p.id === id) || properties[0];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="outline" onClick={() => navigate("/listings")} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Listings
        </Button>
      </div>

      {/* Gallery */}
      <PropertyGallery images={property.images} title={property.title} />

      {/* Property Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">{property.type}</Badge>
                <Badge className="bg-accent text-accent-foreground">{property.status}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
              <div className="text-4xl font-bold text-primary">{property.price}</div>
            </div>

            {/* Property Stats */}
            <div className="flex flex-wrap gap-6 p-6 bg-secondary/30 rounded-lg">
              {property.beds && (
                <div className="flex items-center gap-2">
                  <Bed className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                </div>
              )}
              {property.baths && (
                <div className="flex items-center gap-2">
                  <Bath className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{property.baths}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Square className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{property.area}</div>
                  <div className="text-sm text-muted-foreground">Total Area</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="w-full h-[400px] bg-secondary/30 rounded-lg flex items-center justify-center">
                <iframe
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  src={`https://www.google.com/maps/embed/v1/place?key=&q=${property.coordinates.lat},${property.coordinates.lng}`}
                  allowFullScreen
                  title="Property Location"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="border rounded-lg p-6 bg-card sticky top-24">
              <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
              <ContactForm propertyTitle={property.title} />
              
              <div className="mt-6 pt-6 border-t space-y-3">
                <a href="tel:+260XXXXXXXXX" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+260 XXX XXX XXX</span>
                </a>
                <a href="mailto:info@breakthroughprime.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>info@breakthroughprime.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default PropertyDetail;
