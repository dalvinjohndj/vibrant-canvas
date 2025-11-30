import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  linkTo?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, linkTo }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
          <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
        </div>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">{description}</p>
        <ul className="space-y-2 mb-4 md:mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-2 flex-shrink-0">•</span>
              <span className="text-xs md:text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        {linkTo ? (
          <Link to={linkTo}>
            <Button variant="outline" className="w-full text-sm md:text-base">Learn More</Button>
          </Link>
        ) : (
          <Button variant="outline" className="w-full text-sm md:text-base">Learn More</Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
