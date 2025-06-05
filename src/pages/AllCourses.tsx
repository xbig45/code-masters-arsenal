
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code2, Cpu, Shield, Zap, Users, Star, Filter, Play, Crown, Bell, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const AllCourses = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

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
    },
    {
      id: 6,
      title: "Object-Oriented Programming",
      description: "Master classes, inheritance, polymorphism, and design patterns in C++",
      fullDescription: "Comprehensive coverage of OOP principles in C++ including encapsulation, inheritance, polymorphism, and advanced design patterns.",
      level: "Intermediate",
      duration: "6 weeks",
      students: 2156,
      rating: 4.7,
      icon: Code2,
      color: "bg-indigo-500",
      tier: "free",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Template Programming",
      description: "Advanced template metaprogramming and generic programming techniques",
      fullDescription: "Deep dive into C++ templates, template metaprogramming, SFINAE, and modern C++ generic programming patterns.",
      level: "Advanced",
      duration: "8 weeks",
      students: 1234,
      rating: 4.9,
      icon: Cpu,
      color: "bg-pink-500",
      tier: "premium",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop"
    },
    {
      id: 8,
      title: "STL & Algorithms",
      description: "Master the Standard Template Library and algorithm design in C++",
      fullDescription: "Complete guide to STL containers, iterators, algorithms, and how to design efficient algorithms using C++ standard library.",
      level: "Intermediate",
      duration: "7 weeks",
      students: 1876,
      rating: 4.8,
      icon: Shield,
      color: "bg-cyan-500",
      tier: "free",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop"
    }
  ];

  const filters = [
    { id: "all", label: "All Courses" },
    { id: "free", label: "Free" },
    { id: "premium", label: "Premium" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "expert", label: "Expert" }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesFilter = selectedFilter === "all" || 
                         course.tier === selectedFilter || 
                         course.level.toLowerCase() === selectedFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
              <Link to="/login">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-600">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Course Library
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master C++ programming with our comprehensive collection of courses, from beginner fundamentals to expert-level kernel development.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex justify-center">
              <div className="flex flex-wrap items-center gap-2 bg-slate-800/50 rounded-lg p-2">
                <Filter className="h-5 w-5 text-slate-400 ml-2" />
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "ghost"}
                    size="sm"
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
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-slate-400 text-center">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Dialog key={course.id}>
                <DialogTrigger asChild>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-750 transition-all duration-300 group backdrop-blur-sm cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl">
                    <div className="relative overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        {course.tier === "premium" ? (
                          <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white flex items-center gap-1">
                            <Crown className="h-3 w-3" />
                            Premium
                          </Badge>
                        ) : (
                          <Badge className="bg-green-600 text-white">Free</Badge>
                        )}
                      </div>
                      {course.badge && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-purple-600 text-white text-xs">
                            {course.badge}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center mb-3`}>
                          <course.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-white text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-sm line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                        <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                          {course.level}
                        </Badge>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-white font-medium text-xs">{course.rating}</span>
                        </div>
                        <span className="text-slate-400 text-xs flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {course.students.toLocaleString()}
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
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
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
                        <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white flex items-center gap-1">
                          <Crown className="h-3 w-3" />
                          Premium
                        </Badge>
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
                      <Link to="/login" className="flex-1">
                        <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                          Login Required
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No courses found matching your criteria.</p>
              <Button 
                onClick={() => {setSelectedFilter("all"); setSearchTerm("");}}
                variant="outline"
                className="mt-4 border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
