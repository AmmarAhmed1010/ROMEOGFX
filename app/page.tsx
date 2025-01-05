import FeaturedThumbnail from "@/components/FeaturedThumbnail";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>
      <div className="bg-[#100213] px-4 md:px-16">
        <Hero />
        <FeaturedThumbnail />
        {/* <MenuNavbar/> */}
        {/* <Navbar/> */}  
        {/* <Layout/> */}
        {/* <ScrollImages/> */}

        <WorkNavigation/>
        <Testimonials/>
        <Pricing/>
        <PricingPlans/>
      </div>
    </>
  );
}
