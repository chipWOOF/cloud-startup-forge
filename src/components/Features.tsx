import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  Zap, 
  Target, 
  Globe, 
  BarChart3, 
  Shield,
  PenTool,
  Lightbulb,
  Users
} from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "AI Content Generation",
    description: "Generate high-quality marketing copy, blog posts, and social media content in seconds with our advanced AI models."
  },
  {
    icon: Target,
    title: "SEO Optimization",
    description: "Built-in SEO optimization ensures your content ranks higher and reaches your target audience effectively."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate content 10x faster than traditional methods. From idea to published content in minutes."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create content in over 25 languages with native-level fluency and cultural awareness."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track content performance with detailed analytics and insights to optimize your strategy."
  },
  {
    icon: Shield,
    title: "Brand Voice Protection",
    description: "Maintain consistent brand voice across all content with our advanced tone and style controls."
  },
  {
    icon: Lightbulb,
    title: "Content Ideas",
    description: "Never run out of ideas with our AI-powered content suggestion engine and trending topic alerts."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborate seamlessly with your team, share templates, and maintain brand consistency."
  },
  {
    icon: Sparkles,
    title: "Smart Templates",
    description: "Access hundreds of proven templates for every content type and industry vertical."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to
            <span className="gradient-text"> scale your content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to help you create, optimize, and scale your content marketing efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-primary-glow/20 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};