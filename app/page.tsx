import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import Header from "@/components/Header";
import Packages from "@/components/Packages";
import Slider from "@/components/Slider";
import Achievements from "@/components/Achievements";
import WorkCategories from "@/components/WorkCategories";
import { Featured } from "@/components/Featured";
import { PricingList } from "@/components/PricingList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-16 ">
        {/* hero section */}
        <BackgroundBeamsWithCollisionDemo />
        {/* images slider */}
        <Slider />
        {/* Fetured Projects */}
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
