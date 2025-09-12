import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutME } from "@/components/Interests";
import { Intro } from "@/components/Intro";
import { PageSlider } from "@/components/Slider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PageSlider />
      <Intro />
      <AboutME />
    </div>
  );
};

export default Index;
