import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Shield,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const portals = [
    {
      title: "Student Portal",
      description: "Access internships, track progress, and build your career",
      icon: GraduationCap,
      loginPath: "/auth/student",
      registerPath: "/register/student",
      gradient: "bg-gradient-student",
      textGradient: "text-gradient-student",
      features: ["Browse Internships", "Track Applications", "Academic Credit", "Skill Development"]
    },
    {
      title: "Faculty Portal", 
      description: "Monitor students, approve internships, ensure NEP compliance",
      icon: BookOpen,
      loginPath: "/auth/faculty", 
      registerPath: "/register/faculty",
      gradient: "bg-gradient-faculty",
      textGradient: "text-gradient-faculty",
      features: ["Student Monitoring", "NEP Compliance", "Progress Tracking", "Academic Oversight"]
    },
    {
      title: "Industry Portal",
      description: "Post internships, find talent, build future workforce",
      icon: Building2,
      loginPath: "/auth/industry",
      registerPath: "/register/industry", 
      gradient: "bg-gradient-industry",
      textGradient: "text-gradient-industry",
      features: ["Post Internships", "Talent Discovery", "Skill Assessment", "Partnership Growth"]
    },
    {
      title: "Admin Portal",
      description: "Manage platform, oversee compliance, system administration", 
      icon: Shield,
      loginPath: "/auth/admin",
      registerPath: "/register/admin",
      gradient: "bg-gradient-admin", 
      textGradient: "text-gradient-admin",
      features: ["System Management", "User Oversight", "Compliance Monitoring", "Analytics & Reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient-primary">prashiskshan</span>
          </div>
        </div>
      </header>

      {/* Portal Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{" "}
              <span className="text-gradient-primary">prashiskshan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose your portal to access NEP 2020 compliant internship platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portals.map((portal, index) => (
              <Card 
                key={portal.title} 
                className="card-elevated hover:scale-105 transition-spring animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${portal.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-elegant`}>
                    <portal.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className={`text-xl ${portal.textGradient}`}>{portal.title}</CardTitle>
                  <CardDescription className="text-base">
                    {portal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {portal.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3 pt-4">
                    <Link to={portal.loginPath} className="block">
                      <button className={`w-full py-3 px-4 ${portal.gradient} text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}>
                        <span>Login</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                    <Link to={portal.registerPath} className="block">
                      <button className="w-full py-2 px-4 border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                        Register
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient-primary">prashiskshan</span>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; 2024 prashiskshan. NEP 2020 compliant internship management platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;