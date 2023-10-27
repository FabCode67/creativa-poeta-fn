import blogData from "../data/blog";

const Services = () => {
  
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
      
      </div>
      <div className="watermark absolute laptop:h-fit desktop:h-fit w-full tablet:w-[20rem] h-fit laptop:w-[15
        ;rem]  rounded-sm desktop:w-[13rem] bg-blue-900  font-extrabold opacity-75 border border-blue-900 laptop:right-[.5rem] tablet:right-[1rem] desktop:right-[.5rem] laptop:top-[33rem] desktop:top-[31rem] tablet:top-[55rem] w-[6rem] h-[20rem]  phone:top-[55rem] top-[60rem] px-1">
        <p className="text-[#fa1138] laptop:text-base desktop:text-base tablet:text-base text-xs">SPECIALEMENT POUR YOUTUBEUR, TIKTOK, INSTAGRAM, ....</p>
        <p className="text-[#fa1138] laptop:text-base desktop:text-base tablet:text-base text-xs">ETU/OU CREATEUR DE CONTENU</p>
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