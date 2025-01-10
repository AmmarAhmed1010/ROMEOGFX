import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PricingPlans from "@/components/PricingPlans";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>
      <div className="bg-[#100213] px-4 md:px-16">
        <Hero />
        
        
        
        <BentoGridDemo/>
        <AnimatedTestimonialsDemo/>
      
        <WorkNavigation/>

        <Pricing/>
        <PricingPlans/>
      </div>
    </>
  );
}
