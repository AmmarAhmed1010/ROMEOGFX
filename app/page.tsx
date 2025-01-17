import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>

        <Header/>
      <div className=" px-4 md:px-16">
        <Hero />
        <Carousel/>
        <WorkNavigation />
        <Pricing />
        <BackgroundGradientDemo />
      </div>
    </>
  );
}
