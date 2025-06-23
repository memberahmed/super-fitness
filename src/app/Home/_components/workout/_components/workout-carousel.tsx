// EmblaCarousel.tsx
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const workoutCategories = [
  {
    id: 1,
    title: "CHEST",
    image: "/placeholder.svg?height=400&width=600",
    description: "Build upper body strength",
  },
  {
    id: 2,
    title: "ARM",
    image: "/placeholder.svg?height=400&width=600",
    description: "Strengthen your arms",
  },
  {
    id: 3,
    title: "SHOULDER",
    image: "/placeholder.svg?height=400&width=600",
    description: "Develop shoulder muscles",
  },
  {
    id: 4,
    title: "BACK",
    image: "/placeholder.svg?height=400&width=600",
    description: "Strengthen your back",
  },
  {
    id: 5,
    title: "LEGS",
    image: "/placeholder.svg?height=400&width=600",
    description: "Build lower body power",
  },
  {
    id: 6,
    title: "STOMACH",
    image: "/placeholder.svg?height=400&width=600",
    description: "Core strengthening",
  },
];

export default function EmblaWorkoutCarousel() {
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

  return (
    <div className="w-full max-w-6xl mx-auto p-4 min-h-screen">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {workoutCategories.map((category) => (
            <div
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
              key={category.id}
            >
              <Card className="relative overflow-hidden border-0 bg-transparent group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold mb-3 tracking-wide">
                      {category.title}
                    </h3>
                    <Button
                      className="bg-flame hover:bg-opacity-75 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 group-hover:bg-opacity-90"
                      size="sm"
                    >
                      Explore
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              selectedIndex === index ? "bg-flame w-6" : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
      
    </div>
  );
}
