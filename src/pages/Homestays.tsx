import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Star, 
  MapPin, 
  Users, 
  Wifi, 
  Car, 
  Utensils,
  Home,
  Heart,
  Filter,
  Calendar
} from "lucide-react";

interface Homestay {
  id: string;
  name: string;
  host: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  maxGuests: number;
  amenities: string[];
  images: string[];
  isVerified: boolean;
  isFavorite: boolean;
  availability: boolean;
  cultural_activities: string[];
  languages_spoken: string[];
}

export default function Homestays() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [guestCount, setGuestCount] = useState("1");
  const [showFilters, setShowFilters] = useState(false);

  const homestays: Homestay[] = [
    {
      id: "1",
      name: "Traditional Munda Family Home",
      host: "Soma Munda",
      location: "Khunti District",
      description: "Experience authentic tribal life with the Munda community. Learn traditional crafts, participate in daily activities, and enjoy home-cooked tribal cuisine.",
      price: 1200,
      rating: 4.9,
      reviews: 89,
      maxGuests: 4,
      amenities: ["Traditional Meals", "Cultural Activities", "Village Tours", "Handicraft Workshop"],
      images: ["munda-home1.jpg", "munda-home2.jpg"],
      isVerified: true,
      isFavorite: false,
      availability: true,
      cultural_activities: ["Tribal Dance", "Traditional Cooking", "Handicraft Making"],
      languages_spoken: ["Hindi", "Mundari", "English"]
    },
    {
      id: "2",
      name: "Santhal Heritage Homestay",
      host: "Birsa Soren",
      location: "Dumka District", 
      description: "Stay with a Santhal family and immerse yourself in their rich cultural heritage. Participate in traditional festivals and learn about sustainable farming.",
      price: 1000,
      rating: 4.8,
      reviews: 156,
      maxGuests: 6,
      amenities: ["Organic Meals", "Farm Experience", "Folk Music", "Traditional Games"],
      images: ["santhal-home1.jpg", "santhal-home2.jpg"],
      isVerified: true,
      isFavorite: true,
      availability: true,
      cultural_activities: ["Folk Music", "Traditional Farming", "Festival Participation"],
      languages_spoken: ["Hindi", "Santhali", "Bengali"]
    },
    {
      id: "3",
      name: "Hill Station Family Retreat",
      host: "Raj Kumar Singh",
      location: "Netarhat",
      description: "Cozy family homestay in the beautiful hill station of Netarhat. Perfect for families seeking peace and natural beauty with modern comforts.",
      price: 2200,
      rating: 4.7,
      reviews: 203,
      maxGuests: 8,
      amenities: ["Modern Comfort", "Hill Views", "Bonfire Nights", "Trekking Guide"],
      images: ["netarhat-home1.jpg", "netarhat-home2.jpg"],
      isVerified: true,
      isFavorite: false,
      availability: true,
      cultural_activities: ["Nature Walks", "Sunrise Tours", "Local Cuisine"],
      languages_spoken: ["Hindi", "English"]
    },
    {
      id: "4",
      name: "Eco-Friendly Forest Lodge",
      host: "Priya Devi",
      location: "Betla National Park",
      description: "Sustainable eco-lodge near Betla National Park. Experience wildlife, learn about conservation, and enjoy solar-powered comfortable accommodation.",
      price: 2800,
      rating: 4.6,
      reviews: 134,
      maxGuests: 4,
      amenities: ["Eco-Friendly", "Wildlife Tours", "Solar Power", "Conservation Education"],
      images: ["betla-lodge1.jpg", "betla-lodge2.jpg"],
      isVerified: true,
      isFavorite: false,
      availability: false,
      cultural_activities: ["Wildlife Safari", "Nature Photography", "Conservation Activities"],
      languages_spoken: ["Hindi", "English"]
    },
    {
      id: "5",
      name: "Tribal Artisan Workshop Home",
      host: "Champa Oraon",
      location: "Gumla District",
      description: "Learn traditional crafts directly from skilled tribal artisans. Create your own souvenirs while staying in a comfortable family environment.",
      price: 1500,
      rating: 4.8,
      reviews: 67,
      maxGuests: 3,
      amenities: ["Craft Workshops", "Art Classes", "Traditional Meals", "Cultural Stories"],
      images: ["artisan-home1.jpg", "artisan-home2.jpg"],
      isVerified: true,
      isFavorite: true,
      availability: true,
      cultural_activities: ["Basket Weaving", "Pottery", "Traditional Art"],
      languages_spoken: ["Hindi", "Kurukh", "English"]
    }
  ];

  const locations = ["all", "Khunti District", "Dumka District", "Netarhat", "Betla National Park", "Gumla District"];

  const filteredHomestays = homestays.filter(homestay => {
    const matchesSearch = homestay.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         homestay.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         homestay.host.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === "all" || homestay.location === selectedLocation;
    const matchesPrice = homestay.price >= priceRange[0] && homestay.price <= priceRange[1];
    const matchesGuests = parseInt(guestCount) <= homestay.maxGuests;
    
    return matchesSearch && matchesLocation && matchesPrice && matchesGuests;
  });

  const toggleFavorite = (homestayId: string) => {
    console.log(`Toggled favorite for homestay ${homestayId}`);
  };

  const bookHomestay = (homestay: Homestay) => {
    console.log(`Booking homestay: ${homestay.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Authentic Homestays</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay with local families and experience the true culture and traditions of Jharkhand
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search homestays..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={guestCount} onValueChange={setGuestCount}>
                <SelectTrigger>
                  <SelectValue placeholder="Guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="6">6 Guests</SelectItem>
                  <SelectItem value="8">8+ Guests</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="hover:scale-105 transition-bounce"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Price Range Filter */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]} per night
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000}
                      min={500}
                      step={100}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredHomestays.length} homestays matching your criteria
          </p>
        </div>

        {/* Homestays Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredHomestays.map((homestay) => (
            <Card key={homestay.id} className="group shadow-card hover:shadow-hero transition-smooth overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-card-gradient"  style={{ backgroundImage: "url('/Home.png')",backgroundSize:"cover" }} />
                
                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {homestay.isVerified && (
                    <Badge className="bg-primary/90 backdrop-blur-sm">
                      Verified Host
                    </Badge>
                  )}
                  {!homestay.availability && (
                    <Badge variant="destructive" className="bg-red-500/90 backdrop-blur-sm">
                      Unavailable
                    </Badge>
                  )}
                </div>

                {/* Favorite Button */}
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white"
                  onClick={() => toggleFavorite(homestay.id)}
                >
                  <Heart 
                    className={`h-4 w-4 ${homestay.isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                  />
                </Button>

                {/* Quick Info */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                    <Users className="h-3 w-3" />
                    <span className="text-xs">Max {homestay.maxGuests}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-current text-yellow-400" />
                    <span className="text-xs">{homestay.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="group-hover:text-primary transition-smooth">
                        {homestay.name}
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ₹{homestay.price}
                        </div>
                        <div className="text-xs text-muted-foreground">per night</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{homestay.location}</span>
                      <span>•</span>
                      <span>Host: {homestay.host}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <CardDescription className="line-clamp-2">
                    {homestay.description}
                  </CardDescription>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1">
                    {homestay.amenities.slice(0, 3).map((amenity) => (
                      <Badge key={amenity} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {homestay.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{homestay.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Cultural Activities */}
                  <div>
                    <div className="text-sm font-medium mb-1">Cultural Activities:</div>
                    <div className="text-sm text-muted-foreground flex flex-wrap gap-1">
                      {homestay.cultural_activities.join(" • ")}
                    </div>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="font-medium">{homestay.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({homestay.reviews} reviews)
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Languages: {homestay.languages_spoken.slice(0, 2).join(", ")}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:scale-105 transition-bounce"
                    >
                      View Details
                    </Button>
                    <Button 
                      className="flex-1 hover:scale-105 transition-bounce"
                      onClick={() => bookHomestay(homestay)}
                      disabled={!homestay.availability}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {homestay.availability ? "Book Now" : "Unavailable"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredHomestays.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Home className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No homestays found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or explore different locations.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center shadow-card">
            <CardHeader>
              <Home className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Authentic Experience</CardTitle>
              <CardDescription>
                Live with local families and experience genuine Jharkhandi culture
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Verified Hosts</CardTitle>
              <CardDescription>
                All hosts are verified and trained to provide quality hospitality
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <Heart className="h-12 w-12 text-tribal mx-auto mb-4" />
              <CardTitle>Community Support</CardTitle>
              <CardDescription>
                Your stay directly supports local families and communities
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}