import FeaturedThumbnail from "@/components/FeaturedThumbnail";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Pricing from "@/components/Pricing";
import PricingPlans from "@/components/PricingPlans";
import ScrollImages from "@/components/ScrollImages";
import Testimonials from "@/components/Testimonials";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>
      <div className="bg-[#040D16] px-4 md:px-16">
        <Hero />
        <Layout/>
        <ScrollImages/>
        <FeaturedThumbnail />
        <WorkNavigation/>
        <Testimonials/>
        <Pricing/>
        <PricingPlans/>
      </div>
    </>
  );
}
