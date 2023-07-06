import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LocalizationSwicher from './Localization';

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
      className={`font-bold laptop:hidden z-50 text-3xl md:text-4xl bg-opacity-70 text-white flex space-x-3 justify-center m-auto text-center items-center rounded-full p-2 md:p-3 fixed top-1 right-4`}
    > 
     <p className='text-yellow-700 text-sm'>
      <LocalizationSwicher />
     </p>
    <p className='text-yellow-700 text-sm'>MENU</p>
      {sidebarVisible ? (
        <FaTimes onClick={toggleSidebar} />
      ) : (
        <FaBars onClick={toggleSidebar} />
      )}
    </div>
  );
};

export default BurgerButton;
