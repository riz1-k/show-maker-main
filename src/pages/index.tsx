import AboutUs from "@/components/pages/home/OurOfferings";
import FAQSection from "@/components/pages/home/FAQSection";
import HeroSection from "@/components/pages/home/Hero";
import TeamSection from "@/components/pages/home/TeamSection";
import TestimonialSection from "@/components/pages/home/TestimonialSection";
import Privacy from "@/components/pages/home/Privacy";
import CardSection from "@/components/pages/home/CardSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Privacy />
      <CardSection />
      <FAQSection />
      <TeamSection />
      <TestimonialSection />
    </>
  );
}
