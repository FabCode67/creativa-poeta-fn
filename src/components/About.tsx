// About.tsx
import "tailwindcss/tailwind.css";

const About = () => {
  return (
    <section id='about' className='justify-center h-fit min-h-screen mt-0 flex flex-col bg-slate-900 items-center'>
      <div className="mt-[6%]">
        <h1 className="laptop:text-9xl text-4xl text-white font-bold cursive leading-none lg:leading-snug home-name animate-bounce">Hello. I'm <br /> <span className="text-yellow-700">ABOUT PAGE</span></h1>
      </div>
    </section>
  );
};

export default About;
