import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import faqData from "../data/faq";
import { AiOutlineDown } from "react-icons/ai";


// About.tsx
const Faq = () => {
  const { t } = useTranslation();
  console.log(faqData);
  
  return (
    <section id='faq' className='faq justify-center h-fit min-h-screen mt-0 flex flex-col bg-white items-center relative pb-3'>
      
      <div className="mt-[2%] laptop:px-40 px-2">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-black">
          {t('FAQ')}
        </h1>
        <div
          className={`grid laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-16 grid-cols-1 mt-[3%] gap-4 sm:grid-cols-2`}
        >
          {faqData.map((faq) => (
          <Link
            className="bg-[#EEBA2B] px-4 py-2 h-[35rem]" to={`/faq/${faq.id}`} key={""}>
            {/* <img
              src={faq.image}
              alt="test"
              className="w-full h-[55%] object-cover"
            /> */}
            <h3 className="font-bold text-slate-100 text-4xl mt-2">
            {faq.title} </h3>
            <p className="mt-12 text-xl">
              {faq.description}
            </p>

          </Link>
          ))}
        </div>
     
      </div>
      <div className="laptop:h-[10%] tablet:h-[13%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-[#EEBA2B]">
      </div>

      <div className="very-buttom laptop:h-[13%] desktop:h-[13%] h-[5%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 bottom-0 border-r-2 border-white">
  <div className="buttons h-full flex cursor-pointer items-start mt-7 space-x-1">
    <button className="font-bold w-5 text-md text-white"><AiOutlineDown /></button>
    <button className="text-white text-xs font-bold"><a href="#contact">SCROLL DOWN</a></button>
  </div>
</div>
    </section>
  );
};
export default Faq;  