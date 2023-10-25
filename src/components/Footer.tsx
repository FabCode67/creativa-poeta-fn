import { useTranslation } from 'react-i18next';
import logopoeta1 from '../assets/flags/logopoeta1.png';
import { SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Footer({setShowPopUp}: {setShowPopUp: (arg0: boolean) => void;}) {
  const { t } = useTranslation();
  const today = new Date();
  const[isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
 
  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    setIsLoading(true);
    e.preventDefault();
   const res = await fetch('https://blue-angry-gorilla.cyclic.app/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });

    const data = await res.json();

    if(data.error){
      toast.error(data.error, {
        theme: 'colored'
      }
        );
      setIsLoading(false);
      return; 
    }
    setIsLoading(false);
    setShowPopUp(true)
    setEmail('');
    
  };
  return (
    <footer className="foote py-16 backdrop-blur-lg blur-none  laptop:px-44 desktop:px-44 px-2 bg-slate-900 text-white bottom-0 w-full h-fit flex flex-col">
      <div className="laptop:flex-row desktop:flex-row tablet:flex-row flex-col flex justify-center items-center w-full  laptop:space-x-16 desktop:space-x-16 space-x-0">
        <div className="flex flex-col laptop:w-1/2 desktop:w-1/2 tablet:w-[70] w-full h-fit ">
          <h1 className='logo text-4xl text-[#EEBA2B] flex laptop:mx-0 tablet:mx-0 laptop:justify-start tablet:justify-start text-left laptop:items-start tablet:items-start float-left justify-center items-center mx-auto'>
          <img src={logopoeta1} alt="logo" className="laptop:w-[50%] tablet:w-[70%] desktop:w-[50%] laptop:h-[100%] desktop:h-[100%] h-[100%] w-[50%]"/>
          </h1>
          <p className='flex justify-start text-left items-start float-left mt-3 text-slate-400'>
          Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </p>
        </div>
        <div className="flex flex-col laptop:w-1/2 desktop:w-1/2 w-full h-fit ">
        <h1 className='flex justify-start text-left items-start float-left font-bold text-xl mt-5 desktop:mt-0 laptop:mt-0'>
        Get Notified
          </h1>
          <p className='flex justify-start text-left items-start float-left mt-3 text-slate-400'>
          Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.
          </p>
          <form onSubmit={handleSubmit} className='flex justify-start items-start float-left space-x-6 mt-4'>
      <input
        type="email"
        placeholder='Entrer votre email'
        value={email}
        onChange={handleEmailChange}
        className='w-full h-10 px-3 bg-black rounded-md'
      />
      <button type='submit' className='w-fit laptop:px-10 desktop:px-10 tablet:px-8 px-2 h-10 bg-[#EEBA2B] text-white font-semibold rounded-md'> {!isLoading? "s'abonner": 'attendez...'} </button>
    </form>
        </div>
      </div>
      <div className='flex w-full bg-white h-[1px] mt-5'></div>
      <div className="grid laptop:grid-cols-5 desktop:grid-cols-5 tablet:grid-cols-3 grid-cols-2  mt-5 justify-center items-center basis-full text-slate-400">
          <a href='' className='text-xs font-bold'>Clause de non-responsabilité</a>
          <a href='' className='text-xs font-bold'>Politique de confidentialité</a>
          <a href='' className='text-xs font-bold'>Mentions legalès </a>
          <Link to='/terms-and-conditions' className='text-xs font-bold'>Conditions gèneralès  </Link>
          <a href='' className='text-xs font-bold'>Cookes policy</a>
        </div>
        <div className="flex laptop:flex-row desktop:flex-row tablet:flex-row flex-col  space-x-10 mt-16 justify-center items-center basis-full text-slate-400">
          <p>
            {t('copylights')} &copy; {today.getFullYear()} CREATIVA POETA
          </p>
          <a href='' className='text-xs font-bold'>all rights reserved</a>
        </div>
        <div className='powerdby flex flex-row justify-center items-center mt-3'>
          <p className='text-xs font-bold text-slate-400'>powered by</p>
          <a href="https://fabcode67.github.io/my-brand-fabrice" target="_blank" rel="noreferrer text-slate-400">
           <p className='text-xs ml-2 text-gray-300'>fabrice.mwanafunzi@karisimbitech.rw</p>
          </a>
          </div>
          
    </footer>
  );
}

export default Footer;