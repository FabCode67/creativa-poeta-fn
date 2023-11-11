
const Projects = () => {
    return (
        <section id="projects" className="projects desktop:flex flex-col  h-screen relative  w-full">
            <div className="p-3 backdrop-blur-xs backdrop-blur-lg w-full flex felx-col flex-col space-y-7">
                <h1 className="laptop:text-5xl desktop:text-5xl tablet:text-5xl text-2xl font-bold mx-auto  text-[#EEBA2B]">
                    <b className="text-black">NOS</b><br></br>DERNIERS PROJECTS
                </h1>
            </div>
            <div className="projects desktop:flex laptop:flex tablet:grid tablet:grid-cols-2 phone:grid-cols-1 grid-cols-1 desktop:flex-row laptop:flex-row max-h-screen overflow-y-auto laptop:px-28 desktop:px-28 tablet:px-8 px-4 w-full laptop:space-x-8 desktop:space-x-8 tablet:space-x-2 space-x-0 bg-gray-500">
                <div className="laptop:w-[32%] desktop:w-[32%] tablet:w-59 w-full flex flex-col laptop:space-y-20 desktop:space-y-20 tablet:space-y-20 space-y-8 h-screen py-5">
                    <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
                    <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
                </div>
                <div className="laptop:w-[32%] desktop:w-[32%] w-full flex flex-col laptop:space-y-12 desktop:space-y-12 tablet:space-y-12 space-y-8 h-screen laptop:pt-16 desktop:pt-16 tablet:pt-16 pt-1 pb-2">
                    <div className="w-full h-[47%] border-yellow-400 border-2 rounded-lg"></div>
                    <div className="w-full h-[47%] border-yellow-400 border-2 rounded-lg"></div>
                </div>
                <div className="laptop:w-[32%] desktop:w-[32%] w-full flex flex-col laptop:space-y-10 desktop:space-y-10 tablet:space-y-20 laptop:mt-7 desktop:mt-7 mt-0 space-y-8 h-screen py-5">
                    <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
                    <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
                </div>
            </div>

            <div className="laptop:h-[9%] tablet:h-[7%] phone:h-[6%] h-[5%] laptop:w-[5.57%]  tablet:w-[3%] w-[4%] absolute xs:h-[.8%] laptop:left-0 left-0 top-0 border-r-2 border-white"></div>
      {/* <div className="very-buttom laptop:h-[7%] desktop:h-[7%] tablet:h-[4%] phone:h-[4.4%] h-[4.4%] xs:h-[3.5%] laptop:w-[1%] w-[35%] absolute laptop:right-1/2 right-1/2 bottom-0 border-r-2 border-white"></div> */}
        </section>
    )
}

export default Projects