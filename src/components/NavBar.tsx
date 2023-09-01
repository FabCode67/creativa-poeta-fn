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
    <>
      <div className="flex-center flex flex-col m-auto float-right">
        <BurgerButton
          sidebarVisible={sidebarVisible}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <div className={`mx-auto z-50 fixed w-[55%] laptop:w-[20%] desktop:w-[20%] float-right justify-end bg-black shadow-sm sidebar ${sidebarVisible ? 'visible' : 'sidebar-closing'}`}>

        <div className="container flex justify-between">
          <nav className="flex flex-col  justify-between w-full">
            <div
              className={`navbar flex flex-col  min-h-screen h-fit justify-start p-5 space-y-4 float-right ${sidebarVisible ? "" : "hidden"}`}
            >
              <div className="flex text-[#FFE533] justify-between">
                <p>Navigation</p>
                <div className=" flex m-auto justify-center text-center text-white items-center">
                  <FaTimes onClick={toggleSidebar} />
                </div>
              </div>
              <a
                href="#home"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#FFE533] ${location.hash === "#home" ? "bg-[#FFE533]" : ""}`}
              >
                {t("home")}
              </a>
              <a
                href="#about"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#FFE533] ${location.hash === "#about" ? "bg-[#FFE533]" : ""}`}
              >
                {t("about")}
              </a>

              <a
                href="#services"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#FFE533] ${location.hash === "#services" ? "bg-[#FFE533]" : ""}`}
              >
                {t("services")}
              </a>
              <a
                href="#parteners"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#FFE533] ${location.hash === "#parteners" ? "bg-[#FFE533]" : ""}`}
              >
                {t("Parteners")}
              </a>
              <a
                href="#faq"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#FFE533] ${location.hash === "#faq" ? "bg-[#FFE533]" : ""}`}
              >
                {t("FAQ")}
              </a>

              <a
                href="#contact"
                onClick={toggleSidebar}
                className={` overflow-y-auto rounded text-red-200 hover:text-[#FFE533] ${location.hash === "#contact" ? "bg-[#FFE533]" : ""}`}
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
