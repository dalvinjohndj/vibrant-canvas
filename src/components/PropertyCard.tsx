import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id?: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  area: string;
  type: string;
  status?: "For Sale" | "For Rent" | "Sold";
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  type,
  status = "For Sale",
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <img
          src={image}
          alt={`${title} - ${type} property in ${location}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-2 right-2 md:top-4 md:right-4 bg-accent text-accent-foreground text-xs md:text-sm">
          {status}
        </Badge>
        <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-primary-foreground text-xs md:text-sm">
          {type}
        </Badge>
      </div>

      <CardContent className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground line-clamp-2">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-4 text-sm md:text-base">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-4 text-xs md:text-sm text-muted-foreground">
          {beds && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{beds} Beds</span>
            </div>
          )}
          {baths && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{baths} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>

        <div className="text-xl md:text-2xl font-bold text-primary mb-4">{price}</div>
      </CardContent>

      <CardFooter className="p-4 md:p-6 pt-0 flex flex-col sm:flex-row gap-2">
        <Button className="flex-1 bg-primary hover:bg-primary-dark text-sm md:text-base">View Details</Button>
        <Button variant="outline" className="flex-1 text-sm md:text-base">Schedule Tour</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
