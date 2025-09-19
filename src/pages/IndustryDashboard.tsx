import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { 
  Users, 
  Plus, 
  Building2, 
  Star,
  TrendingUp,
  UserPlus,
  FileText,
  Eye,
  Calendar,
  BarChart3,
  CheckCircle,
  Clock
} from "lucide-react";

const IndustryDashboard = () => {
  const activeInternships = [
    {
      id: 1,
      title: "Software Development Intern",
      department: "Engineering",
      applicants: 24,
      selected: 3,
      maxPositions: 5,
      duration: "3 months",
      status: "Active",
      startDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Data Science Intern", 
      department: "Analytics",
      applicants: 18,
      selected: 2,
      maxPositions: 3,
      duration: "4 months",
      status: "Active",
      startDate: "2024-02-01",
    },
  ];

  const currentInterns = [
    {
      id: 1,
      name: "Priya Sharma",
      university: "IIT Delhi",
      position: "Software Development Intern",
      progress: 75,
      rating: 4.5,
      supervisor: "John Smith",
      startDate: "Jan 2024",
    },
    {
      id: 2,
      name: "Rahul Verma",
      university: "NIT Trichy", 
      position: "Data Science Intern",
      progress: 60,
      rating: 4.2,
      supervisor: "Sarah Johnson",
      startDate: "Feb 2024",
    },
    {
      id: 3,
      name: "Anita Patel",
      university: "BITS Pilani",
      position: "Software Development Intern", 
      progress: 85,
      rating: 4.8,
      supervisor: "Mike Wilson",
      startDate: "Jan 2024",
    },
  ];

  const pendingApplications = [
    { name: "Arjun Reddy", position: "Software Development Intern", university: "IIT Bombay", appliedDate: "2 days ago" },
    { name: "Kavya Singh", position: "Data Science Intern", university: "IIIT Hyderabad", appliedDate: "3 days ago" },
    { name: "Rohan Gupta", position: "Software Development Intern", university: "DTU", appliedDate: "1 week ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">TechCorp India Dashboard</h1>
            <p className="text-muted-foreground">Manage your internship programs and track intern progress</p>
          </div>
          <Button className="btn-hero">
            <Plus className="w-4 h-4 mr-2" />
            Post New Internship
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Interns</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">8</div>
              <p className="text-xs text-muted-foreground">Currently working</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">5</div>
              <p className="text-xs text-muted-foreground">Available roles</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">23</div>
              <p className="text-xs text-muted-foreground">Pending review</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">4.6</div>
              <p className="text-xs text-muted-foreground">Intern feedback</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Internship Programs */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Active Internship Programs</CardTitle>
                <CardDescription>Monitor your current internship offerings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activeInternships.map((program) => (
                    <div key={program.id} className="border border-border rounded-lg p-4 bg-card-secondary">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{program.title}</h3>
                          <p className="text-muted-foreground">{program.department} • {program.duration}</p>
                          <Badge variant="outline" className="bg-success-light text-success border-success mt-2">
                            {program.status}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{program.selected}/{program.maxPositions}</div>
                          <div className="text-sm text-muted-foreground">Positions filled</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-accent">{program.applicants}</div>
                          <div className="text-xs text-muted-foreground">Applicants</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-success">{program.selected}</div>
                          <div className="text-xs text-muted-foreground">Selected</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-warning">{program.maxPositions - program.selected}</div>
                          <div className="text-xs text-muted-foreground">Remaining</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          Started: {program.startDate}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View Applications
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="w-4 h-4 mr-2" />
                            Edit Program
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Interns */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Current Interns</CardTitle>
                <CardDescription>Track progress and performance of your interns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentInterns.map((intern) => (
                    <div key={intern.id} className="border border-border rounded-lg p-4 bg-card-secondary">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${intern.name}`} />
                            <AvatarFallback>{intern.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{intern.name}</h3>
                            <p className="text-sm text-muted-foreground">{intern.university}</p>
                            <p className="text-sm font-medium text-primary">{intern.position}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{intern.rating}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">Rating</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span className="font-medium">{intern.progress}% Complete</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all" 
                            style={{ width: `${intern.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          Supervisor: {intern.supervisor} • Started {intern.startDate}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            <Star className="w-4 h-4 mr-2" />
                            Rate Performance
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Applications */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Pending Applications
                  <Badge variant="outline" className="bg-warning-light text-warning border-warning">
                    {pendingApplications.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingApplications.map((application, index) => (
                    <div key={index} className="p-3 rounded-lg bg-background/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{application.name}</h4>
                        <Clock className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{application.university}</p>
                      <p className="text-xs text-primary font-medium mb-2">{application.position}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{application.appliedDate}</span>
                        <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-7">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Internship
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Interviews
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <div className="flex-1">
                      <p className="text-sm">New application received</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <div className="flex-1">
                      <p className="text-sm">Intern evaluation completed</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <UserPlus className="w-4 h-4 text-accent" />
                    <div className="flex-1">
                      <p className="text-sm">New internship posted</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDashboard;