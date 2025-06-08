import { Dumbbell, MoveUpRight } from "lucide-react";
import about1 from "@/assets/images/about-us/about3.png";
import about2 from "@/assets/images/about-us/about1.png";
import about3 from "@/assets/images/about-us/about2.png";
import HeadingTitle from "@/components/common/headingTitle";

export default function AboutUs() {
  const features = [
    {
      title: "Personal Trainer",
      description: "Achieve your fitness goals with the guidance of our certified trainers.",
    },
    {
      title: "Cardio Programs",
      description: "From steady-state runs to interval sprints, our cardio programs suit all.",
    },
    {
      title: "Quality Equipment",
      description: "Train with top-of-the-line gym equipment to maximize performance.",
    },
    {
      title: "Healthy Nutritions",
      description: "Expert nutritional advice to support your fitness journey.",
    },
  ];

  return (
    <section className="bg-lightgrey min-h-screen">
      <div className="py-10 px-4 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Main Image */}
              <div className="absolute left-0 top-0 w-[57%] h-[75%] z-10">
                <img
                  src={about1}
                  alt="Fitness training session"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute right-0 top-16 md:top-20 w-[40%] h-[30%] z-20">
                <img
                  src={about2}
                  alt="Gym equipment"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Tertiary Image */}
              <div className="absolute right-0 bottom-0 w-[55%] h-[55%] z-30">
                <img
                  src={about3}
                  alt="Personal training"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header */}
            <section>
              <div className="flex flex-col">
                <div className="uppercase font-bold text-6xl bg-gradient-to-b from-slate-800 to-slate-50 bg-clip-text text-transparent hidden md:block">
                  workouts
                </div>
                <div className="flex items-center gap-2 -mt-3 capitalize text-base font-bold text-orange-500">
                  <Dumbbell width={30} height={30} strokeWidth={1.3} />
                  about us
                </div>
              </div>

              <HeadingTitle className="mt-6">
                EMPOWERING YOU TO ACHIEVE <span className="text-orange-500 me-2">YOUR FITNESS</span>
                GOALS
              </HeadingTitle>

              <p className="text-black text-lg mt-6 font-normal">
                We believe fitness is more than just a workout—it's a lifestyle. With top-of-
                the-line facilities, certified trainers, and a supportive community, we're here to
                inspire and guide you every step of the way.
              </p>
            </section>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="mt-14">
                  <div className="flex items-center gap-3">
                    <MoveUpRight size={18} className="text-orange-600" />
                    <h3 className="font-bold text-base text-black mb-4">{feature.title}</h3>
                  </div>
                  <p className="text-black text-lg font-normal">{feature.description}</p>
                </div>
              ))}

              {/* Separator line between rows */}
              <div className="col-span-2 border-t border-gray-300 my-2" />

              {features.slice(2).map((feature, index) => (
                <div key={index + 2} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MoveUpRight size={18} className="text-orange-600" />
                    <h3 className="font-bold text-base text-black">{feature.title}</h3>
                  </div>
                  <p className="text-black text-lg font-normal">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex items-center">
              <button className="relative bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold  transition-all duration-300 flex items-center">
                Get Started
                <span className="absolute -right-5">
                  <div className="w-9 h-9 rounded-full bg-orange-600 border-[3px] border-white flex items-center justify-center">
                    <MoveUpRight size={18} className="text-white" />
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
