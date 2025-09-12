import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">MinhDaRooler</span>
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