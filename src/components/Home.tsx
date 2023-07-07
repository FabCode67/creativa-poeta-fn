import { useState } from "react";
import { AiFillCaretDown, AiOutlineDown, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ScrollDownButton from "./ScrollDownButton";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [hoveredIcon, setHoveredIcon] = useState("");
  const handleIconHover = (iconName:string) => {
    setHoveredIcon(iconName);
  };

  return (
    <section id="home" className="homesec h-fit min-h-screen laptop:m-0 tablet:m-0 tablet:-0 flex flex-col laptop:p-[10rem] tablet:p-[8rem] laptop:pr-[4rem] tablet:pr-[4rem] laptop:justify-normal laptop:text-left text-center tablet:text-center items-center my-auto justify-center px-2 relative"> {/* Added relative positioning */}
      <div className="mt-[6%]">
        <div className="flex justify-between">
          <div className="flex flex-col laptop:w-[70%] tablet:w-[70%] w-full justify-start laptop:m-0 items-start">
            <div className="space-y-3 laptop:space-y-0 ">
              <h1 className="text-2xl font-bold text-gray-500 mx-0 animate-fade-in animate-bounce">{t('welcome')}</h1>
              <p className="laptop:text-7xl text-4xl animate-bounce leading-tight laptop:text-left tablet:text-left text-center font-semibold text-white animate-slide-up">{t('home_content')}</p>
            </div>
            <div className="flex animate-bounce laptop:flex-row tablet:flex-row flex-col laptop:space-x-5 tablet:space-x-5 mt-12 mx-auto laptop:mx-0 w-full space-y-4 laptop:space-y-0 tablet:space-y-0">
              <button className="hover:bg-white hover:text-black text-white px-10 py-3 border-2 border-white animate-fade-in">{t('start_a_project')}</button>
              <button className="hover:bg-white hover:text-black text-white px-10 py-3 border-2 border-white animate-fade-in">{t('more_about_us')}</button>
            </div>
            {/* <div className="laptop:hidden block mt-16 float-left">
              <ScrollDownButton />
              </div> */}
          </div>
          <div className="laptop:block tablet:block hidden">
            <div className="flex flex-col space-y-5 animate-pulse hover:animate-none py-20">
            <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-white text-center items-center flex justify-center text-xl border-white cursor-pointer animate-icon ${hoveredIcon === "Twitter" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Twitter")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-yellow-700 ${hoveredIcon === "Twitter" ? "block" : "hidden"}`}>Twitter</span>
                <AiOutlineTwitter />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-white text-center items-center flex justify-center text-xl border-white cursor-pointer animate-icon ${hoveredIcon === "Facebook" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Facebook")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-yellow-700 ${hoveredIcon === "Facebook" ? "block" : "hidden"}`}>Facebook</span>
                <FaFacebookF />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-white text-center items-center flex justify-center text-xl border-white cursor-pointer animate-icon ${hoveredIcon === "Instagram" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Instagram")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-yellow-700 ${hoveredIcon === "Instagram" ? "block" : "hidden"}`}>Instagram</span>
                <FaInstagram />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-white text-center items-center flex justify-center text-xl border-white cursor-pointer animate-icon ${hoveredIcon === "LinkedIn" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("LinkedIn")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-yellow-700 ${hoveredIcon === "LinkedIn" ? "block" : "hidden"}`}>LinkedIn</span>
                <FaLinkedinIn />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-white text-center items-center flex justify-center text-xl border-white cursor-pointer animate-icon ${hoveredIcon === "Mail" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Mail")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-yellow-700 ${hoveredIcon === "Mail" ? "block" : "hidden"}`}>Mail</span>
                <HiOutlineMail />
              </div>
            </div>
            {/* <ScrollDownButton />            */}
          </div>
        </div>
      </div>
      <div className="very-buttom h-[13%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 bottom-0 border-r-2 border-yellow-700">
  <div className="buttons h-full flex cursor-pointer items-start space-x-1">
    <button className="font-bold w-5 text-md text-yellow-700"><AiOutlineDown /></button>
    <button className="text-white text-xs font-bold"><a href="#about">SCROLL DOWN</a></button>
  </div>
</div>

    </section>
  );
};

export default Home;
