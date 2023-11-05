import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';

interface rightSlide {
  backgrounds: { image?: string, video?: string; content: { title: string; description: string } }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
const SlideRight: React.FC<rightSlide> = ({ backgrounds, currentIndex, setCurrentIndex }) => {
  return (
    <div className="circles-container absolute bottom-1/2 right-[-23px] laptop:right-0 desktop:right-0 md:right-0 tablet:right-0 transform -translate-x-1/2">
          <button onClick={() => setCurrentIndex((currentIndex + 1) % backgrounds.length)}>
          <FaChevronLeft className="transform hover:bg-slate-900 hover:text-white rotate-180 text-slate-400 text-4xl" />
        </button>
</div>
  )
}

export default SlideRight
