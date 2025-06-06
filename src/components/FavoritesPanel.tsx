
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Crown, Users, Clock, ArrowRight } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  tier: string;
  instructor: string;
}

interface FavoritesPanelProps {
  favorites: number[];
  courses: Course[];
  onToggleFavorite: (courseId: number) => void;
}

const FavoritesPanel = ({ favorites, courses, onToggleFavorite }: FavoritesPanelProps) => {
  const favoriteCourses = courses.filter(course => favorites.includes(course.id));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
          <Star className="h-4 w-4 mr-2" />
          Favorites ({favorites.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            Your Favorite Courses
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            {favorites.length > 0 
              ? `You have ${favorites.length} favorite course${favorites.length === 1 ? '' : 's'}`
              : "You haven't added any courses to your favorites yet"
            }
          </DialogDescription>
        </DialogHeader>
        
        {favoriteCourses.length > 0 ? (
          <div className="grid gap-4 mt-6">
            {favoriteCourses.map((course) => (
              <Card key={course.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={course.tier === "premium" ? "default" : "secondary"} className={course.tier === "premium" ? "bg-gradient-to-r from-amber-500 to-yellow-600" : "bg-green-600"}>
                          {course.tier === "premium" ? <Crown className="h-3 w-3 mr-1" /> : null}
                          {course.tier === "premium" ? "Premium" : "Free"}
                        </Badge>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {course.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg">{course.title}</CardTitle>
                      <p className="text-slate-300 text-sm mt-1">{course.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onToggleFavorite(course.id)}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Star className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                    <div className="flex items-center gap-4">
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
                    <span className="text-xs">by {course.instructor}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Course
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Star className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No favorites yet</h3>
            <p className="text-slate-400 mb-4">Start exploring courses and add them to your favorites!</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Explore Courses
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FavoritesPanel;
