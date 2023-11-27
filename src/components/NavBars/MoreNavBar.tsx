import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import LocalizationSwicher from "../unUsedComponents/Localization";
import { useTranslation } from "react-i18next";
import {  FaTimes } from "react-icons/fa";


function MoreNavBar() {
  const { t } = useTranslation();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const location = useLocation();

  return (
    <><div className="flex-center flex flex-col m-auto float-right">
      <BurgerButton
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar} />
    </div><div className=" mx-auto z-50 fixed w-[55%] laptop:w-[15%] desktop:w-[15%] float-right justify-end  bg-black  shadow-sm ">
        <div className="container flex justify-between">
          <nav className="flex flex-col  justify-between w-full">
            {/* <div className="logo flex-center flex items-center">
      <h1 className="text-white text-2xl py-2 font-bold flex space-x-0 laptop:hidden">
        <a href="#home">Creativa Poeta</a>
      </h1>
      <img src={poeta} alt="Logo" className="laptop:h-[5rem] laptop:block hidden laptop:w-[5rem] w-[3rem] h-[3rem]" />
    </div> */}


            <div
              className={`flex flex-col justify-end p-5 space-y-4 float-right ${sidebarVisible ? "" : "hidden"}`}
            >
                          <div className="flex text-[#EEBA2B] justify-between">
      <p className="hidden">Navigation</p>
      <div className=" flex m-auto justify-center text-center text-white items-center">
      <FaTimes onClick={toggleSidebar} />
      </div>
    </div>
              <Link to="/#home"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#EEBA2B] ${location.hash === "#home" ? "bg-[#EEBA2B]" : ""}`}
              >
                {t("home")}
              </Link>
              <Link to="/#about"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#EEBA2B] ${location.hash === "#about" ? "bg-[#EEBA2B]" : ""}`}
              >
                {t("about")}
              </Link>

              <Link to="/#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#EEBA2B] ${location.hash === "#services" ? "bg-[#EEBA2B]" : ""}`}
              >
                {t("services")}
              </Link>
              <Link to="/#parteners"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#EEBA2B] ${location.hash === "#parteners" ? "bg-[#EEBA2B]" : ""}`}
              >
                {t("Parteners")}
              </Link>
              <Link to="/#faq"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#EEBA2B] ${location.hash === "#faq" ? "bg-[#EEBA2B]" : ""}`}
              >
                {t("FAQ")}
              </Link>

              <Link to="/#contact"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#EEBA2B] ${location.hash === "#contact" ? "bg-[#EEBA2B]" : ""}`}
              >
                {t("contact")}
              </Link>
              <a
                className="items-center py-3 px-3 laptop:my-6 my-2 rounded"
              > <LocalizationSwicher />
              </a>
            </div>
          </nav>
        </div>
      </div></>
  );
}

export default MoreNavBar;
