
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  BookOpen, 
  Target, 
  Star, 
  Sparkles,
  Heart,
  Trophy,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import ParticleNetwork from "@/components/ParticleNetwork";

const Welcome = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [mascotExpression, setMascotExpression] = useState("happy");
  const [showConfetti, setShowConfetti] = useState(false);

  const steps = [
    {
      title: "Willkommen bei CodeForge!",
      subtitle: "Dein persönlicher Coding-Begleiter",
      description: "Hallo! Ich bin Cody, dein freundlicher Programmier-Mentor. Lass mich dir zeigen, wie du hier am besten lernst!",
      icon: <Heart className="h-8 w-8 text-red-400" />,
      mascotExpression: "happy"
    },
    {
      title: "Deine Lernreise beginnt",
      subtitle: "Strukturiertes Lernen für alle Level",
      description: "Von den Grundlagen bis zu fortgeschrittenen Themen - ich führe dich Schritt für Schritt durch deine persönliche Lernreise.",
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      mascotExpression: "excited"
    },
    {
      title: "Setze deine Ziele",
      subtitle: "Motivation durch klare Fortschritte",
      description: "Definiere deine Lernziele und verfolge deinen Fortschritt. Jeder kleine Schritt bringt dich näher zu deinem Ziel!",
      icon: <Target className="h-8 w-8 text-green-400" />,
      mascotExpression: "focused"
    },
    {
      title: "Sammle Erfolge",
      subtitle: "Belohnungen für deine Fortschritte",
      description: "Verdiene Sterne, schalte neue Kurse frei und feiere deine Erfolge. Lernen soll Spaß machen!",
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      mascotExpression: "celebrating"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setMascotExpression(steps[currentStep + 1].mascotExpression);
      
      if (currentStep === steps.length - 2) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setMascotExpression(steps[currentStep - 1].mascotExpression);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (mascotExpression === "happy") {
        setMascotExpression("winking");
        setTimeout(() => setMascotExpression("happy"), 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mascotExpression]);

  const getMascotFace = () => {
    switch (mascotExpression) {
      case "happy":
        return "😊";
      case "excited":
        return "🤩";
      case "focused":
        return "🤓";
      case "celebrating":
        return "🎉";
      case "winking":
        return "😉";
      default:
        return "😊";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Particle Network Background */}
      <ParticleNetwork />
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            >
              <Sparkles className="h-6 w-6 text-yellow-400" />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Mascot Section */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              {/* Mascot Character */}
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-105 animate-bounce border-4 border-white/20">
                <div className="text-8xl transform transition-all duration-300">
                  {getMascotFace()}
                </div>
              </div>
              
              {/* Floating elements around mascot */}
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30">
                  <Star className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float delay-1000">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">Cody</h3>
              <p className="text-slate-300">Dein Programmier-Mentor</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform transition-all duration-500 animate-fade-in">
              <CardContent className="p-8">
                {/* Progress indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index <= currentStep
                            ? "bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg"
                            : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-300">
                    {currentStep + 1} von {steps.length}
                  </span>
                </div>

                {/* Step content */}
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20">
                      {steps[currentStep].icon}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white">
                        {steps[currentStep].title}
                      </h1>
                      <p className="text-lg text-blue-300 font-medium">
                        {steps[currentStep].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-200 text-lg leading-relaxed">
                    {steps[currentStep].description}
                  </p>

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm disabled:opacity-50"
                    >
                      Zurück
                    </Button>

                    {currentStep < steps.length - 1 ? (
                      <Button
                        onClick={nextStep}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 shadow-lg border border-white/20"
                      >
                        Weiter
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Link to="/">
                        <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 shadow-lg border border-white/20">
                          Los geht's!
                          <Sparkles className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skip option */}
            <div className="text-center">
              <Link to="/">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
                  Führung überspringen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
