import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowIconLight } from "@/components/common/right-arrow-icon/ArrowIconRight";
import { useTranslation } from "react-i18next";
import defaultMuscleImage from "@/assets/images/workout/fallbackmuscle.jpg";
import { useNavigate } from "react-router-dom";
import type { Muscle } from "@/lib/types/muscles";

export default function EmblaWorkoutCarousel({muscle}: {muscle: Muscle[]}) {
  // Initialize translation function
  const { t } = useTranslation();

  // Initialize navigation hook
  const navigate = useNavigate();

  // State variables
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!muscle) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {muscle?.map((muscle) => (
            <div
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
              key={muscle._id}
            >
              <Card
                onClick={() => navigate(`/classes/${muscle._id}`)}
                className="overflow-hidden cursor-pointer relative"
              >
                <div className="card-img">
                  {muscle.image ? (
                    <img
                      src={muscle.image}
                      alt={muscle.name}
                      className="w-[403px] h-[398px] object-cover"
                    />
                  ) : (
                    <img
                      src={defaultMuscleImage}
                      alt={muscle.name}
                      className="w-[403px] h-[398px] object-cover"
                    />
                  )}
                </div>
                <div
                  dir={localStorage.getItem("direction") || "ltr"}
                  className="card-content p-4 absolute bottom-0 inset-x-0 bg-[#FFFFFF80] dark:bg-[#24242480] backdrop-blur-lg text-start"
                >
                  <h3 className="uppercase font-bold tracking-widest mb-2">{muscle.name}</h3>
                  <Button className="ps-0 text-flame bg-transparent text-xl font-medium transition-all duration-300 hover:text-2xl hover:bg-transparent">
                    {t("explore")}
                    <ArrowIconLight />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: Math.ceil(scrollSnaps.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              selectedIndex >= index * 3 && selectedIndex < (index + 1) * 3
                ? "bg-flame w-6"
                : "bg-charcoal dark:bg-cloudy hover:bg-flame dark:hover-bg-flame"
            }`}
            onClick={() => emblaApi?.scrollTo(index * 3)}
          />
        ))}
      </div>
    </div>
  );
}
