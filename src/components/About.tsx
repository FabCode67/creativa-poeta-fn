// About.tsx
import "tailwindcss/tailwind.css";

const About = () => {
  return (
    <section id="about" className="bg-yellow-700 h-fit min-h-screen laptop:m-0 tablet:m-0 tablet:-0 flex flex-col laptop:p-[10rem] tablet:p-[8rem] laptop:pr-[4rem] tablet:pr-[4rem] laptop:justify-normal laptop:text-left text-center tablet:text-center items-center my-auto justify-center px-2 relative"> {/* Added relative positioning */}
      <div className="mt-[6%]">
        <h1 className="laptop:text-9xl text-4xl text-white font-bold cursive leading-none lg:leading-snug home-name animate-bounce">Hello. I'm <br /> <span className="text-yellow-100">ABOUT PAGE</span></h1>
      </div>
      <div className="very-buttom h-[13%] w-[12%] absolute laptop:right-20 right-11 top-0 border-r-2 border-neutral-100">
      </div>
    </section>
  );
};

export default About;
