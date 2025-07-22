import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    icon: Sparkles,
    description: "Perfect for solo creators and small businesses",
    features: [
      "5,000 words per month",
      "10+ content templates",
      "Basic SEO optimization",
      "Email support",
      "1 brand voice",
      "Export to popular formats"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 79,
    icon: Zap,
    description: "Ideal for growing teams and agencies",
    features: [
      "25,000 words per month",
      "50+ content templates",
      "Advanced SEO optimization",
      "Priority support",
      "5 brand voices",
      "Team collaboration",
      "Analytics dashboard",
      "Custom templates"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 199,
    icon: Crown,
    description: "For large teams and organizations",
    features: [
      "Unlimited words",
      "All content templates",
      "Premium SEO tools",
      "24/7 dedicated support",
      "Unlimited brand voices",
      "Advanced team features",
      "Custom integrations",
      "White-label options",
      "API access"
    ],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple,
            <span className="gradient-text"> transparent pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your content creation needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative glass-card border-border/50 hover:-translate-y-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/50 glow-effect scale-105' 
                  : 'hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`p-4 rounded-xl w-fit mx-auto mb-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary to-primary-glow' 
                    : 'bg-gradient-to-r from-primary/20 to-primary-glow/20'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button 
                  variant={plan.popular ? "hero" : "glass"} 
                  size="lg" 
                  className="w-full"
                >
                  Start Free Trial
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-primary/20">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include our 14-day money-back guarantee
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary-glow">
            Compare all features →
          </Button>
        </div>
      </div>
    </section>
  );
};