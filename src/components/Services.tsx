import { Link } from "react-router-dom";
import test from "../assets/test.jpg";
import { useTranslation } from "react-i18next";

// About.tsx
const Services = () => {
  const { t } = useTranslation();
  return (
    <section id='services' className='justify-center h-fit min-h-screen mt-0 flex flex-col bg-slate-900 items-center'>
      <div className="mt-[8%] laptop:px-40 px-2">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-white">
          {t('our_services')}
        </h1>
        <div
          className={`grid laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-16 grid-cols-1 mt-[3%] gap-4 sm:grid-cols-2`}
        >
          <Link
            className="bg-slate-200 p-4 h-[40rem]" to={""}                      >
            <img
              src={test}
              alt="test"
              className="w-full h-[55%] object-cover"
            />
            <h3 className="text-xl font-bold mt-2">
            Lorem ipsum dolor sit amet consectetur </h3>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dolore sunt asperiores dicta ut, magni hic placeat illum. Placeat quibusdam iusto ipsa? Omnis iure qui adipisci provident quos. Itaque, facilis.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </p>
          </Link>
          <Link
            className="bg-slate-200 p-4 h-[40rem]" to={""}                      >
            <img
              src={test}
              alt="test"
              className="w-full h-[55%] object-cover"
            />
            <h3 className="text-xl font-bold mt-2">
            Lorem ipsum dolor sit amet consectetur </h3>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dolore sunt asperiores dicta ut, magni hic placeat illum. Placeat quibusdam iusto ipsa? Omnis iure qui adipisci provident quos. Itaque, facilis.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </p>
          </Link>
          <Link
            className="bg-slate-200 p-4 h-[40rem]" to={""}                      >
            <img
              src={test}
              alt="test"
              className="w-full h-[55%] object-cover"
            />
            <h3 className="text-xl font-bold mt-2">
            Lorem ipsum dolor sit amet consectetur </h3>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dolore sunt asperiores dicta ut, magni hic placeat illum. Placeat quibusdam iusto ipsa? Omnis iure qui adipisci provident quos. Itaque, facilis.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Services;  