
const MainFooter = () => {
  return (
    <div className='flex flex-wrap mx-auto text-center items-center justify-center w-full laptop:justify-between desktop:justify-between bg-black h-fit p-2 py-4'>
    <div className='flex flex-row justify-center items-center space-x-2 mr-2'>
    <p className='text-xs font-bold text-slate-400'>Mentions légale</p>
    <p className='text-xs font-bold text-slate-400'>|</p>
    <p className='text-xs font-bold text-slate-400'>Conditions générales</p>
    </div>
    <p className='text-xs font-bold text-slate-400  ml-1'> © 2023 Creativa Poeta. Tous droits réservés. </p>
    <p className='text-xs font-bold text-slate-400 laptop:mt-0 desktop:mt-0 mt-2 ml-2'>Politique de cookies et de confidentialité</p>
  </div>
  )
}

export default MainFooter