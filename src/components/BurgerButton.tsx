import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { LiaBarsSolid } from 'react-icons/lia';
interface BurgerButtonProps {
  sidebarVisible: boolean;
  toggleSidebar: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  sidebarVisible,
  toggleSidebar,
}) => {
  return (
    <div
      className={`menus font-bold z-30 text-3xl backdrop-blur-lg md:text-4xl bg-black  text-white flex space-x-3 justify-center m-auto text-center items-center rounded-md p-1 md:p-1 fixed top-5 right-4`}
    > 
     {/* <p className='text-yellow-700 text-sm'>
      <LocalizationSwicher />
     </p> */}
    <p className='menu text-[#FFFF00] text-base font-thin'>MENU</p>
      {sidebarVisible ? (
        <FaTimes onClick={toggleSidebar} />
      ) : (
        <LiaBarsSolid onClick={toggleSidebar} />
      )}
    </div>
  );
};

export default BurgerButton;
