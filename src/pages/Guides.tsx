import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Star, 
  MapPin, 
  Languages, 
  Award,
  Shield,
  Clock,
  Users,
  CheckCircle,
  MessageCircle,
  Calendar
} from "lucide-react";

interface Guide {
  id: string;
  name: string;
  specialization: string[];
  location: string;
  experience: number;
  rating: number;
  reviews: number;
  languages: string[];
  rate: number;
  rateType: "per day" | "per hour" | "per tour";
  avatar: string;
  isVerified: boolean;
  isBlockchainCertified: boolean;
  availability: "available" | "busy" | "unavailable";
  bio: string;
  certifications: string[];
  recentReviews: { user: string; rating: number; comment: string; date: string }[];
}

export default function Guides() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const guides: Guide[] = [
    {
      id: "1",
      name: "Birsa Munda",
      specialization: ["Cultural Tours", "Tribal Heritage", "Historical Sites"],
      location: "Ranchi",
      experience: 8,
      rating: 4.9,
      reviews: 234,
      languages: ["Hindi", "English", "Mundari", "Santhali"],
      rate: 2500,
      rateType: "per day",
      avatar: "birsa-guide.jpg",
      isVerified: true,
      isBlockchainCertified: true,
      availability: "available",
      bio: "Expert in tribal culture and heritage sites. Specializes in authentic cultural experiences and traditional storytelling.",
      certifications: ["Jharkhand Tourism Board Certified", "Cultural Heritage Expert", "Blockchain Verified"],
      recentReviews: [
        { user: "Sarah Johnson", rating: 5, comment: "Amazing cultural insights!", date: "2024-01-10" },
        { user: "Raj Patel", rating: 5, comment: "Very knowledgeable about tribal traditions", date: "2024-01-08" }
      ]
    },
    {
      id: "2",
      name: "Priya Oraon",
      specialization: ["Wildlife Safari", "Nature Photography", "Adventure Tours"],
      location: "Betla National Park",
      experience: 6,
      rating: 4.8,
      reviews: 189,
      languages: ["Hindi", "English", "Kurukh"],
      rate: 3000,
      rateType: "per day",
      avatar: "priya-guide.jpg",
      isVerified: true,
      isBlockchainCertified: true,
      availability: "available",
      bio: "Wildlife enthusiast with deep knowledge of Jharkhand's flora and fauna. Perfect for adventure seekers and nature lovers.",
      certifications: ["Wildlife Guide License", "Photography Expert", "Blockchain Verified"],
      recentReviews: [
        { user: "Mike Chen", rating: 5, comment: "Spotted tigers thanks to her expertise!", date: "2024-01-12" },
        { user: "Lisa Kumar", rating: 4, comment: "Great photography tips", date: "2024-01-09" }
      ]
    },
    {
      id: "3",
      name: "Soma Soren",
      specialization: ["Hill Station Tours", "Trekking", "Sunrise/Sunset Tours"],
      location: "Netarhat",
      experience: 10,
      rating: 4.9,
      reviews: 312,
      languages: ["Hindi", "English", "Santhali"],
      rate: 2000,
      rateType: "per day",
      avatar: "soma-guide.jpg",
      isVerified: true,
      isBlockchainCertified: false,
      availability: "busy",
      bio: "Mountain guide with extensive knowledge of hill stations. Known for spectacular sunrise and sunset tour experiences.",
      certifications: ["Mountain Guide Certificate", "First Aid Certified"],
      recentReviews: [
        { user: "David Wilson", rating: 5, comment: "Perfect sunrise tour at Netarhat!", date: "2024-01-11" },
        { user: "Anita Singh", rating: 5, comment: "Excellent trekking guide", date: "2024-01-07" }
      ]
    },
    {
      id: "4",
      name: "Ravi Mahato",
      specialization: ["Waterfall Tours", "Adventure Sports", "Rock Climbing"],
      location: "Hundru Falls",
      experience: 5,
      rating: 4.7,
      reviews: 145,
      languages: ["Hindi", "English"],
      rate: 1800,
      rateType: "per day",
      avatar: "ravi-guide.jpg",
      isVerified: true,
      isBlockchainCertified: true,
      availability: "available",
      bio: "Adventure sports expert specializing in waterfall tours and rock climbing. Safety-first approach with thrilling experiences.",
      certifications: ["Adventure Sports License", "Rock Climbing Instructor", "Blockchain Verified"],
      recentReviews: [
        { user: "Tom Brown", rating: 5, comment: "Thrilling adventure at Hundru Falls!", date: "2024-01-13" },
        { user: "Sneha Reddy", rating: 4, comment: "Safe and exciting experience", date: "2024-01-06" }
      ]
    },
    {
      id: "5",
      name: "Sunita Devi",
      specialization: ["Spiritual Tours", "Temple Visits", "Religious Heritage"],
      location: "Deoghar",
      experience: 12,
      rating: 4.8,
      reviews: 276,
      languages: ["Hindi", "English", "Sanskrit"],
      rate: 1500,
      rateType: "per day",
      avatar: "sunita-guide.jpg",
      isVerified: true,
      isBlockchainCertified: false,
      availability: "available",
      bio: "Spiritual guide with deep knowledge of religious sites and traditions. Specializes in temple tours and spiritual experiences.",
      certifications: ["Religious Studies Certificate", "Temple Guide License"],
      recentReviews: [
        { user: "Amit Gupta", rating: 5, comment: "Very spiritual and knowledgeable", date: "2024-01-14" },
        { user: "Kavya Sharma", rating: 5, comment: "Perfect temple tour guide", date: "2024-01-05" }
      ]
    }
  ];

  const specializations = ["all", "Cultural Tours", "Wildlife Safari", "Hill Station Tours", "Waterfall Tours", "Spiritual Tours"];
  const locations = ["all", "Ranchi", "Betla National Park", "Netarhat", "Hundru Falls", "Deoghar"];

  const getFilteredGuides = () => {
    let filtered = guides.filter(guide => {
      const matchesSearch = guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           guide.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesSpecialization = specializationFilter === "all" || 
                                   guide.specialization.includes(specializationFilter);
      const matchesLocation = locationFilter === "all" || guide.location === locationFilter;
      
      return matchesSearch && matchesSpecialization && matchesLocation;
    });

    // Sort guides
    switch (sortBy) {
      case "experience":
        filtered.sort((a, b) => b.experience - a.experience);
        break;
      case "rate-low":
        filtered.sort((a, b) => a.rate - b.rate);
        break;
      case "rate-high":
        filtered.sort((a, b) => b.rate - a.rate);
        break;
      default: // rating
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available": return "bg-green-100 text-green-800";
      case "busy": return "bg-yellow-100 text-yellow-800";
      case "unavailable": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const bookGuide = (guide: Guide) => {
    console.log(`Booking guide: ${guide.name}`);
  };

  const contactGuide = (guide: Guide) => {
    console.log(`Contacting guide: ${guide.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Verified Local Guides</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with certified local guides for authentic experiences and deep insights into Jharkhand's culture and nature
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={specializationFilter} onValueChange={setSpecializationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  {specializations.map(spec => (
                    <SelectItem key={spec} value={spec}>
                      {spec === "all" ? "All Specializations" : spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
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

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="rate-low">Price: Low to High</SelectItem>
                  <SelectItem value="rate-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {getFilteredGuides().length} verified guides matching your criteria
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {getFilteredGuides().map((guide) => (
            <Card key={guide.id} className="shadow-card hover:shadow-hero transition-smooth">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={guide.avatar} alt={guide.name} />
                      <AvatarFallback>{guide.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            <span>{guide.name}</span>
                            {guide.isVerified && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                            {guide.isBlockchainCertified && (
                              <Shield className="h-4 w-4 text-blue-500" />
                            )}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{guide.location}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            ₹{guide.rate}
                          </div>
                          <div className="text-xs text-muted-foreground">{guide.rateType}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          <span className="font-medium">{guide.rating}</span>
                          <span className="text-sm text-muted-foreground">({guide.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{guide.experience} years exp</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <Badge className={getAvailabilityColor(guide.availability)}>
                    {guide.availability.charAt(0).toUpperCase() + guide.availability.slice(1)}
                  </Badge>

                  {/* Bio */}
                  <CardDescription>
                    {guide.bio}
                  </CardDescription>

                  {/* Specializations */}
                  <div>
                    <div className="text-sm font-medium mb-2">Specializations:</div>
                    <div className="flex flex-wrap gap-1">
                      {guide.specialization.map((spec) => (
                        <Badge key={spec} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center space-x-2">
                    <Languages className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Languages: {guide.languages.join(", ")}
                    </span>
                  </div>

                  {/* Certifications */}
                  <div>
                    <div className="text-sm font-medium mb-2">Certifications:</div>
                    <div className="flex flex-wrap gap-1">
                      {guide.certifications.map((cert) => (
                        <Badge key={cert} variant="secondary" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Recent Reviews */}
                  {guide.recentReviews.length > 0 && (
                    <div>
                      <div className="text-sm font-medium mb-2">Recent Reviews:</div>
                      <div className="space-y-2">
                        {guide.recentReviews.slice(0, 2).map((review, index) => (
                          <div key={index} className="bg-muted p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">{review.user}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-current text-yellow-400" />
                                <span className="text-xs">{review.rating}</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">"{review.comment}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:scale-105 transition-bounce"
                      onClick={() => contactGuide(guide)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button 
                      className="flex-1 hover:scale-105 transition-bounce"
                      onClick={() => bookGuide(guide)}
                      disabled={guide.availability === "unavailable"}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {getFilteredGuides().length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No guides found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or explore different specializations.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center shadow-card">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Verified & Certified</CardTitle>
              <CardDescription>
                All guides are verified and many are blockchain-certified for authenticity
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Expert Knowledge</CardTitle>
              <CardDescription>
                Local experts with deep knowledge of culture, history, and nature
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-tribal mx-auto mb-4" />
              <CardTitle>Secure Booking</CardTitle>
              <CardDescription>
                Blockchain-enabled transactions ensure secure and transparent booking
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}