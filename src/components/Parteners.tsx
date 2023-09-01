// About.tsx
import { useTranslation } from "react-i18next";
import { AiFillApple, AiOutlineDown } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { SiVirtualbox } from "react-icons/si";
import {FaFantasyFlightGames} from "react-icons/fa";
import {SiHiveBlockchain} from "react-icons/si";
import vid from '../assets/vid.mp4'; // Adjust the file path



const Parteners = () => {
  const { t } = useTranslation();
  
  return (
    <section id="parteners" className="parteners h-fit min-h-screen wifull flex flex-col justify-center items-center text-center relative">
    <video autoPlay loop muted className="video-background">
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className=" w-full laptop:space-y-10 space-y-5">
        <div className="flex justify-center flex-col laptop:space-y-10 space-y-5 laptop:w-[50%] w-[90%] tablet:w-[70%] mx-auto">
          <div className="flex justify-center flex-col laptop:space-y-5 space-x-3">
            <div className="flex justify-center">
              <h1 className="laptop:text-2xl text-md font-bold text-[#EEBA2B] mx-0 animate-fade-in  animate-bounce">{t('OUR CLIENTS')}</h1>
            </div>
            <div className="fle w-[full]">
              <h1 className="laptop:text-3xl leading-relaxed tablet:text-3xl text-2xl font-bold text-white  animate-fade-in animate-bounce underline-offset-6">{t('CREATIVA POETA has been honored to partner up with these clients')}</h1>
            </div>
          </div>
          <div className="flex justify-center mx-auto h-px bg-white animate-bounce w-full">
          </div>
        </div>
        <div className="flex justify-between text-center text-9xl laptop:px-40 px-4 text-[#EEBA2B]">
            <AiFillApple />
            <BiLogoReact />
            <SiVirtualbox />
            <FaFantasyFlightGames />
            <SiHiveBlockchain />
        </div>
      </div>
      <div className="very-top laptop:h-[13%] tablet:h-[13%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-neutral-100">
      </div>
      <div className="very-buttom h-[7%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 bottom-0 border-r-2 border-white">
  <div className="buttons h-full flex cursor-pointer items-start mt-0 space-x-1">
    <button className="font-bold w-5 text-md text-white"><AiOutlineDown /></button>
    <button className="text-white text-xs font-bold"><a href="#faq">SCROLL DOWN</a></button>
  </div>
</div>
    </section>
  );
};

export default Parteners;
