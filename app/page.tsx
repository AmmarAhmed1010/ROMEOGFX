import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import WorkNavigation from "@/components/WorkItems";

export default function Home() {
  return (
    <>
      <div className="bg-[#100213] px-4 md:px-16">
        <Hero />
        <WorkNavigation />
        <Pricing />
        <BackgroundGradientDemo />
      </div>
    </>
  );
}
