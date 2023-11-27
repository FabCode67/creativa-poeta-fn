import { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import image8 from '../../assets/flags/image8.jpg'
import image2 from '../../assets/flags/image2.jpg'
// import image3 from '../assets/flags/image3.jpg'
import BackgroundCircles from "../buttons/BackgroundCircles";
import SlideLeft from "../buttons/SlideLeft";
import SlideRight from "../buttons/SlideRight";
import logopoeta1 from '../../assets/flags/logopoeta1.png'
import Confirm from "../unUsedComponents/Confirm";
import { useLocation } from 'react-router-dom';


const backgrounds = [
  {
    image: image8,
    content: {
      title: "inspired innovation",
      description: "Un souffle de créativité, une touche poétique, voilà Creativa Poeta",
    },
  },
  {
    image: image2,
    content: {
      title: "transformez vos idées en réalité",
      description: "Des solutions sur mesure qui captivent votre public et vous démarquent de la concurrence",
    },
  },
  // {
  //   video: vid, 
  //   content: {
  //     title: "CREATIVE MODERN DESIGN",
  //     description: "Une créativité sans limites qui donne vie à vos idées, une approche qui intègre les dernières technologies, un design esthétique et fonctionnel qui reflète votre identité unique.",
  //   },
  // },
];



const Home = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [istToken, setToken] = useState(false);
  const [isTokenValid, setTokenValid] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const [successMessage, setsuccessMessage] = useState('' as any);
  const [errorMessage, setErrorMessage] = useState('' as any)  
  useEffect(() => {
    if (token) {
      setToken(true);
    }
  }, [token]);
 
  useEffect(() => {
    const confirmToken = async () => {
      const res = await fetch('https://blue-angry-gorilla.cyclic.app/confirm', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token })
      });
      const data = await res.json();
      if(data.error) setTokenValid(true);
      else setTokenValid(false);
      const message = data?.message
      const emes = data?.error
      setErrorMessage(emes);
      setsuccessMessage(message);
    }
    confirmToken();
  }, [token]);



