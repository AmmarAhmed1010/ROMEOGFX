import Header from "@/app/components/Header";
import Achievements from "@/app/components/Achievements";
import HeroSection from "@/app/components/HeroSection";
import Plans from "@/app/components/Plans";
import PriceList from "@/app/components/PriceList";
import WorkCategories from "@/app/components/WorkCategories";
import DualSlider from "./components/CustomSlider";
import FirstSlider from "./components/FirstSlider";
import InfiniteSlider from "./components/InfiniteSlider";
import SecondSlider from "./components/SecondSlider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-16 ">
        {/* hero section */}
        <HeroSection />
        {/* Featured */}
        <div>
        <h1
        id="featured"
        className="underline text-white decoration-[#30D6F3] text-3xl md:text-5xl mb-6 font-semibold mt-10"
      >
        Featured Thumbnail
      </h1>

        <InfiniteSlider/>
        <SecondSlider/>
        </div>
        {/* <div className="md:hidden flex">
        <DualSlider/>
        </div>
        <div className="md:flex hidden">
<FirstSlider/>
        </div> */}
        {/* Work categories */}
        <WorkCategories/>
        {/* Achievements */}
        <Achievements />
        {/* Price List */}
        <PriceList />
        {/* Plans */}
        <Plans />

        
      </div>
    </>
  );
}
