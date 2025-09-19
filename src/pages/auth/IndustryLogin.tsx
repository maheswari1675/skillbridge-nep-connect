import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Users,
  Star,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Target
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const IndustryLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/industry");
    }, 1500);
  };

  const benefits = [
    { icon: Target, title: "Find Perfect Talent", description: "Access pre-screened students from top universities" },
    { icon: Star, title: "Structured Programs", description: "NEP-compliant internship frameworks" },
    { icon: TrendingUp, title: "Growth Analytics", description: "Track intern performance and ROI" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle theme-industry">
      {/* Header */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-industry rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-industry">InternHub</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/auth/student" className="text-muted-foreground hover:text-foreground">
                Student Login
              </Link>
              <Link to="/auth/faculty" className="text-muted-foreground hover:text-foreground">
                Faculty Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Left Side - Benefits */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-industry relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold mb-6">
                Discover Top Talent with
                <br />
                <span className="text-purple-200">Smart Hiring</span>
              </h1>
              <p className="text-xl mb-12 opacity-90">
                Connect with India's brightest students through structured internship programs that deliver real business value.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title} 
                    className="flex items-start space-x-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="opacity-90">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-md">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm opacity-80">Partner Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5K+</div>
                    <div className="text-sm opacity-80">Skilled Interns</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.6★</div>
                    <div className="text-sm opacity-80">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <Card className="card-elevated animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-industry rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Industry Portal</CardTitle>
                <CardDescription>
                  Access your hiring dashboard to post internships and manage talent
                </CardDescription>
                <div className="flex justify-center space-x-2">
                  <Badge className="bg-industry-primary-light text-industry-primary border-industry-primary">
                    Verified Partner
                  </Badge>
                  <Badge className="bg-success-light text-success border-success">
                    <Briefcase className="w-3 h-3 mr-1" />
                    Enterprise
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Company Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="hr@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your company password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span>Stay logged in</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">
                      Reset password?
                    </a>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-industry text-lg py-6" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Accessing dashboard...</span>
                      </div>
                    ) : (
                      <>
                        Access Hiring Dashboard
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-muted-foreground text-sm">
                    New to InternHub?{" "}
                    <a href="#" className="text-primary font-medium hover:underline">
                      Become a partner
                    </a>
                  </p>
                </div>

                {/* Industry Features */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-medium mb-3 text-center">Hiring Dashboard Features:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                      <CheckCircle className="w-3 h-3 text-success" />
                      <span>Post Internships</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                      <CheckCircle className="w-3 h-3 text-success" />
                      <span>Review Applications</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                      <CheckCircle className="w-3 h-3 text-success" />
                      <span>Manage Interns</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                      <CheckCircle className="w-3 h-3 text-success" />
                      <span>Performance Analytics</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">Looking for other portals?</p>
              <div className="flex justify-center space-x-4">
                <Link to="/auth/student" className="text-sm text-primary hover:underline">
                  Student Portal
                </Link>
                <Link to="/auth/faculty" className="text-sm text-primary hover:underline">
                  Faculty Portal
                </Link>
                <Link to="/auth/admin" className="text-sm text-primary hover:underline">
                  Admin Panel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryLogin;