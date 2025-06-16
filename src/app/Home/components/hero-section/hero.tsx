import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/images/hero-image.png";
import AnnouncementBar from "@/components/features/announcement-bar";
import ArrowIconRight from "@/components/common/right-arrow-icon/ArrowIconRight";

export default function HeroSection() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <div className="grid grid-cols-1  md:grid-cols-2 font-rubik lg:mt-[200px]">
        {/* ===== Left Content Section ===== */}
        <div className="left pt-0 dark:text-cloudy md:pt-16">
          {/* --- Heading --- */}
          <h1 className="text-2xl md:text-6xl font-bold font-baloo mb-6 uppercase max-w-[212px] md:max-w-full xl:min-w-[677px]">
            Your body can <span className="text-flame">stand almost</span> anything
          </h1>

          {/* --- Message --- */}
          <div className="flex">
            <div className="w-1 min-h-full bg-flame rounded-lg"></div>
            <p className="text-lg max-w-[559px] ml-4">
              It's your mind that needs convincing. Push past your limits, stay committed, and watch
              as your body transform into powerhouse of strength and resilience. Start your journey
              today & truly capable of!
            </p>
          </div>

          {/* --- Counter Boxes --- */}
          <div className="counter-box grid grid-cols-1 md:grid-cols-3 mt-16">
            {/* --- Counter Items --- */}
            <div className="counter-item">
              <h3 className="text-2xl font-bold">1200+</h3>
              <p className="text-lg">Active Members</p>
            </div>
            <div className="counter-item">
              <h3 className="text-2xl font-bold">12+</h3>
              <p className="text-lg">Certified Trainers</p>
            </div>
            <div className="counter-item">
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-lg">Years Of Experience</p>
            </div>
          </div>

          {/* --- Call-to-Action Buttons --- */}
          <div className="cta mt-16 mb-4 flex justify-between md:justify-normal md:gap-16 ">
            <Button variant="flame" size="flameLg">
              Get Started
              <ArrowIconRight />
            </Button>

            <Button variant="flameOutline" size="flameLg">
              Explore More
              <ArrowIconRight />
            </Button>
          </div>
        </div>

        {/* ===== Right Image Section ===== */}
        <div className="right">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="mx-auto"
          />
        </div>
      </div>

      {/* --- Marquee Section --- */}
      <AnnouncementBar />
    </>
  );
}
