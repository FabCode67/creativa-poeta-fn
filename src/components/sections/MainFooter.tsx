import { Link } from 'react-router-dom';

const MainFooter = () => {


  return (

    <div className='flex flex-wrap mx-auto text-center items-center justify-center w-full gap-y-2 laptop:justify-between desktop:justify-between desktop:flex-row px-8 laptop:flex-row flex-col-reverse bg-black h-fit p-2 py-4'>
      <div className='flex flex-row flex-wrap justify-center items-center space-x-2 mr-2'>
        <p className='text-xs font-bold text-slate-400'>Mentions légales</p>
        <Link to="/terms-and-conditions" className='text-xs font-bold text-slate-400' >Conditions générales</Link>
        <p className='text-xs font-bold text-slate-400'>Politique de cookies et de confidentialité</p>
      </div>
      <p className='text-xs font-bold text-slate-400 laptop:mt-0 desktop:mt-0'> © 2023 Creativa Poeta. Tous droits réservés. </p>
    </div >


  )
}

export default MainFooter