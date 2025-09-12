import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const about = [
  {
    name: "Movies",
    content: "Hello! I am Minh Bui, I'm a second year student studying Commerce/Computer Science. Ethnically, I am Vietnamese, my pronouns are He/Him/His.",
  },
];

export const Intro = () => {
    return (
        <section id="Introduction" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        All about Minh Bao Bui
                        <span className="gradient-text"> the best trainee candidate (PLEASE PICK ME) </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Get to know all about me and my interests!
                    </p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {about.map((about, index) => (
                    <Card key={index} className= "relative glass-card border-border/50 hover:-translate-y-2 transition-all duration-300">
                        <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl font-bold">{about.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-sm font-semibold">{about.content}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        If you pick me I promise to give even better recommedations!
                    </p>
                </div>
            </div>
        </section>
    );
}