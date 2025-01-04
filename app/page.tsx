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
      <div>
        <Hero />
        <FeaturedThumbnail />
        <Testimonials/>
        <Skills/>
        <Pricing/>
        <PricingPlans/>
        {/* <AboutMe/> */}
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
