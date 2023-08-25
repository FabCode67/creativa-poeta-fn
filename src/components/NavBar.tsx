import { useState } from "react";
import { useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import LocalizationSwicher from "./Localization";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


function NavBar() {
  const { t } = useTranslation();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const location = useLocation();

  return (
    <><div className="flex-center flex flex-col m-auto  float-right">
      <BurgerButton
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar} />
    </div><div className=" mx-auto z-50 fixed w-[55%] laptop:w-[20%] desktop:w-[20%] float-right justify-end  bg-black  shadow-sm ">
        <div className="container flex justify-between">
          <nav className="flex flex-col  justify-between w-full">
            {/* <div className="logo flex-center flex items-center">
      <h1 className="text-white text-2xl py-2 font-bold flex space-x-0 laptop:hidden">
        <a href="#home">Creativa Poeta</a>
      </h1>
      <img src={poeta} alt="Logo" className="laptop:h-[5rem] laptop:block hidden laptop:w-[5rem] w-[3rem] h-[3rem]" />
    </div> */}


            <div
              className={`flex flex-col  min-h-screen h-fit justify-start p-5 space-y-4 float-right ${sidebarVisible ? "" : "hidden"}`}
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
              <p className="text-white pt-12">Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
              <div className="flex space-x-4 justify-center bottom-0 text-xl pb-4 absolute">
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
