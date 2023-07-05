import poeta from "../assets/poeta.jpeg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";

function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const location = useLocation();

  return (
    <div className="navbar mt-0 z-50 bg-black fixed w-full mb-[94rem] shadow-sm laptop:shadow-yellow-700">
      <div className="container laptop:mx-auto xs:mx-2 flex justify-between">
        <nav className="flex flex-col laptop:flex-row justify-between w-full">
          <div className="logo flex-center flex items-center">
            <h1 className="text-white text-2xl py-2 font-bold flex space-x-0 laptop:hidden">
              <a href="#home">Creativa Poeta</a>
            </h1>
            <img src={poeta} alt="Logo" className="laptop:h-[5rem] laptop:block hidden laptop:w-[5rem] w-[3rem] h-[3rem]" />
          </div>
          <div className="flex-center flex flex-col laptop:flex-row items-center m-auto float-right">
            <BurgerButton
              sidebarVisible={sidebarVisible}
              toggleSidebar={toggleSidebar}
            />
          </div>
          <div
            className={`flex-center flex flex-col laptop:flex-row ${
              sidebarVisible ? "" : "hidden laptop:flex"
            }`}
          >
            <a
              href="#home"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded text-red-200 hover:text-xs ${
                location.hash === "#home" ? "bg-yellow-700" : ""
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded text-red-200 hover:text-xs ${
                location.hash === "#about" ? "bg-yellow-700" : ""
              }`}
            >
              About
            </a>

            <a
              href="#services"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded text-red-200 hover:text-xs ${
                location.hash === "#services" ? "bg-yellow-700" : ""
              }`}
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded text-red-200 hover:text-xs ${
                location.hash === "#contact" ? "bg-yellow-700" : ""
              }`}
            >
              Contacts
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
