import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  Star, 
  MessageSquare,
  Calendar,
  Eye,
  Download,
  RefreshCw
} from "lucide-react";

export default function AdminDashboard() {
  // Sample data for charts
  const monthlyTrafficData = [
    { month: 'Jan', visitors: 12500, bookings: 450 },
    { month: 'Feb', visitors: 15200, bookings: 520 },
    { month: 'Mar', visitors: 18800, bookings: 680 },
    { month: 'Apr', visitors: 22100, bookings: 790 },
    { month: 'May', visitors: 25600, bookings: 920 },
    { month: 'Jun', visitors: 28900, bookings: 1050 },
  ];

  const yearlyTrendsData = [
    { year: '2020', tourists: 85000 },
    { year: '2021', tourists: 62000 },
    { year: '2022', tourists: 95000 },
    { year: '2023', tourists: 142000 },
    { year: '2024', tourists: 185000 },
  ];

  const topDestinationsData = [
    { name: 'Netarhat', value: 35, color: '#22c55e' },
    { name: 'Hundru Falls', value: 28, color: '#3b82f6' },
    { name: 'Betla Park', value: 22, color: '#f59e0b' },
    { name: 'Deoghar', value: 10, color: '#ef4444' },
    { name: 'Patratu', value: 5, color: '#8b5cf6' },
  ];

  const recentFeedbacks = [
    {
      id: 1,
      user: "Raj Kumar",
      rating: 5,
      comment: "Amazing experience at Netarhat! The sunrise view was breathtaking.",
      destination: "Netarhat",
      date: "2024-01-15",
      sentiment: "positive"
    },
    {
      id: 2,
      user: "Priya Singh",
      rating: 4,
      comment: "Good experience overall, but transportation needs improvement.",
      destination: "Hundru Falls",
      date: "2024-01-14",
      sentiment: "mixed"
    },
    {
      id: 3,
      user: "Amit Sharma",
      rating: 5,
      comment: "Excellent wildlife safari at Betla. Saw tigers and elephants!",
      destination: "Betla National Park",
      date: "2024-01-13",
      sentiment: "positive"
    },
    {
      id: 4,
      user: "Sunita Devi",
      rating: 3,
      comment: "Average experience. Expected more cultural activities.",
      destination: "Tribal Village",
      date: "2024-01-12",
      sentiment: "neutral"
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      case 'mixed': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'Positive';
      case 'negative': return 'Negative';
      case 'mixed': return 'Mixed';
      default: return 'Neutral';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Jharkhand Tourism Analytics & Management</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">28,900</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">1,050</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +14.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">4.8</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.2 from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">156K</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Monthly Traffic */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Monthly Tourist Traffic</CardTitle>
                  <CardDescription>Visitors and bookings over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visitors" fill="#22c55e" name="Visitors" />
                      <Bar dataKey="bookings" fill="#3b82f6" name="Bookings" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Yearly Trends */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Yearly Tourist Trends</CardTitle>
                  <CardDescription>Tourist growth over the past 5 years</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={yearlyTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="tourists" 
                        stroke="#22c55e" 
                        strokeWidth={3}
                        name="Tourists"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Top Destinations Pie Chart */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Top 5 Destinations</CardTitle>
                <CardDescription>Most visited destinations by percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-1/2">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={topDestinationsData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                        >
                          {topDestinationsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-2">
                    {topDestinationsData.map((destination, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded">
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: destination.color }}
                          />
                          <span className="text-sm font-medium">{destination.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{destination.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedbacks Tab */}
          <TabsContent value="feedbacks" className="space-y-6">
            {/* Sentiment Analysis Summary */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600">68%</div>
                  <div className="text-sm text-muted-foreground">Positive</div>
                  <Progress value={68} className="mt-2" />
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-yellow-600">22%</div>
                  <div className="text-sm text-muted-foreground">Mixed</div>
                  <Progress value={22} className="mt-2" />
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-gray-600">8%</div>
                  <div className="text-sm text-muted-foreground">Neutral</div>
                  <Progress value={8} className="mt-2" />
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-red-600">2%</div>
                  <div className="text-sm text-muted-foreground">Negative</div>
                  <Progress value={2} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Recent Feedbacks */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Recent User Feedbacks
                </CardTitle>
                <CardDescription>Latest reviews and ratings from tourists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedbacks.map((feedback) => (
                    <div key={feedback.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{feedback.user}</span>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < feedback.rating
                                    ? 'fill-current text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getSentimentColor(feedback.sentiment)}>
                            {getSentimentBadge(feedback.sentiment)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(feedback.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        "{feedback.comment}"
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{feedback.destination}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Destinations Tab */}
          <TabsContent value="destinations" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topDestinationsData.map((destination, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{destination.name}</span>
                      <Badge variant="secondary">{destination.value}% of visits</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Monthly Visitors</span>
                        <span className="font-medium">
                          {Math.round((destination.value / 100) * 28900).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Average Rating</span>
                        <span className="font-medium">4.{8 - index}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Growth</span>
                        <span className="font-medium text-green-600">+{12 + index * 2}%</span>
                      </div>
                      <Progress value={destination.value} className="mt-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}