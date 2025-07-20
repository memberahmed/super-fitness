"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step4Schema } from "../../../../lib/schemas/register-form-schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { z } from "zod";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MessageFeedback from "@/components/custom/messsgg-feedback";

interface Step4FormProps {
  onSubmit: (data: z.infer<typeof step4Schema>) => void;
  onBack: () => void;
  defaultValues?: z.infer<typeof step4Schema>;
}

const Step5Form = ({ onSubmit, onBack, defaultValues }: Step4FormProps) => {
  const [lang, setLang] = useState("");
  const [selectedWeight, setSelectedWeight] = useState(50);
  const minWeight = 10;
  const maxWeight = 200;

  // Get language direction from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    setLang(storedLang || "en");
  }, []);

  const isRTL = lang === "ar";

  const form = useForm<z.infer<typeof step4Schema>>({
    resolver: zodResolver(step4Schema),
    defaultValues: defaultValues || { weight: 35 },
  });

  // Generate array of visible numbers (only valid weight)
  const getVisibleNumbers = () => {
    const numbers = [];
    for (let i = -2; i <= 2; i++) {
      const weight = selectedWeight + i;
      if (weight >= minWeight && weight <= maxWeight) {
        numbers.push(weight);
      }
    }
    return numbers;
  };

  // Find the index of the selected weight in the visible array
  const getSelectedIndex = () => {
    const visibleNumbers = getVisibleNumbers();
    return visibleNumbers.findIndex((weight) => weight === selectedWeight);
  };

  const handleNumberClick = (weight: number) => {
    setSelectedWeight(weight);
    form.setValue("weight", weight);
  };

  const getNumberStyle = (weight: number, isSelected: boolean) => {
    if (isSelected) {
      return {
        fontSize: "3.5rem",
        fontWeight: "700",
        color: "#FF4500",
        opacity: 1,
        transform: "scale(1)",
        cursor: "pointer",
      };
    }
    // Calculate distance from selected for styling
    const visibleNumbers = getVisibleNumbers();
    const selectedIndex = getSelectedIndex();
    const currentIndex = visibleNumbers.findIndex((n) => n === weight);
    const distance = Math.abs(currentIndex - selectedIndex);

    if (distance === 1) {
      return {
        fontSize: "1.9rem",
        fontWeight: "600",
        color: "#9CA3AF",
        opacity: 0.8,
        transform: "scale(0.8)",
        cursor: "pointer",
      };
    } else {
      return {
        fontSize: "1.4rem",
        fontWeight: "500",
        color: "#6B7280",
        opacity: 0.5,
        transform: "scale(0.6)",
        cursor: "pointer",
      };
    }
  };
  const handlePrevious = () => {
    if (selectedWeight > minWeight) {
      setSelectedWeight(selectedWeight - 1);
      form.setValue("weight", selectedWeight - 1);
    }
  };

  const handleNext = () => {
    if (selectedWeight < maxWeight) {
      setSelectedWeight(selectedWeight + 1);
      form.setValue("weight", selectedWeight + 1);
    }
  };

  const getIndicatorPosition = () => {
    const visibleNumbers = getVisibleNumbers();
    const selectedIndex = getSelectedIndex();
    const totalNumbers = visibleNumbers.length;
    const numberSpacing = 92; // Approximate spacing between numbers

    let offset = 0;

    if (totalNumbers === 1) {
      offset = 0;
    } else if (totalNumbers === 2) {
      offset = selectedIndex === 0 ? -46 : 46;
    } else if (totalNumbers === 3) {
      offset = (selectedIndex - 1) * numberSpacing;
    } else if (totalNumbers === 4) {
      offset = [-138, -46, 46, 138][selectedIndex];
    } else if (totalNumbers === 5) {
      offset = (selectedIndex - 2) * numberSpacing;
    }

    // Reverse the offset for RTL
    return isRTL ? -offset : offset;
  };

  const visibleNumbers = getVisibleNumbers();
  const indicatorOffset = getIndicatorPosition();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div
          className={`flex flex-col items-center justify-center p-6 ${isRTL ? "rtl" : "ltr"}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="mb-8">
            <p className="text-orange-500 text-center mb-6 font-medium">Kg</p>
            <div className="relative flex items-center justify-center">
              {/* Previous button */}
              {isRTL ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={selectedWeight <= minWeight}
                  className="hidden md:block  absolute -left-4 md:-left-7 p-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed z-10 transition-opacity duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selectedWeight >= maxWeight}
                  className="hidden md:block  absolute -right-4 md:-right-7 p-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed z-10 transition-opacity duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              )}

              {/* Numbers carousel */}
              <div className="flex items-center justify-center h-24 relative overflow-hidden">
                <div
                  className={`flex items-center justify-center ${
                    isRTL
                      ? "space-x-reverse space-x-1 md:space-x-2  lg:space-x-6 xl:space-x-8"
                      : "space-x-1 md:space-x-2 lg:space-x-6 xl:space-x-8"
                  }`}
                >
                  {visibleNumbers.map((weight) => (
                    <div
                      key={weight}
                      onClick={() => handleNumberClick(weight)}
                      style={{
                        ...getNumberStyle(weight, weight === selectedWeight),
                        lineHeight: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        minWidth: "50px",
                        willChange: "transform, opacity, color, font-size",
                      }}
                      className="transition-all duration-300 ease-out select-none flex items-center justify-center"
                    >
                      {weight}
                    </div>
                  ))}
                </div>
              </div>
              {/* Previous button */}
              {!isRTL ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={selectedWeight <= minWeight}
                  className="hidden md:block  absolute -left-4 md:-left-7 p-2 text-red-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed z-10 transition-opacity duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selectedWeight >= maxWeight}
                  className="hidden md:block absolute -right-4 md:-right-7 p-2 text-red-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed z-10 transition-opacity duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
            {/* Precisely positioned triangle indicator */}
            <div className="flex justify-center mt-4 relative h-4">
              <div
                className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[16px] border-l-transparent border-r-transparent border-b-orange-500 absolute top-0"
                style={{
                  transform: `translateX(${indicatorOffset}px)`,
                  transition: "transform 300ms ease-out",
                  willChange: "transform",
                }}
              />
            </div>
          </div>
          <MessageFeedback messageKey={form.formState.errors.weight?.message} />
        </div>

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Weight</FormLabel>
              <FormControl>
                <Input
                  className="hidden"
                  type="number"
                  placeholder="Enter your age"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div
          className={` flex justify-center items-center ${
            isRTL ? "space-x-reverse space-x-4" : "space-x-4"
          }`}
        >
          <Button
            type="button"
            className="bg-gray-400 hover:bg-gray-500 transition-colors duration-300 ease-in-out"
            onClick={onBack}
          >
            {isRTL ? (
              <>
                <ChevronRight className="w-4 h-4 mr-2" />
                Back
              </>
            ) : (
              <>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </>
            )}
          </Button>
          <Button className="bg-flame" type="submit">
            Next
            {isRTL ? (
              <ChevronLeft className="w-4 h-4 ml-2" />
            ) : (
              <ChevronRight className="w-4 h-4 ml-2" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Step5Form;
