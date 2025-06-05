
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2, ArrowLeft, Crown, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CodeForge Academy</span>
              </div>
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
              <Link to="/login">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-600">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-blue-400 bg-blue-500/10 border border-blue-500/20">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-white hover:text-blue-400 transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Start Your Journey</CardTitle>
              <CardDescription className="text-slate-300">
                Create your account and begin mastering C++
              </CardDescription>
              <Badge className="bg-green-600 text-white mx-auto">
                Free Account - No Credit Card Required
              </Badge>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-300">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-slate-300">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Free Account
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">Upgrade to Premium later</span>
                </div>
                <p className="text-xs text-slate-300">
                  Start with free courses and upgrade to premium when you're ready for advanced content.
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-slate-400">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
