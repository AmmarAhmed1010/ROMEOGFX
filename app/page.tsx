import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Achievements from "@/components/Achievements";
import HeroSection from "@/components/HeroSection";
import Plans from "@/components/Plans";
import PriceList from "@/components/PriceList";
import WorkCategoriesNew from "@/components/WorkCategoriesNew";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-16 ">
        {/* hero section */}
        <HeroSection />
        {/* Featured */}
        <Slider />
        {/* Work categories */}
        {/* <WorkCategoriesNew/> */}
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
