import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Users, 
  Building2, 
  GraduationCap, 
  BookOpen,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Settings,
  FileText,
  Shield,
  Database,
  Globe
} from "lucide-react";

const AdminDashboard = () => {
  const platformStats = [
    { label: "Total Students", value: "2,847", change: "+12%", icon: Users, color: "text-primary" },
    { label: "Industry Partners", value: "156", change: "+8%", icon: Building2, color: "text-accent" }, 
    { label: "Universities", value: "43", change: "+3%", icon: GraduationCap, color: "text-success" },
    { label: "Active Internships", value: "524", change: "+15%", icon: BookOpen, color: "text-warning" },
  ];

  const systemHealth = [
    { metric: "Platform Uptime", value: "99.9%", status: "excellent", icon: CheckCircle },
    { metric: "Database Performance", value: "95%", status: "good", icon: Database },
    { metric: "API Response Time", value: "124ms", status: "good", icon: Globe },
    { metric: "Security Score", value: "98%", status: "excellent", icon: Shield },
  ];

  const recentActivity = [
    {
      type: "User Registration",
      description: "45 new students registered today",
      timestamp: "2 hours ago",
      status: "success",
    },
    {
      type: "System Alert", 
      description: "High server load detected in Mumbai region",
      timestamp: "4 hours ago",
      status: "warning",
    },
    {
      type: "Security Update",
      description: "SSL certificate renewed successfully", 
      timestamp: "1 day ago",
      status: "success", 
    },
    {
      type: "Compliance Check",
      description: "NEP 2020 compliance audit completed",
      timestamp: "2 days ago",
      status: "success",
    },
  ];

  const pendingApprovals = [
    {
      type: "University Registration",
      entity: "IIIT Vadodara", 
      submitted: "3 days ago",
      priority: "High",
    },
    {
      type: "Industry Partner",
      entity: "CloudTech Solutions",
      submitted: "1 week ago",
      priority: "Medium",
    },
    {
      type: "Policy Update",
      entity: "Credit Assignment Rules",
      submitted: "2 weeks ago", 
      priority: "High",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-accent';
      case 'warning': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">System Administration</h1>
            <p className="text-muted-foreground">Monitor platform health, manage users, and ensure compliance</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button className="btn-hero">
              <Shield className="w-4 h-4 mr-2" />
              Security Center
            </Button>
          </div>
        </div>

        {/* Platform Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => (
            <Card key={stat.label} className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="flex items-center text-xs">
                  <TrendingUp className="w-3 h-3 mr-1 text-success" />
                  <span className="text-success">{stat.change}</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Health */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>System Health & Performance</CardTitle>
                <CardDescription>Real-time monitoring of platform components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {systemHealth.map((health, index) => (
                    <div key={health.metric} className="border border-border rounded-lg p-4 bg-card-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <health.icon className={`w-5 h-5 ${getStatusColor(health.status)}`} />
                          <h3 className="font-medium">{health.metric}</h3>
                        </div>
                        <Badge 
                          variant="outline"
                          className={
                            health.status === 'excellent' 
                              ? 'bg-success-light text-success border-success'
                              : health.status === 'good'
                              ? 'bg-accent-light text-accent border-accent'
                              : 'bg-warning-light text-warning border-warning'
                          }
                        >
                          {health.status}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-foreground">{health.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent System Activity */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Recent System Activity</CardTitle>
                <CardDescription>Latest platform events and system updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-background/50">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-success' :
                        activity.status === 'warning' ? 'bg-warning' : 'bg-destructive'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{activity.type}</h4>
                          <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activity Logs
                </Button>
              </CardContent>
            </Card>

            {/* User Management Overview */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Quick overview of platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">2,847</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">198</div>
                    <div className="text-sm text-muted-foreground">Faculty</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-success/10">
                    <Building2 className="w-8 h-8 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold">156</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-warning/10">
                    <Shield className="w-8 h-8 text-warning mx-auto mb-2" />
                    <div className="text-2xl font-bold">43</div>
                    <div className="text-sm text-muted-foreground">Admins</div>
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
                    <div key={index} className="p-3 rounded-lg bg-background/50">
                      <div className="flex items-center justify-between mb-2">
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
                        <Clock className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <h4 className="font-medium text-sm mb-1">{approval.type}</h4>
                      <p className="text-sm text-foreground mb-1">{approval.entity}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{approval.submitted}</span>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-6">
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-6">
                            Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Administration Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Platform Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics Dashboard
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Center
                </Button>
              </CardContent>
            </Card>

            {/* Compliance Status */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>NEP 2020 Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Credit System</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Compliant</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Documentation</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Updated</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Assessment Methods</span>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-warning" />
                      <span className="text-sm font-medium">Under Review</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Learning Outcomes</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Aligned</span>
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

export default AdminDashboard;