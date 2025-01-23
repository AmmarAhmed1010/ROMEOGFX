import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import Header from "@/components/Header";
import Packages from "@/components/Packages";
import Results from "@/components/Results";
import Slider from "@/components/Slider";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>

        <Header/>
      <div className="px-4 md:px-16 ">
        <BackgroundBeamsWithCollisionDemo/>
        {/* <ImagesMoving/> */}
        <Slider/>
        <WorkNavigation />
        <Packages/>
        <Results/>
        {/* <Pricing /> */}
        <BackgroundGradientDemo />
      </div>
    </>
  );
}
