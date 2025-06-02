import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code2, Cpu, Shield, Zap, Users, Award, ArrowRight, BookOpen, Star, CheckCircle, Clock, Filter, Play, User, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleNetwork from "@/components/ParticleNetwork";
import LiveChatSupport from "@/components/LiveChatSupport";
import { useState } from "react";

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const courses = [
    {
      id: 1,
      title: "C++ Fundamentals",
      description: "Master the basics of C++ programming with hands-on projects and real-world applications",
      fullDescription: "This comprehensive course covers variables, data types, control structures, functions, and basic object-oriented programming. Perfect for complete beginners who want to start their programming journey with C++.",
      level: "Beginner",
      duration: "8 weeks",
      students: 2847,
      rating: 4.9,
      badge: "Most Popular",
      icon: Code2,
      color: "bg-blue-500",
      tier: "free",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Variables & Data Types",
      description: "Deep dive into C++ variables, memory management, and data type optimization",
      fullDescription: "Learn about primitive data types, arrays, strings, and memory allocation. Understand how data is stored and manipulated in C++ programs.",
      level: "Beginner",
      duration: "4 weeks",
      students: 1932,
      rating: 4.8,
      icon: Code2,
      color: "bg-green-500",
      tier: "free",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Advanced C++ & Memory Management",
      description: "Deep dive into pointers, memory allocation, and performance optimization techniques",
      fullDescription: "Master advanced concepts including smart pointers, RAII, move semantics, and template programming. Learn to write efficient, memory-safe C++ code.",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1932,
      rating: 4.8,
      icon: Cpu,
      color: "bg-purple-500",
      tier: "premium",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "System Programming & APIs",
      description: "Learn Windows/Linux APIs and system-level programming with practical examples",
      fullDescription: "Explore system calls, inter-process communication, file I/O, and network programming. Build real-world applications that interact with the operating system.",
      level: "Advanced",
      duration: "12 weeks",
      students: 1456,
      rating: 4.9,
      icon: Shield,
      color: "bg-green-500",
      tier: "premium",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Kernel Development Master Class",
      description: "Ultimate course in kernel programming and driver development for professionals",
      fullDescription: "Advanced kernel programming including device drivers, kernel modules, system call implementation, and debugging techniques. For expert-level developers only.",
      level: "Expert",
      duration: "16 weeks",
      students: 892,
      rating: 5.0,
      badge: "Premium",
      icon: Zap,
      color: "bg-red-500",
      tier: "premium",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "Advanced Memory Allocator",
      description: "Custom memory allocator with garbage collection and performance optimization",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["C++", "Memory Management", "Performance"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Kernel Module Framework",
      description: "Comprehensive framework for developing Linux kernel modules",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Linux Kernel", "C++", "Driver Development"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "High-Performance Game Engine",
      description: "Real-time 3D game engine with advanced rendering capabilities",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["C++", "OpenGL", "Game Development"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "System Monitoring Tool",
      description: "Cross-platform system monitoring with real-time analytics",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["C++", "System APIs", "Qt"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All Courses" },
    { id: "free", label: "Free" },
    { id: "premium", label: "Premium" }
  ];

  const filteredCourses = courses.filter(course => 
    selectedFilter === "all" || course.tier === selectedFilter
  );

  const features = [
    {
      icon: BookOpen,
      title: "Structured Learning Path",
      description: "Progressive curriculum designed by industry experts, from basics to kernel-level programming"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from seasoned professionals and kernel developers with 10+ years of experience"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Earn recognized certificates that boost your career prospects and validate your skills"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team and community forums"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Senior Software Engineer at Microsoft",
      content: "CodeForge Academy transformed my understanding of C++. The kernel development course landed me my dream job.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Game Developer at Unity",
      content: "The memory management course was exactly what I needed. Clear explanations and practical examples.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <ParticleNetwork />
      <LiveChatSupport />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
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
                <a href="#courses" className="text-slate-300 hover:text-white transition-colors">Courses</a>
                <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</a>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
                <Button className="bg-blue-600 hover:bg-blue-700">Login</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">
              🚀 Trusted by 10,000+ Developers Worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">C++ Programming</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              From fundamental concepts to advanced kernel development. Join thousands of developers with our membership-based learning platform.
            </p>
            
            {/* Membership Pricing */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <Card className="bg-slate-800/50 border-slate-700 relative">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Free Membership</CardTitle>
                  <CardDescription className="text-slate-300">
                    Perfect for getting started with C++ fundamentals
                  </CardDescription>
                  <div className="text-3xl font-bold text-white">$0<span className="text-lg text-slate-400">/month</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Basic C++ courses</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Community access</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Basic certificate</li>
                  </ul>
                  <Button className="w-full bg-slate-700 hover:bg-slate-600">Get Started Free</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-blue-500 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Premium Membership</CardTitle>
                  <CardDescription className="text-slate-300">
                    Complete access to all courses and advanced features
                  </CardDescription>
                  <div className="text-3xl font-bold text-white">$29<span className="text-lg text-slate-400">/month</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />All courses included</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />1-on-1 mentoring</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Priority support</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Industry certificates</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Premium Trial</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Course Library</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Explore our comprehensive collection of C++ programming courses
              </p>
            </div>
            
            {/* Course Filters */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 bg-slate-800/50 rounded-lg p-1">
                <Filter className="h-5 w-5 text-slate-400 ml-3" />
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "ghost"}
                    className={`${
                      selectedFilter === filter.id 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : "text-slate-300 hover:text-white hover:bg-slate-700"
                    }`}
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Dialog key={course.id}>
                  <DialogTrigger asChild>
                    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-750 transition-all duration-300 group backdrop-blur-sm cursor-pointer">
                      <div className="relative">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-4 right-4">
                          {course.tier === "premium" ? (
                            <Badge className="bg-blue-600 text-white">Premium</Badge>
                          ) : (
                            <Badge className="bg-green-600 text-white">Free</Badge>
                          )}
                        </div>
                        {course.badge && (
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-purple-600 text-white">
                              {course.badge}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                            <course.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                        <CardDescription className="text-slate-300 text-base">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="border-slate-600 text-slate-300">
                              {course.level}
                            </Badge>
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-slate-400 flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {course.students.toLocaleString()} students
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-3">
                        <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                          <course.icon className="h-6 w-6 text-white" />
                        </div>
                        {course.title}
                      </DialogTitle>
                      <DialogDescription className="text-slate-300 text-lg">
                        {course.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {course.level}
                        </Badge>
                        <span className="text-slate-400">{course.duration}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{course.rating}</span>
                        </div>
                        {course.tier === "premium" ? (
                          <Badge className="bg-blue-600 text-white">Premium</Badge>
                        ) : (
                          <Badge className="bg-green-600 text-white">Free</Badge>
                        )}
                      </div>
                      <p className="text-slate-300">{course.fullDescription}</p>
                      <div className="flex gap-4">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Play className="h-4 w-4 mr-2" />
                          Start Course
                        </Button>
                        <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                          Login Required
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Student Portfolio</h2>
              <p className="text-xl text-slate-300">
                See what our students have built with their C++ skills
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioProjects.map((project) => (
                <Card key={project.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden group hover:bg-slate-750 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Students Say</h2>
              <p className="text-xl text-slate-300">
                Real success stories from our alumni
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
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
                The most comprehensive and professional C++ education platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Start Free Trial
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
