import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    type: "all",
    location: "",
    priceRange: "all",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to listings with search params
    const params = new URLSearchParams();
    if (searchParams.type !== "all") params.set("type", searchParams.type);
    if (searchParams.location) params.set("location", searchParams.location);
    if (searchParams.priceRange !== "all") params.set("price", searchParams.priceRange);
    
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-5xl mx-auto">
      <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl p-4 border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select
            value={searchParams.type}
            onValueChange={(value) => setSearchParams({ ...searchParams, type: value })}
          >
            <SelectTrigger>
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

          <Input
            placeholder="Location..."
            value={searchParams.location}
            onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            className="bg-background"
          />

          <Select
            value={searchParams.priceRange}
            onValueChange={(value) => setSearchParams({ ...searchParams, priceRange: value })}
          >
            <SelectTrigger>
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

          <Button type="submit" size="lg" className="gap-2">
            <Search className="h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
