import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Search, 
  Star, 
  Heart,
  ShoppingCart,
  Filter,
  Palette,
  Camera,
  Home,
  Calendar
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  seller: string;
  image: string;
  isFavorite: boolean;
  inStock: boolean;
  tags: string[];
}

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [activeTab, setActiveTab] = useState("handicrafts");

  const products: Product[] = [
    {
      id: "1",
      name: "Tribal Dokra Art Elephant",
      description: "Handcrafted brass figurine using traditional Dokra art technique",
      price: 2499,
      originalPrice: 3200,
      rating: 4.8,
      reviews: 127,
      category: "handicrafts",
      seller: "Adivasi Art Collective",
      image: "dokra-elephant.jpg",
      isFavorite: false,
      inStock: true,
      tags: ["handmade", "brass", "traditional"]
    },
    {
      id: "2",
      name: "Paitkar Scroll Painting",
      description: "Traditional narrative scroll painting depicting tribal folklore",
      price: 4500,
      rating: 4.9,
      reviews: 89,
      category: "handicrafts",
      seller: "Heritage Arts Jharkhand",
      image: "paitkar-scroll.jpg",
      isFavorite: true,
      inStock: true,
      tags: ["painting", "traditional", "storytelling"]
    },
    {
      id: "3",
      name: "Sarhul Festival Tour Package",
      description: "3-day cultural immersion during the spring festival of Sarhul",
      price: 12000,
      originalPrice: 15000,
      rating: 4.7,
      reviews: 234,
      category: "events",
      seller: "Cultural Tours Jharkhand",
      image: "sarhul-festival.jpg",
      isFavorite: false,
      inStock: true,
      tags: ["festival", "cultural", "spring"]
    },
    {
      id: "4",
      name: "Betla Wildlife Safari",
      description: "Full-day guided safari experience in Betla National Park",
      price: 3500,
      rating: 4.6,
      reviews: 456,
      category: "ecotourism",
      seller: "Jharkhand Eco Adventures",
      image: "betla-safari.jpg",
      isFavorite: false,
      inStock: true,
      tags: ["wildlife", "safari", "nature"]
    },
    {
      id: "5",
      name: "Tribal Village Homestay",
      description: "2-night authentic homestay experience with tribal family",
      price: 8000,
      rating: 4.9,
      reviews: 167,
      category: "homestays",
      seller: "Authentic Jharkhand Stays",
      image: "tribal-homestay.jpg",
      isFavorite: true,
      inStock: true,
      tags: ["authentic", "cultural", "rural"]
    },
    {
      id: "6",
      name: "Bamboo Craft Workshop",
      description: "Learn traditional bamboo crafting techniques from local artisans",
      price: 1500,
      rating: 4.5,
      reviews: 98,
      category: "events",
      seller: "Skill Development Jharkhand",
      image: "bamboo-workshop.jpg",
      isFavorite: false,
      inStock: true,
      tags: ["workshop", "handicraft", "learning"]
    }
  ];

  const categories = {
    handicrafts: { name: "Handicrafts & Art", icon: Palette },
    events: { name: "Events & Workshops", icon: Calendar },
    ecotourism: { name: "Eco-tourism", icon: Camera },
    homestays: { name: "Homestay Packages", icon: Home }
  };

  const getFilteredProducts = () => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
      const matchesTab = product.category === activeTab;
      return matchesSearch && matchesCategory && matchesTab;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // popular
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  };

  const toggleFavorite = (productId: string) => {
    // In a real app, this would update the backend
    console.log(`Toggled favorite for product ${productId}`);
  };

  const addToCart = (product: Product) => {
    // In a real app, this would add to cart
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Jharkhand Marketplace</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover authentic handicrafts, book cultural experiences, and support local artisans and communities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products and experiences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={key} value={key} className="flex items-center">
                  <IconComponent className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{key}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.keys(categories).map((categoryKey) => (
            <TabsContent key={categoryKey} value={categoryKey}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getFilteredProducts().map((product) => (
                  <Card key={product.id} className="group shadow-card hover:shadow-hero transition-smooth">
                    <div className="aspect-square bg-muted rounded-t-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-card-gradient" style={{ backgroundImage: "url('public/Antique.jpg')",backgroundSize:"cover" }}/>
                      
                      {/* Favorite Button */}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${product.isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                        />
                      </Button>

                      {/* Discount Badge */}
                      {product.originalPrice && (
                        <Badge className="absolute top-2 left-2 bg-tribal text-tribal-foreground">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </Badge>
                      )}

                      {/* Stock Status */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base group-hover:text-primary transition-smooth line-clamp-2">
                          {product.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm line-clamp-2">
                        {product.description}
                      </CardDescription>
                      <div className="text-xs text-muted-foreground">
                        by {product.seller}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-primary">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className="w-full hover:scale-105 transition-bounce"
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.category === 'homestays' || product.category === 'events' || product.category === 'ecotourism' 
                          ? 'Book Now' 
                          : 'Add to Cart'
                        }
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {getFilteredProducts().length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No products found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or browse other categories.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center shadow-card">
            <CardHeader>
              <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Authentic Handicrafts</CardTitle>
              <CardDescription>
                Support local artisans with genuine tribal art and crafts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Cultural Experiences</CardTitle>
              <CardDescription>
                Book festivals, workshops, and cultural immersion programs
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center shadow-card">
            <CardHeader>
              <Home className="h-12 w-12 text-tribal mx-auto mb-4" />
              <CardTitle>Community Support</CardTitle>
              <CardDescription>
                Every purchase directly benefits local communities
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}