import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

<div className="slider-container">
    <div className="slide-content">
        <p>This content is part of a continuous slide!</p>
    </div>
</div>

export const IntroductionText = () => {
    return (
        <section id="Introduction" className="py-24 relative">
            <div className="slider-container">
                <div className="slide-content">
                    <p>    
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
                                {/* Introduction card */}
                                <Card className="relative glass-card border-border/50 hover:-translate-y-2 transition-all duration-300 hover:border-primary/30">
                                    <CardHeader className="text-center pb-6">
                                        <CardTitle className="text-2xl font-bold">About Me</CardTitle>
                                    </CardHeader>

                                    <CardContent className  ="space-y-12">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div className="p-1 rounded-full bg-primary/20">
                                                </div>
                                            </div>
                                            <span className="text-sm font-semibold">Hello! I am Minh Bui, Im a second year student studying Commerce/Computer Science. Ethnically, I am Vietnamese, my pronouns are He/Him/His.</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {/* Ambitions */}
                                <Card className="relative glass-card border-border/50 hover:-translate-y-2 transition-all duration-300 hover:border-primary/30">
                                    <CardHeader className="text-center pb-6">
                                        <CardTitle className="text-2xl font-bold">Ambitions ✨🌌💫</CardTitle>
                                    </CardHeader>
                                    
                                    <CardContent className  ="space-y-12">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div className="p-1 rounded-full bg-primary/20">
                                                </div>
                                            </div>
                                            <span className="text-sm font-semibold">I am a very ambitious person, sometimes my ideas grow faster than I can keep up with. I believe in making meaningful change, would you like to see a few ideas?</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {/* Dopamine receptors */}
                                <Card className="relative glass-card border-border/50 hover:-translate-y-2 transition-all duration-300 hover:border-primary/30">
                                    <CardHeader className="text-center pb-6">
                                        <CardTitle className="text-2xl font-bold">My interests and hobbies ✨🌌💫</CardTitle>
                                    </CardHeader>
                                    
                                    <CardContent className  ="space-y-12">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div className="p-1 rounded-full bg-primary/20">
                                                </div>
                                            </div>
                                            <span className="text-sm font-semibold">I am a very ambitious person, sometimes my ideas grow faster than I can keep up with. I believe in making meaningful change, would you like to see a few ideas?</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </section>
    );
}
