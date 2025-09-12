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
        <section
        id="Slider"
        className="py-24 relative overflow-hidden"
        style={{
            background: "#1a202c",
        }}
        >
        {/* Starry background */}
        <div className="absolute inset-0 pointer-events-none z-0">
        {/* Very bad quality moon */}
        <div
        className="absolute top-16 right-32 w-32 h-32 rounded-full"
        style={{
            background: "#f3f3f3",
            border: "2px solid #e2e8f0",
        }}
        >
        {/* Craters */}
        <div
            style={{
            position: "absolute",
            top: "30px",
            left: "20px",
            width: "18px",
            height: "18px",
            background: "#cbd5e1",
            borderRadius: "50%",
            opacity: 0.7,
            }}
        />
        <div
            style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            width: "10px",
            height: "10px",
            background: "#a0aec0",
            borderRadius: "50%",
            opacity: 0.5,
            }}
        />
        <div
            style={{
            position: "absolute",
            top: "80px",
            left: "40px",
            width: "8px",
            height: "8px",
            background: "#e2e8f0",
            borderRadius: "50%",
            opacity: 0.6,
            }}
        />
        </div>
        {/* Simple stars */}
        {[...Array(30)].map((_, i) => (
        <div
        key={i}
            className="absolute bg-white rounded-full"
            style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            filter: "blur(0.5px)",
            }}
        />
        ))}
        {/* Clouds (optional, can remove for even simpler look) */}
        <div className="absolute top-10 left-1/4 w-72 h-32 bg-white/10 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-20 right-1/3 w-96 h-40 bg-white/10 rounded-full blur-3xl opacity-30" />
    </div>
      <div className="relative z-10">
        <div
          className="overflow-hidden"
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            height: "auto",
            minHeight: "400px",
          }}
        >
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
      </div>
    </section>
  );
};