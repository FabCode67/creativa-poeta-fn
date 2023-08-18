import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogData from "../data/blog";
import { AiOutlineDown } from "react-icons/ai";


// About.tsx
const Services = () => {
  const { t } = useTranslation();
  console.log(blogData);
  
  return (
    <section id='services' className='justify-center mb-4 h-fit min-h-screen mt-0 flex flex-col bg-white items-center relative'>
      
      <div className="mt-[3%] laptop:px-40 px-2">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-yellow-700">
          {t('our_services')}
        </h1>
        <div
          className={`grid laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-16 grid-cols-1 mt-[3%] gap-4 sm:grid-cols-2`}
        >
          {blogData.map((blog) => (
          <Link
            className="bg-slate-200 px-4 py-2 h-[35rem]" to={`/services/${blog.id}`} key={blog.id}>
            <img
              src={blog.image}
              alt="test"
              className="w-full h-[55%] object-cover"
            />
            <h3 className="text-xl font-bold mt-2">
            {blog.title} </h3>
            <p className="mt-1 line-clamp-6">
              {blog.description}
            </p>
            <button className="bg-yellow-700 bottom-0 relative hover:bg-yellow-500 text-white w-full font-bold py-3 px-4 rounded mt-4">
              {t('read_more')}
            </button>
          </Link>
          ))}
        </div>
     
      </div>
      <div className="laptop:h-[8%] tablet:h-[13%] h-[2%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-yellow-800">
      </div>
      <div className="very-buttom h-[5%] laptop:block desktop:block hidden laptop:w-[5%] w-[35%] absolute laptop:right-20 right-11 bottom-0 border-r-2 border-yellow-700">
  <div className="buttons h-full flex cursor-pointer items-start space-x-1">
    <button className="font-bold w-5 text-md text-yellow-700"><AiOutlineDown /></button>
    <button className="text-black text-xs font-bold"><a href="#parteners">DOWN</a></button>
  </div>
</div>
    </section>
  );
};
export default Services;  