// About.tsx
import ScrollUpButton from "./ScrollUpButton";
const Contact = () => {
    return (
      <section id='contact' className=' w-full  justify-center h-fit min-h-screen mt-0 flex flex-col bg-slate-900'>
        <div className="mt-[6%] items-center flex justify-center">
          <h1 className="laptop:text-9xl text-4xl text-white font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm <br /> <span className="text-yellow-700">CONTACT PAGE</span></h1>
        </div>
        <ScrollUpButton />

      </section>
    );
  };
export default Contact;  