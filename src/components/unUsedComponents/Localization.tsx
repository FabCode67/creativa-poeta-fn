import  { useState } from 'react';
import Image from './Image';
import FrLog from '../assets/flags/fr.svg';
import EngLog from '../assets/flags/eng.svg';
import i18n from '../../i18n/locale';

interface Language {
  name: string;
  code: string;
  flag: string;
}

const LocalizationSwicher = () => {
  const languages: Language[] = [
    { name: 'En', code: 'en', flag: EngLog },
    { name: 'Fr', code: 'fr', flag: FrLog },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentLanguage: Language | undefined = languages.find((lan) => lan.code === i18n.language);

  const handleLanguageSelect = (lan: Language) => {
    i18n.changeLanguage(lan.code);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative z-50 text-[#EEBA2B] hover:text-white">
      <button
        type="button"
        className="flex items-center h-auto laptop:py-2 md:h-fit md:px-1 md:py-0 border border-[#EEBA2B] rounded-full cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Image
          width="1"
          alt="Language flag"
          className="w-4 md:m-0 md-p-0 hidden laptop:block rounded-lg shadow-xl sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl 2xl:shadow-xl "
          src={currentLanguage?.flag || ''}
        />

        <span className="mx-3 md:text-[12px]">{currentLanguage?.name}</span>
        <svg
          className={`fill-current h-4 w-4 md:w-2 md:h-2 transition-transform duration-200 transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15.333l-5.333-10L15.333 5l-5.333 10z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <ul className="absolute text-base w-max top-full left-0 right-0 bg-white border border-[#EEBA2B] rounded-b-md shadow-md z-[9999] ">
          {languages.map((lan) => (
            <button
              type="button"
              key={lan.code}
              className="flex items-center w-full px-3 py-2 text-base cursor-pointer hover:bg-[#EEBA2B]"
              onClick={() => handleLanguageSelect(lan)}
            >
              <Image className="h-5 w-6 mr-2" alt="Language flag" src={lan.flag} width={''} />
              <span className="md:text-[12px] text-[18px]">{lan.name}</span>
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocalizationSwicher;
