import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogData from "../data/blog";


// About.tsx
const Services = () => {
  const { t } = useTranslation();
  console.log(blogData);
  
  return (
    <section id='services' className='justify-center h-fit min-h-screen mt-0 flex flex-col bg-slate-900 items-center'>
      <div className="mt-[8%] laptop:px-40 px-2">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-white">
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
            <button className="bg-blue-500 bottom-0 relative hover:bg-blue-700 text-white w-full font-bold py-3 px-4 rounded mt-4">
              {t('read_more')}
            </button>
          </Link>
          ))}
         
        </div>
      </div>
    </section>
  );
};
export default Services;  