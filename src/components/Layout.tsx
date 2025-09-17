import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Menu, 
  MapPin, 
  Eye, 
  ShoppingBag, 
  Calendar, 
  Home, 
  Users,
  BarChart3,
  LogIn,
  AlertTriangle,
  MessageCircle
} from "lucide-react";
import { ChatBot } from "./ChatBot";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-card shadow-soft backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Jharkhand Tourism</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/ai-planner">
                <Button 
                  variant={isActive("/ai-planner") ? "default" : "ghost"}
                  className="font-medium"
                >
                  AI Planner
                </Button>
              </Link>
              <Link to="/ar-vr">
                <Button 
                  variant={isActive("/ar-vr") ? "default" : "ghost"}
                  className="font-medium"
                >
                  AR/VR Previews
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button 
                  variant={isActive("/marketplace") ? "default" : "ghost"}
                  className="font-medium"
                >
                  Marketplace
                </Button>
              </Link>
              <Link to="/events">
                <Button 
                  variant={isActive("/events") ? "default" : "ghost"}
                  className="font-medium"
                >
                  Events
                </Button>
              </Link>
              <Link to="/homestays">
                <Button 
                  variant={isActive("/homestays") ? "default" : "ghost"}
                  className="font-medium"
                >
                  Homestays
                </Button>
              </Link>
              <Link to="/guides">
                <Button 
                  variant={isActive("/guides") ? "default" : "ghost"}
                  className="font-medium"
                >
                  Guides
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                    <span className="ml-2">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="flex items-center">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login/Register
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/emergency" className="flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Emergency SOS
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/ai-planner">AI Planner</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/ar-vr">AR/VR Previews</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/marketplace">Marketplace</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/events">Events</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/homestays">Homestays</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/guides">Guides</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/admin">Admin Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/login">Login/Register</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/emergency">Emergency SOS</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Floating Chatbot */}
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-hero bg-primary hover:bg-primary-glow transition-smooth z-40"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}