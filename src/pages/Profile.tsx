import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Save, 
  Camera, 
  Award,
  BookOpen,
  Briefcase,
  Star,
  Clock
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Arjun",
    lastName: "Kumar",
    email: "arjun.kumar@university.edu",
    phone: "+91 9876543210",
    rollNumber: "CS20B1001",
    university: "IIT Delhi",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    cgpa: "8.7",
    skills: ["Python", "Java", "React", "Node.js", "Machine Learning"],
    bio: "Passionate computer science student interested in AI/ML and web development. Looking for opportunities to apply theoretical knowledge in real-world projects.",
    address: "Hostel 4, Room 201, IIT Delhi, Hauz Khas, New Delhi - 110016",
    github: "https://github.com/arjunkumar",
    linkedin: "https://linkedin.com/in/arjunkumar",
    portfolio: "https://arjunkumar.dev"
  });

  const achievements = [
    { title: "Completed Python Internship", type: "internship", date: "2024" },
    { title: "Winner - Hackathon 2023", type: "competition", date: "2023" },
    { title: "NPTEL Course - Data Structures", type: "certification", date: "2023" },
    { title: "Research Paper Published", type: "research", date: "2024" }
  ];

  const internships = [
    {
      company: "Tech Solutions Pvt Ltd",
      role: "Software Development Intern",
      duration: "3 months",
      status: "completed",
      rating: 4.8
    },
    {
      company: "AI Innovations Inc",
      role: "Machine Learning Intern",
      duration: "2 months", 
      status: "ongoing",
      rating: null
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile updated:", profile);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="text-2xl">
                      {profile.firstName[0]}{profile.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardTitle className="text-xl">
                  {profile.firstName} {profile.lastName}
                </CardTitle>
                <CardDescription>
                  {profile.course} • {profile.year}
                </CardDescription>
                
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <Badge variant="outline">{profile.university}</Badge>
                  <Badge variant="secondary">CGPA: {profile.cgpa}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="truncate">{profile.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>{profile.rollNumber}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="internships">Internships</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>About Me</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            value={profile.bio}
                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                            rows={4}
                          />
                        </div>
                        <Button onClick={handleSave} className="w-full">
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">
                        {profile.bio}
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>Academic Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="university">University</Label>
                          <Input
                            id="university"
                            value={profile.university}
                            onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="course">Course</Label>
                          <Input
                            id="course"
                            value={profile.course}
                            onChange={(e) => setProfile({ ...profile, course: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="year">Current Year</Label>
                          <Input
                            id="year"
                            value={profile.year}
                            onChange={(e) => setProfile({ ...profile, year: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cgpa">CGPA</Label>
                          <Input
                            id="cgpa"
                            value={profile.cgpa}
                            onChange={(e) => setProfile({ ...profile, cgpa: e.target.value })}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground">University</h4>
                          <p className="font-medium">{profile.university}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground">Course</h4>
                          <p className="font-medium">{profile.course}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground">Current Year</h4>
                          <p className="font-medium">{profile.year}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground">CGPA</h4>
                          <p className="font-medium">{profile.cgpa}/10.0</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="internships" className="space-y-6">
                {internships.map((internship, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{internship.company}</CardTitle>
                          <CardDescription>{internship.role}</CardDescription>
                        </div>
                        <Badge 
                          variant={internship.status === 'completed' ? 'default' : 'secondary'}
                        >
                          {internship.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{internship.duration}</span>
                          </div>
                          {internship.rating && (
                            <div className="flex items-center space-x-1 text-sm">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{internship.rating}/5</span>
                            </div>
                          )}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="card-elevated">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {achievement.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{achievement.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Update your contact details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profile.firstName}
                          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profile.lastName}
                          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        rows={3}
                      />
                    </div>

                    <Button onClick={handleSave} className="w-full">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;