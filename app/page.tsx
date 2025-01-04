import Contact from "@/components/Contact";
import FeaturedThumbnail from "@/components/FeaturedThumbnail";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PricingPlans from "@/components/PricingPlans";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-[#08151D] px-4 md:px-16">
        <Hero />
        <FeaturedThumbnail />
        <Testimonials/>
        {/* <Skills/> */}
        <Pricing/>
        <PricingPlans/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
