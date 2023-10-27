// About.tsx

const About = () => {

  return (
    <section id="about" className="about   h-fit min-h-screen  flex flex-col justify-center items-center text-center relative">
      <div className="main_about h-fit  laptop:py-0 desktop:py-0 tablet:py-0 phonepy-0 py-12 min-h-screen backdrop-blur-xs flex flex-col justify-center items-center text-center relative" style={{ backgroundColor: 'rgba(245, 233, 66,0.4)' }}>
        <div className="laptop:mt-[6%] tablet:mt-[6%] laptop:space-y-10 space-y-5 mt-[0rem]">
          <div className="flex justify-center flex-col laptop:space-y-10 space-y-5 laptop:w-[50%] w-[90%] tablet:w-[70%] mx-auto">
            <div className="flex justify-center flex-col laptop:space-y-5 space-x-3">
              <div className="flex justify-center">
                <h1 className="laptop:text-2xl text-md font-bold text-black mx-0 animate-fade-in  animate-bounce">SALUT</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="laptop:text-5xl tablet:text-3xl text-2xl font-bold text-slate-800 mx-0 animate-fade-in animate-bounce underline-offset-6">QUI SOMMES-NOUS </h1>
              </div>
            </div>
            <div className="flex justify-center mx-auto h-px bg-white animate-bounce w-full">
            </div>
          </div>
          <div className="flex justify-center text-center laptop:px-40 px-4">
            <h1 className="laptop:text-2xl leading-relaxed	 tablet:text-2xl text-center text-slate-80 mx-0 animate-fade-in animate-bounce underline-offset-6">Passionnés par l'expression artistique et la création inspirante, nous sommes une entreprise regroupant des designers, rédacteurs et développeurs web expérimentés qui vous offrent des solutions créatives uniques. Notre objectif principal est de comprendre vos besoins afin de créer des résultats exceptionnels. Grâce à notre approche axée sur la créativité et l'excellence, nous captivons l'attention et laissons une impression durable. N'hésitez pas à nous contacter dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider à atteindre vos objectifs créatifs</h1>
          </div>
        </div>
        <div className="very-top laptop:h-[13%] tablet:h-[13%] phone:h-[10%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-neutral-100">
        </div>
        <div className="very-buttom laptop:h-[9%] desktop:h-[13%] h-[7%] laptop:w-[9%] w-[35%] absolute laptop:right-1/2 right-1/2 bottom-0 border-r-2 border-white">
          <div className="buttons h-full flex cursor-pointer items-start mt- space-x-1">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
