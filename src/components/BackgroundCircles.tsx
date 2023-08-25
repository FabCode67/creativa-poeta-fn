import React from "react";

interface BackgroundCirclesProps {
  backgrounds: { image: string; content: { title: string; description: string } }[];
  currentIndex: number;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ backgrounds, currentIndex }) => {
  return (
    <div className="circles-container absolute laptop:bottom-28 desktop:bottom-28 bottom-16 left-16  laptop:left-28 desktop:left-28 transform -translate-x-1/2 flex space-x-2">
      {backgrounds.map((_background, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundCircles;
