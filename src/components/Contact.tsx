import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
                    <label className="bg-gre text-md text-gray-500">Name</label>
                    <input className="border-b-2 border-b-gray-700 bg-inherit outline-none text-[#EEBA2B]  hover:border-white py-2" type="text"  />
                    <label className="  text-md  text-gray-500">Email</label>
                    <input className=" bg-inherit border-b-2 border-b-gray-700 outline-none text-[#EEBA2B] hover:border-white  py-2" type="email"  />
                    <label className="bg-gre  text-md  text-gray-500">Message</label>
                    <textarea className=" outline-none hover:border-white py-2 bg-inherit text-[#EEBA2B] border-b-2 border-b-gray-700 h-20"  />
                    <button className=" rounded-md p-3 mt-8 bg-[#EEBA2B] border text-white font-semibold">Send</button>
                    </div>
                </form>
              </div>
              </div>
            <div className="flex flex-col basis-1/4 backdrop-blur-2xl h-full text-gray-500">
              <div className="contactInfo py-9 px-6 flex flex-col j laptop:justify-normal desktop:justify-normal  space-y-10 text-gray-500">
                <h1 className="text-2xl font-bold text-white ">Contact Info</h1>
                <div className="contactInfoItem ">
                  <h2 className="text-xl font-bold text-[#FFFF00] ">Address</h2>
                  <p className="text-gray-500">123 Street, New York, USA</p>
                  <p className="text-gray-500">123 Street, New York, USA</p>
                  </div>
                  <div className="emailsInformation">
                    <h2 className="text-xl font-bold text-[#FFFF00]">Email</h2>
                    <p className="text-gray-500">test@gmail.com</p>
                    <p className="text-gray-500">capital@gmail.com</p>
                  </div>
                  <div className="callUsinfo">
                    <h2 className="text-xl font-bold text-[#FFFF00]">Call Us</h2>
                    <p className="text-gray-500">+1 234 56 78</p>
                  </div>
                  <div className="flex space-x-4  bottom-0 text-xl pb-4">
                <a href="#facebook" className="text-white">
                  <FaFacebook />
                </a>
                <a href="#twitter" className="text-white">
                  <FaTwitter />
                </a>
                <a href="#instagram" className="text-white">
                  <FaInstagram />
                </a>
                <a href="#linkedin" className="text-white">
                  <FaLinkedin />
                </a>
                <a href="#mail" className="text-white">
                  <HiOutlineMail />
                </a>

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