
import React, { useState, useRef, useEffect } from 'react';
import { getTcmResponseStream } from './services/geminiService';
import { LOCALIZATION_TEXT, SYSTEM_PROMPT_PREFIX, SYSTEM_PROMPT_EXAMPLE } from './constants';
import { Language, Message, Role } from './types';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import InputArea from './components/InputArea';
import WelcomeScreen from './components/WelcomeScreen';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.ZH);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async (inputText: string) => {
    if (!inputText.trim() || isLoading) return;

    const newUserMessage: Message = {
      id: Date.now(),
      role: Role.USER,
      text: inputText,
    };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null);

    const aiResponseId = Date.now() + 1;
    const newAiMessage: Message = {
      id: aiResponseId,
      role: Role.AI,
      text: '',
    };
    setMessages(prev => [...prev, newAiMessage]);

    try {
      const fullPrompt = `${SYSTEM_PROMPT_PREFIX}\n\n${SYSTEM_PROMPT_EXAMPLE}\n\n用户输入:\n“${inputText}”`;
      
      const stream = await getTcmResponseStream(fullPrompt);

      for await (const chunk of stream) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === aiResponseId
              ? { ...msg, text: msg.text + chunk.text }
              : msg
          )
        );
      }
    } catch (err) {
      console.error("Error fetching AI response:", err);
      const errorMessage = (err as Error).message || LOCALIZATION_TEXT[language].errorMessage;
      setError(errorMessage);
       setMessages(prev =>
          prev.map(msg =>
            msg.id === aiResponseId
              ? { ...msg, text: LOCALIZATION_TEXT[language].errorMessage, isError: true }
              : msg
          )
        );
    } finally {
      setIsLoading(false);
    }
  };

  const currentLocalization = LOCALIZATION_TEXT[language];

  return (
    <div className="bg-[#FBF9F4] min-h-screen flex flex-col items-center text-[#3a3a3a] font-serif transition-colors duration-300">
      <div className="w-full max-w-4xl flex flex-col h-screen p-4">
        <Header language={language} setLanguage={setLanguage} localization={currentLocalization} />
        {messages.length === 0 ? (
          <WelcomeScreen localization={currentLocalization} onExampleClick={handleSend} />
        ) : (
          <ChatWindow messages={messages} />
        )}
        <InputArea onSend={handleSend} isLoading={isLoading} localization={currentLocalization} />
        {error && <p className="text-center text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default App;
