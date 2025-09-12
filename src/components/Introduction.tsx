import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const cards = [
  {
    title: "About Me",
    content: "Hello! I am Minh Bui, I'm a second year student studying Commerce/Computer Science. Ethnically, I am Vietnamese, my pronouns are He/Him/His.",
  },
  {
    title: "Ambitions ✨🌌💫",
    content: "I am a very ambitious person, sometimes my ideas grow faster than I can keep up with. I believe in making meaningful change, would you like to see a few ideas?",
  },
  {
    title: "My interests and hobbies ✨🌌💫",
    content: "I am a very ambitious person, sometimes my ideas grow faster than I can keep up with. I believe in making meaningful change, would you like to see a few ideas?",
  },
];

function Slide({ card }) {
  return (
    <Card className="relative glass-card border-border/50 hover:-translate-y-2 transition-all duration-300 hover:border-primary/30 mx-2">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-12">
        <div className="space-y-6">
          <span className="text-sm font-semibold">{card.content}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export const IntroductionText = () => {
  const [currentCard, setCurrentCard] = useState(0);

  function handleNext() {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  }

  function handlePrev() {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  }

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
        <div
          className="overflow-hidden"
          style={{ width: "100%", maxWidth: "500px", margin: "0 auto", height: "220px" }}
        >
          <div
            className="flex"
            style={{
              width: `${cards.length * 100}%`,
              transform: `translateX(-${currentCard * (100 / cards.length)}%)`,
              transition: "transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
            }}
          >
            {cards.map((card, idx) => (
              <div key={idx} style={{ width: `${100 / cards.length}%` }}>
                <Slide card={card} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={handlePrev} className="glass-card px-4 py-2">Prev</button>
          <button onClick={handleNext} className="glass-card px-4 py-2">Next</button>
        </div>
      </div>
    </section>
  );
};