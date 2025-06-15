import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <>
      <div className="absolute left-0 bg-flame text-2xl font-bold text-cloudy overflow-hidden uppercase z-10">
        <Marquee>
          <div className="flex items-center justify-center gap-3 py-6 text-white text-lg font-bold">
            <span className="flex items-center gap-4">
              <Sparkle fill="white" />
              Outdoor & online trainers
            </span>
            <span className="flex items-center gap-4">
              <Sparkle fill="white" />
              Personal training
            </span>
            <span className="flex items-center gap-4">
              <Sparkle fill="white" />
              Live Classes
            </span>
            <span className="flex items-center gap-4">
              <Sparkle fill="white" />
              Personal trainers
            </span>
            <span className="flex items-center gap-4">
              <Sparkle fill="white" />
              Personal Classes
            </span>
          </div>
        </Marquee>
      </div>
    </>
  );
}
