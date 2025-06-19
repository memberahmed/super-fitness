import bgHero from "../../assets/images/hero-bg.png";
import AboutUs from "./_components/about-us/about-us";
import HeroSection from "./_components/hero-section/hero";

export default function Home() {
  return (
    <div className="relative pt-1">
      {/* 🔥 Background Layer */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className="w-full h-full bg-[#FFFFFF99] dark:bg-[#24242499] backdrop-blur-[35.1px]" />
      </div>
      <div className="container mx-auto px-4 pt-24 md:pt-0 ">
        {/* Hero */}
        <HeroSection />
      </div>

      {/* About Us */}
      <div className="bg-surface">
        <AboutUs />
      </div>
    </div>
  );
}
