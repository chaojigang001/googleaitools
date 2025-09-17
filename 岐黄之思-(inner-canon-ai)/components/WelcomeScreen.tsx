
import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface WelcomeScreenProps {
  localization: {
    welcomeTitle: string;
    welcomeSubtitle: string;
    exampleQuery: string;
    exampleButton: string;
  };
  onExampleClick: (query: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ localization, onExampleClick }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center p-8">
      <LogoIcon className="w-20 h-20 text-[#5B8E7D] mb-6" />
      <h2 className="text-3xl font-bold text-[#3a3a3a] mb-2">{localization.welcomeTitle}</h2>
      <p className="text-lg text-gray-500 max-w-2xl mb-10">{localization.welcomeSubtitle}</p>
      
      <div className="w-full max-w-2xl text-left p-6 bg-white border border-[#EAE2D6] rounded-xl shadow-sm">
        <p className="text-gray-600 mb-4">{localization.exampleQuery}</p>
        <button
          onClick={() => onExampleClick(localization.exampleQuery)}
          className="w-full px-4 py-2 bg-[#5B8E7D] text-white rounded-lg hover:bg-[#4a7a6b] transition-colors duration-200"
        >
          {localization.exampleButton}
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
