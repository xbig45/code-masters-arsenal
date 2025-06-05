
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, User, Mail, MapPin, Calendar, Edit, Github, Linkedin, Globe, Star, Trophy, Clock, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const location = useLocation();

  const userStats = {
    coursesCompleted: 8,
    totalCourses: 12,
    studyStreak: 45,
    totalStudyHours: 234,
    certificatesEarned: 5
  };

  const recentActivity = [
    { id: 1, action: "Completed", item: "Advanced C++ Memory Management", date: "2 days ago", type: "course" },
    { id: 2, action: "Started", item: "Kernel Development Master Class", date: "1 week ago", type: "course" },
    { id: 3, action: "Earned", item: "C++ Expert Certificate", date: "2 weeks ago", type: "certificate" },
    { id: 4, action: "Completed", item: "System Programming & APIs", date: "3 weeks ago", type: "course" }
  ];

  const completedCourses = [
    { id: 1, title: "C++ Fundamentals", completedDate: "Jan 15, 2024", rating: 5 },
    { id: 2, title: "Object-Oriented Programming", completedDate: "Feb 8, 2024", rating: 4 },
    { id: 3, title: "STL & Algorithms", completedDate: "Feb 28, 2024", rating: 5 },
    { id: 4, title: "Advanced C++ Memory Management", completedDate: "Mar 15, 2024", rating: 5 }
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
                <Button variant="ghost" className="text-slate-300 hover:text-white">
                  Goals
                </Button>
              </Link>
              <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-blue-500">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-blue-500/20">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face" />
                    <AvatarFallback className="text-xl">JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold text-white mb-2">John Doe</h2>
                  <p className="text-slate-300 mb-4">C++ Developer & System Programmer</p>
                  <div className="flex items-center justify-center text-slate-400 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex justify-center space-x-3 mb-4">
                    <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white p-2">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                  <Link to="/edit-profile">
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Learning Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Courses Completed</span>
                    <Badge className="bg-green-600">{userStats.coursesCompleted}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Study Streak</span>
                    <Badge className="bg-orange-600">{userStats.studyStreak} days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Total Hours</span>
                    <Badge className="bg-blue-600">{userStats.totalStudyHours}h</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Certificates</span>
                    <Badge className="bg-purple-600">{userStats.certificatesEarned}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Progress Overview */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Learning Progress</CardTitle>
                  <CardDescription className="text-slate-300">
                    Your current progress through the C++ curriculum
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Overall Completion</span>
                      <span className="text-white font-medium">
                        {userStats.coursesCompleted}/{userStats.totalCourses} courses
                      </span>
                    </div>
                    <Progress 
                      value={(userStats.coursesCompleted / userStats.totalCourses) * 100} 
                      className="h-3"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                        <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{userStats.certificatesEarned}</div>
                        <div className="text-slate-400">Certificates</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                        <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{userStats.totalStudyHours}</div>
                        <div className="text-slate-400">Study Hours</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                        <Star className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{userStats.studyStreak}</div>
                        <div className="text-slate-400">Day Streak</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                  <CardDescription className="text-slate-300">
                    Your latest learning achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.type === 'course' ? 'bg-blue-400' : 'bg-green-400'
                          }`}></div>
                          <div>
                            <p className="text-white">
                              <span className="text-slate-300">{activity.action}</span> {activity.item}
                            </p>
                            <p className="text-slate-400 text-sm">{activity.date}</p>
                          </div>
                        </div>
                        {activity.type === 'certificate' && (
                          <Trophy className="h-5 w-5 text-yellow-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Completed Courses */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Completed Courses</CardTitle>
                  <CardDescription className="text-slate-300">
                    Courses you've successfully completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {completedCourses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                        <div>
                          <h4 className="text-white font-medium">{course.title}</h4>
                          <p className="text-slate-400 text-sm">Completed on {course.completedDate}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < course.rating ? 'text-yellow-400 fill-current' : 'text-slate-600'
                                }`} 
                              />
                            ))}
                          </div>
                          <Badge className="bg-green-600">Completed</Badge>
                        </div>
                      </div>
                    ))}
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

export default Profile;
