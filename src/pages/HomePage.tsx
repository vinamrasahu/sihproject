import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Star, 
  Users, 
  Calendar, 
  Mountain, 
  Waves, 
  Trees,
  Camera,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const quickStats = [
    { icon: MapPin, label: "150+ Destinations", value: "150+" },
    { icon: Users, label: "Happy Travelers", value: "50K+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
    { icon: Calendar, label: "Cultural Events", value: "200+" },
  ];

  const featuredDestinations = [
    {
      name: "Netarhat",
      description: "Queen of Chotanagpur - Famous for sunrise & sunset views",
      category: "Hill Station",
      rating: 4.9,
      image: "netarhat.jpg"
    },
    {
      name: "Betla National Park",
      description: "Wildlife sanctuary with tigers, elephants & rich biodiversity",
      category: "Wildlife",
      rating: 4.7,
      image: "betla.jpg"
    },
    {
      name: "Hundru Falls",
      description: "230ft waterfall perfect for adventure seekers",
      category: "Waterfall",
      rating: 4.8,
      image: "hundru.jpg"
    },
    {
      name: "Deoghar",
      description: "Sacred Jyotirlinga temple town with spiritual significance",
      category: "Spiritual",
      rating: 4.9,
      image: "deoghar.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
<video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="public/bgvideo.mp4" type="video/mp4" />
</video>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Mountain className="h-16 w-16 text-white/20" />
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse delay-1000">
          <Waves className="h-12 w-12 text-white/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-500">
          <Trees className="h-20 w-20 text-white/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Welcome to 
            <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Jharkhand
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
            Discover the Land of Forests, Waterfalls & Rich Tribal Heritage
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Link to="/ar-vr">
              <Button size="lg" className="bg-white text-primary hover:bg-orange-400 hover:scale-105 transition-bounce font-semibold px-8 py-3">
                <Camera className="mr-2 h-5 w-5" />
                Explore Jharkhand
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary hover:bg-orange-400 hover:scale-105 transition-bounce font-semibold px-8 py-3"
            >
              <Star className="mr-2 h-5 w-5" />
              Rate Experience
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hero transition-smooth hover:scale-105">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the most popular attractions that showcase Jharkhand's natural beauty and cultural heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <Card key={index} className="group cursor-pointer shadow-card hover:shadow-hero transition-smooth hover:scale-105">
                <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden" style={{ backgroundImage: "url('public/destination.jpg')",backgroundSize:"cover" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm">
                    {destination.category}
                  </Badge>
                  <div className="absolute bottom-3 right-3">
                    <div className="flex items-center space-x-1 text-white text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-smooth">
                    {destination.name}
                  </CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/ar-vr">
              <Button size="lg" className="hover:scale-105 transition-bounce">
                <ArrowRight className="mr-2 h-5 w-5" />
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Perfect Trip</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for an unforgettable Jharkhand experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/ai-planner">
              <Card className="group cursor-pointer shadow-card hover:shadow-hero transition-smooth hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-smooth">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle>AI Trip Planner</CardTitle>
                  <CardDescription>
                    Get personalized itineraries based on your preferences, budget, and time
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/homestays">
              <Card className="group cursor-pointer shadow-card hover:shadow-hero transition-smooth hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-smooth">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Local Homestays</CardTitle>
                  <CardDescription>
                    Stay with local families and experience authentic Jharkhandi culture
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/guides">
              <Card className="group cursor-pointer shadow-card hover:shadow-hero transition-smooth hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-tribal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tribal group-hover:text-white transition-smooth">
                    <Star className="h-6 w-6" />
                  </div>
                  <CardTitle>Verified Guides</CardTitle>
                  <CardDescription>
                    Book certified local guides for authentic experiences and insights
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}