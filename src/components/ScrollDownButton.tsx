import { BsFillArrowDownSquareFill } from 'react-icons/bs'
const ScrollDownButton = () => {
  return (
    <div className='font-bold z-0 text-2xl md:text-4xl text-gray-700 hover:text-white bg-opacity-70 text-grey-100 rounded-full p-2 md:p-3 w-16 float-right m-auto justify-end flex items-end text-end relative bottom-4 right-0'>
      <a href='#about'>
        <BsFillArrowDownSquareFill />
      </a>
    </div>
  );
};


export default ScrollDownButton