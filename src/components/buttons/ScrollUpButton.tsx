import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const ScrollUpButton = () => {
  return (
    <div className=' text-gray-700 hover:text-white font-bold z-0 text-2xl md:text-4xl  bg-opacity-70 text-grey-100 rounded-full p-2 md:p-3 w-16 relative bottom-0'>
      <a href='#home'>
        <BsFillArrowUpSquareFill />
      </a>
    </div>
  );
};

export default ScrollUpButton;
