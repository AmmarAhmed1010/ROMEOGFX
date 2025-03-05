import Header from "@/app/components/Header";
import Achievements from "@/app/components/Achievements";
import HeroSection from "@/app/components/HeroSection";
import Plans from "@/app/components/Plans";
import PriceList from "@/app/components/PriceList";
import WorkCategories from "@/app/components/WorkCategories";
import DualSlider from "./components/CustomSlider";
import FirstSlider from "./components/FirstSlider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-16 ">
        {/* hero section */}
        <HeroSection />
        {/* Featured */}
        <div className="md:hidden flex">
        <DualSlider/>
        </div>
        <div className="md:flex hidden">
<FirstSlider/>
        </div>
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
