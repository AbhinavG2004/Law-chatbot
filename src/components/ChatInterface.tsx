
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatMessage as ChatMessageType, getSampleResponses, getInitialMessages, getSampleQuestions } from '../utils/chatData';
import ChatMessage from './ChatMessage';
import { cn } from '@/lib/utils';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>(getInitialMessages);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [suggestions] = useState<string[]>(getSampleQuestions());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() && !isLoading) return;
    
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const assistantMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getSampleResponses(userMessage.content),
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-72px)]">
      <div className="flex-1 overflow-y-auto thin-scrollbar">
        <div className="pb-32">
          {messages.map((message, index) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              isLast={index === messages.length - 1} 
            />
          ))}
          
          {isLoading && (
            <div className="py-6 bg-secondary/50 animate-fade-in">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-7 h-7 rounded bg-[#25252d] text-white dark:bg-[#ebebf0] dark:text-[#25252d]">
                    <Bot className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex gap-1.5 mt-1">
                  <div className="w-2 h-2 rounded-full bg-foreground/25 animate-typing-indicator" style={{ animationDelay: "0s" }}></div>
                  <div className="w-2 h-2 rounded-full bg-foreground/25 animate-typing-indicator" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 rounded-full bg-foreground/25 animate-typing-indicator" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Suggestions */}
      {messages.length <= 1 && !isLoading && (
        <div className="fixed bottom-28 inset-x-0 px-4 sm:px-6 md:px-8 z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>EXAMPLE QUESTIONS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="text-left p-3 text-sm border border-border rounded-lg hover:bg-secondary/50 transition-colors truncate animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Input Area */}
      <div className="fixed inset-x-0 bottom-0 bg-background border-t border-black/5 dark:border-white/5 p-4 sm:p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                className="w-full resize-none border rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-foreground text-sm min-h-[56px] max-h-[200px] transition-all bg-background text-foreground"
                placeholder="Ask about Indian law..."
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ height: Math.min(200, Math.max(56, (input.split('\n').length * 24) + 32)) + 'px' }}
              />
              <Button
                className={cn(
                  "absolute right-2 bottom-2 size-8 p-0 rounded-full bg-foreground text-background hover:bg-foreground/90",
                  !input.trim() && "opacity-60 cursor-not-allowed"
                )}
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowUp className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="mt-2 text-center text-xs text-muted-foreground">
            Smart Analyser provides Indian legal information and guidance. Consult a qualified advocate for specific legal advice.
          </div>
        </div>
      </div>
    </div>
  );
};

interface BotProps {
  className?: string;
}

const Bot: React.FC<BotProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn("w-4 h-4", className)}
    >
      <rect width="18" height="10" x="3" y="11" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" x2="8" y1="16" y2="16" />
      <line x1="16" x2="16" y1="16" y2="16" />
    </svg>
  );
};

export default ChatInterface;
