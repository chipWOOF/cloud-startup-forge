import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";

export const NIGGER = () => {
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
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              I HATE NIGGAS
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              I HATE NIGGAS
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              I HATE NIGGAS
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              I HATE NIGGAS
            </Button>
            <Button variant="hero" size="sm">
              I HATE NIGGAS
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};