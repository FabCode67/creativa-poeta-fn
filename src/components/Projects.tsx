
const Projects = () => {
  return (
    <div className="projects desktop:flex flex-col  h-screen  w-full">
      <div className="p-3 backdrop-blur-xs backdrop-blur-lg w-full flex felx-col flex-col space-y-7">
        <h1 className="laptop:text-5xl desktop:text-5xl tablet:text-5xl text-2xl font-bold mx-auto  text-[#EEBA2B]">
         <b className="text-black">NOS</b><br></br>DERNIERS PROJECTS
        </h1>
        </div>
    <div className="projects desktop:flex laptop:flex tablet:grid tablet:grid-cols-2 phone:grid-cols-1 grid-cols-1 desktop:flex-row laptop:flex-row max-h-screen overflow-y-auto laptop:px-20 desktop:px-20 tablet:px-8 px-2 w-full laptop:space-x-8 desktop:space-x-8 tablet:space-x-2 bg-gray-500">
        <div className="laptop:w-[30%] desktop:w-[30%] tablet:w-59 w-full flex flex-col space-y-20 h-screen py-5">
            <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
            <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
        </div>
        <div className="laptop:w-[30%] desktop:w-[30%] w-full flex flex-col space-y-12 h-screen pt-16 pb-2">
            <div className="w-full h-[47%] border-yellow-400 border-2 rounded-lg"></div>
            <div className="w-full h-[47%] border-yellow-400 border-2 rounded-lg"></div>
        </div>
        <div className="laptop:w-[30%] desktop:w-[30%] w-full flex flex-col space-y-20 h-screen py-5">
            <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
            <div className="w-full h-[45%] border-yellow-400 border-2 rounded-lg"></div>
        </div>
    </div>
    </div>
  )
}

export default Projects