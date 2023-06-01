import Navbar from "@/components/common/Navbar";
import FAQSection from "@/components/pages/home/FAQSection";
import Footer from "@/components/pages/home/FooterSection";
import HeroSection from "@/components/pages/home/Hero";
import TeamSection from "@/components/pages/home/TeamSection";
import TestimonialSection from "@/components/pages/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FAQSection />
      <TeamSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
