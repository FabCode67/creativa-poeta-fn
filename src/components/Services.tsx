import blogData from "../data/blog";

const Services = () => {
  console.log(blogData);
  
  return (
    <section id='services' className=' mainn py-16 justify-center  h-fit min-h-screen mt-0 flex flex-col bg-slate-800 items-center relative'>
      
      <div className="mt-[2%] pb-12   w-full flex felx-col flex-col space-y-7">
        <h1 className="laptop:text-4xl text-2xl font-bold text-center text-[#EEBA2B]">
          NOS SERVICE
        </h1>
        <div className="w-full  grid laptop:grid-cols-2 laptop:gap-20 desktop:gap-20 tablet:gap-12 gap-10 desktop:grid-cols-2 tablet:grid-cols-1 grid-cols-1 laptop:p-28 desktop:p-28 tablet:p-8 p-4 ">
         {blogData.map((blog) => (
          <div className="flex  laptop:text-base desktop:text-base tablet:text-base text-sm p-1 mx-auto flex-col h-fit   laptop:w-[100%] desktop:w-[100%] tablet:w-[80%] w-[98%]">
            <div className="w-[100%] flex justify-self-start  h-[6rem] mt-0">
              <div className="flex object-contain icon w-[20%] my-auto justify-center">
                <img src={blog.image} alt="" height={100} width={100} className="object-contain"></img>
              </div>
              <div className="flex flex-col icon w-fit p-3 laptop:h-[7rem] desktop:h-[7rem] tablet:h-[7rem] h-[6rem] space-y-2 self-end">
                <div className="flex w-full text-xl desktop:text-3xl tablet:text-xl laptop:text-3xl text-white flex-col justify-end  self-end  content">  
                  <p className="">{blog.h1}</p>
                  <p className="font-bold">{blog.h2}</p>
                </div>
                <div className="flex w-full bg-yellow-400  h-[.5rem] content"></div>
              </div>
            </div>
            <div className="w-full flex justify-self-start mt-0 p-1">
              <p className="text-white pl-[22%] laptop:text-xl desktop:text-xl tablet:text-xl text-sm"> {blog.description} </p>
            </div>
          </div>
           ))} 

         {/* {blogData.map((blog) => (
        <div className="flex justify-center mx-auto  h-fit min-h-32 self-center laptop:w-[60%] desktop:w-[60%] tablet:w-[80%] w-[98%] text-white">
          <div className="icon w-[10%] h-8   my-auto flex flex-col justify-center text-center mt-15">
            <img src={blog.image} alt="line" className="o object-fill laptop:h-32 tablet:h-28 desktop:h-32 h-20 w-full  m-auto flex flex-col justify-center text-center"/>
           </div>
          <div className="icon w-[20%] h-32  m-auto flex flex-col justify-center laptop:px-4 tablet:px-3 desktop:pax-4 px-0">
            <p className="te laptop:text-2xl desktop:text-2xl tablet:text-xl text-base font-thin">{blog.h1}</p>
            <p className="te laptop:text-2xl desktop:text-2xl tablet:text-xl text-base font-thin">{blog.h2}</p>
          </div>
          <div className="w-[2%] bg-[#EEBA2B]"></div> 
          <div className="icon w-[58%] h-fit min-h-32  justify-center my-auto flex items-center pl-3 laptop:text-base tablet:text-base desktop:text-base text-sm"><p className=" flex justify-center items-center  my-auto ">{blog.description}</p></div>
        </div>
        ))}  */}
      
      </div>
      <div className="absolute laptop:h-[4rem] desktop:h-[4rem] w-full tablet:w-[33rem] h-fit laptop:w-[33rem] desktop:w-[33rem] bg-blue-900  font-extrabold opacity-75 border border-blue-900 laptop:right-[6rem] tablet:right-[2rem] desktop:right-[6rem] laptop:top-[40rem] desktop:top-[40rem]  top-[58rem] -rotate-12">
        <p className="text-[#fa1138] text-base">SPECIALEMENT POUR YOUTUBEUR, TIKTOK, INSTAGRAM, ....</p>
        <p className="text-[#fa1138]">ETU/OU CREATEUR DE CONTENU</p>
      </div>
      </div>
      <div className="laptop:h-[4%] desktop:[h-4%] tablet:h-[3%] h-[2%] laptop:w-[10%] t w-[35%] absolute laptop:right-1/2 right-1/2 top-0 border-r-2 border-[#FFE533]">
      </div>
      <div className="very-buttom laptop:h-[4%] desktop:h-[4%] tablet:h-[4%] h-[2%] laptop:block desktop:block laptop:w-[5%] w-[2%] absolute laptop:left-2 left-2 bottom-0 border-r-2 border-[#FFE533]">
  <div className="buttons h-full flex cursor-pointer items-start space-x-1">

  </div>
</div>
    </section>
  );
};
export default Services;  