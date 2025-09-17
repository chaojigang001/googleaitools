
import React from 'react';
import { Language } from '../types';
import { TranslateIcon } from './icons/TranslateIcon';
import { LogoIcon } from './icons/LogoIcon';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  localization: {
    title: string;
    languageToggle: string;
  };
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, localization }) => {
  const toggleLanguage = () => {
    const newLang = language === Language.ZH ? Language.EN : Language.ZH;
    setLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <header className="flex items-center justify-between p-4 border-b border-[#D8C9B5]/50 shrink-0">
      <div className="flex items-center gap-3">
        <LogoIcon className="w-10 h-10 text-[#5B8E7D]" />
        <h1 className="text-2xl font-bold text-[#5B8E7D] tracking-wider">
          {localization.title}
        </h1>
      </div>
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 text-sm text-[#5B8E7D] border border-[#D8C9B5] rounded-full hover:bg-[#EAE2D6] transition-colors duration-200"
      >
        <TranslateIcon className="w-5 h-5" />
        <span>{localization.languageToggle}</span>
      </button>
    </header>
  );
};

export default Header;
