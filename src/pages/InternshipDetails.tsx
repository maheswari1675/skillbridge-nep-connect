import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  MapPin, 
  Calendar, 
  DollarSign,
  Clock,
  Users,
  Star,
  Bookmark,
  Share2,
  Building2,
  Award,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Globe,
  ArrowLeft,
  Send,
  FileText,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";

const InternshipDetails = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<"not_applied" | "applying" | "applied">("not_applied");

  // Mock data - in real app, fetch based on id
  const internship = {
    id: 1,
    title: "Software Development Intern",
    company: "TechCorp India",
    location: "Bangalore, Karnataka",
    duration: "3 months",
    stipend: "₹25,000/month",
    type: "Full-time",
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "REST APIs"],
    description: "Join our engineering team to build scalable web applications used by millions of users across India. You'll work on real projects that make a difference.",
    applicants: 124,
    posted: "2 days ago",
    credits: 4,
    rating: 4.8,
    maxPositions: 5,
    remainingPositions: 2,
    startDate: "April 15, 2024",
    endDate: "July 15, 2024",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TechCorp",
  };

  const companyDetails = {
    name: "TechCorp India",
    description: "Leading technology company specializing in web and mobile applications with over 10 years of experience.",
    founded: "2014",
    employees: "500-1000",
    industry: "Software Development",
    website: "techcorp.in",
    headquarters: "Bangalore, Karnataka",
    rating: 4.6,
    reviews: 156,
  };

  const requirements = [
    "Currently pursuing Bachelor's/Master's in Computer Science or related field",
    "Strong foundation in JavaScript, HTML, CSS",
    "Knowledge of React.js and modern web development",
    "Understanding of database concepts",
    "Good problem-solving and communication skills",
    "Ability to work in a collaborative team environment"
  ];

  const responsibilities = [
    "Develop and maintain web applications using React and Node.js",
    "Collaborate with senior developers on feature implementation",
    "Write clean, efficient, and well-documented code",
    "Participate in code reviews and team meetings",
    "Learn and adapt to new technologies and frameworks",
    "Assist in testing and debugging applications"
  ];

  const learningOutcomes = [
    "Full-stack web development expertise",
    "Industry-standard coding practices",
    "Agile development methodology",
    "Version control with Git",
    "API design and integration",
    "Database management and optimization"
  ];

  const approvalFlow = [
    { step: "Application Submitted", status: "completed", description: "Your application has been received" },
    { step: "Faculty Review", status: "pending", description: "Waiting for faculty approval" },
    { step: "Company Review", status: "pending", description: "Company will review your profile" },
    { step: "Interview/Selection", status: "pending", description: "Final selection process" },
    { step: "Offer & Enrollment", status: "pending", description: "Internship confirmation" }
  ];

  const handleApply = () => {
    setApplicationStatus("applying");
    // Simulate application process
    setTimeout(() => {
      setApplicationStatus("applied");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/internships">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Internships
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <Card className="card-elevated">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      {internship.company.charAt(0)}
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold mb-1">{internship.title}</h1>
                      <p className="text-lg text-primary font-semibold mb-2">{internship.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{internship.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={isBookmarked ? "text-primary" : ""}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <DollarSign className="w-6 h-6 text-success mx-auto mb-1" />
                    <div className="font-semibold text-success">{internship.stipend}</div>
                    <div className="text-xs text-muted-foreground">Stipend</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <Calendar className="w-6 h-6 text-accent mx-auto mb-1" />
                    <div className="font-semibold">{internship.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <GraduationCap className="w-6 h-6 text-primary mx-auto mb-1" />
                    <div className="font-semibold text-primary">{internship.credits}</div>
                    <div className="text-xs text-muted-foreground">Credits</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <Users className="w-6 h-6 text-warning mx-auto mb-1" />
                    <div className="font-semibold">{internship.remainingPositions}/{internship.maxPositions}</div>
                    <div className="text-xs text-muted-foreground">Available</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {internship.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-accent-light text-accent border-accent">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{internship.applicants} students applied</span>
                  <span>Posted {internship.posted}</span>
                </div>
              </CardContent>
            </Card>

            {/* Job Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-accent" />
                    <span>Responsibilities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Learning Outcomes */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-warning" />
                  <span>Learning Outcomes</span>
                </CardTitle>
                <CardDescription>Skills and knowledge you'll gain through this internship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-background/50">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span>About {companyDetails.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-4">{companyDetails.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Industry:</span>
                        <span className="font-medium">{companyDetails.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Founded:</span>
                        <span className="font-medium">{companyDetails.founded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium">{companyDetails.employees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{companyDetails.headquarters}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-center p-6 rounded-lg bg-gradient-subtle">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-2xl font-bold">{companyDetails.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Based on {companyDetails.reviews} reviews
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <Globe className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Card */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Apply for this Internship</CardTitle>
                {applicationStatus === "applied" && (
                  <Badge className="bg-success-light text-success border-success">
                    Application Submitted ✓
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {applicationStatus === "not_applied" && (
                  <>
                    <div className="text-center p-4 rounded-lg bg-gradient-hero text-white">
                      <h3 className="font-semibold mb-2">Ready to Apply?</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Join {internship.applicants}+ students who have already applied
                      </p>
                    </div>
                    <Button 
                      className="w-full btn-hero text-lg py-6"
                      onClick={handleApply}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </>
                )}
                
                {applicationStatus === "applying" && (
                  <div className="text-center py-8">
                    <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-sm text-muted-foreground">Submitting your application...</p>
                  </div>
                )}
                
                {applicationStatus === "applied" && (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Application Submitted!</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We'll notify you about the next steps
                    </p>
                    <Button variant="outline" className="w-full">
                      Track Application
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Approval Flow */}
            {applicationStatus === "applied" && (
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Application Progress</CardTitle>
                  <CardDescription>Track your internship approval status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {approvalFlow.map((step, index) => (
                      <div key={step.step} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          step.status === 'completed' 
                            ? 'bg-success text-white' 
                            : step.status === 'pending'
                            ? 'bg-warning text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.status === 'completed' ? '✓' : index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{step.step}</h4>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Timeline */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-sm font-medium">Application Deadline</p>
                    <p className="text-xs text-muted-foreground">April 10, 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Internship Starts</p>
                    <p className="text-xs text-muted-foreground">{internship.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-success" />
                  <div>
                    <p className="text-sm font-medium">Internship Ends</p>
                    <p className="text-xs text-muted-foreground">{internship.endDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Internships */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Similar Internships</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <h4 className="text-sm font-medium mb-1">Frontend Developer Intern</h4>
                  <p className="text-xs text-muted-foreground mb-2">WebTech Solutions • ₹22K</p>
                  <Badge variant="outline">React</Badge>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <h4 className="text-sm font-medium mb-1">Full Stack Intern</h4>
                  <p className="text-xs text-muted-foreground mb-2">DevCorp • ₹28K</p>
                  <Badge variant="outline">MERN</Badge>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border">
                  <h4 className="text-sm font-medium mb-1">Backend Developer Intern</h4>
                  <p className="text-xs text-muted-foreground mb-2">CodeCraft • ₹24K</p>
                  <Badge variant="outline">Node.js</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;