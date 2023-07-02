import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
      className={`font-bold laptop:hidden z-50 text-2xl md:text-4xl bg-yellow-700 bg-opacity-70 text-white rounded-full p-2 md:p-3 fixed top-1 right-4`}
    >
      {sidebarVisible ? (
        <FaTimes onClick={toggleSidebar} />
      ) : (
        <FaBars onClick={toggleSidebar} />
      )}
    </div>
  );
};

export default BurgerButton;
