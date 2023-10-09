import blogData from "../data/blog";

const Services = () => {
  console.log(blogData);
  
  return (
    <section id='services' className=' py-16 justify-center  h-fit min-h-screen mt-0 flex flex-col bg-slate-800 items-center relative'>
      
      <div className="mt-[2%] pb-12 bg-slate-800  w-full flex felx-col flex-col space-y-7">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-[#EEBA2B]">
          NOS SERVICE
        </h1>
        <div className="w-full bg-black mt-5 flex flex-col space-y-7 py-5 ">
        {blogData.map((blog) => (

        <div className="flex justify-center mx-auto  h-fit min-h-32 self-center laptop:w-[60%] desktop:w-[60%] tablet:w-[80%] w-[98%] text-white">
          <div className="icon w-[20%] h-32   my-auto flex flex-col justify-center text-center mt-5">
            <img src={blog.image} alt="line" className="o object-fill laptop:h-32 tablet:h-28 desktop:h-32 h-20 w-full  m-auto flex flex-col justify-center text-center"/>
           </div>
          <div className="icon w-[20%] h-32  m-auto flex flex-col justify-center laptop:px-4 tablet:px-3 desktop:pax-4 px-2">
            <p className="te laptop:text-2xl desktop:text-2xl tablet:text-xl text-base font-thin">{blog.h1}</p>
            <p className="te laptop:text-2xl desktop:text-2xl tablet:text-xl text-base font-thin">{blog.h2}</p>
          </div>
          <div className="w-[2%] bg-[#EEBA2B]"></div> 
          <div className="icon w-[58%] h-fit min-h-32  justify-center my-auto flex items-center pl-3 laptop:text-base tablet:text-base desktop:text-base text-sm"><p className=" flex justify-center items-center  my-auto ">{blog.description}</p></div>
        </div>
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