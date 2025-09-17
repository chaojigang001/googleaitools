import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Message, Role } from '../types';
import { UserIcon } from './icons/UserIcon';
import { LogoIcon } from './icons/LogoIcon';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === Role.USER;
  const isError = message.isError ?? false;

  const contentWithCustomFont = message.text
    .replace(/<font face="仿宋">/g, '<span class="font-fangsong">')
    .replace(/<\/font>/g, '</span>');

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 flex-shrink-0 bg-[#EAE2D6] rounded-full flex items-center justify-center">
            <LogoIcon className="w-5 h-5 text-[#5B8E7D]" />
        </div>
      )}
      
      <div 
        className={`max-w-xl px-5 py-3 rounded-2xl ${
          isUser
            ? 'bg-[#5B8E7D] text-white rounded-br-lg'
            : 'bg-white text-[#3a3a3a] border border-[#EAE2D6] rounded-bl-lg'
        } ${isError ? 'bg-red-100 text-red-700 border-red-200' : ''}`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.text}</p>
        ) : (
          <div className="prose prose-xl max-w-none text-inherit leading-relaxed">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                em: ({node, ...props}) => <em className="italic" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[#A8BDBA] bg-[#F1F5F4] pl-4 pr-2 my-2 py-2 rounded-r-md" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-2 space-y-1" {...props} />,
                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                h1: ({node, ...props}) => <h1 className="text-xl font-bold my-3" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-lg font-bold my-2" {...props} />,
                hr: ({node, ...props}) => <hr className="my-4 border-t border-[#D8C9B5]" {...props} />,
              }}
            >
              {contentWithCustomFont}
            </ReactMarkdown>
            {message.text.length === 0 && <div className="dot-flashing"></div>}
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 flex-shrink-0 bg-[#5B8E7D] rounded-full flex items-center justify-center">
            <UserIcon className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;