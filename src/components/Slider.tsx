import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { AboutME } from "@/components/Interests";
import { Intro } from "@/components/Intro";

const pages = [<Intro />, <AboutME />];

export const PageSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  function handleNext() {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  }

  function handlePrev() {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  }

  return (
    <section id="Slider" className="py-24 relative">
    <div className="overflow-hidden" style={{ width: "100%", maxWidth: "900px", margin: "0 auto", height: "400px" }}>
      <div
        className="flex"
        style={{
          width: `${pages.length * 100}%`,
          transform: `translateX(-${currentPage * (100 / pages.length)}%)`,
          transition: "transform 1s cubic-bezier(.68,-0.55,.27,1.55)",
        }}
      >
        {pages.map((Page, idx) => (
          <div key={idx} style={{ width: `${100 / pages.length}%` }}>
            {Page}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={handlePrev} className="glass-card px-4 py-2">Prev</button>
        <button onClick={handleNext} className="glass-card px-4 py-2">Next</button>
      </div>
    </div>
    </section>
  );
};