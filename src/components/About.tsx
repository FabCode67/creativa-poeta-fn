// About.tsx

const About = () => {
  
  return (
    <section id="about" className="about   h-fit min-h-screen  flex flex-col justify-center items-center text-center relative"> 
<div className="main_about h-fit min-h-screen backdrop-blur-xs flex flex-col justify-center items-center text-center relative" style={{ backgroundColor: 'rgba(245, 233, 66,0.4)' }}>
      <div className="laptop:mt-[6%] tablet:mt-[6%] laptop:space-y-10 space-y-5 mt-[7rem]">
        <div className="flex justify-center flex-col laptop:space-y-10 space-y-5 laptop:w-[50%] w-[90%] tablet:w-[70%] mx-auto">
          <div className="flex justify-center flex-col laptop:space-y-5 space-x-3">
            <div className="flex justify-center">
              <h1 className="laptop:text-2xl text-md font-bold text-black mx-0 animate-fade-in  animate-bounce">HELLO THERE</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="laptop:text-5xl tablet:text-3xl text-2xl font-bold text-slate-800 mx-0 animate-fade-in animate-bounce underline-offset-6">WE ARE CREATIVA POETA</h1>
            </div>
          </div>
          <div className="flex justify-center mx-auto h-px bg-white animate-bounce w-full">
          </div>
        </div>
        <div className="flex justify-center text-center laptop:px-40 px-4">
          <h1 className="laptop:text-2xl leading-relaxed	 tablet:text-2xl text-center text-slate-80 mx-0 animate-fade-in animate-bounce underline-offset-6">Passionate about artistic expression and inspiring creation, we are a company of experienced designers, copywriters and web developers who offer you unique creative solutions. Our primary goal is to understand your needs in order to create exceptional results. With our approach of creativity and excellence, we capture attention and leave a lasting impression. Please contact us today to discuss your projects and find out how we can help you achieve your creative goals.',</h1>
        </div>
      </div>
      <div className="very-top laptop:h-[13%] tablet:h-[13%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-neutral-100">
      </div>
      <div className="very-buttom laptop:h-[10%] desktop:h-[13%] h-[9%] laptop:w-[10%] w-[35%] absolute laptop:right-1/2 right-1/2 bottom-0 border-r-2 border-white">
  <div className="buttons h-full flex cursor-pointer items-start mt- space-x-1">
  </div>
</div>
</div>
    </section>
  );
};

export default About;
