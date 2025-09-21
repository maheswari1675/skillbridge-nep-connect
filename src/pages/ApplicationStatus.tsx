import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  Filter, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Building2,
  Calendar,
  MapPin,
  IndianRupee,
  Eye,
  Download,
  MessageSquare
} from "lucide-react";

const ApplicationStatus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const applications = [
    {
      id: "APP001",
      company: "Tech Innovations Pvt Ltd",
      role: "Software Development Intern",
      appliedDate: "2024-01-15",
      status: "under-review",
      location: "Bangalore",
      stipend: "₹25,000/month",
      duration: "3 months",
      lastUpdate: "2024-01-20",
      nextStep: "Technical interview scheduled"
    },
    {
      id: "APP002", 
      company: "AI Solutions Inc",
      role: "Machine Learning Intern",
      appliedDate: "2024-01-10",
      status: "accepted",
      location: "Mumbai",
      stipend: "₹30,000/month",
      duration: "6 months",
      lastUpdate: "2024-01-18",
      nextStep: "Onboarding documents required"
    },
    {
      id: "APP003",
      company: "StartupHub",
      role: "Full Stack Developer Intern",
      appliedDate: "2024-01-08",
      status: "rejected",
      location: "Delhi",
      stipend: "₹20,000/month", 
      duration: "4 months",
      lastUpdate: "2024-01-16",
      nextStep: "Feedback provided"
    },
    {
      id: "APP004",
      company: "Digital Marketing Pro",
      role: "Digital Marketing Intern",
      appliedDate: "2024-01-12",
      status: "pending",
      location: "Remote",
      stipend: "₹15,000/month",
      duration: "2 months",
      lastUpdate: "2024-01-12",
      nextStep: "Application submitted"
    },
    {
      id: "APP005",
      company: "FinTech Solutions",
      role: "Data Analyst Intern",
      appliedDate: "2024-01-05",
      status: "interview-scheduled",
      location: "Hyderabad",
      stipend: "₹28,000/month",
      duration: "3 months",
      lastUpdate: "2024-01-22",
      nextStep: "Interview on Jan 25, 2024"
    }
  ];

  const getStatusConfig = (status: string) => {
    const configs = {
      pending: {
        variant: "outline" as const,
        icon: Clock,
        color: "text-yellow-600",
        label: "Pending"
      },
      "under-review": {
        variant: "secondary" as const,
        icon: AlertCircle,
        color: "text-blue-600",
        label: "Under Review"
      },
      "interview-scheduled": {
        variant: "default" as const,
        icon: Calendar,
        color: "text-purple-600",
        label: "Interview Scheduled"
      },
      accepted: {
        variant: "default" as const,
        icon: CheckCircle,
        color: "text-green-600",
        label: "Accepted"
      },
      rejected: {
        variant: "destructive" as const,
        icon: XCircle,
        color: "text-red-600",
        label: "Rejected"
      }
    };
    return configs[status as keyof typeof configs] || configs.pending;
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusCounts = () => {
    return {
      total: applications.length,
      pending: applications.filter(app => app.status === "pending").length,
      underReview: applications.filter(app => app.status === "under-review").length,
      accepted: applications.filter(app => app.status === "accepted").length,
      rejected: applications.filter(app => app.status === "rejected").length
    };
  };

  const counts = getStatusCounts();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Application <span className="text-gradient-student">Status</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your internship applications and manage your progress
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="card-elevated">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-gradient-primary">{counts.total}</div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-yellow-600">{counts.pending}</div>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{counts.underReview}</div>
              <p className="text-sm text-muted-foreground">Under Review</p>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">{counts.accepted}</div>
              <p className="text-sm text-muted-foreground">Accepted</p>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">{counts.rejected}</div>
              <p className="text-sm text-muted-foreground">Rejected</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="card-elevated mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by company or role..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="md:w-48">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="under-review">Under Review</SelectItem>
                    <SelectItem value="interview-scheduled">Interview Scheduled</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((application) => {
            const statusConfig = getStatusConfig(application.status);
            const StatusIcon = statusConfig.icon;

            return (
              <Card key={application.id} className="card-elevated hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Application Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{application.role}</h3>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            <span>{application.company}</span>
                          </div>
                        </div>
                        <Badge variant={statusConfig.variant} className="flex items-center space-x-1">
                          <StatusIcon className="w-3 h-3" />
                          <span>{statusConfig.label}</span>
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{application.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <IndianRupee className="w-4 h-4 text-muted-foreground" />
                          <span>{application.stipend}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{application.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Applied: {new Date(application.appliedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">Next Step:</p>
                            <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            Updated: {new Date(application.lastUpdate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-2 lg:w-32">
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat
                      </Button>
                      {application.status === "accepted" && (
                        <Button size="sm" className="w-full btn-student">
                          <Download className="w-4 h-4 mr-2" />
                          Offer Letter
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredApplications.length === 0 && (
          <Card className="card-elevated">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Applications Found</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria." 
                  : "You haven't applied to any internships yet."}
              </p>
              <Button>
                Browse Internships
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ApplicationStatus;