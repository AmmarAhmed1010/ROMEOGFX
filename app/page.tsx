import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import Header from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import Slider from "@/components/Slider";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>

        <Header/>
        {/* <Hero /> */}
      <div className="px-4 mt-10 md:px-16 ">
        <BackgroundBeamsWithCollisionDemo/>
        <Slider/>
      {/* <ColourfulTextDemo/> */}
        <WorkNavigation />
        <Pricing />
        <BackgroundGradientDemo />
      </div>
    </>
  );
}
