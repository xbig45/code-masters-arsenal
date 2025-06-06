import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Code2, Crown, Search, Filter, BookOpen, Users, Star, Clock, ArrowRight, Map, Target, CheckCircle, Circle, Play, Menu 
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Roadmap data
  const roadmapSteps = [
    {
      id: 1,
      title: "C++ Fundamentals",
      description: "Variables, functions, and basic syntax",
      duration: "4 weeks",
      status: "completed",
      tier: "free"
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      description: "Classes, inheritance, and polymorphism",
      duration: "6 weeks",
      status: "in-progress",
      tier: "free"
    },
    {
      id: 3,
      title: "STL and Algorithms",
      description: "Standard Template Library mastery",
      duration: "5 weeks",
      status: "locked",
      tier: "free"
    },
    {
      id: 4,
      title: "Advanced Memory Management",
      description: "Pointers, smart pointers, and RAII",
      duration: "8 weeks",
      status: "locked",
      tier: "premium"
    },
    {
      id: 5,
      title: "Template Programming",
      description: "Generic programming and metaprogramming",
      duration: "6 weeks",
      status: "locked",
      tier: "premium"
    },
    {
      id: 6,
      title: "System Programming",
      description: "OS APIs and low-level programming",
      duration: "10 weeks",
      status: "locked",
      tier: "premium"
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
      instructor: "CodeForge Academy"
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
      instructor: "CodeForge Academy"
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
      instructor: "Dr. Sarah Chen"
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
      instructor: "John Martinez"
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
      instructor: "CodeForge Academy"
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
      instructor: "CodeForge Academy"
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-3 w-3 text-green-500" />;
      case "in-progress":
        return <Play className="h-3 w-3 text-blue-500" />;
      default:
        return <Circle className="h-3 w-3 text-slate-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500/20 bg-green-500/5";
      case "in-progress":
        return "border-blue-500/20 bg-blue-500/5";
      default:
        return "border-slate-600/20 bg-slate-800/20";
    }
  };

  const categories = ["Programming Basics", "OOP", "Advanced Topics", "Game Development", "Systems Programming", "Data Structures"];
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const types = ["official", "user"];

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Content */}
      <div className="flex-1 flex flex-col mr-80">
        {/* Header */}
        <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-white text-xl">CodeForge</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Star className="h-4 w-4 mr-2" />
                  Favorites ({favorites.length})
                </Button>
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

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Filters */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-6">
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
                  onCheckedChange={(checked) => setShowFreeOnly(checked === true)}
                />
                <label htmlFor="free-only" className="text-sm text-slate-300">
                  Free courses only
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="favorites-only"
                  checked={showFavoritesOnly}
                  onCheckedChange={(checked) => setShowFavoritesOnly(checked === true)}
                />
                <label htmlFor="favorites-only" className="text-sm text-slate-300">
                  Favorites only
                </label>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {showFavoritesOnly ? 'Your Favorite Courses' : 'All Courses'}
                </h2>
                <p className="text-slate-300">
                  Showing {filteredCourses.length} of {courses.length} courses
                </p>
              </div>
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
          </div>
        </main>
      </div>

      {/* Right Roadmap Panel */}
      <div className="fixed right-0 top-0 w-80 h-full bg-slate-900/98 border-l border-slate-700 backdrop-blur-sm">
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Map className="h-5 w-5 text-blue-400" />
            <h3 className="font-semibold text-white">Learning Roadmap</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Target className="h-4 w-4" />
            <span>2 of 6 completed (33%)</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-1/3"></div>
          </div>
        </div>

        <div className="p-4 space-y-3 h-full overflow-hidden">
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < roadmapSteps.length - 1 && (
                <div className="absolute left-3 top-6 w-0.5 h-8 bg-slate-600"></div>
              )}
              
              <div className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${getStatusColor(step.status)} ${step.status !== 'locked' ? 'hover:bg-slate-700/30 cursor-pointer' : 'opacity-60'}`}>
                <div className="flex-shrink-0 mt-0.5">
                  {getStatusIcon(step.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-white text-sm leading-tight">{step.title}</h4>
                    {step.tier === "premium" && (
                      <Crown className="h-3 w-3 text-amber-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mb-1 line-clamp-2">{step.description}</p>
                  <div className="text-xs text-slate-500">{step.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
