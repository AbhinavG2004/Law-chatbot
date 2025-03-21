
import React from 'react';
import { User, Bot } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../utils/chatData';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: ChatMessageType;
  isLast?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLast }) => {
  const isUser = message.role === 'user';
  
  return (
    <div 
      className={cn(
        "py-6 first:pt-4 transition-opacity duration-300 animate-fade-in",
        isUser ? "bg-background" : "bg-secondary/50",
        isLast && "animate-slide-up"
      )}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex gap-4 sm:gap-6">
        <div className="flex-shrink-0 mt-1">
          <div className={cn(
            "flex items-center justify-center w-7 h-7 rounded text-white",
            isUser ? "bg-black dark:bg-white dark:text-black" : "bg-[#25252d] dark:bg-[#ebebf0] dark:text-[#25252d]"
          )}>
            {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm sm:text-base leading-relaxed text-balance">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
