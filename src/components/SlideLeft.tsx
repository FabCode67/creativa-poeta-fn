

import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

interface rightSlide {
  backgrounds: { image?: string, video?: string; content: { title: string; description: string } }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SlideLeft: React.FC<rightSlide> = ({ backgrounds, currentIndex, setCurrentIndex }) => {
  return (
    <div className="circles-container absolute bottom-1/2 laptop:left-6 desktop:left-6 tablet:left-6 md:left-6 left-3 transform -translate-x-1/2 ">
           <button onClick={() => setCurrentIndex((currentIndex - 1 + backgrounds.length) % backgrounds.length)}>
           <FaChevronRight className="transform hover:bg-slate-900 rotate-180 text-[#EEBA2B] opacity-10 hover:opacity-100 text-4xl" />
        </button>
</div>
  )
}

export default SlideLeft