import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  Users, 
  Clock, 
  GraduationCap,
  Building2,
  Save,
  Send
} from "lucide-react";

const PostInternship = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    responsibilities: "",
    skills: "",
    department: "",
    location: "",
    workMode: "",
    duration: "",
    startDate: "",
    endDate: "",
    stipend: "",
    stipendType: "",
    positions: "",
    applicationDeadline: "",
    eligibleCourses: [],
    minCGPA: "",
    preferredYear: "",
    benefits: "",
    companyInfo: "",
    contactEmail: "",
    additionalNotes: ""
  });

  const [courses] = useState([
    "B.Tech - Computer Science",
    "B.Tech - Mechanical",
    "B.Tech - Electrical",
    "B.Tech - Electronics",
    "BCA",
    "M.Tech - Computer Science",
    "MCA",
    "B.Sc - Computer Science",
    "M.Sc - Computer Science"
  ]);

  const handleCourseChange = (course: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      eligibleCourses: checked 
        ? [...prev.eligibleCourses, course]
        : prev.eligibleCourses.filter(c => c !== course)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Posting internship:", formData);
  };

  const handleDraft = () => {
    console.log("Saving as draft:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Post New <span className="text-gradient-industry">Internship</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect with talented students and build the future workforce
          </p>
        </div>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Briefcase className="w-6 h-6 text-industry" />
              <span>Internship Details</span>
            </CardTitle>
            <CardDescription>
              Fill out the information below to post your internship opportunity
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-industry" />
                  <span>Basic Information</span>
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="title">Internship Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Software Development Intern, Marketing Intern"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Internship Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the internship program, learning objectives, and what interns will gain from this experience"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={5}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department/Team</Label>
                    <Input
                      id="department"
                      placeholder="e.g., Engineering, Marketing, HR"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="positions">Number of Positions *</Label>
                    <Input
                      id="positions"
                      type="number"
                      placeholder="1"
                      value={formData.positions}
                      onChange={(e) => setFormData({ ...formData, positions: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Location & Work Mode */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-industry" />
                  <span>Location & Work Mode</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      placeholder="City, State or 'Remote'"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workMode">Work Mode *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, workMode: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="on-site">On-site</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Duration & Timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-industry" />
                  <span>Duration & Timeline</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-month">1 Month</SelectItem>
                        <SelectItem value="2-months">2 Months</SelectItem>
                        <SelectItem value="3-months">3 Months</SelectItem>
                        <SelectItem value="6-months">6 Months</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="applicationDeadline">Application Deadline *</Label>
                    <Input
                      id="applicationDeadline"
                      type="date"
                      value={formData.applicationDeadline}
                      onChange={(e) => setFormData({ ...formData, applicationDeadline: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Compensation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <IndianRupee className="w-5 h-5 text-industry" />
                  <span>Compensation</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stipendType">Stipend Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, stipendType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stipend type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="unpaid">Unpaid</SelectItem>
                        <SelectItem value="performance-based">Performance Based</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stipend">Stipend Amount (₹)</Label>
                    <Input
                      id="stipend"
                      placeholder="e.g., 15000 per month or 50000 total"
                      value={formData.stipend}
                      onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Additional Benefits</Label>
                  <Textarea
                    id="benefits"
                    placeholder="List any additional benefits like certification, mentorship, full-time offer potential, etc."
                    value={formData.benefits}
                    onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-industry" />
                  <span>Eligibility Criteria</span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium mb-4 block">Eligible Courses *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {courses.map((course) => (
                        <div key={course} className="flex items-center space-x-2">
                          <Checkbox
                            id={course}
                            checked={formData.eligibleCourses.includes(course)}
                            onCheckedChange={(checked) => handleCourseChange(course, checked as boolean)}
                          />
                          <Label htmlFor={course} className="text-sm">{course}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredYear">Preferred Year</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, preferredYear: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Year</SelectItem>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                          <SelectItem value="final">Final Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="minCGPA">Minimum CGPA/Percentage</Label>
                      <Input
                        id="minCGPA"
                        placeholder="e.g., 7.0 or 65%"
                        value={formData.minCGPA}
                        onChange={(e) => setFormData({ ...formData, minCGPA: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Requirements */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Skills & Requirements</h3>

                <div className="space-y-2">
                  <Label htmlFor="skills">Required Skills *</Label>
                  <Textarea
                    id="skills"
                    placeholder="List the technical and soft skills required for this internship"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Additional Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Any specific requirements like portfolio, GitHub profile, etc."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities">Roles & Responsibilities *</Label>
                  <Textarea
                    id="responsibilities"
                    placeholder="Describe the day-to-day responsibilities and tasks for this internship"
                    value={formData.responsibilities}
                    onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="hr@company.com"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      placeholder="Any additional information for applicants"
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleDraft}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  className="flex-1 btn-industry"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Post Internship
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostInternship;