import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Achievements from "@/components/Achievements";
import HeroSection from "@/components/HeroSection";
import Plans from "@/components/Plans";


export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-16 ">
        {/* hero section */}
        <HeroSection/>
        {/* Featured */}
        <Slider />
        {/* Work categories */}


        {/* <WorkCategories /> */}
        {/* Achievements */}
        <Achievements />
          {/* Price List */}


          {/* <PricingList/> */}
        {/* Plans */}
       <Plans/>
      
      </div>
    </>
  );
}
