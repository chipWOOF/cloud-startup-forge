import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PageSlider } from "@/components/Slider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PageSlider />
    </div>
  );
};

export default Index;
