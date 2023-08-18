import { useState } from "react";
import { useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import LocalizationSwicher from "./Localization";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";


function NavBar() {
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
                          <div className="flex text-yellow-300 justify-between">
      <p>Navigation</p>
      <div className=" flex m-auto justify-center text-center text-white items-center">
      <FaTimes onClick={toggleSidebar} />
      </div>
    </div>
              <a
                href="#home"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-yellow-700 ${location.hash === "#home" ? "bg-yellow-700" : ""}`}
              >
                {t("home")}
              </a>
              <a
                href="#about"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-yellow-700 ${location.hash === "#about" ? "bg-yellow-700" : ""}`}
              >
                {t("about")}
              </a>

              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-yellow-700 ${location.hash === "#services" ? "bg-yellow-700" : ""}`}
              >
                {t("services")}
              </a>
              <a
                href="#parteners"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-yellow-700 ${location.hash === "#parteners" ? "bg-yellow-700" : ""}`}
              >
                {t("Parteners")}
              </a>
              <a
                href="#faq"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-yellow-700 ${location.hash === "#faq" ? "bg-yellow-700" : ""}`}
              >
                {t("FAQ")}
              </a>

              <a
                href="#contact"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-yellow-700 ${location.hash === "#contact" ? "bg-yellow-700" : ""}`}
              >
                {t("contact")}
              </a>
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

export default NavBar;
FaBars