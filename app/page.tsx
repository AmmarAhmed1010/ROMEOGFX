import FeaturedThumbnail from "@/components/FeaturedThumbnail";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-[#040D16] px-4 md:px-16">
        <Hero />
        <FeaturedThumbnail />
        <Testimonials/>
        <Pricing/>
        <PricingPlans/>
        <Footer/>
      </div>
    </>
  );
}
