import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, User, Mail, Phone, Building2, Key } from "lucide-react";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    adminId: "",
    role: "",
    institution: "",
    institutionType: "",
    department: "",
    accessLevel: "",
    supervisorName: "",
    supervisorEmail: "",
    institutionAddress: "",
    registrationCode: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admin registration:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-admin flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl card-elevated">
        <CardHeader className="text-center space-y-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-admin hover:text-admin/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-gradient-admin rounded-xl flex items-center justify-center shadow-elegant">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-gradient-admin">Admin Registration</CardTitle>
              <CardDescription>Join prashiskshan as Administrator</CardDescription>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Register as an admin to manage institution settings, users, and system compliance
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <User className="w-5 h-5 text-admin" />
                <span>Personal Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Official Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@institution.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Administrative Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Shield className="w-5 h-5 text-admin" />
                <span>Administrative Details</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adminId">Admin ID</Label>
                  <Input
                    id="adminId"
                    placeholder="Enter your admin ID"
                    value={formData.adminId}
                    onChange={(e) => setFormData({ ...formData, adminId: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Administrative Role</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="super-admin">Super Administrator</SelectItem>
                      <SelectItem value="institution-admin">Institution Administrator</SelectItem>
                      <SelectItem value="academic-coordinator">Academic Coordinator</SelectItem>
                      <SelectItem value="placement-officer">Placement Officer</SelectItem>
                      <SelectItem value="nep-coordinator">NEP Coordinator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessLevel">Access Level</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, accessLevel: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="department">Department Level</SelectItem>
                    <SelectItem value="limited">Limited Access</SelectItem>
                    <SelectItem value="view-only">View Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationCode">Institution Registration Code</Label>
                <Input
                  id="registrationCode"
                  placeholder="Enter the institution registration code"
                  value={formData.registrationCode}
                  onChange={(e) => setFormData({ ...formData, registrationCode: e.target.value })}
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Contact your institution's IT department for the registration code
                </p>
              </div>
            </div>

            {/* Institution Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-admin" />
                <span>Institution Information</span>
              </h3>

              <div className="space-y-2">
                <Label htmlFor="institution">Institution Name</Label>
                <Input
                  id="institution"
                  placeholder="University/College name"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="institutionType">Institution Type</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, institutionType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="autonomous-college">Autonomous College</SelectItem>
                      <SelectItem value="affiliated-college">Affiliated College</SelectItem>
                      <SelectItem value="iit">IIT</SelectItem>
                      <SelectItem value="nit">NIT</SelectItem>
                      <SelectItem value="iiit">IIIT</SelectItem>
                      <SelectItem value="private-university">Private University</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department (Optional)</Label>
                  <Input
                    id="department"
                    placeholder="Specific department if applicable"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="institutionAddress">Institution Address</Label>
                <Textarea
                  id="institutionAddress"
                  placeholder="Enter the complete institution address"
                  value={formData.institutionAddress}
                  onChange={(e) => setFormData({ ...formData, institutionAddress: e.target.value })}
                  rows={3}
                  required
                />
              </div>
            </div>

            {/* Supervisor Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <User className="w-5 h-5 text-admin" />
                <span>Reporting Supervisor</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="supervisorName">Supervisor Name</Label>
                  <Input
                    id="supervisorName"
                    placeholder="Reporting supervisor's name"
                    value={formData.supervisorName}
                    onChange={(e) => setFormData({ ...formData, supervisorName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supervisorEmail">Supervisor Email</Label>
                  <Input
                    id="supervisorEmail"
                    type="email"
                    placeholder="supervisor@institution.edu"
                    value={formData.supervisorEmail}
                    onChange={(e) => setFormData({ ...formData, supervisorEmail: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Key className="w-5 h-5 text-admin" />
                <span>Account Security</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any additional information or special access requirements"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  rows={3}
                />
              </div>
            </div>

            <Button type="submit" className="w-full btn-admin text-lg py-6">
              Create Admin Account
            </Button>

            <div className="text-center space-y-2">
              <p className="text-muted-foreground">Already have an account?</p>
              <Link 
                to="/auth/admin" 
                className="text-admin hover:text-admin/80 font-medium"
              >
                Sign in here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRegistration;