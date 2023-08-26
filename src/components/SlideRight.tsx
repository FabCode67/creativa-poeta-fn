import React from 'react'
import { AiFillLeftSquare } from 'react-icons/ai'

interface rightSlide {
    backgrounds: { image: string; content: { title: string; description: string } }[];
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SlideRight: React.FC<rightSlide> = ({ backgrounds, currentIndex, setCurrentIndex }) => {
  return (
    <div className="circles-container absolute bottom-1/2 right-0 transform -translate-x-1/2">
          <button onClick={() => setCurrentIndex((currentIndex + 1) % backgrounds.length)}>
          <AiFillLeftSquare className="transform rotate-180 text-yellow-600 text-3xl" />
        </button>
</div>
  )
}

export default SlideRight
