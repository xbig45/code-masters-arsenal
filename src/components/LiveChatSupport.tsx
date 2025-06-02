
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, X, User, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const LiveChatSupport: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to CodeForge Academy. How can I help you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulate support response
    setTimeout(() => {
      const supportResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message. A support specialist will respond shortly. In the meantime, feel free to browse our course catalog or check our FAQ section.",
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-80 bg-slate-900 border-slate-700 text-white">
          <SheetHeader className="border-b border-slate-700 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <SheetTitle className="text-white text-left">Live Support</SheetTitle>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`} />
                    <span className="text-xs text-slate-300">
                      {isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SheetHeader>

          {/* Chat Messages */}
          <div className="flex flex-col h-96 mt-4">
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white ml-4'
                        : 'bg-slate-700 text-slate-100 mr-4'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {message.sender === 'support' ? (
                        <Bot className="h-3 w-3" />
                      ) : (
                        <User className="h-3 w-3" />
                      )}
                      <span className="text-xs opacity-70">
                        {message.sender === 'support' ? 'Support' : 'You'}
                      </span>
                    </div>
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-50">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t border-slate-700 pt-4 mt-4">
              <div className="flex space-x-2">
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-800 border-slate-600 text-white placeholder-slate-400 resize-none h-12"
                  rows={1}
                />
                <Button
                  onClick={sendMessage}
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700 h-12 w-12"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Average response time: 2-3 minutes
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default LiveChatSupport;
