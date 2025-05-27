import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import TrustedBy from "@/components/sections/TrustedBy";
import AboutUs from "@/components/sections/AboutUs";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import RoutineTimeline from "@/components/sections/RoutineTimeline";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SocialProof /> */}
      {/* <TrustedBy /> */}
      <AboutUs />
      <FeaturedProduct />
      <RoutineTimeline />
      <Testimonials />
    </>
  );
}
