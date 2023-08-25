import React from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

interface BackgroundCirclesProps {
  backgrounds: { image: string; content: { title: string; description: string } }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;

}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ backgrounds, currentIndex, setCurrentIndex }) => {
  return (
    <div className="circles-container absolute laptop:bottom-28 desktop:bottom-28 bottom-16 left-16  laptop:left-28 desktop:left-28 transform -translate-x-1/2 flex space-x-2">
      <div className="flex flex-row space-x-2 justify-center text-center items-center">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + backgrounds.length) % backgrounds.length)}>
          <AiFillRightCircle className="transform rotate-180 text-yellow-700" />
        </button>
        {backgrounds.map((_background, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
              }`}
          ></div>
        ))}
        <button onClick={() => setCurrentIndex((currentIndex + 1) % backgrounds.length)}>
          <AiFillLeftCircle className="transform rotate-180 text-yellow-700" />
        </button>

      </div>
    </div>
  );
};

export default BackgroundCircles;


