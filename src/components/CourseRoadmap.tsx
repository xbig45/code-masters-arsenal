
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Crown, ArrowRight, Play } from "lucide-react";

const CourseRoadmap = () => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Play className="h-5 w-5 text-blue-500" />;
      default:
        return <Circle className="h-5 w-5 text-slate-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-500/10";
      case "in-progress":
        return "border-blue-500 bg-blue-500/10";
      default:
        return "border-slate-600 bg-slate-800/30";
    }
  };

  return (
    <Card className="bg-slate-800/30 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          Complete C++ Developer Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < roadmapSteps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-600"></div>
              )}
              
              <div className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${getStatusColor(step.status)} ${step.status !== 'locked' ? 'hover:bg-slate-700/50' : 'opacity-60'}`}>
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(step.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <Badge variant={step.tier === "premium" ? "default" : "secondary"} className={`text-xs ${step.tier === "premium" ? "bg-gradient-to-r from-amber-500 to-yellow-600" : "bg-green-600"}`}>
                      {step.tier === "premium" ? <Crown className="h-3 w-3 mr-1" /> : null}
                      {step.tier === "premium" ? "Premium" : "Free"}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">{step.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{step.duration}</span>
                    {step.status !== 'locked' && (
                      <Button size="sm" variant={step.status === 'completed' ? 'outline' : 'default'} className="text-xs">
                        {step.status === 'completed' ? 'Review' : step.status === 'in-progress' ? 'Continue' : 'Start'}
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white mb-1">Your Progress</h4>
              <p className="text-sm text-slate-300">2 of 6 courses completed</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-400">33%</div>
              <div className="w-32 bg-slate-700 rounded-full h-2 mt-1">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseRoadmap;
