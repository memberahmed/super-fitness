import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AgeCarousel() {
  const [selectedAge, setSelectedAge] = useState(18);
  const minAge = 10;
  const maxAge = 80;

  // Generate array of visible numbers (only valid ages)
  const getVisibleNumbers = () => {
    const numbers = [];
    for (let i = -2; i <= 2; i++) {
      const age = selectedAge + i;
      if (age >= minAge && age <= maxAge) {
        numbers.push(age);
      }
    }
    return numbers;
  };

  // Find the index of the selected age in the visible array
  const getSelectedIndex = () => {
    const visibleNumbers = getVisibleNumbers();
    return visibleNumbers.findIndex((age) => age === selectedAge);
  };

  const handlePrevious = () => {
    if (selectedAge > minAge) {
      setSelectedAge(selectedAge - 1);
    }
  };

  const handleNext = () => {
    if (selectedAge < maxAge) {
      setSelectedAge(selectedAge + 1);
    }
  };

  const handleNumberClick = (age: number) => {
    setSelectedAge(age);
  };

  const getNumberStyle = (age: number, isSelected: boolean) => {
    if (isSelected) {
      return {
        fontSize: "4rem",
        fontWeight: "700",
        color: "#FF4100",
        opacity: 1,
        transform: "scale(1)",
        cursor: "pointer",
      };
    }

    // Calculate distance from selected for styling
    const visibleNumbers = getVisibleNumbers();
    const selectedIndex = getSelectedIndex();
    const currentIndex = visibleNumbers.findIndex((n) => n === age);
    const distance = Math.abs(currentIndex - selectedIndex);

    if (distance === 1) {
      return {
        fontSize: "2.5rem",
        fontWeight: "600",
        color: "#9CA3AF",
        opacity: 0.8,
        transform: "scale(0.8)",
        cursor: "pointer",
      };
    } else {
      return {
        fontSize: "1.8rem",
        fontWeight: "500",
        color: "#6B7280",
        opacity: 0.5,
        transform: "scale(0.6)",
        cursor: "pointer",
      };
    }
  };

  // Calculate precise indicator position
  const getIndicatorPosition = () => {
    const visibleNumbers = getVisibleNumbers();
    const selectedIndex = getSelectedIndex();
    const totalNumbers = visibleNumbers.length;
    const numberSpacing = 92; // 60px min-width + 32px gap (space-x-8)

    let offset = 0;

    switch (totalNumbers) {
      case 1:
        offset = 0; // Single number, center position
        break;
      case 2:
        offset = selectedIndex === 0 ? -46 : 46; // Positions at -46px and +46px
        break;
      case 3:
        offset = (selectedIndex - 1) * numberSpacing; // Positions at -92px, 0px, +92px
        break;
      case 4:
        const positions = [-138, -46, 46, 138];
        offset = positions[selectedIndex]; // Positions at -138px, -46px, +46px, +138px
        break;
      case 5:
        offset = (selectedIndex - 2) * numberSpacing; // Positions at -184px, -92px, 0px, +92px, +184px
        break;
      default:
        offset = 0; // Fallback for unexpected cases
    }

    return offset;
  };

  const visibleNumbers = getVisibleNumbers();
  const indicatorOffset = getIndicatorPosition();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Old Are You ?</h1>
        <p className="text-gray-300 text-lg">This Helps Us Create Your Personalized Plan</p>
      </div>

      <div className="mb-8">
        <p className="text-orange-500 text-center mb-6 font-medium">Years Old</p>

        <div className="relative flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={handlePrevious}
            disabled={selectedAge <= minAge}
            className="hidden md:block absolute left-[-60px] p-2 text-gray-400 hover:text-white disabled:opacity-30  z-10 transition-opacity duration-200"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Numbers carousel */}
          <div
            className="flex items-center justify-center h-24 relative overflow-hidden"
            style={{ width: "500px" }}
          >
            <div className="flex items-center justify-center space-x-8">
              {visibleNumbers.map((age) => (
                <div
                  key={age}
                  onClick={() => handleNumberClick(age)}
                  style={{
                    ...getNumberStyle(age, age === selectedAge),
                    lineHeight: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    minWidth: "60px",
                    willChange: "transform, opacity, color, font-size", // Optimize for animations
                  }}
                  className="transition-all duration-300 ease-out select-none flex items-center justify-center"
                >
                  {age}
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={selectedAge >= maxAge}
            className="hidden md:block absolute  right-[-60px] p-2 text-gray-400 hover:text-white disabled:opacity-30  z-10 transition-opacity duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Precisely positioned triangle indicator */}
        <div className="flex justify-center mt-4 relative h-4">
          <div
            className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[16px] border-l-transparent border-r-transparent border-b-orange-500 absolute top-0"
            style={{
              transform: `translateX(${indicatorOffset}px)`,
              transition: "transform 150ms ease-out",
              willChange: "transform", // Optimize for transform animations
            }}
          />
        </div>
      </div>

      {/* Next button */}
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-12 rounded-full text-lg min-w-[200px] transition-colors duration-200"
        onClick={() => console.log(`Selected age: ${selectedAge}`)}
      >
        Next
      </Button>
    </div>
  );
}
