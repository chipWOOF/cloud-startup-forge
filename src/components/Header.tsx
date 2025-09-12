import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold ">MinhDaRooler</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#Introduction" className="text-muted-foreground hover:text-foreground transition-colors">
              Introduction
            </a>
            <a href="#About Me" className="text-muted-foreground hover:text-foreground transition-colors">
              Hobbies
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};