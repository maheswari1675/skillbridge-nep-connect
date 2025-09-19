import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  DollarSign,
  Clock,
  Building2,
  GraduationCap,
  Star,
  Bookmark,
  Eye,
  TrendingUp,
  Users,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const InternshipPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const featuredInternships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechCorp India",
      location: "Bangalore, Karnataka",
      duration: "3 months",
      stipend: "₹25,000/month",
      type: "Full-time",
      skills: ["React", "Node.js", "MongoDB"],
      description: "Join our engineering team to build scalable web applications used by millions.",
      applicants: 124,
      posted: "2 days ago",
      credits: 4,
      rating: 4.8,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=TechCorp",
    },
    {
      id: 2,
      title: "Data Science Intern", 
      company: "DataSystems Ltd",
      location: "Hyderabad, Telangana",
      duration: "4 months",
      stipend: "₹30,000/month",
      type: "Full-time",
      skills: ["Python", "Machine Learning", "SQL"],
      description: "Work with cutting-edge AI/ML technologies to solve real-world business problems.",
      applicants: 89,
      posted: "1 week ago", 
      credits: 6,
      rating: 4.6,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DataSystems",
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "DesignStudio Pro",
      location: "Mumbai, Maharashtra", 
      duration: "3 months",
      stipend: "₹20,000/month",
      type: "Part-time",
      skills: ["Figma", "Adobe XD", "User Research"],
      description: "Create beautiful and intuitive designs for our flagship mobile and web products.",
      applicants: 156,
      posted: "3 days ago",
      credits: 3,
      rating: 4.7,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DesignStudio",
    },
    {
      id: 4,
      title: "DevOps Engineer Intern",
      company: "CloudTech Solutions",
      location: "Pune, Maharashtra",
      duration: "6 months", 
      stipend: "₹35,000/month",
      type: "Full-time",
      skills: ["AWS", "Docker", "Kubernetes"],
      description: "Help build and maintain our cloud infrastructure serving enterprise clients.",
      applicants: 67,
      posted: "5 days ago",
      credits: 8,
      rating: 4.9,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CloudTech",
    },
    {
      id: 5,
      title: "Marketing Analytics Intern", 
      company: "GrowthHack Inc",
      location: "Delhi, NCR",
      duration: "4 months",
      stipend: "₹22,000/month", 
      type: "Full-time",
      skills: ["Google Analytics", "Excel", "SQL"],
      description: "Analyze marketing campaigns and customer behavior to drive business growth.",
      applicants: 93,
      posted: "1 week ago",
      credits: 4,
      rating: 4.5,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=GrowthHack",
    },
    {
      id: 6,
      title: "Mobile App Developer Intern",
      company: "AppCraft Studios", 
      location: "Chennai, Tamil Nadu",
      duration: "5 months",
      stipend: "₹28,000/month",
      type: "Full-time", 
      skills: ["Flutter", "React Native", "Firebase"],
      description: "Develop cross-platform mobile applications for our growing user base.",
      applicants: 78,
      posted: "4 days ago",
      credits: 5,
      rating: 4.4,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=AppCraft",
    },
  ];

  const filterOptions = [
    { value: "all", label: "All Internships" },
    { value: "fulltime", label: "Full-time" },
    { value: "parttime", label: "Part-time" },
    { value: "remote", label: "Remote" },
  ];

  const locationOptions = [
    { value: "all", label: "All Locations" },
    { value: "bangalore", label: "Bangalore" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    { value: "delhi", label: "Delhi NCR" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Search */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect <span className="text-gradient-primary">Internship</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover NEP 2020 compliant internships from top companies across India
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search internships, companies, skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locationOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="w-3 h-3 mr-2" />
                More Filters
              </Button>
              <Badge variant="outline" className="bg-primary-light text-primary border-primary">
                524 internships found
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center card-elevated">
            <CardContent className="pt-6">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </CardContent>
          </Card>
          <Card className="text-center card-elevated">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </CardContent>
          </Card>
          <Card className="text-center card-elevated">
            <CardContent className="pt-6">
              <Award className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center card-elevated">
            <CardContent className="pt-6">
              <TrendingUp className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold">₹28K</div>
              <div className="text-sm text-muted-foreground">Avg. Stipend</div>
            </CardContent>
          </Card>
        </div>

        {/* Internship Listings */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Featured Internships</h2>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="stipend">Highest Stipend</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="applications">Most Applied</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredInternships.map((internship, index) => (
              <Card 
                key={internship.id} 
                className="card-elevated hover:shadow-xl transition-all hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold">
                        {internship.company.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{internship.title}</CardTitle>
                        <p className="text-primary font-medium">{internship.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="p-2">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{internship.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {internship.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-accent-light text-accent border-accent">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-success">{internship.stipend}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span>{internship.credits} Credits</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{internship.applicants} applicants</span>
                      <span>•</span>
                      <span>Posted {internship.posted}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link to={`/internships/${internship.id}`}>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                      <Button size="sm" className="bg-primary hover:bg-primary-hover">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg" className="px-8">
              Load More Internships
            </Button>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <Card className="mt-12 card-gradient">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">
              🤖 AI-Powered Recommendations
            </CardTitle>
            <CardDescription className="text-base">
              Based on your profile and interests, we think you'd love these opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-2">Backend Development</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Perfect match for your Java and Spring Boot skills
                </p>
                <Button size="sm" variant="outline">View Matches</Button>
              </Card>
              <Card className="p-4 bg-accent/5 border-accent/20">
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Great fit for your Python and data science background
                </p>
                <Button size="sm" variant="outline">View Matches</Button>
              </Card>
              <Card className="p-4 bg-success/5 border-success/20">
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Matches your React and JavaScript expertise
                </p>
                <Button size="sm" variant="outline">View Matches</Button>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InternshipPortal;