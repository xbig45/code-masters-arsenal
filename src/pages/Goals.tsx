
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Target, Calendar, Clock, CheckCircle, Plus, Bell, Trophy, Zap, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Goals = () => {
  const location = useLocation();

  const currentGoals = [
    {
      id: 1,
      title: "Complete Advanced C++ Track",
      description: "Finish all advanced C++ courses including memory management and templates",
      progress: 75,
      deadline: "Dec 31, 2024",
      priority: "high",
      category: "Learning"
    },
    {
      id: 2,
      title: "Build Portfolio Project",
      description: "Create a comprehensive C++ project showcasing advanced concepts",
      progress: 40,
      deadline: "Nov 15, 2024",
      priority: "medium",
      category: "Project"
    },
    {
      id: 3,
      title: "Earn Expert Certification",
      description: "Complete all requirements for C++ Expert certification",
      progress: 60,
      deadline: "Jan 30, 2025",
      priority: "high",
      category: "Certification"
    }
  ];

  const milestones = [
    {
      id: 1,
      title: "C++ Fundamentals Completed",
      date: "Jan 15, 2024",
      status: "completed",
      points: 100
    },
    {
      id: 2,
      title: "OOP Concepts Mastered",
      date: "Feb 28, 2024",
      status: "completed",
      points: 150
    },
    {
      id: 3,
      title: "Memory Management Expert",
      date: "Mar 15, 2024",
      status: "completed",
      points: 200
    },
    {
      id: 4,
      title: "Template Programming",
      date: "Nov 30, 2024",
      status: "upcoming",
      points: 250
    },
    {
      id: 5,
      title: "Kernel Development",
      date: "Feb 15, 2025",
      status: "upcoming",
      points: 300
    }
  ];

  const learningPath = [
    { stage: "Beginner", completed: true, courses: 4, totalCourses: 4 },
    { stage: "Intermediate", completed: false, courses: 3, totalCourses: 4 },
    { stage: "Advanced", completed: false, courses: 1, totalCourses: 3 },
    { stage: "Expert", completed: false, courses: 0, totalCourses: 2 }
  ];

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
              <Link to="/goals">
                <Button variant="ghost" className="text-blue-400 bg-blue-500/10 border border-blue-500/20">
                  Goals
                </Button>
              </Link>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Personal Learning Goals
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Track your progress, set milestones, and follow your personalized C++ learning roadmap
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Goals */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Current Goals</CardTitle>
                    <CardDescription className="text-slate-300">
                      Your active learning objectives
                    </CardDescription>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Goal
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {currentGoals.map((goal) => (
                    <div key={goal.id} className="p-6 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-white font-semibold">{goal.title}</h3>
                            <Badge className={`${
                              goal.priority === 'high' ? 'bg-red-600' : 
                              goal.priority === 'medium' ? 'bg-orange-600' : 'bg-green-600'
                            }`}>
                              {goal.priority} priority
                            </Badge>
                            <Badge variant="outline" className="border-slate-600 text-slate-300">
                              {goal.category}
                            </Badge>
                          </div>
                          <p className="text-slate-300 mb-4">{goal.description}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Due: {goal.deadline}
                            </div>
                          </div>
                        </div>
                        <Target className="h-6 w-6 text-blue-400 ml-4" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-300">Progress</span>
                          <span className="text-white font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Learning Roadmap */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">C++ Learning Roadmap</CardTitle>
                  <CardDescription className="text-slate-300">
                    Your personalized path to C++ mastery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {learningPath.map((stage, index) => (
                      <div key={stage.stage} className="relative">
                        {index < learningPath.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-600"></div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            stage.completed ? 'bg-green-600' : 'bg-slate-600'
                          }`}>
                            {stage.completed ? (
                              <CheckCircle className="h-6 w-6 text-white" />
                            ) : (
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`text-lg font-semibold ${
                                stage.completed ? 'text-green-400' : 'text-white'
                              }`}>
                                {stage.stage}
                              </h3>
                              <Badge className={`${
                                stage.completed ? 'bg-green-600' : 'bg-slate-600'
                              }`}>
                                {stage.courses}/{stage.totalCour<lov-write file_path="src/pages/Goals.tsx">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Target, Calendar, Clock, CheckCircle, Plus, Bell, Trophy, Zap, Star, ArrowRight, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const Goals = () => {
  const location = useLocation();

  const currentGoals = [
    {
      id: 1,
      title: "Complete Advanced C++ Track",
      description: "Finish all advanced C++ courses including memory management and templates",
      progress: 75,
      deadline: "Dec 31, 2024",
      priority: "high",
      category: "Learning"
    },
    {
      id: 2,
      title: "Build Portfolio Project",
      description: "Create a comprehensive C++ project showcasing advanced concepts",
      progress: 40,
      deadline: "Nov 15, 2024",
      priority: "medium",
      category: "Project"
    },
    {
      id: 3,
      title: "Earn Expert Certification",
      description: "Complete all requirements for C++ Expert certification",
      progress: 60,
      deadline: "Jan 30, 2025",
      priority: "high",
      category: "Certification"
    }
  ];

  const milestones = [
    {
      id: 1,
      title: "C++ Fundamentals Completed",
      date: "Jan 15, 2024",
      status: "completed",
      points: 100
    },
    {
      id: 2,
      title: "OOP Concepts Mastered",
      date: "Feb 28, 2024",
      status: "completed",
      points: 150
    },
    {
      id: 3,
      title: "Memory Management Expert",
      date: "Mar 15, 2024",
      status: "completed",
      points: 200
    },
    {
      id: 4,
      title: "Template Programming",
      date: "Nov 30, 2024",
      status: "upcoming",
      points: 250
    },
    {
      id: 5,
      title: "Kernel Development",
      date: "Feb 15, 2025",
      status: "upcoming",
      points: 300
    }
  ];

  const learningPath = [
    { stage: "Beginner", completed: true, courses: 4, totalCourses: 4 },
    { stage: "Intermediate", completed: false, courses: 3, totalCourses: 4 },
    { stage: "Advanced", completed: false, courses: 1, totalCourses: 3 },
    { stage: "Expert", completed: false, courses: 0, totalCourses: 2 }
  ];

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
              <Link to="/goals">
                <Button variant="ghost" className="text-blue-400 bg-blue-500/10 border border-blue-500/20">
                  Goals
                </Button>
              </Link>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Personal Learning Goals
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Track your progress, set milestones, and follow your personalized C++ learning roadmap
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Goals */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Current Goals</CardTitle>
                    <CardDescription className="text-slate-300">
                      Your active learning objectives
                    </CardDescription>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Goal
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {currentGoals.map((goal) => (
                    <div key={goal.id} className="p-6 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-white font-semibold">{goal.title}</h3>
                            <Badge className={`${
                              goal.priority === 'high' ? 'bg-red-600' : 
                              goal.priority === 'medium' ? 'bg-orange-600' : 'bg-green-600'
                            }`}>
                              {goal.priority} priority
                            </Badge>
                            <Badge variant="outline" className="border-slate-600 text-slate-300">
                              {goal.category}
                            </Badge>
                          </div>
                          <p className="text-slate-300 mb-4">{goal.description}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Due: {goal.deadline}
                            </div>
                          </div>
                        </div>
                        <Target className="h-6 w-6 text-blue-400 ml-4 shrink-0" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-300">Progress</span>
                          <span className="text-white font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Learning Roadmap */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">C++ Learning Roadmap</CardTitle>
                  <CardDescription className="text-slate-300">
                    Your personalized path to C++ mastery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {learningPath.map((stage, index) => (
                      <div key={stage.stage} className="relative">
                        {index < learningPath.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-600"></div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            stage.completed ? 'bg-green-600' : 'bg-slate-600'
                          }`}>
                            {stage.completed ? (
                              <CheckCircle className="h-6 w-6 text-white" />
                            ) : (
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`text-lg font-semibold ${
                                stage.completed ? 'text-green-400' : 'text-white'
                              }`}>
                                {stage.stage}
                              </h3>
                              <Badge className={`${
                                stage.completed ? 'bg-green-600' : 'bg-slate-600'
                              }`}>
                                {stage.courses}/{stage.totalCourses} Courses
                              </Badge>
                            </div>
                            <div className="bg-slate-700/30 p-4 rounded-lg">
                              <Progress value={(stage.courses / stage.totalCourses) * 100} className="h-2 mb-4" />
                              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800 w-full">
                                View Courses
                                <ChevronRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Achievements */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    Achievements
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Your learning milestones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-60 pr-4">
                    <div className="space-y-4">
                      {milestones.map((milestone) => (
                        <div key={milestone.id} className={`p-4 rounded-lg border ${
                          milestone.status === 'completed' 
                            ? 'bg-green-900/20 border-green-600/30' 
                            : 'bg-slate-700/30 border-slate-600/30'
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-white font-medium">{milestone.title}</h4>
                            <Badge className={milestone.status === 'completed' ? 'bg-green-600' : 'bg-slate-600'}>
                              {milestone.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 text-sm">{milestone.date}</span>
                            <Badge variant="outline" className="text-yellow-400 border-yellow-500/30">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              {milestone.points} pts
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Learning Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="text-center p-4 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                    <h3 className="text-4xl font-bold text-white">450</h3>
                    <p className="text-blue-300">Total Points</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-purple-900/20 border border-purple-600/30 rounded-lg">
                      <h3 className="text-3xl font-bold text-white">3</h3>
                      <p className="text-purple-300">Completed</p>
                    </div>
                    <div className="text-center p-4 bg-amber-900/20 border border-amber-600/30 rounded-lg">
                      <h3 className="text-3xl font-bold text-white">2</h3>
                      <p className="text-amber-300">In Progress</p>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">Learning Pace</span>
                      <span className="text-green-400">Above Average</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-blue-900/20 border-blue-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Recommended Next Step</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Template Programming</h4>
                      <p className="text-slate-300 text-sm">Advanced C++ Course</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Progress value={0} className="h-2" />
                    <p className="text-slate-300 text-sm">This course will help you master one of the most powerful features of C++, the template system.</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Learning
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
