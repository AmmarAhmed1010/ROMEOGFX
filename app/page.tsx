import FeaturedThumbnail from "@/components/FeaturedThumbnail";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PricingPlans from "@/components/PricingPlans";

export default function Home() {
  return (
    <>
      <div className="bg-[#040D16] px-4 md:px-16">
        <Hero />
        <FeaturedThumbnail />
        {/* <MenuNavbar/> */}
        {/* <Navbar/> */}  
        {/* <Layout/> */}
        {/* <ScrollImages/> */}
        {/* <WorkNavigation/> */}
        {/* <Testimonials/> */}
        <Pricing/>
        <PricingPlans/>
      </div>
    </>
  );
}
