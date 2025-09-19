import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentLogin from "./pages/auth/StudentLogin";
import FacultyLogin from "./pages/auth/FacultyLogin";
import IndustryLogin from "./pages/auth/IndustryLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import IndustryDashboard from "./pages/IndustryDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import InternshipPortal from "./pages/InternshipPortal";
import InternshipDetails from "./pages/InternshipDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          {/* Auth Routes */}
          <Route path="/auth/student" element={<StudentLogin />} />
          <Route path="/auth/faculty" element={<FacultyLogin />} />
          <Route path="/auth/industry" element={<IndustryLogin />} />
          <Route path="/auth/admin" element={<AdminLogin />} />
          
          {/* Dashboard Routes */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/faculty" element={<FacultyDashboard />} />
          <Route path="/industry" element={<IndustryDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Internship Routes */}
          <Route path="/internships" element={<InternshipPortal />} />
          <Route path="/internships/:id" element={<InternshipDetails />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
