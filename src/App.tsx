import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import AIPlanner from "./pages/AIPlanner";
import ARVRPreviews from "./pages/ARVRPreviews";
import Marketplace from "./pages/Marketplace";
import Homestays from "./pages/Homestays";
import Guides from "./pages/Guides";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/ai-planner" element={<Layout><AIPlanner /></Layout>} />
          <Route path="/ar-vr" element={<Layout><ARVRPreviews /></Layout>} />
          <Route path="/marketplace" element={<Layout><Marketplace /></Layout>} />
          <Route path="/homestays" element={<Layout><Homestays /></Layout>} />
          <Route path="/guides" element={<Layout><Guides /></Layout>} />
          <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
          <Route path="/events" element={<Layout><div className="container mx-auto px-4 py-8"><h1 className="text-4xl font-bold text-primary">Events Coming Soon!</h1></div></Layout>} />
          <Route path="/emergency" element={<Layout><div className="container mx-auto px-4 py-8"><h1 className="text-4xl font-bold text-primary">Emergency SOS - Coming Soon!</h1></div></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
