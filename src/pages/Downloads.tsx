
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ArrowLeft, Download, FileText, Video, BookOpen, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Downloads = () => {
  const downloadItems = [
    {
      title: "C++ Quick Reference Guide",
      description: "Comprehensive cheat sheet with syntax, functions, and best practices",
      type: "PDF",
      size: "2.5 MB",
      tier: "free",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Complete C++ Course Materials",
      description: "All course slides, exercises, and project files from our premium courses",
      type: "ZIP",
      size: "150 MB",
      tier: "premium",
      icon: BookOpen,
      downloadUrl: "#"
    },
    {
      title: "Video Lecture Series",
      description: "Offline access to all premium video content and tutorials",
      type: "MP4",
      size: "2.1 GB",
      tier: "premium",
      icon: Video,
      downloadUrl: "#"
    },
    {
      title: "Code Examples & Templates",
      description: "Ready-to-use code templates and examples for common C++ patterns",
      type: "ZIP",
      size: "15 MB",
      tier: "free",
      icon: Code2,
      downloadUrl: "#"
    },
    {
      title: "Advanced Project Source Code",
      description: "Complete source code for all advanced projects and exercises",
      type: "ZIP",
      size: "45 MB",
      tier: "premium",
      icon: Code2,
      downloadUrl: "#"
    },
    {
      title: "Certification Study Guide",
      description: "Comprehensive study materials for C++ certification preparation",
      type: "PDF",
      size: "5.2 MB",
      tier: "premium",
      icon: FileText,
      downloadUrl: "#"
    }
  ];

  const freeItems = downloadItems.filter(item => item.tier === "free");
  const premiumItems = downloadItems.filter(item => item.tier === "premium");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">CodeForge Academy</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center space-x-2 text-white hover:text-blue-400 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Download <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Resources</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Access study materials, code examples, and offline content to enhance your C++ learning experience
              </p>
            </div>
          </div>
        </section>

        {/* Free Downloads */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Free Downloads</h2>
              <p className="text-slate-300">Available to all registered users</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {freeItems.map((item, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-750 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className="bg-green-600 text-white">Free</Badge>
                            <span className="text-sm text-slate-400">{item.type} • {item.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-slate-300 mt-4">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform">
                      <Download className="h-4 w-4 mr-2" />
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Downloads */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="h-8 w-8 text-yellow-400" />
                Premium Downloads
              </h2>
              <p className="text-slate-300">Exclusive content for premium members</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumItems.map((item, index) => (
                <Card key={index} className="bg-slate-800/50 border-blue-500/50 backdrop-blur-sm hover:bg-slate-750 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white flex items-center gap-1">
                      <Crown className="h-3 w-3" />
                      Premium
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm text-slate-400">{item.type} • {item.size}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/register">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform">
                        <Crown className="h-4 w-4 mr-2" />
                        Upgrade to Download
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need More Resources?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Upgrade to premium for unlimited access to all downloads, courses, and exclusive content
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Downloads;
