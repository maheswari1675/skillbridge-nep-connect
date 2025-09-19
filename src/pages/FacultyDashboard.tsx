import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { 
  Users, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  TrendingUp,
  FileText,
  Eye,
  UserCheck,
  Calendar,
  BarChart3
} from "lucide-react";

const FacultyDashboard = () => {
  const students = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com", 
      company: "TechCorp India",
      role: "Software Development Intern",
      progress: 65,
      status: "Active",
      lastSubmission: "2 days ago",
      creditsEarned: 4,
    },
    {
      id: 2,
      name: "Rahul Verma", 
      email: "rahul@example.com",
      company: "DataSystems Ltd",
      role: "Data Science Intern",
      progress: 80,
      status: "Active", 
      lastSubmission: "1 day ago",
      creditsEarned: 6,
    },
    {
      id: 3,
      name: "Anita Patel",
      email: "anita@example.com",
      company: "CloudTech Solutions", 
      role: "DevOps Intern",
      progress: 45,
      status: "Active",
      lastSubmission: "5 days ago",
      creditsEarned: 2,
    },
  ];

  const pendingApprovals = [
    {
      student: "Priya Sharma",
      type: "Weekly Report", 
      date: "2024-03-15",
      priority: "High",
    },
    {
      student: "Rahul Verma",
      type: "Logbook Entry",
      date: "2024-03-14", 
      priority: "Medium",
    },
    {
      student: "Anita Patel",
      type: "Milestone Report",
      date: "2024-03-13",
      priority: "High",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Faculty Dashboard</h1>
          <p className="text-muted-foreground">Monitor student progress and manage internship approvals</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground">Active interns</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">7</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">156</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">73%</div>
              <p className="text-xs text-muted-foreground">Above target</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Students Under Supervision */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Students Under Supervision</CardTitle>
                <CardDescription>Monitor and track student internship progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="border border-border rounded-lg p-4 bg-card-secondary">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`} />
                            <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{student.name}</h3>
                            <p className="text-sm text-muted-foreground">{student.email}</p>
                            <p className="text-sm font-medium text-primary">{student.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="bg-success-light text-success border-success mb-2">
                            {student.status}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            {student.creditsEarned} credits
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>{student.role}</span>
                          <span className="font-medium">{student.progress}% Complete</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          Last submission: {student.lastSubmission}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View Progress
                          </Button>
                          <Button size="sm" variant="outline">
                            <UserCheck className="w-4 h-4 mr-2" />
                            Evaluate
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest submissions and student updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Priya Sharma submitted weekly report</p>
                      <p className="text-xs text-muted-foreground">2 hours ago • TechCorp India</p>
                    </div>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Rahul Verma completed milestone 3</p>
                      <p className="text-xs text-muted-foreground">1 day ago • DataSystems Ltd</p>
                    </div>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Anita Patel requested meeting</p>
                      <p className="text-xs text-muted-foreground">2 days ago • CloudTech Solutions</p>
                    </div>
                    <Button size="sm" variant="outline">Schedule</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Approvals */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Pending Approvals
                  <Badge variant="outline" className="bg-warning-light text-warning border-warning">
                    {pendingApprovals.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingApprovals.map((approval, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-warning" />
                        <div>
                          <p className="text-sm font-medium">{approval.type}</p>
                          <p className="text-xs text-muted-foreground">{approval.student}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          approval.priority === 'High' 
                            ? 'bg-destructive-light text-destructive border-destructive'
                            : 'bg-warning-light text-warning border-warning'
                        }
                      >
                        {approval.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Pending
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
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Evaluations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Students
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-sm font-medium">Mid-term Evaluations</p>
                      <p className="text-xs text-muted-foreground">March 25, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Faculty Meeting</p>
                      <p className="text-xs text-muted-foreground">March 28, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-4 h-4 text-success" />
                    <div>
                      <p className="text-sm font-medium">Report Submission</p>
                      <p className="text-xs text-muted-foreground">March 30, 2024</p>
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

export default FacultyDashboard;