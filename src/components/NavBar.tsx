import { useState } from "react";
import { useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logoBurger from '../assets/flags/logoBurger.png'

function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [servicesSubMenuVisible, setServicesSubMenuVisible] = useState(false); 

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleServicesSubMenu = () => {
    setServicesSubMenuVisible(!servicesSubMenuVisible);
  };

 


  const location = useLocation();

  return (
    <>
      <div className="flex-center flex flex-col m-auto float-right">
        <BurgerButton
          sidebarVisible={sidebarVisible}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <div
        className={`mx-auto z-50 fixed w-[65%] laptop:w-[20%] desktop:w-[20%] tablet:w-[45%] float-right justify-end bg-black shadow-sm sidebar ${sidebarVisible ? 'visible' : 'sidebar-closing'}`}
      >
        <div className="container flex justify-between">
          <nav className="flex flex-col w-full">
            <div
              className={`navbar flex flex-col laptop:min-h-[98vh] desktop:min-h-[98vh] tablet:min-h-[98vh] ipod:min-h-[98vh] min-h-[94vh] h-fit max-h-[100%] justify-start p-10 space-y-4 float-right ${sidebarVisible ? "" : "hidden"}`}
              style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <div className="flex text-[#EEBA2B] justify-between">
                <p className="hidden">Navigation</p>
                <div className=" flex mx-auto justify-center text-center text-white items-center">
                  <FaTimes onClick={toggleSidebar} />
                </div>
              </div>
              <div className="h-fit flex  space-y-3 flex-col mt-6">
        <a
          href="#home"
          onClick={toggleSidebar}
          className={` overflow-y-auto rounded text-white mt-12 text-xl hover:text-[#EEBA2B] ${location.hash === "#home" ? "text-[#EEBA2B]" : ""}`}
        >
          Accueil
        </a>
        <a
          href="#about"
          onClick={toggleSidebar}
          className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#about" ? "text-[#EEBA2B]" : ""}`}
        >
          A propos
        </a>

        <div onClick={toggleServicesSubMenu}>
          <p
            className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] cursor-pointer ${
              location.hash === "#services" ? "text-[#EEBA2B]" : ""
            }`}
          >
            Services
          </p>
          {servicesSubMenuVisible && ( 
            <div className="pl-6 flex text-xs flex-col space-y-2">
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
                Design graphique
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
               Rédaction de contenu
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
               Développement de projets
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
               Création, édition et montage vidéo
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
               Marketing digital
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
              Conception publicitaire
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
               Développement de projets
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
              Création de site internet
              </a>
              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white  hover:text-[#EEBA2B] ${
                  location.hash === "#services" ? "text-[#EEBA2B]" : ""
                }`}
              >
Assistance technologique et Accompagnement numérique              </a>  
            </div>
          )}
        </div>
              <a
                href="#parteners"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#parteners" ? "text-[#EEBA2B]" : ""}`}
              >
                Nos travaux
              </a>
              <a
                href="#faq"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#faq" ? "text-[#EEBA2B]" : ""}`}
              >
                F.A.Q.
              </a>

              <a
                href="#contact"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#contact" ? "text-[#EEBA2B]" : ""}`}
              >
              Contacts
              </a>
              </div>
              <p className="text-white">
              <img src={logoBurger}
              alt="test"
              className="w-[100%] h-[100%] object-cover mt-2"
              />
              </p>
              <div className="flex space-x-4 laptop:bottom-8 desktop:bottom-8 tablet:bottom-8 phone:bottom-8 bottom-2 absolute justify-center text-xl ">
                <a href="#facebook" className="text-white">
                  <FaFacebook />
                </a>
                <a href="#twitter" className="text-white">
                  <FaTwitter />
                </a>
                <a href="#instagram" className="text-white">
                  <FaInstagram />
                </a>
                <a href="#linkedin" className="text-white">
                  <FaLinkedin />
                </a>
                <a href="#mail" className="text-white">
                  <HiOutlineMail />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div></>
  );
}

export default NavBar;
