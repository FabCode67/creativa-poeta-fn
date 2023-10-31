// About.tsx

const About = () => {

  return (
    <section id="about" className="about   h-fit min-h-screen  flex flex-col justify-center items-center text-f relative">
      <div className="main_about h-fit  laptop:py-0 desktop:py-0 tablet:py-0 phone:py-0 pb-12 min-h-screen backdrop-blur-xs flex flex-col justify-center items-center text-center relative" style={{ backgroundColor: 'rgba(245, 233, 66,0.4)' }}>
        <div className="laptop:mt-[0%]  laptop:py-0 desktop:py-0 phone:py-0 tablet:py-0 iphone:py-0 ipod:py-0 xs:py-20 tablet:mt-[0%] laptop:space-y-10 space-y-5 mt-[0rem]">
          <div className="flex justify-evenly flex-col laptop:space-y-10 space-y-5 laptop:w-[50%] w-[90%] tablet:w-[70%] mx-auto">
            <div className="flex justify-evenly flex-col laptop:space-y-5 space-x-3">
              {/* <div className="flex justify-center">
                <h1 className="laptop:text-2xl text-md font-bold text-black mx-0 animate-fade-in  animate-bounce">SALUT</h1>
              </div> */}
              <div className="flex justify-evenly">
                <h1 className="laptop:text-5xl tablet:text-3xl text-2xl font-bold text-slate-800 mx-0 animate-fade-in animate-bounce underline-offset-6">QUI SOMMES-NOUS </h1>
              </div>
            </div>
            <div className="flex justify-evenly mx-auto h-px bg-white animate-bounce w-full">
            </div>
          </div>
          <div className="flex justify-evenly laptop:px-40 px-4">
            <h1 className="laptop:text-2xl leading-relaxed tablet:text-2xl text-slate-80 mx-0 animate-fade-in animate-bounce underline-offset-6 text- text-justify justify-evenly">Passionnés par l'expression artistique et la création inspirante, nous sommes une entreprise regroupant des designers, rédacteurs et développeurs web expérimentés qui vous offrent des solutions créatives uniques. Notre objectif principal est de comprendre vos besoins afin de créer des résultats exceptionnels. Grâce à notre approche axée sur la créativité et l'excellence, nous captivons l'attention et laissons une impression durable. N'hésitez pas à nous contacter dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider à atteindre vos objectifs créatifs</h1>
          </div>
        </div>
        <div className="very-top laptop:h-[13%] tablet:h-[13%] phone:h-[10%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-neutral-100">
        </div>
        <div className="very-buttom laptop:h-[8%] desktop:h-[9%] h-[7%] laptop:w-[9%] w-[35%] absolute laptop:right-1/2 right-1/2 bottom-0 border-r-2 border-white">
          <div className="buttons h-full flex cursor-pointer items-start mt- space-x-1">
          </div>
        </div>
      </div>
      <a href="#contact" className="contact us bg-black text-white font-bold py-2 px-4 rounded-md absolute bottom-0 left-0 desktop:mb-28 laptop:mb-28 ipod:mb-56 phone:mb-24 tablet:mb-56 xs:mb-16 laptop:ml-40 desktop:ml-40 ml-3 border-2 border-[#FFE533]">CONTACTEZ NOTRE EQUIPE</a>
    </section>
  );
};

export default About;
