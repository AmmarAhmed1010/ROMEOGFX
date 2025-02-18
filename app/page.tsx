import Header from "@/app/components/Header";
import Slider from "@/app/components/Slider";
import Achievements from "@/app/components/Achievements";
import HeroSection from "@/app/components/HeroSection";
import Plans from "@/app/components/Plans";
import PriceList from "@/app/components/PriceList";
import WorkCategories from "@/app/components/WorkCategories";

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
