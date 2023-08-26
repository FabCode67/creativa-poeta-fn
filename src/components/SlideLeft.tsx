

import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

interface rightSlide {
    backgrounds: { image: string; content: { title: string; description: string } }[];
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SlideLeft: React.FC<rightSlide> = ({ backgrounds, currentIndex, setCurrentIndex }) => {
  return (
    <div className="circles-container absolute bottom-1/2 left-6  transform -translate-x-1/2 ">
           <button onClick={() => setCurrentIndex((currentIndex - 1 + backgrounds.length) % backgrounds.length)}>
           <FaChevronRight className="transform hover:bg-slate-900 hover:text-white rotate-180 text-yellow-600 text-4xl" />
        </button>
</div>
  )
}

export default SlideLeft