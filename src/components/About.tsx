// About.tsx
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount((prevCount) => {
          const nextCount = prevCount + 1;
          return nextCount > value ? value : nextCount;
        });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [value]);

  return <p className="text-white font-extrabold text-6xl">{count}</p>;
};

const About = () => {
  
  return (
    <section id="about" className="bg-yellow-700 h-fit min-h-screen  flex flex-col justify-center items-center text-center relative"> {/* Added relative positioning */}
      <div className="laptop:mt-[6%] tablet:mt-[6%] laptop:space-y-10 space-y-5 mt-[7rem]">
        <div className="flex justify-center flex-col laptop:space-y-10 space-y-5 laptop:w-[50%] w-[90%] tablet:w-[70%] mx-auto">
          <div className="flex justify-center flex-col laptop:space-y-5 space-x-3">
            <div className="flex justify-center">
              <h1 className="laptop:text-2xl text-md font-bold text-black mx-0 animate-fade-in  animate-bounce">HELLO THERE</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="laptop:text-5xl tablet:text-3xl text-2xl font-bold text-white mx-0 animate-fade-in animate-bounce underline-offset-6">WE ARE CREATIVE POETA</h1>
            </div>
          </div>
          <div className="flex justify-center mx-auto h-px bg-white animate-bounce w-full">
          </div>
        </div>
        <div className="flex justify-center text-center laptop:px-40 px-4">
          <h1 className="laptop:text-2xl leading-relaxed	 tablet:text-2xl text-center text-white mx-0 animate-fade-in animate-bounce underline-offset-6">Passionate about artistic expression and inspiring creation, we are a company of experienced designers, copywriters and web developers who offer you unique creative solutions. Our primary goal is to understand your needs in order to create exceptional results. With our approach of creativity and excellence, we capture attention and leave a lasting impression. Please contact us today to discuss your projects and find out how we can help you achieve your creative goals.</h1>
        </div>
        <div className="grid animate-bounce p-4 gap-4 laptop:px-[6%] laptop:grid-cols-4 tablet:grid-cols-2 px-20 grid-cols-1">
        <div className="flex flex-col space-y-8 p-4 justify-center laptop:border-r-2 border-b-2 laptop:border-b-0 px-5">
          <AnimatedNumber value={127} />
          <p className="text-black font-bold text-2xl">Awards received</p>
        </div>
        <div className="flex flex-col space-y-8 p-4 justify-center laptop:border-r-2 laptop:border-b-0 border-b-2 px-5">
          <AnimatedNumber value={1202} />
          <p className="text-black font-bold text-2xl">Cups Of Coffee</p>
        </div>
        <div className="flex flex-col space-y-8 p-4 justify-center laptop:border-r-2 border-b-2 tablet:border-b-0 border-r-0 px-5">
          <AnimatedNumber value={201} />
          <p className="text-black font-bold text-2xl">Happy Clients</p>
        </div>
        <div className="flex flex-col space-y-8 p-4 justify-center">
          <AnimatedNumber value={270} />
          <p className="text-black font-bold text-2xl">Completed Projects</p>
        </div>
      </div>
      </div>
      <div className="very-top laptop:h-[13%] tablet:h-[13%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-neutral-100">
      </div>
    </section>
  );
};

export default About;
