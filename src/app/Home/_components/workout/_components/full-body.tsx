import { useEffect, useState } from "react";
import WorkoutCarousel from "./workout-carousel";
import { getRandomPrimeMover } from "@/lib/apis/random-prime-mover.api";
import type { Muscle } from "@/lib/types/muscles";
import Spinner from '../../../../../routes/loadingSpinner';

export default function FullBody() {
  // State variables
  const [muscleArray, setMuscleArray] = useState<Muscle[] | null>(null);
  const language = localStorage.getItem("lang") || "en";

  useEffect(() => {
    getRandomPrimeMover(language)
      .then((data) => {
        setMuscleArray(data.muscles);
        console.log("Fetched prime mover:", data);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [language]);
  if (!muscleArray) {
    return <Spinner/>;
  }

  return (
    <>
      <WorkoutCarousel muscle ={muscleArray} />
    </>
  );
}
