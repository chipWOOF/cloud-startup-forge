import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

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