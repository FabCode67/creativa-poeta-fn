
const Contact = () => {
    return (
      <section id='contact' className=' w-full  justify-center h-fit min-h-screen mt-0 text-white flex flex-col bg-slate-900 relative'>
        <div className="mt-[6%] items-center flex justify-center">
          <div className="w-full flex flex-col laptop:space-y-8 desktop:space-y-8  basis basis-full space-y-0 laptop:px-[12%] desktop:px-[12%] px-1">
            <div className="contuctus-text flex-center flex justify-center text-center p-6">
              <h1 className="laptop:text-4xl desktop:text-4xl text-lg font-bold">Contact Us</h1>
            </div>
            <div className="contuctus-text flex-center flex justify-center text-center">
              <p className="laptop:text-5xl desktop:test-5xl texr-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="flex flex-col laptop:flex-row desktop:flex-row laptop:mt-0 desktop:0 mt-2 bg-slate-800">
            <div className="flex flex-col laptop:basis-3/4 desktop:basis-3/4 basis-full  h-full">
              <div className="sendMessage py-9 px-6 ">
                <h1 className="text-4xl font-bold text-white">Send us Message</h1>
              </div>
              <div className="forms py-9 px-6">
                <form className="form">
                  <div className="flex flex-col">
                    <label className="text-white text-lg font-bold">Name</label>
                    <input className="border-2 border-white rounded-md p-2" type="text" placeholder="Name" />
                    <label className="text-white text-lg font-bold mt-8">Email</label>
                    <input className="border-2 border-white rounded-md p-2" type="email" placeholder="Email" />
                    <label className="text-white text-lg font-bold mt-8">Message</label>
                    <textarea className="border-2 border-white rounded-md p-2" placeholder="Message" />
                    <button className="bg-white text-black rounded-md p-3 mt-8">Send</button>
                    </div>
                </form>
              </div>
              </div>
            <div className="flex flex-col basis-1/4 bg-slate-950 h-full">
              <div className="contactInfo py-9 px-6 flex flex-col justify-center laptop:justify-normal desktop:justify-normal text-center m-auto space-y-12 ">
                <h1 className="text-4xl font-bold text-white">Contact Info</h1>
                <div className="contactInfoItem">
                  <h2 className="text-2xl font-bold text-white">Address</h2>
                  <p className="text-white">123 Street, New York, USA</p>
                  <p className="text-white">123 Street, New York, USA</p>
                  <p className="text-white">123 Street, New York, USA</p>
                  </div>
                  <div className="emailsInformation">
                    <h2 className="text-2xl font-bold text-white">Email</h2>
                    <p className="text-white">test@gmail.com</p>
                    <p className="text-white">capital@gmail.com</p>
                    <p className="text-white">capital@gmail.com</p>
                  </div>
                  <div className="callUsinfo">
                    <h2 className="text-2xl font-bold text-white">Call Us</h2>
                    <p className="text-white">+1 234 56 78</p>
                    <p className="text-white">+1 234 56 78</p>
                    <p className="text-white">+1 234 56 78</p>
                    </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
          <div className="laptop:h-[10%] tablet:h-[13%] h-[8%] laptop:w-[10%] w-[35%] absolute laptop:right-20 right-11 top-0 border-r-2 border-[#FFE533]">
      </div>
      </section>
    );
  };
export default Contact;  