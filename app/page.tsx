import FeaturedThumbnail from "@/components/FeaturedThumbnail";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <div className="bg-[#040D16] px-4 md:px-16">
        {/* <MenuNavbar/> */}
        {/* <Navbar/> */}
        <Hero />
        
        {/* <Layout/> */}
        {/* <ScrollImages/> */}
        <FeaturedThumbnail />
        {/* <WorkNavigation/> */}
        {/* <Testimonials/>
        <Pricing/>
        <PricingPlans/> */}
      </div>
    </>
  );
}
