import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  DollarSign, 
  MapPin, 
  Clock, 
  Car, 
  Utensils, 
  Bed,
  Star,
  Loader2
} from "lucide-react";

interface ItineraryDay {
  day: number;
  date: string;
  destinations: string[];
  activities: string[];
  transport: string;
  accommodation: string;
  meals: string[];
  estimatedCost: number;
}

export default function AIPlanner() {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    budget: "",
    groupSize: "1",
    interests: [] as string[],
    accommodation: "",
    transport: "",
    specialRequests: ""
  });
  
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const interestOptions = [
    "Adventure Sports",
    "Wildlife & Nature",
    "Cultural Heritage",
    "Spiritual Sites",
    "Photography",
    "Tribal Culture",
    "Waterfalls",
    "Trekking",
    "Local Cuisine",
    "Handicrafts"
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const generateItinerary = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const sampleItinerary: ItineraryDay[] = [
      {
        day: 1,
        date: formData.startDate,
        destinations: ["Ranchi", "Tagore Hill"],
        activities: ["Arrival in Ranchi", "Visit Tagore Hill", "Local market exploration"],
        transport: "Flight to Ranchi + Local taxi",
        accommodation: "Hotel in Ranchi",
        meals: ["Welcome lunch at local restaurant", "Traditional Jharkhandi dinner"],
        estimatedCost: 3500
      },
      {
        day: 2,
        date: new Date(new Date(formData.startDate).getTime() + 24*60*60*1000).toISOString().split('T')[0],
        destinations: ["Hundru Falls", "Jonha Falls"],
        activities: ["Hundru Falls trek", "Photography session", "Jonha Falls visit"],
        transport: "Private cab",
        accommodation: "Same hotel",
        meals: ["Breakfast", "Packed lunch", "Dinner at hotel"],
        estimatedCost: 2800
      },
      {
        day: 3,
        date: new Date(new Date(formData.startDate).getTime() + 2*24*60*60*1000).toISOString().split('T')[0],
        destinations: ["Netarhat"],
        activities: ["Drive to Netarhat", "Sunset viewpoint", "Local tribal village visit"],
        transport: "Private cab",
        accommodation: "Netarhat lodge",
        meals: ["Early breakfast", "Lunch en route", "Local dinner"],
        estimatedCost: 4200
      }
    ];
    
    setItinerary(sampleItinerary);
    setIsGenerating(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">AI Trip Planner</h1>
          <p className="text-lg text-muted-foreground">
            Let our AI create a personalized itinerary based on your preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Planning Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Trip Details
                </CardTitle>
                <CardDescription>
                  Tell us about your perfect Jharkhand trip
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData(prev => ({...prev, startDate: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData(prev => ({...prev, endDate: e.target.value}))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Budget (INR)</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                      <SelectItem value="10000-25000">₹10,000 - ₹25,000</SelectItem>
                      <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50000+">₹50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="groupSize">Group Size</Label>
                  <Select value={formData.groupSize} onValueChange={(value) => setFormData(prev => ({...prev, groupSize: value}))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Solo traveler</SelectItem>
                      <SelectItem value="2">Couple</SelectItem>
                      <SelectItem value="3-5">Small group (3-5)</SelectItem>
                      <SelectItem value="6+">Large group (6+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Interests</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="text-sm">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Any specific preferences or requirements..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData(prev => ({...prev, specialRequests: e.target.value}))}
                  />
                </div>

                <Button 
                  onClick={generateItinerary} 
                  className="w-full" 
                  disabled={isGenerating || !formData.startDate || !formData.endDate}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Itinerary...
                    </>
                  ) : (
                    "Generate AI Itinerary"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Generated Itinerary */}
          <div className="lg:col-span-2">
            {itinerary.length > 0 ? (
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Your Personalized Itinerary</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {itinerary.length} Days
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Total estimated cost: ₹{itinerary.reduce((sum, day) => sum + day.estimatedCost, 0).toLocaleString()}
                    </CardDescription>
                  </CardHeader>
                </Card>

                {itinerary.map((day, index) => (
                  <Card key={index} className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Day {day.day} - {new Date(day.date).toLocaleDateString()}</span>
                        <Badge variant="outline">₹{day.estimatedCost.toLocaleString()}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center mb-2">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span className="font-medium">Destinations</span>
                          </div>
                          <div className="space-y-1">
                            {day.destinations.map((dest, i) => (
                              <Badge key={i} variant="secondary" className="mr-2">
                                {dest}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center mb-2">
                            <Star className="h-4 w-4 mr-2 text-primary" />
                            <span className="font-medium">Activities</span>
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {day.activities.map((activity, i) => (
                              <li key={i}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Separator />

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="flex items-center mb-1">
                            <Car className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="font-medium">Transport</span>
                          </div>
                          <p className="text-muted-foreground">{day.transport}</p>
                        </div>

                        <div>
                          <div className="flex items-center mb-1">
                            <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="font-medium">Stay</span>
                          </div>
                          <p className="text-muted-foreground">{day.accommodation}</p>
                        </div>

                        <div>
                          <div className="flex items-center mb-1">
                            <Utensils className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="font-medium">Meals</span>
                          </div>
                          <p className="text-muted-foreground">{day.meals.length} meals included</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="flex justify-center space-x-4">
                  <Button variant="outline">Download PDF</Button>
                  <Button>Book This Trip</Button>
                </div>
              </div>
            ) : (
              <Card className="shadow-card">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Plan Your Trip?</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Fill in your travel preferences and our AI will create a personalized itinerary just for you.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}