import Header from "@/components/Header";
import Packages from "@/components/Packages";
import Slider from "@/components/Slider";
import Achievements from "@/components/Achievements";
import WorkCategories from "@/components/WorkCategories";
import { Featured } from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import PricingList from "@/components/PricingList";
import FeaturedThumbnailSection from "@/components/FeaturedThumbnailSection";


export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-16 ">
        {/* hero section */}
        <HeroSection/>
        {/* images slider */}
        <Slider />
        {/* Fetured Projects */}
        <FeaturedThumbnailSection />
       <Featured/>
        {/* Work categories */}
        <WorkCategories />
        {/* Achievements */}
        <Achievements />
        {/* Packages */}
        <Packages />
        {/* Price List */}
        <PricingList/>
      </div>
    </>
  );
}
