import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Users, 
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const stats = [
    { number: "5,000+", label: "Internships Completed", icon: GraduationCap },
    { number: "200+", label: "Industry Partners", icon: Building2 },
    { number: "50+", label: "Universities", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
  ];

  const features = [
    {
      title: "NEP 2020 Compliant",
      description: "Fully aligned with National Education Policy guidelines for credit-based internships",
      icon: Award,
    },
    {
      title: "AI-Powered Matching", 
      description: "Smart recommendations based on skills, interests, and career goals",
      icon: Target,
    },
    {
      title: "Real-time Tracking",
      description: "Monitor progress with automatic logbook generation and milestone tracking",
      icon: CheckCircle,
    },
    {
      title: "Multi-stakeholder Platform",
      description: "Seamless collaboration between students, faculty, and industry partners",
      icon: Users,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student, IIT Delhi",
      content: "prashiskshan helped me find the perfect internship at a top tech company. The platform made everything so smooth!",
      rating: 5,
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor, NIT Trichy", 
      content: "As a faculty member, I love how easy it is to monitor student progress and ensure NEP compliance.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "HR Director, TechCorp India",
      content: "We've found excellent interns through prashiskshan. The quality of candidates is outstanding.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{" "}
              <span className="text-gradient-primary">prashiskshan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Bridging academia and industry with NEP 2020 compliant internships. 
              Empowering students, supporting faculty, connecting employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/internships">
                <Button className="btn-hero text-lg px-8 py-4">
                  Explore Internships
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient-primary">prashiskshan</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with educational excellence 
              to create the perfect internship experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="card-elevated hover:scale-105 transition-spring animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient-primary">Community</span> Says
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="card-gradient animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Internship Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students, faculty, and employers already using prashiskshan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register/student">
                <Button size="lg" variant="secondary" className="px-8 py-4">
                  Sign Up as Student
                </Button>
              </Link>
              <Link to="/register/industry">
                <Button size="lg" variant="outline" className="px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  Register as Industry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">prashiskshan</span>
              </div>
              <p className="text-muted-foreground">
                Transforming internship experiences across India with NEP 2020 compliance.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/internships" className="hover:text-foreground">Browse Internships</Link></li>
                <li><Link to="/student" className="hover:text-foreground">Student Dashboard</Link></li>
                <li><Link to="/faculty" className="hover:text-foreground">Faculty Portal</Link></li>
                <li><Link to="/industry" className="hover:text-foreground">Industry Hub</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">NEP Guidelines</a></li>
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">API Docs</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 prashiskshan. All rights reserved. Built for the future of Indian education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;