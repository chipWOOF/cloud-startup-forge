import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Very bad quality moon */}
        <div
        className="absolute top-16 right-32 w-32 h-32 rounded-full"
        style={{
            background: "#f3f3f3",
            border: "2px solid #e2e8f0",
        }}
        >
        {/* Craters */}
        <div
            style={{
            position: "absolute",
            top: "30px",
            left: "20px",
            width: "18px",
            height: "18px",
            background: "#cbd5e1",
            borderRadius: "50%",
            opacity: 0.7,
            }}
        />
        <div
            style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            width: "10px",
            height: "10px",
            background: "#a0aec0",
            borderRadius: "50%",
            opacity: 0.5,
            }}
        />
        <div
            style={{
            position: "absolute",
            top: "80px",
            left: "40px",
            width: "8px",
            height: "8px",
            background: "#e2e8f0",
            borderRadius: "50%",
            opacity: 0.6,
            }}
        />
        </div>
        {/* Simple stars */}
        {[...Array(30)].map((_, i) => (
        <div
        key={i}
            className="absolute bg-white rounded-full"
            style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            filter: "blur(0.5px)",
            }}
        />
        ))}
        {/* Clouds (optional, can remove for even simpler look) */}
        <div className="absolute top-10 left-1/4 w-72 h-32 bg-white/10 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-20 right-1/3 w-96 h-40 bg-white/10 rounded-full blur-3xl opacity-30" />
    </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to my website!
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Here you can learn all about me, my interests and my dreams.
          </p>

          {/* CTA Buttons */}
          <nav className="flex flex-col gap-4 justify-center items-center mb-12">
            <a href="#Slider" className="text-muted-foreground hover:text-foreground transition-colors">
              <Button variant="hero" size="xl" className="group">
                Get started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="glass" size="sm">
              Click here for a TLDR
            </Button>
          </nav>

          {/* Social Media Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="https://www.instagram.com/minhbooey/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass-card px-4 py-2"
            >
              <FaInstagram className="w-4 h-4 text-primary" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@minhyboi157"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass-card px-4 py-2"
            >
              <FaYoutube className="w-4 h-4 text-primary" />
              <span className="text-sm">Youtube</span>
            </a>
            <a
              href="https://www.linkedin.com/in/minh-bui-aa533b2b9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass-card px-4 py-2"
            >
              <FaLinkedin className="w-4 h-4 text-primary" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="glass-card p-4 rounded-2xl glow-effect">
              <div className="bg-gradient-to-br from-card to-card/50 rounded-xl p-8 border border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/20 rounded w-2/3"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-4/5"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/20 rounded w-1/2"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};