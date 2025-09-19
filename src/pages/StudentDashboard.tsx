import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Award, 
  TrendingUp,
  FileText,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Download
} from "lucide-react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const activeInternships = [
    {
      id: 1,
      company: "TechCorp India",
      role: "Software Development Intern",
      duration: "3 months",
      progress: 65,
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-04-15",
      credits: 4,
    }
  ];

  const learningModules = [
    { id: 1, title: "Web Development Fundamentals", progress: 80, status: "In Progress" },
    { id: 2, title: "Database Management", progress: 100, status: "Completed" },
    { id: 3, title: "API Development", progress: 45, status: "In Progress" },
    { id: 4, title: "Software Testing", progress: 0, status: "Not Started" },
  ];

  const recentLogs = [
    {
      date: "2024-03-15",
      title: "Completed user authentication module",
      type: "Development",
      status: "Approved",
    },
    {
      date: "2024-03-14", 
      title: "Team meeting and sprint planning",
      type: "Meeting",
      status: "Pending",
    },
    {
      date: "2024-03-13",
      title: "Code review and bug fixes",
      type: "Development", 
      status: "Approved",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Priya!</h1>
          <p className="text-muted-foreground">Track your internship progress and continue learning</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Internships</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">1</div>
              <p className="text-xs text-muted-foreground">Currently enrolled</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credits Earned</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">12</div>
              <p className="text-xs text-muted-foreground">+4 this semester</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">65%</div>
              <p className="text-xs text-muted-foreground">On track</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Logged</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Internships */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Active Internships
                  <Button size="sm" className="bg-primary hover:bg-primary-hover">
                    <Plus className="w-4 h-4 mr-2" />
                    Find More
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeInternships.map((internship) => (
                  <div key={internship.id} className="border border-border rounded-lg p-4 bg-card-secondary">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{internship.role}</h3>
                        <p className="text-muted-foreground">{internship.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {internship.duration}
                          </span>
                          <Badge variant="outline" className="bg-success-light text-success border-success">
                            {internship.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{internship.credits}</div>
                        <div className="text-sm text-muted-foreground">Credits</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{internship.progress}%</span>
                      </div>
                      <Progress value={internship.progress} className="h-2" />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-muted-foreground">
                        {internship.startDate} to {internship.endDate}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-2" />
                          Add Log
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Logbook Entries */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Recent Logbook Entries</CardTitle>
                <CardDescription>Your latest internship activities and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentLogs.map((log, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                      <div className={`w-2 h-2 rounded-full ${
                        log.status === 'Approved' ? 'bg-success' : 'bg-warning'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{log.title}</h4>
                          <Badge 
                            variant="outline" 
                            className={
                              log.status === 'Approved' 
                                ? 'bg-success-light text-success border-success' 
                                : 'bg-warning-light text-warning border-warning'
                            }
                          >
                            {log.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>{log.date}</span>
                          <span>{log.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Entries
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Progress */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Learning Modules</CardTitle>
                <CardDescription>Skill development progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningModules.map((module) => (
                    <div key={module.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium">{module.title}</h4>
                        <Badge 
                          variant="outline"
                          className={
                            module.status === 'Completed' 
                              ? 'bg-success-light text-success border-success'
                              : module.status === 'In Progress'
                              ? 'bg-warning-light text-warning border-warning'
                              : 'bg-muted text-muted-foreground'
                          }
                        >
                          {module.progress}%
                        </Badge>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Browse More Courses
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-4 h-4 text-warning" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Submit weekly report</p>
                      <p className="text-xs text-muted-foreground">Due in 2 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Complete API module</p>
                      <p className="text-xs text-muted-foreground">Due next week</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mid-term evaluation</p>
                      <p className="text-xs text-muted-foreground">Mar 25, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;