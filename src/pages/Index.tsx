import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { AboutME } from "@/components/Interests";
import { IntroductionText } from "@/components/Introduction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <IntroductionText />
      <AboutME />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
