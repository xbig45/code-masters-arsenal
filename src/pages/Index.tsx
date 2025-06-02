import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Shield, Zap, Users, Award, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleNetwork from "@/components/ParticleNetwork";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "C++ Fundamentals",
      description: "Master the basics of C++ programming with hands-on projects",
      level: "Beginner",
      duration: "8 weeks",
      students: 2847,
      badge: "Most Popular",
      icon: Code2,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Advanced C++ & Memory Management",
      description: "Deep dive into pointers, memory allocation, and optimization",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1932,
      icon: Cpu,
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "System Programming & APIs",
      description: "Learn Windows/Linux APIs and system-level programming",
      level: "Advanced",
      duration: "12 weeks",
      students: 1456,
      icon: Shield,
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Kernel Development Master Class",
      description: "Ultimate course in kernel programming and driver development",
      level: "Expert",
      duration: "16 weeks",
      students: 892,
      badge: "Premium",
      icon: Zap,
      color: "bg-red-500"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Structured Learning Path",
      description: "Progressive curriculum from basics to kernel-level programming"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals and kernel developers"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized certificates upon course completion"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <ParticleNetwork />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">CodeForge Academy</span>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">Courses</Link>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">C++ Programming</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              From fundamental concepts to advanced kernel development. Join thousands of developers in our comprehensive C++ programming courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-600 text-slate-300 hover:bg-slate-800">
                View Course Catalog
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-slate-300">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-slate-300">Hours of Content</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-slate-300">Completion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-slate-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Course Catalog</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive learning path designed to take you from beginner to kernel development expert
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {courses.map((course) => (
                <Card key={course.id} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                        <course.icon className="h-6 w-6 text-white" />
                      </div>
                      {course.badge && (
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          {course.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-slate-300 text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <span className="flex items-center">
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {course.level}
                        </Badge>
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()} students
                      </span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 group-hover:translate-x-1 transition-transform">
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose CodeForge Academy?</h2>
              <p className="text-xl text-slate-300">
                The most comprehensive C++ education platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of developers who have mastered C++ programming with our proven curriculum
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
              Enroll in Your First Course
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">CodeForge Academy</span>
                </div>
                <p className="text-slate-300 mb-4">
                  The premier destination for C++ programming education, from fundamentals to kernel development.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Courses</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><Link to="/" className="hover:text-white transition-colors">C++ Fundamentals</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Advanced C++</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">System Programming</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Kernel Development</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><Link to="/" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Community</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; 2024 CodeForge Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
