
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Code2, User, Mail, MapPin, Calendar, Camera, Bell, Save } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    bio: "Passionate C++ developer with 5 years of experience in system programming and kernel development.",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    github: "johndoe",
    linkedin: "johndoe"
  });
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile update:", profileData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.id]: e.target.value
    });
  };

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CodeForge Academy</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link 
                to="/courses" 
                className={`transition-colors px-3 py-2 rounded-md ${
                  isActivePage('/courses') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white'
                }`}
              >
                All Courses
              </Link>
              <Link 
                to="/#portfolio" 
                className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md"
              >
                Portfolio
              </Link>
              <Link 
                to="/template" 
                className={`transition-colors px-3 py-2 rounded-md ${
                  isActivePage('/template') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white'
                }`}
              >
                Template
              </Link>
              <Link 
                to="/downloads" 
                className={`transition-colors px-3 py-2 rounded-md ${
                  isActivePage('/downloads') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white'
                }`}
              >
                Downloads
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white p-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Link to="/profile">
                <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Edit Profile</h1>
            <p className="text-xl text-slate-300">
              Update your profile information and preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Picture Section */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-white">Profile Picture</CardTitle>
                  <CardDescription className="text-slate-300">
                    Upload a new profile picture
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="relative inline-block">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" />
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute bottom-4 right-0 rounded-full p-2 bg-blue-600 hover:bg-blue-700">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Change Picture
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Profile Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Profile Information</CardTitle>
                  <CardDescription className="text-slate-300">
                    Update your personal information and social links
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={profileData.firstName}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={profileData.lastName}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-slate-300">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white resize-none"
                        rows={4}
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-slate-300">Location</Label>
                      <Input
                        id="location"
                        type="text"
                        value={profileData.location}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white"
                        placeholder="City, Country"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-slate-300">Website</Label>
                      <Input
                        id="website"
                        type="url"
                        value={profileData.website}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white"
                        placeholder="https://your-website.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="github" className="text-slate-300">GitHub Username</Label>
                        <Input
                          id="github"
                          type="text"
                          value={profileData.github}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white"
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="text-slate-300">LinkedIn Username</Label>
                        <Input
                          id="linkedin"
                          type="text"
                          value={profileData.linkedin}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600 text-white"
                          placeholder="username"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Link to="/profile" className="flex-1">
                        <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                          Cancel
                        </Button>
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
