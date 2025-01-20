import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import Carousel from "@/components/Carousel";
import { CarouselDemo } from "@/components/CarouselDemo";
import { ColourfulTextDemo } from "@/components/ColourfulTextDemo";
import Header from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>

        <Header/>
        {/* <Hero /> */}
      <div className="px-4 mt-16 md:px-16 ">
        
        <CarouselDemo/>
        <Carousel/>
      <ColourfulTextDemo/>
        <WorkNavigation />
        <Pricing />
        <BackgroundGradientDemo />
      </div>
    </>
  );
}
