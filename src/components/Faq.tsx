import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import faqData from "../data/faq";
import phonevid from '../assets/phonevid.mp4'


// About.tsx
const Faq = () => {
  const { t } = useTranslation();
  
  return (
    <section id="faq" className="faq laptop:py-9 desktop:py-9 py-14 h-fit min-h-screen w-full  flex flex-col justify-center items-center text-center relative">
      <video autoPlay loop muted className="video-background">
      <source src={phonevid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="mt-[2%] laptop:px-10 mb-16 ">
        <h1 className="laptop:text-4xl text-2xl font-bold text-justfy text-black">
          {t('FAQ')}
        </h1>
        <div
          className={`grid laptop:grid-cols-4 tablet:grid-cols-3 px-1 laptop:gap-8 grid-cols-2 mt-[3%] gap-3 sm:grid-cols-2`}
        >
          {faqData.map((faq) => (
          <div
            className="border laptop:h-[20rem] desktop:h-[23rem] 2xl:h-[27rem]  xs:h-[47rem] tablet:h-[25rem] ipod:h-[30rem] px-0 h-fit  ">
            <h3 className="font-bold backdrop-blur-md text-slate-900 2xl:h-[17rem] laptop:h-[5rem] desktop:h-[7rem] tablet:h-[7rem] h-fit xs:h-[12rem] phone:h-[9rem] text-justify px-2 laptop:text-xl desktop:text-xl border-b text-md  " style={{ backgroundColor: 'rgba(245, 233, 66,0.4)' }}>
            {faq.title} </h3>
            <p className="laptop:mt-1 desktop:mt-3 p-2 mt-1 text-md flex justify-start text-start">
              {faq.description}
            </p>

          </div>
          ))}
        </div>
     
      </div>
      <div className="laptop:h-[5%] tablet:h-[3.5%] phone:h-[1%] h-[2%] laptop:w-[10%] w-[8%] absolute xs:h-[.8%] laptop:right-1/2 right-1/2 top-0 border-r-2 border-white">
      </div>

      <div className="very-buttom laptop:h-[7%] desktop:h-[7%] tablet:h-[4%] phone:h-[1%] h-[1.5%] xs:h-[.8%] laptop:w-[10%] w-[35%] absolute laptop:right-11 right-11 bottom-0 border-r-2 border-white">
  
</div>
    </section>
  );
};
export default Faq;  