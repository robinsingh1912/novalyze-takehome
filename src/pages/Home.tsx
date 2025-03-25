'use client';

import { useState } from 'react';
import { useMediaQuery } from '../hooks/use-media-query';
import { cn } from '../lib/utils';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  hasImage?: boolean;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      sender: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: 'Can you analyze this image for me?',
      sender: 'user',
      timestamp: new Date(),
      hasImage: true,
    },
    {
      id: '3',
      content:
        'I can see this is an image of a mountain landscape with a lake. The scenery looks beautiful with snow-capped peaks reflecting in the clear water.',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I received your message. How else can I help you?',
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Main chat column */}
      <div className='flex flex-col w-full md:w-1/4 h-full border-r'>
        {/* Chat header */}
        <div className='flex items-center justify-between p-4 border-b bg-background'>
          <h2 className='text-lg font-semibold'>Chat Assistant</h2>
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label='Toggle sidebar'
            >
              {/* <Menu className='h-5 w-5' /> */}=
            </button>
          )}
        </div>

        {/* Messages container */}
        <div className='flex-1 overflow-y-auto p-4 space-y-4'>
          {messages.map((message) => (
            <>
              <div
                key={message.id}
                className={cn(
                  'flex max-w-[80%] rounded-lg p-4',
                  message.sender === 'user'
                    ? 'ml-auto bg-primary text-white'
                    : 'bg-muted'
                )}
              >
                <div>
                  <p>{message.content}</p>
                  {message.hasImage && (
                    <div className='mt-2 flex items-center text-sm'>
                      {/* <ImageIcon className='h-4 w-4 mr-1' /> */}
                      <span>Image attached</span>
                    </div>
                  )}
                </div>
              </div>
              <p className='text-xs text-center'>
                {message.timestamp.toLocaleString()}
              </p>
            </>
          ))}
        </div>

        {/* Input area */}
        <div className='border-t'>
          <div className='flex items-center space-x-2'>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Type a message...'
              className='flex-1 p-4'
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              aria-label='Send message'
              className='px-4 cursor-pointer'
            >
              send
            </button>
          </div>
        </div>
      </div>

      {/* Image preview sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 w-full dark:bg-gray-background-dark md:w-3/4 border-l transform transition-transform duration-300 ease-in-out z-10 md:relative md:translate-x-0',
          isMobile && !sidebarOpen ? 'translate-x-full' : 'translate-x-0'
        )}
      >
        {isMobile && (
          <button
            className='absolute top-4 right-4'
            onClick={() => setSidebarOpen(false)}
            aria-label='Close sidebar'
          >
            x
          </button>
        )}

        <div className='p-6 h-full flex flex-col'>
          <h2 className='text-xl font-bold mb-4'>PDF Preview</h2>
          <div className='flex-1 flex items-center justify-center bg-muted rounded-lg p-4'>
            <iframe
              src={'src/resources/sample.pdf'}
              className='h-full w-full'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </>
  );
}
