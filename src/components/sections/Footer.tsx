// import { useTranslation } from 'react-i18next';
import logopoeta1 from '../../assets/flags/logopoeta1.png';
import Cont from '../unUsedComponents/Cont';
// import { SetStateAction, useState } from 'react';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

function Footer() {
  // const { t } = useTranslation();
  // const today = new Date();
  // const[isLoading, setIsLoading] = useState(false);
  // const [email, setEmail] = useState('');
 
  // const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   setIsLoading(true);
  //   e.preventDefault();7
  //  const res = await fetch('https://blue-angry-gorilla.cyclic.app/subscribe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email: email })
  //   });

  //   const data = await res.json();

  //   if(data.error){
  //     toast.error(data.error, {
  //       theme: 'colored'
  //     }
  //       );
  //     setIsLoading(false);
  //     return; 
  //   }
  //   setIsLoading(false);
  //   setShowPopUp(true)
  //   setEmail('');
    
  // };
  return (
    <footer className="foote py-12 backdrop-blur-lg blur-none  laptop:px-32 desktop:px-32 tablet:px-24 px-4 bg-slate-900 text-white bottom-0 w-full h-fit flex flex-col">
      <div className="laptop:flex-row  desktop:flex-row tablet:flex-col flex-col flex  items-center w-full">
        <div className="flex flex-col laptop:w-[63%] desktop:w-[63%] tablet:w-full w-full h-fit ">
          <h1 className='logo text-4xl text-[#EEBA2B] flex laptop:mx-0 tablet:mx-0 laptop:justify-start tablet:justify-start text-left laptop:items-start tablet:items-start float-left justify-start items-start'>
          <img src={logopoeta1} alt="logo" className="laptop:w-[30%] tablet:w-[40%] desktop:w-[30%] laptop:h-[100%] desktop:h-[100%] h-[100%] w-[50%]"/>
          </h1>
          <p className='flex justify-start text-justify  items-start pr-7 float-left mt-3 text-slate-400'>
          La créativité est notre passion et notre métier. Nous sommes animés par elle. Notre mission est de donner vie à vos idées, de renforcer votre présence en ligne et de susciter l'engagement de votre public. Avec une équipe d'experts passionnés, nous offrons une gamme de services adaptés à vos besoins. Contactez-nous pour démarrer votre prochain projet.
          </p>
          <div className='flex desktop:flex-row laptop:flex-row tablet:flex-row flex-col w-full justify-start items-start float-left laptop:mt-3 desktop:mt-3 tablet:mt-3 mt-3 h-fit'>
          <div className='flex flex-col laptop:pr-12 desktop:pr-12 tablet:pr-6 pr-1 justify-start items-start laptop:w-1/2 desktop:w-1/2 w-full h-fit'>
              <p className='flex justify-start items-start float-left mt-3 text-[#EEBA2B] text-xl font-bold'>
                Nos Compétences
                </p>
                <p className='flex justify-start items-start float-left text-start mt-3 text-slate-400'>Conception de logos</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Affiches et flyers personnalisés</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Cartes de visite uniques</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Rédaction de contenu web</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Révision et correction de textes</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Rédaction de lettres personnalisées et de documents professionnels</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Création de discours et de poésie</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Assistance en écriture de mémoires et de rapports</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Conception de sites web</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Stratégies de marketing digital</p>
            </div>
            <div className='flex flex-col justify-start items-start pr-5 laptop:w-1/2 desktop:w-1/2 w-full h-fit'>
          
                <p className='flex justify-start items-start float-left text-start laptop:mt-12 desktop:mt-12 tablet:mt-12 mt-1 text-slate-400'>Gestion des réseaux sociaux </p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Campagnes publicitaires visuelles</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Création de contenu marketing</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Aide à l'utilisation des outils numériques</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Assistance pour les démarches administratives en ligne </p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Conseils en sécurité en ligne</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Assistance pour acheter sur Internet</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Production de vidéos publicitaires</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Podcasts créatifs</p>
                <p className='flex justify-start items-start float-left text-start mt-1 text-slate-400'>Édition et montage de vidéos promotionnelles</p>
            </div>
            </div>
            <div className='flex flex-col w-full justify-start items-start mt-5  h-fit'>
            <p className='flex justify-start items-start float-left text-slate-400 pr-7'>Que vous soyez un entrepreneur, un créateur de contenu, une entreprise ou un particulier, nous sommes là pour donner vie à vos idées et pour vous aider à réussir dans votre domaine.</p>
             <p className='flex justify-start items-start float-left mt-5 text-white font-bold'>
             Votre créativité, notre passion.
             </p>
             </div>
        </div>
        <div className="flex flex-col laptop:w-[37%] desktop:w-[37%] b w-full h-fit ">
          <Cont />
        {/* <h1 className='flex justify-start text-left items-start float-left font-bold text-xl mt-5 desktop:mt-0 laptop:mt-0'>
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
    </form> */}
        </div>
      {/* </div> */}
      {/* <div className='flex w-full bg-white h-[1px] mt-5'></div>
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
          </div> */}
          </div>
          <div className="laptop:h-[8%] tablet:h-[4%] phone:h-[2%] h-[2%] laptop:w-[10%] w-[35%] absolute laptop:right-11 right-11 top-0 border-r-2 border-[#EEBA2B]">
        </div>
    </footer>
  );
}

export default Footer;