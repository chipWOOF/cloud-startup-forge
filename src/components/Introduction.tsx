import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

export const IntroductionText = () => {
    return (
        <section id="Introduction" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Introduction</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Introduction:
                        <span className="gradient-text"> Who am I? </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Example Card */}
                    <Card className="relative glass-card border-border/50 hover:-translate-y-2 transition-all duration-300 hover:border-primary/30">
                        <CardContent className  ="space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-primary/20">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                </div>
                                <span className="text-sm text-muted-foreground">Hi my name is Minh Bao Bui. I am a second year student studying Commerce/Computer Science. Ethnically, I am Vietnamese, my pronouns are He/Him/His. Click below to find out about my hobbies!</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}