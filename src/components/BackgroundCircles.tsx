import React from "react";

interface BackgroundCirclesProps {
  backgrounds: { image?: string, video?: string; content: { title: string; description: string } }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ backgrounds, currentIndex }) => {
  return (
    <div className="circles-container absolute laptop:bottom-28 desktop:bottom-28 bottom-16 left-16  laptop:left-28 desktop:left-28 transform -translate-x-1/2 flex space-x-2">
      <div className="flex flex-row space-x-2 justify-center text-center items-center">
        {backgrounds.map((_background, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#FFE533]" : "bg-gray-300"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundCircles;


