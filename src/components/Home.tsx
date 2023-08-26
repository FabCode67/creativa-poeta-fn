import { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import image1 from '../assets/flags/image1.jpg'
import image2 from '../assets/flags/image2.jpg'
import image3 from '../assets/flags/image3.jpg'
import BackgroundCircles from "./BackgroundCircles";
import SlideLEft from "./SlideLEft";
import SlideRight from "./SlideRight";


const backgrounds = [
  {
    image: image1,
    content: {
      title: "TRANSFORMEZ VOS IDEES EN RÉALITÉ",
      description: "Des solutions sur mesure qui captivent votre public et vous démarquent de la concurrence",
    },
  },
  {
    image: image2,
    content: {
      title: "WELCOME TO CREATIVA POETA",
      description: "We are a creative group of people who design influential brands and digital experiences.",
    },
  },
  {
    image: image3,
    content: {
      title: "CREATIVE MODERN DESIGN",
      description: "Une créativité sans limites qui donne vie à vos idées, une approche qui intègre les dernières technologies, un design esthétique et fonctionnel qui reflète votre identité unique.",
    },
  },
];


const Home = () => {
  const { t } = useTranslation();
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  // const [touchStartX, setTouchStartX] = useState(null); // Add this line
  const [touchStartX, setTouchStartX] = useState<number | null>(null); // Adjust the state type

  const handleIconHover = (iconName: string) => {
    setHoveredIcon(iconName);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 900);

    const descriptionTimeout = setTimeout(() => {
      setShowDescription(true);
    }, 10000);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(descriptionTimeout);
    };
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => { // Specify the event type
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => { // Specify the event type
    if (!touchStartX) return;

    const touch = e.touches[0];
    const touchEndX = touch.clientX;

    const deltaX = touchEndX - touchStartX;
    const sensitivity = 50; // Adjust this value based on your preference

    if (deltaX > sensitivity) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
      setTouchStartX(null);
    } else if (deltaX < -sensitivity) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const currentBackground = backgrounds[currentIndex];
  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="homesec h-fit min-h-screen laptop:m-0 tablet:m-0 tablet:-0 flex flex-col laptop:p-[10rem] tablet:p-[8rem] laptop:pr-[4rem] tablet:pr-[4rem] laptop:justify-normal laptop:text-left text-center tablet:text-center items-center my-auto justify-center px-2 relative"
      style={{
        backgroundImage: `url(${currentBackground.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 0.5s ease-in-out",
      }} >


      <div className="logo top-5 border-top text-white text-xl border-t-4 border-l-yellow-500 border-t-yellow-500 border-l-4 left-3 absolute p-1">

        Creativa Poeta
      </div>
      <div className="">
        <div className="flex justify-between">
          <div className="flex flex-col laptop:w-[70%] tablet:w-[70%] w-full justify-start laptop:m-0 items-start">
            
            <div className="space-y-3 laptop:space-y-0 ">
              <h1
                className={`text-2xl font-bold text-yellow-500 mx-0 animate-fade-in animate-bounce ${showTitle ? "visible2" : ""
                  }`}
              >
                {currentBackground.content.title}
              </h1>
              <p
                className={`animate-bounce leading-tight laptop:text-left tablet:text-left text-center font-semibold text-white animate-slide-up ${currentBackground.content.title === "CREATIVE MODERN DESIGN"
                    ? "laptop:text-5xl text-3xl"
                    : "laptop:text-7xl text-4xl"
                  } ${showDescription ? "visible2" : ""}`}
              >
                {currentBackground.content.description}
              </p>
            </div>
            <div className="flex animate-bounce laptop:flex-row tablet:flex-row flex-col laptop:space-x-5 tablet:space-x-5 mt-12 mx-auto laptop:mx-0 w-full space-y-4 laptop:space-y-0 tablet:space-y-0">
              <button className="hover:bg-white hover:text-black text-white px-10 py-3 border-2 border-white animate-fade-in">{t('start_a_project')}</button>
              <button className="hover:bg-white hover:text-black text-white px-10 py-3 border-2 border-white animate-fade-in">{t('more_about_us')}</button>
            </div>
            <SlideLEft backgrounds={backgrounds} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <SlideRight backgrounds={backgrounds} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <BackgroundCircles backgrounds={backgrounds} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

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
