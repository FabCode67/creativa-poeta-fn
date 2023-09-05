import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import faqData from "../data/faq";
import vid2 from '../assets/vid2.mp4'


// About.tsx
const Faq = () => {
  const { t } = useTranslation();
  console.log(faqData);
  
  return (
    <section id="faq" className="faq h-fit min-h-screen w-full  flex flex-col justify-center items-center text-center relative">
      <video autoPlay loop muted className="video-background">
      <source src={vid2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="mt-[2%] laptop:px-10 mb-16 ">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-black">
          {t('FAQ')}
        </h1>
        <div
          className={`grid laptop:grid-cols-4 tablet:grid-cols-3 laptop:gap-8 grid-cols-2 mt-[3%] gap-1 sm:grid-cols-2`}
        >
          {faqData.map((faq) => (
          <Link
            className=" backdrop-blur-md border px-0  h-fit" to={`/faq/${faq.id}`} key={""}>
            <h3 className="font-bold text-slate-900 py-4 laptop:text-xl desktop:text-xl border-b text-md  " style={{ backgroundColor: 'rgba(245, 233, 66,0.4)' }}>
            {faq.title} </h3>
            <p className="laptop:mt-1 desktop:mt-12 p-2 mt-1 text-md flex justify-start text-start">
              {faq.description}
            </p>

          </Link>
          ))}
        </div>
     
      </div>
      <div className="laptop:h-[10%] tablet:h-[13%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-[#EEBA2B]">
      </div>

      <div className="very-buttom laptop:h-[7%] desktop:h-[7%] h-[2%] laptop:w-[10%] w-[35%] absolute laptop:right-1/2 right-1/2 bottom-0 border-r-2 border-white">
  
</div>
    </section>
  );
};
export default Faq;  