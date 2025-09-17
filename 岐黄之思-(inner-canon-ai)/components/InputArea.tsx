
import React, { useState, useRef, useEffect } from 'react';
import { SendIcon } from './icons/SendIcon';

interface InputAreaProps {
  onSend: (text: string) => void;
  isLoading: boolean;
  localization: {
    inputPlaceholder: string;
    sendButton: string;
    loading: string;
  };
}

const InputArea: React.FC<InputAreaProps> = ({ onSend, isLoading, localization }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSendClick = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };
  
  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="shrink-0 p-4 border-t border-[#D8C9B5]/50">
      <div className="flex items-end gap-3 bg-white border border-[#D8C9B5] rounded-xl p-2 shadow-sm">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={localization.inputPlaceholder}
          className="flex-grow bg-transparent focus:outline-none resize-none max-h-40 p-2 text-base"
          rows={1}
          disabled={isLoading}
        />
        <button
          onClick={handleSendClick}
          disabled={isLoading || !text.trim()}
          className="w-10 h-10 flex items-center justify-center bg-[#5B8E7D] text-white rounded-lg disabled:bg-[#A8BDBA] disabled:cursor-not-allowed hover:bg-[#4a7a6b] transition-colors duration-200"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <SendIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputArea;
