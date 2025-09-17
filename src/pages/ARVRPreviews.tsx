import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Eye, 
  Play, 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock,
  Camera,
  Mountain,
  Waves,
  Trees,
  Building
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  duration: string;
  hasAR: boolean;
  hasVR: boolean;
  has360: boolean;
  image: string;
  location: string;
}

export default function ARVRPreviews() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const destinations: Destination[] = [
    {
      id: "1",
      name: "Netarhat Hill Station",
      description: "Experience the breathtaking sunrise and sunset views from the Queen of Chotanagpur plateau",
      category: "Hill Station",
      rating: 4.9,
      duration: "3-5 mins",
      hasAR: true,
      hasVR: true,
      has360: true,
      image: "netarhat-preview.jpg",
      location: "Latehar District"
    },
    {
      id: "2",
      name: "Hundru Falls",
      description: "Witness the magnificent 320-foot waterfall cascading down rocky cliffs",
      category: "Waterfall",
      rating: 4.8,
      duration: "4-6 mins",
      hasAR: true,
      hasVR: true,
      has360: true,
      image: "hundru-preview.jpg",
      location: "Ranchi District"
    },
    {
      id: "3",
      name: "Betla National Park",
      description: "Virtual safari through dense forests spotting tigers, elephants, and diverse wildlife",
      category: "Wildlife",
      rating: 4.7,
      duration: "8-10 mins",
      hasAR: false,
      hasVR: true,
      has360: true,
      image: "betla-preview.jpg",
      location: "Palamu District"
    },
    {
      id: "4",
      name: "Deoghar Baidyanath Temple",
      description: "Sacred Jyotirlinga temple with rich spiritual heritage and architecture",
      category: "Spiritual",
      rating: 4.9,
      duration: "5-7 mins",
      hasAR: true,
      hasVR: true,
      has360: true,
      image: "deoghar-preview.jpg",
      location: "Deoghar District"
    },
    {
      id: "5",
      name: "Patratu Valley",
      description: "Scenic valley views with the beautiful Patratu Dam and surrounding hills",
      category: "Valley",
      rating: 4.6,
      duration: "3-4 mins",
      hasAR: false,
      hasVR: true,
      has360: true,
      image: "patratu-preview.jpg",
      location: "Ramgarh District"
    },
    {
      id: "6",
      name: "Tribal Heritage Museum",
      description: "Immersive experience of Jharkhand's rich tribal culture and traditions",
      category: "Cultural",
      rating: 4.5,
      duration: "6-8 mins",
      hasAR: true,
      hasVR: true,
      has360: false,
      image: "tribal-museum-preview.jpg",
      location: "Ranchi"
    }
  ];

  const categories = ["all", "Hill Station", "Waterfall", "Wildlife", "Spiritual", "Valley", "Cultural"];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || dest.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hill Station": return Mountain;
      case "Waterfall": return Waves;
      case "Wildlife": return Trees;
      case "Spiritual": return Building;
      default: return MapPin;
    }
  };

  const openPreview = (destination: Destination, type: 'AR' | 'VR' | '360') => {
    setSelectedDestination(destination);
    // In a real app, this would open the AR/VR viewer
    console.log(`Opening ${type} preview for ${destination.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">AR/VR Destination Previews</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience Jharkhand's stunning destinations before you visit through immersive AR, VR, and 360° previews
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => {
            const CategoryIcon = getCategoryIcon(destination.category);
            return (
              <Card key={destination.id} className="group shadow-card hover:shadow-hero transition-smooth">
                <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden" style={{ backgroundImage: "url('/arvr.jpg')",backgroundSize:"cover" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm">
                    <CategoryIcon className="h-3 w-3 mr-1" />
                    {destination.category}
                  </Badge>
                  
                  {/* Rating */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 text-white text-sm">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>{destination.rating}</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 text-white text-sm">
                      <Clock className="h-3 w-3" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-smooth">
                    {destination.name}
                  </CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    {destination.location}
                  </CardDescription>
                  <CardDescription>
                    {destination.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Preview Options */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.has360 && (
                      <Badge variant="outline" className="text-xs">
                        360° View
                      </Badge>
                    )}
                    {destination.hasVR && (
                      <Badge variant="outline" className="text-xs">
                        VR Experience
                      </Badge>
                    )}
                    {destination.hasAR && (
                      <Badge variant="outline" className="text-xs">
                        AR Preview
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {destination.has360 && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => openPreview(destination, '360')}
                        className="hover:scale-105 transition-bounce"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        360° View
                      </Button>
                    )}
                    {destination.hasVR && (
                      <Button 
                        size="sm"
                        onClick={() => openPreview(destination, 'VR')}
                        className="hover:scale-105 transition-bounce"
                      >
                        <Camera className="h-4 w-4 mr-1" />
                        VR Tour
                      </Button>
                    )}
                    {destination.hasAR && (
                      <Button 
                        size="sm" 
                        variant="secondary"
                        onClick={() => openPreview(destination, 'AR')}
                        className="hover:scale-105 transition-bounce col-span-2"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        AR Preview
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Eye className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find more destinations.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center shadow-card">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>360° Views</CardTitle>
              <CardDescription>
                Immersive panoramic views of destinations from every angle
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <Camera className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>VR Experience</CardTitle>
              <CardDescription>
                Full virtual reality tours for complete immersion
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <Mountain className="h-12 w-12 text-tribal mx-auto mb-4" />
              <CardTitle>AR Preview</CardTitle>
              <CardDescription>
                Augmented reality overlays with information and directions
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}