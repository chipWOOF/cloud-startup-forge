import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <img
        src="IMG_1234.JPG"
        alt="backdrop"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: "none" }}
      />
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
            <a href="/scroll" className="text-muted-foreground hover:text-foreground transition-colors">
              <Button variant="hero" size="xl" className="group">
                Get started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button variant="glass" size="sm">
              Click here for a TLDR
            </Button>
            </a>
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
        </div>
      </div>
    </section>
  );
};