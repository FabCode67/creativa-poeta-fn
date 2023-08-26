

import React from 'react'
import {AiFillRightSquare } from 'react-icons/ai'

interface rightSlide {
    backgrounds: { image: string; content: { title: string; description: string } }[];
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SlideLeft: React.FC<rightSlide> = ({ backgrounds, currentIndex, setCurrentIndex }) => {
  return (
    <div className="circles-container absolute bottom-1/2 left-6  transform -translate-x-1/2 ">
           <button onClick={() => setCurrentIndex((currentIndex - 1 + backgrounds.length) % backgrounds.length)}>
          <AiFillRightSquare className="transform rotate-180 text-yellow-600 text-3xl" />
        </button>
</div>
  )
}

export default SlideLeft