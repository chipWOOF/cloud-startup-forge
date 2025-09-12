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
    <div
        className="overflow-hidden"
        style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            height: "auto", // 
            minHeight: "400px", //
            paddingBottom: "64px", // 
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