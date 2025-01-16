import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import { CarouselDemo } from "@/components/CarouselPlugin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>
        <Header/>
      <div className="bg-[#100213] px-4 md:px-16">
        <Hero />
        {/* <Featured/> */}
        <CarouselDemo/>
        <WorkNavigation />
        <Pricing />
        <BackgroundGradientDemo />
      </div>
    </>
  );
}
