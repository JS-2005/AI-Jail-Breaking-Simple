"use client";

import { useState } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import Navbar from './Navbar'

interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
}

const ChatInterface = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'ai',
            content: 'Hello! How can I help you today?'
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = async (content: string) => {
        // Add user message
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content
        };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                content: `I received your message: "${content}". This is a mock response demonstrating the chat interface.`
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex flex-col flex-1 bg-black overflow-hidden">
                <div className="flex-1 flex overflow-hidden">
                    <main className="flex-1 flex flex-col h-full relative w-full">
                        {/* Chat Area */}
                        <div className="flex-1 flex flex-col min-w-0 bg-black min-h-0">
                            <MessageList messages={messages} isTyping={isTyping} />
                            <MessageInput onSendMessage={handleSendMessage} disabled={isTyping} />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
