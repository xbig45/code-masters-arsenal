
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Code2, Crown, Search, Filter, BookOpen, Users, Star, Clock, ArrowRight, Map, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import CourseRoadmap from "@/components/CourseRoadmap";
import FavoritesPanel from "@/components/FavoritesPanel";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const roadmaps = [
    {
      id: 1,
      title: "Complete C++ Developer",
      description: "Master C++ from basics to advanced system programming",
      duration: "6-8 months",
      courses: 12,
      level: "Beginner to Expert",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Game Development Path",
      description: "Learn C++ for game development and graphics programming",
      duration: "4-6 months",
      courses: 8,
      level: "Intermediate",
      color: "from-green-500 to-blue-500"
    },
    {
      id: 3,
      title: "Systems Programming",
      description: "Deep dive into kernel development and system-level programming",
      duration: "8-12 months",
      courses: 15,
      level: "Advanced",
      color: "from-red-500 to-orange-500"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "C++ Fundamentals",
      description: "Master the basics of C++ programming with hands-on projects",
      category: "Programming Basics",
      level: "Beginner",
      duration: "8 weeks",
      students: 2847,
      rating: 4.9,
      type: "official",
      tier: "free",
      progress: 0,
      instructor: "CodeForge Academy",
      topics: ["Variables", "Functions", "Classes", "Memory Management"]
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      description: "Master classes, inheritance, polymorphism, and design patterns",
      category: "OOP",
      level: "Intermediate",
      duration: "6 weeks",
      students: 2156,
      rating: 4.7,
      type: "official",
      tier: "free",
      progress: 45,
      instructor: "CodeForge Academy",
      topics: ["Classes", "Inheritance", "Polymorphism", "Design Patterns"]
    },
    {
      id: 3,
      title: "Advanced Memory Management",
      description: "Deep dive into pointers, smart pointers, and memory optimization",
      category: "Advanced Topics",
      level: "Advanced",
      duration: "10 weeks",
      students: 1932,
      rating: 4.8,
      type: "official",
      tier: "premium",
      progress: 0,
      instructor: "Dr. Sarah Chen",
      topics: ["Pointers", "Smart Pointers", "RAII", "Memory Pools"]
    },
    {
      id: 4,
      title: "Game Engine Development",
      description: "Build a complete game engine from scratch using modern C++",
      category: "Game Development",
      level: "Expert",
      duration: "16 weeks",
      students: 892,
      rating: 5.0,
      type: "user",
      tier: "premium",
      progress: 20,
      instructor: "John Martinez",
      topics: ["Rendering", "Physics", "Audio", "Scripting"]
    },
    {
      id: 5,
      title: "Kernel Programming Masterclass",
      description: "Learn Linux kernel development and driver programming",
      category: "Systems Programming",
      level: "Expert",
      duration: "20 weeks",
      students: 456,
      rating: 4.9,
      type: "official",
      tier: "premium",
      progress: 0,
      instructor: "CodeForge Academy",
      topics: ["Kernel APIs", "Device Drivers", "System Calls", "Memory Management"]
    },
    {
      id: 6,
      title: "STL and Algorithms",
      description: "Master the Standard Template Library and algorithm design",
      category: "Data Structures",
      level: "Intermediate",
      duration: "7 weeks",
      students: 1876,
      rating: 4.8,
      type: "official",
      tier: "free",
      progress: 80,
      instructor: "CodeForge Academy",
      topics: ["Containers", "Iterators", "Algorithms", "Performance"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    const matchesType = selectedType === "all" || course.type === selectedType;
    const matchesFree = !showFreeOnly || course.tier === "free";
    const matchesFavorites = !showFavoritesOnly || favorites.includes(course.id);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesType && matchesFree && matchesFavorites;
  });

  const toggleFavorite = (courseId: number) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const categories = ["Programming Basics", "OOP", "Advanced Topics", "Game Development", "Systems Programming", "Data Structures"];
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const types = ["official", "user"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CodeForge Academy</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-slate-300 hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your C++ Learning Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Discover courses, follow roadmaps, and master C++ programming with our comprehensive learning platform
          </p>
        </div>

        {/* Learning Roadmaps */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Learning Roadmaps</h2>
              <p className="text-slate-300">Structured paths to master C++ programming</p>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Map className="h-4 w-4 mr-2" />
              View All Roadmaps
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {roadmaps.map((roadmap) => (
              <Card key={roadmap.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-750 transition-all cursor-pointer group">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${roadmap.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{roadmap.title}</CardTitle>
                  <CardDescription className="text-slate-300">{roadmap.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-400">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{roadmap.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Courses:</span>
                      <span>{roadmap.courses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span>{roadmap.level}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 group-hover:bg-blue-600">
                    Start Roadmap
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <CourseRoadmap />
        </section>

        {/* Filters and Search */}
        <section className="mb-8">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-slate-400" />
              <h3 className="text-lg font-semibold text-white">Find Your Perfect Course</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-white"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Levels</SelectItem>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Course Type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="official">Official</SelectItem>
                  <SelectItem value="user">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="free-only"
                  checked={showFreeOnly}
                  onCheckedChange={setShowFreeOnly}
                />
                <label htmlFor="free-only" className="text-sm text-slate-300">
                  Free courses only
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="favorites-only"
                  checked={showFavoritesOnly}
                  onCheckedChange={setShowFavoritesOnly}
                />
                <label htmlFor="favorites-only" className="text-sm text-slate-300">
                  Favorites only
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {showFavoritesOnly ? 'Your Favorite Courses' : 'All Courses'}
              </h2>
              <p className="text-slate-300">
                Showing {filteredCourses.length} of {courses.length} courses
              </p>
            </div>
            
            <FavoritesPanel favorites={favorites} courses={courses} onToggleFavorite={toggleFavorite} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-750 transition-all group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={course.tier === "premium" ? "default" : "secondary"} className={course.tier === "premium" ? "bg-gradient-to-r from-amber-500 to-yellow-600" : "bg-green-600"}>
                          {course.tier === "premium" ? <Crown className="h-3 w-3 mr-1" /> : null}
                          {course.tier === "premium" ? "Premium" : "Free"}
                        </Badge>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {course.type === "official" ? "Official" : "Community"}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-sm">
                        {course.description}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(course.id)}
                      className={`ml-2 ${favorites.includes(course.id) ? 'text-yellow-400' : 'text-slate-400'}`}
                    >
                      <Star className={`h-4 w-4 ${favorites.includes(course.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Level:</span>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        {course.level}
                      </Badge>
                    </div>
                    
                    {course.progress > 0 && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Progress:</span>
                          <span className="text-blue-400">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-500">
                      by {course.instructor}
                    </div>
                    
                    <Button className="w-full mt-4 group-hover:bg-blue-600">
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
              <p className="text-slate-400 mb-4">Try adjusting your filters or search terms</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                  setSelectedType("all");
                  setShowFreeOnly(false);
                  setShowFavoritesOnly(false);
                }}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
