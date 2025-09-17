
import React, { useRef, useEffect } from 'react';
import { Message } from '../types';
import MessageBubble from './MessageBubble';

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-6">
      {messages.map((msg, index) => (
        <MessageBubble key={`${msg.id}-${index}`} message={msg} />
      ))}
    </div>
  );
};

export default ChatWindow;
