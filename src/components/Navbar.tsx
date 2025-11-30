import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [listingsOpen, setListingsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const listingLinks = [
    { name: "Dar es Salaam", href: "/listings/dar-es-salaam" },
    { name: "Zanzibar", href: "/listings/zanzibar" },
    { name: "Arusha", href: "/listings/arusha" },
    { name: "Nairobi", href: "/listings/nairobi" },
    { name: "Kigali", href: "/listings/kigali" },
  ];

  const serviceLinks = [
    { 
      name: "Real Estate", 
      subLinks: [
        { name: "Brokerage & Sales", href: "/services/real-estate/brokerage" },
        { name: "Land Acquisition", href: "/services/real-estate/land-acquisition" },
        { name: "Valuation & Appraisal", href: "/services/real-estate/valuation" },
        { name: "Property Management", href: "/services/real-estate/management" },
        { name: "Development Advisory", href: "/services/real-estate/development" },
        { name: "Leasing", href: "/services/real-estate/leasing" },
      ]
    },
    { 
      name: "Mining Advisory", 
      subLinks: [
        { name: "Land Sourcing", href: "/services/mining/land-sourcing" },
        { name: "Joint Ventures", href: "/services/mining/joint-ventures" },
        { name: "Compliance Advisory", href: "/services/mining/compliance" },
        { name: "Offtake & Financing", href: "/services/mining/offtake" },
        { name: "Site Feasibility", href: "/services/mining/feasibility" },
      ]
    },
    { 
      name: "Hospitality", 
      subLinks: [
        { name: "Hotel & Resort Sales", href: "/services/hospitality/sales" },
        { name: "Asset Management", href: "/services/hospitality/management" },
        { name: "Operational Advisory", href: "/services/hospitality/operations" },
        { name: "Investment & Development", href: "/services/hospitality/investment" },
        { name: "Leasing & Partnerships", href: "/services/hospitality/leasing" },
      ]
    },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Breakthrough Prime Properties" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto">
                  {serviceLinks.map((service, idx) => (
                    <div key={service.name}>
                      <div className="px-4 py-2 font-semibold text-primary bg-secondary/50">
                        {service.name}
                      </div>
                      {service.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className="block px-4 py-2.5 pl-6 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                      {idx < serviceLinks.length - 1 && (
                        <div className="border-t border-border my-1" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Listings Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setListingsOpen(true)}
              onMouseLeave={() => setListingsOpen(false)}
            >
              <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Listings
                <ChevronDown className={`h-4 w-4 transition-transform ${listingsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {listingsOpen && (
                <div className="absolute top-full left-0 w-56 bg-popover border border-border rounded-lg shadow-lg z-50">
                  <Link
                    to="/listings"
                    className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors first:rounded-t-lg font-medium border-b border-border"
                  >
                    All Listings
                  </Link>
                  {listingLinks.map((listing) => (
                    <Link
                      key={listing.name}
                      to={listing.href}
                      className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors last:rounded-b-lg"
                    >
                      {listing.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
            
            <Link to="/get-started">
              <Button className="bg-accent hover:bg-accent-dark">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Submenu */}
            <div className="py-3 border-t border-border mt-2">
              <div className="font-medium text-foreground mb-2">Services</div>
              {serviceLinks.map((service) => (
                <div key={service.name} className="mb-3">
                  <div className="font-medium text-sm text-primary mb-1">{service.name}</div>
                  {service.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      className="block py-1.5 pl-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Mobile Listings Submenu */}
            <div className="py-3 border-t border-border mt-2">
              <div className="font-medium text-foreground mb-2">Listings</div>
              <Link
                to="/listings"
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                All Listings
              </Link>
              {listingLinks.map((listing) => (
                <Link
                  key={listing.name}
                  to={listing.href}
                  className="block py-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {listing.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="block py-3 text-foreground hover:text-primary transition-colors border-t border-border mt-2 pt-5"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <Link to="/get-started">
              <Button className="w-full mt-4 bg-accent hover:bg-accent-dark">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
