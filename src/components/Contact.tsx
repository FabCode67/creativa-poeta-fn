
const Contact = () => {
    return (
      <section id='contact' className='contact w-full  justify-center h-fit min-h-screen mt-0 text-white flex flex-col  relative'>
        <div className="mt-[6%] items-center flex justify-center">
          <div className="w-full flex flex-col laptop:space-y-8 desktop:space-y-8  basis basis-full space-y-0 laptop:px-[12%] desktop:px-[12%] px-1">
            <div className="contuctus-text flex-center flex justify-center text-center p-6">
              <h1 className="laptop:text-4xl desktop:text-4xl text-lg font-bold">Contact Us</h1>
            </div>
            <div className="contuctus-text flex-center flex justify-center text-center">
              <p className="laptop:text-2xl desktop:test-2xl texr-xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="flex flex-col laptop:flex-row desktop:flex-row laptop:mt-0 desktop:0 mt-2 backdrop-blur-sm">
            <div className="flex flex-col laptop:basis-3/4 desktop:basis-3/4 basis-full  h-full">
              <div className="sendMessage py-9 px-6 ">
                <h1 className="text-2xl font-bold text-white">Send us Message</h1>
              </div>
              <div className="forms py-9 px-6">
                <form className="form">
                  <div className="flex flex-col">
                    <label className="bg-gre text-lg font-bold">Name</label>
                    <input className="border-b-2 bg-inherit  py-2" type="text" placeholder="enter your name" />
                    <label className="  text-lg font-bold mt-8">Email</label>
                    <input className=" bg-inherit border-b-2  py-2" type="email" placeholder="enter your email" />
                    <label className="bg-gre  text-lg font-bold mt-8">Message</label>
                    <textarea className="  py-2 bg-inherit border-b-2 h-20" placeholder="write your message here" />
                    <button className=" rounded-md p-3 mt-8  border text-white font-semibold">Send</button>
                    </div>
                </form>
              </div>
              </div>
            <div className="flex flex-col basis-1/4 backdrop-blur-2xl h-full">
              <div className="contactInfo py-9 px-6 flex flex-col j laptop:justify-normal desktop:justify-normal  space-y-12 ">
                <h1 className="text-2xl font-bold text-white ">Contact Info</h1>
                <div className="contactInfoItem ">
                  <h2 className="text-xl font-bold text-white ">Address</h2>
                  <p className="text-white">123 Street, New York, USA</p>
                  <p className="text-white">123 Street, New York, USA</p>
                  <p className="text-white">123 Street, New York, USA</p>
                  </div>
                  <div className="emailsInformation">
                    <h2 className="text-xl font-bold text-white">Email</h2>
                    <p className="text-white">test@gmail.com</p>
                    <p className="text-white">capital@gmail.com</p>
                    <p className="text-white">capital@gmail.com</p>
                  </div>
                  <div className="callUsinfo">
                    <h2 className="text-xl font-bold text-white">Call Us</h2>
                    <p className="text-white">+1 234 56 78</p>
                    <p className="text-white">+1 234 56 78</p>
                    <p className="text-white">+1 234 56 78</p>
                    </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
          <div className="laptop:h-[8%] tablet:h-[8%] h-[3%] laptop:w-[10%] w-[35%] absolute laptop:right-1/2 right-1/2 top-0 border-r-2 border-[#EEBA2B]">
      </div>
      </section>
    );
  };
export default Contact;  