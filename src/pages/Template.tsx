
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ArrowLeft, Palette, Zap, Copy, Crown, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Template = () => {
  const templates = [
    {
      id: 1,
      title: "Portfolio Website Template",
      description: "Clean, modern portfolio template perfect for showcasing your projects and skills",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      features: ["Responsive Design", "Dark/Light Mode", "Contact Forms", "Project Gallery"],
      tech: ["React", "TypeScript", "Tailwind CSS"],
      tier: "free",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Learning Platform Template",
      description: "Complete educational platform template with course management and user authentication",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      features: ["Course Management", "User Dashboard", "Progress Tracking", "Payment Integration"],
      tech: ["React", "TypeScript", "Supabase", "Stripe"],
      tier: "premium",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "SaaS Landing Page",
      description: "High-converting SaaS landing page template with pricing tables and feature highlights",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      features: ["Pricing Tables", "Feature Sections", "Testimonials", "CTA Sections"],
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      tier: "free",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "E-commerce Template",
      description: "Full-featured e-commerce template with shopping cart and payment processing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      features: ["Product Catalog", "Shopping Cart", "User Accounts", "Order Management"],
      tech: ["React", "TypeScript", "Supabase", "Stripe"],
      tier: "premium",
      demoUrl: "#",
      downloadUrl: "#"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Choose Your Template",
      description: "Browse our collection of professionally designed templates and select the one that fits your needs."
    },
    {
      step: 2,
      title: "Download & Customize",
      description: "Download the template files and customize the design, content, and functionality to match your brand."
    },
    {
      step: 3,
      title: "Deploy Your Site",
      description: "Deploy your customized website using your preferred hosting platform or our recommended services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">CodeForge Academy</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center space-x-2 text-white hover:text-blue-400 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="text-center">
              <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
                🎨 Professional Website Templates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Build Websites <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Faster</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Start with our professionally designed templates and customize them to create stunning websites in minutes, not hours
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-xl text-slate-300">Get your website up and running in three simple steps</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Website Templates</h2>
              <p className="text-xl text-slate-300">Choose from our collection of modern, responsive templates</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {templates.map((template) => (
                <Card key={template.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden group hover:bg-slate-750 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {template.tier === "premium" ? (
                        <Badge className="bg-blue-600 text-white flex items-center gap-1">
                          <Crown className="h-3 w-3" />
                          Premium
                        </Badge>
                      ) : (
                        <Badge className="bg-green-600 text-white">Free</Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{template.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {template.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {template.tech.map((tech) => (
                          <Badge key={tech} className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      {template.tier === "free" ? (
                        <Button className="flex-1 bg-green-600 hover:bg-green-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download Free
                        </Button>
                      ) : (
                        <Link to="/register" className="flex-1">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            <Crown className="h-4 w-4 mr-2" />
                            Get Premium
                          </Button>
                        </Link>
                      )}
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Use Our Templates?</h2>
              <p className="text-xl text-slate-300">Built with modern best practices and cutting-edge technologies</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Fast Setup</h3>
                <p className="text-slate-300">Get your website up and running in minutes with our easy-to-use templates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Customizable</h3>
                <p className="text-slate-300">Easily customize colors, fonts, layouts, and content to match your brand</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Copy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Modern Code</h3>
                <p className="text-slate-300">Built with React, TypeScript, and Tailwind CSS for maintainable code</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Choose a template and start building your professional website today
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template;
