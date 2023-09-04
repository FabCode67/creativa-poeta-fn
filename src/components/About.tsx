// About.tsx
import { useTranslation } from "react-i18next";
import { AiOutlineDown } from "react-icons/ai";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="about   h-fit min-h-screen  flex flex-col justify-center items-center text-center relative"> 
<div className="main_about h-fit min-h-screen backdrop-blur-sm flex flex-col justify-center items-center text-center relative" style={{ backgroundColor: 'rgba(238, 186, 43, 0.1)' }}>
      <div className="laptop:mt-[6%] tablet:mt-[6%] laptop:space-y-10 space-y-5 mt-[7rem]">
        <div className="flex justify-center flex-col laptop:space-y-10 space-y-5 laptop:w-[50%] w-[90%] tablet:w-[70%] mx-auto">
          <div className="flex justify-center flex-col laptop:space-y-5 space-x-3">
            <div className="flex justify-center">
              <h1 className="laptop:text-2xl text-md font-bold text-black mx-0 animate-fade-in  animate-bounce">{t('hello_there')}</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="laptop:text-5xl tablet:text-3xl text-2xl font-bold text-slate-800 mx-0 animate-fade-in animate-bounce underline-offset-6">{t('we_are_creativa_poeta')}</h1>
            </div>
          </div>
          <div className="flex justify-center mx-auto h-px bg-white animate-bounce w-full">
          </div>
        </div>
        <div className="flex justify-center text-center laptop:px-40 px-4">
          <h1 className="laptop:text-2xl leading-relaxed	 tablet:text-2xl text-center text-slate-80 mx-0 animate-fade-in animate-bounce underline-offset-6">{t('about_us_content')}</h1>
        </div>
      </div>
      <div className="very-top laptop:h-[13%] tablet:h-[13%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-neutral-100">
      </div>
      <div className="very-buttom laptop:h-[13%] desktop:h-[13%] h-[5%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 bottom-0 border-r-2 border-white">
  <div className="buttons h-full flex cursor-pointer items-start mt- space-x-1">
    <button className="font-bold w-5 text-md text-slate-800"><AiOutlineDown /></button>
    <button className="text-slate-800 text-xs font-bold"><a href="#contact">SCROLL DOWN</a></button>
  </div>
</div>
</div>
    </section>
  );
};

export default About;
