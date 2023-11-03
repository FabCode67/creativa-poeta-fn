import  { useState } from "react";
import { useTranslation } from "react-i18next";
import faqData from "../data/faq";
import phonevid from "../assets/phonevid.mp4";

const Faq = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = faqData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section
      id="faq"
      className="faq laptop:py-9 desktop:py-9 py-14 h-fit min-h-screen w-full  flex flex-col justify-center items-center text-center relative"
    >
      <video autoPlay loop muted className="video-background">
        <source src={phonevid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mt-[2%] laptop:px-10 desktop:px-10 tablet:px-10 px-5 mb-16 ">
        <h1 className="laptop:text-4xl text-2xl font-bold text-justfy text-black">
          {t("FAQ")}
        </h1>
        <div
          className={`grid laptop:grid-cols-4 tablet:grid-cols-3 px-1  laptop:gap-8 grid-cols-1 mt-[7%] gap-12 sm:grid-cols-2`}
        >
          {currentItems.map((faq, index) => (
            <div
              key={index}
              className="border laptop:h-[20rem] desktop:h-[23rem] 2xl:h-[27rem] tablet:h-[25rem] ipod:h-[30rem] px-0 h-fit  "
            >
              <h3
                className="font-bold backdrop-blur-md text-slate-900 2xl:h-[17rem] laptop:h-[5rem] desktop:h-[7rem] tablet:h-[7rem] h-fit text-justify px-2 laptop:text-xl desktop:text-xl border-b text-md  "
                style={{ backgroundColor: "rgba(245, 233, 66,0.4)" }}
              >
                {faq.title}{" "}
              </h3>
              <p className="laptop:mt-1 desktop:mt-3 p-2 mt-1 text-md flex justify-start text-start">
                {faq.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mx-auto space-x-5 items-center mt-[5rem]">
          {Array.from({ length: Math.ceil(faqData.length / itemsPerPage) }, (_, index) => (
            <button
              className={`${
                currentPage === index + 1 ? "bg-yellow-500 " : "bg-[#EEBA2B] px-1 text-sm py-0"
              } py-1 px-3 w-fit font-bold text-white`}
              key={index}
              onClick={() => handlePagination(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* Rest of your code */}
    </section>
  );
};
export default Faq;