const handleCloseConfitm = () => {
  setToken(false);
}

  // const [touchStartX, setTouchStartX] = useState(null); // Add this line
  const [touchStartX, setTouchStartX] = useState<number | null>(null); // Adjust the state type
  const prevIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;

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

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;

    const touch = e.touches[0];
    const touchEndX = touch.clientX;

    const deltaX = touchEndX - touchStartX;
    const sensitivity = 50;

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
      className={`homesec h-fit min-h-screen laptop:m-0 tablet:m-0 tablet:-0 flex flex-col laptop:p-[10rem] tablet:p-[8rem] laptop:pr-[4rem] tablet:pr-[4rem] laptop:justify-normal laptop:text-left text-center tablet:text-center items-center my-auto justify-center px-2 relative ${currentIndex === prevIndex ? "slide-in" : "slide-out"}`}
      style={{
        backgroundImage: currentBackground.image
          ? `url(${currentBackground.image})`
          : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        transition: "background 0.9s ease-in-out",
        animation: "slideAnimation 0.9s ease-in-out",
        animationName: "slideAnimation",
      }}
    >
      <div className="logo laptop:top-0 desktop:top-0 tablet:top-3 md:top-3 top-5  text-white laptop:text-4xl desktop:text-4xl text-xl  phone:left-8 tablet:left-8 desktop:left-8 md:left-8 laptop:left-8 left-4 laptop:ml-11 desktop:ml-11 ml-0 absolute laptop:p-1 desktop:p-1">
        <img src={logopoeta1} alt="logo" className="laptop:w-[85%] desktop:w-[85%] laptop:h-[95%] desktop:h-[95%] h-[100%] w-[50%]" />
      </div>
      <div className="">
        <div className="flex justify-between">
          <div className="flex flex-col laptop:w-[72%] tablet:w-[80%] w-full justify-start laptop:m-0 items-start">

            <div className="phone:space-y-3 xs:space-y-1 laptop:space-y-0 ">
              <h1
                className={`laptop:text-4xl desktop:text-4xl laptop:pb-7 desktop:pb-7 tablet:-bottom-7 pb-7 xs:pb-2 tablet:text-4xl md:text-4xl text-sm phone:text-3xl font-bold laptop:px-0 desktop:px-0 tablet:px-0 mdpx0 px-7 text-[#FFFF00] mx-0 animate-fade-in animate-bounce ${showTitle ? "visible2" : ""
                  }`}
              >
                {currentBackground.content.title.toLocaleUpperCase()}
              </h1>
              <p
                className={`animate-bounce leading-tight laptop:text-left tablet:text-left text-center laptop:ox-0 desktop:px-0 tablet:px-0 mdpx0 px-7 font-semibold text-white animate-slide-up ${currentBackground.content.title === "CREATIVE MODERN DESIGN"
                  ? "laptop:text-xl desktop:text-xl phone:text-lg tablet:text-1xl text-lg xs:text-sm "
                  : "laptop:text-2xl desktop:text-2xl phone:text-lg tablet:text-1xl text-lg xs:text-sm"
                  } ${showDescription ? "visible2" : ""}`}
              >
                {currentBackground.content.description}
              </p>
            </div>
            <div className="flex animate-bounce laptop:flex-row tablet:flex-row flex-col laptop:space-x-5 tablet:space-x-5 mt-12 mx-auto laptop:mx-0 w-full space-y-4 laptop:space-y-0 tablet:space-y-0">
              <button className="hover:bg-white hover:text-black text-white px-10 laptop:py-3 desktop:py-3 phone:py-3 tablet:py-3 xs:py-1 laptop:text-base desktop:text-base tablet:text-base phone:text-base xs:text-sm border-2 border-white animate-fade-in">COMMENCER UN PROJET</button>
              <button className="hover:bg-white hover:text-black text-white px-10 laptop:py-3 desktop:py-3 phone:py-3 tablet:py-3 xs:py-1 laptop:text-base desktop:text-base tablet:text-base phone:text-base xs:text-sm border-2 border-white animate-fade-in">A PROPOS DE NOUS</button>
            </div>
            <SlideLeft backgrounds={backgrounds} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <SlideRight backgrounds={backgrounds} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <BackgroundCircles backgrounds={backgrounds} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

          </div>
          <div className="laptop:block tablet:block hidden">
            <div className="flex flex-col space-y-5 animate-pulse hover:animate-none py-20">
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-slate-500 text-center items-center flex justify-center text-xl  border-gray-500 cursor-pointer animate-icon ${hoveredIcon === "Twitter" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Twitter")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-[#FFFF00] ${hoveredIcon === "Twitter" ? "block" : "hidden"}`}>Twitter</span>
                <AiOutlineTwitter />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-slate-500 text-center items-center flex justify-center text-xl  border-gray-500 cursor-pointer animate-icon ${hoveredIcon === "Facebook" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Facebook")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-[#FFFF00] ${hoveredIcon === "Facebook" ? "block" : "hidden"}`}>Facebook</span>
                <FaFacebookF />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-slate-500 text-center items-center flex justify-center text-xl  border-gray-500 cursor-pointer animate-icon ${hoveredIcon === "Instagram" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Instagram")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-[#FFFF00] ${hoveredIcon === "Instagram" ? "block" : "hidden"}`}>Instagram</span>
                <FaInstagram />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-slate-500 text-center items-center flex justify-center text-xl  border-gray-500 cursor-pointer animate-icon ${hoveredIcon === "LinkedIn" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("LinkedIn")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-[#FFFF00] ${hoveredIcon === "LinkedIn" ? "block" : "hidden"}`}>LinkedIn</span>
                <FaLinkedinIn />
              </div>
              <div
                className={`group rounded-full h-[3rem] w-[3rem] border-4 text-slate-500 text-center items-center flex justify-center text-xl  border-gray-500 cursor-pointer animate-icon ${hoveredIcon === "Mail" ? "animate-icon-active" : ""}`}
                onMouseEnter={() => handleIconHover("Mail")}
                onMouseLeave={() => handleIconHover("")}
              >
                <span className={`absolute right-36 text-[#FFFF00] ${hoveredIcon === "Mail" ? "block" : "hidden"}`}>Mail</span>
                <HiOutlineMail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="very-buttom h-[10%] laptop:w-[10%] tablet:w-[17%] phone:w-[35%] w-[38%] absolute laptop:right-20 right-11 bottom-0 border-r-2 border-[#FFE533]">
        <div className="buttons h-full flex cursor-pointer items-start space-x-1">
          <button className="font-bold w-5 text-md text-[#FFFF00]"><AiOutlineDown /></button>
          <button className="text-white tablet:text-xs desktop:text-xs phone:text-xs laptop:text-xs text-xs font-bold"><a href="#about">SCROLL DOWN</a></button>
        </div>
      </div>

      {istToken&&!isTokenValid &&(
         <Confirm message={successMessage} isSuccess={true} onClose={handleCloseConfitm} />
      )}
      {istToken&&isTokenValid &&(
         <Confirm message={errorMessage} isSuccess={false} onClose={handleCloseConfitm} />
      )}

    </section>
  );
};

export default Home;
