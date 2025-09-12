import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { AboutME } from "@/components/Interests";
import { Intro } from "@/components/Intro";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Intro />
      <AboutME />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
