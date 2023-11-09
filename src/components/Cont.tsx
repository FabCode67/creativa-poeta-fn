import { FaFacebook, FaInstagram, FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Popup from "./MailConfirm";
import { useState } from "react";
import { toast } from "react-toastify";
import {FiPhone} from 'react-icons/fi';
const Cont = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: { target: { value: string; }; }) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: { target: { value: string; }; }) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e: { target: { value: string; }; }) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    setIsLoading(true);
    e.preventDefault();
  
    // Check if any field is empty or if the email is invalid
    if (!email || !name || !message) {
      toast.error('Veuillez remplir tous les champs.', {
        theme: 'colored',
      });
      setIsLoading(false);
      return;
    }
  
    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Veuillez saisir une adresse e-mail valide.', {
        theme: 'colored',
      });
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch('https://blue-angry-gorilla.cyclic.app/users/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, message }),
      });
  
      const data = await response.json();
  
      if (data.error) {
        alert(data.error);
        setIsLoading(false);
        return;
      }
  
      setIsLoading(false);
      setEmail('');
      setName('');
      setMessage('');
      toast.success(data.message, {
        theme: 'colored',
      });
    } catch (error) {
      toast.error('Erreur réseau. Veuillez réessayer plus tard.', {
        theme: 'colored',
      });
      setIsLoading(false);
    }
  };
  


  const handleClosePopup = () => {
    setShowPopup(false);
  };

    return (
      <><section id='contact' className='contacnt w-full laptop:px-10 desktop:px-10 px-0 justify-center h-fit min-h-screen mt-0 text-white flex flex-col  relative'>
        <div className=" items-center flex justify-center">
          <div className="w-full flex flex-col  basis basis-full space-y-0">
            <div className="contuctus-text flex-center flex justify-center text-center p-2 desktop:mt-4 laptop:mt-4 tablet:mt-0 mt-4">
              <h1 className="laptop:text-2xl desktop:text-2xl text-2xl font-bold">Nous contacter</h1>
            </div>
            <div className="flex flex-col laptop:flex-col desktop:flex-col laptop:mt-0 desktop:0 mt-2 backdrop-blur-sm">
              <div className="flex flex-col laptop:basis-full desktop:basis-full basis-full  h-full">
                <div className="forms py-9">
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <label className="bg-gre text-md text-gray-500">Nom</label>
                      <input 
                      className="border-b-2 border-b-gray-700 bg-inherit outline-none text-[#EEBA2B]  hover:border-white py-2" 
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                       />
                      <label className="  text-md  text-gray-500">E-mail</label>
                      <input 
                      className=" bg-inherit border-b-2 border-b-gray-700 outline-none text-[#EEBA2B] hover:border-white  py-2" 
                      type="email" 
                      value={email}
                      onChange={handleEmailChange}
                      />
                      <label className="bg-gre  text-md  text-gray-500">Message</label>
                      <textarea 
                      className=" outline-none hover:border-white py-2 bg-inherit text-[#EEBA2B] border-b-2 border-b-gray-700 h-20"
                      value={message}
                      onChange={handleMessageChange}
                       />
                      <button className=" rounded-md p-3 mt-8 bg-[#EEBA2B] border text-white font-semibold">
                        {!isLoading ? "Envoyer" : 'attendez...'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-col basis-full backdrop-blur-2xl h-full text-gray-500">
                <div className="contactInfo  flex flex-col j laptop:justify-normal desktop:justify-normal  text-gray-500">
                  <div className="text-2xl  text-[#EEBA2B] flex space-x-4">
                    <FiPhone className="text-2xl text  text-[#EEBA2B] flex " />
                    <h1 className="laptop:text-2xl desktop:text-xl text-xl">+32 479 08 99 25</h1>
                  </div>
                  <div className="text-2xl mt-2  text-[#EEBA2B] flex space-x-4 ">
                  <FaRegEnvelope className="text-2xl  text-[#EEBA2B] flex my-auto justify-center text-center items-center " />
                  <h1 className="laptop:text-2xl desktop:text-xl text-xl ">contact@creativapoeta.com</h1>
                  </div>
                 
                 
                  <div className="flex space-x-4  bottom-0 mt-20 text-xl pb-4">
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
       
        {showPopup && (
          <Popup
            message="Merci pour votre abonnement à creativa poeta. nous vous avons envoyé un e-mail de confirmation."
            isSuccess={true}
            onClose={handleClosePopup} />
        )}


      </section>
      {/* <Footer setShowPopUp={setShowPopup} /> */}
      </>

    );
  };
export default Cont;  