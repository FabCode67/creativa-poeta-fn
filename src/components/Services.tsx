import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogData from "../data/blog";


// About.tsx
const Services = () => {
  const { t } = useTranslation();
  console.log(blogData);
  
  return (
    <section id='services' className=' py-16 justify-center  h-fit min-h-screen mt-0 flex flex-col bg-white items-center relative'>
      
      <div className="mt-[3%] pb-12 laptop:px-40 px-2">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-[#EEBA2B]">
          {t('our_services')}
        </h1>
        <div
          className={`grid laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-16 grid-cols-1 mt-[3%] gap-4 sm:grid-cols-2`}
        >
          {blogData.map((blog) => (
          <Link
            className="border border-yellow-400 rounded-md px-4 py-2 h-[35rem]" to={`/services/${blog.id}`} key={blog.id}>
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
            <button className="bg-[#EEBA2B] bottom-0 relative hover:bg-yellow-500 text-white w-full font-bold py-3 px-4 rounded mt-4">
              {t('read_more')}
            </button>
          </Link>
          ))}
        </div>
     
      </div>
      <div className="laptop:h-[6%] tablet:h-[4%] h-[2%] laptop:w-[10%] t w-[35%] absolute laptop:right-1/2 right-1/2 top-0 border-r-2 border-[#FFE533]">
      </div>
      <div className="very-buttom laptop:h-[4%] desktop:h-[4%] tablet:h-[4%] h-[2%] laptop:block desktop:block laptop:w-[5%] w-[2%] absolute laptop:left-2 left-2 bottom-0 border-r-2 border-[#FFE533]">
  <div className="buttons h-full flex cursor-pointer items-start space-x-1">

  </div>
</div>
    </section>
  );
};
export default Services;  