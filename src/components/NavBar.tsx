import { useState } from "react";
import { useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import burgerlogo from "../assets/flags/burgerlogo.png"
import logoBurger from '../assets/flags/logoBurger.png'

function NavBar() {
  const { t } = useTranslation();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
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
                <p>Navigation</p>
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
                {t("home")}
              </a>
              <a
                href="#about"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#about" ? "text-[#EEBA2B]" : ""}`}
              >
                {t("about")}
              </a>

              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#services" ? "text-[#EEBA2B]" : ""}`}
              >
                {t("services")}
              </a>
              <a
                href="#parteners"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#parteners" ? "text-[#EEBA2B]" : ""}`}
              >
                {t("Parteners")}
              </a>
              <a
                href="#faq"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#faq" ? "text-[#EEBA2B]" : ""}`}
              >
                {t("FAQ")}
              </a>

              <a
                href="#contact"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-white text-xl hover:text-[#EEBA2B] ${location.hash === "#contact" ? "text-[#EEBA2B]" : ""}`}
              >
                {t("contact")}
              </a>
              </div>
              {/* <a
                className="items-center py-3 px-3 laptop:my-6 my-2 rounded"
              > <LocalizationSwicher />
              </a> */}
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
