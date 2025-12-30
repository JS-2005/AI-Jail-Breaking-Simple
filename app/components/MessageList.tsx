import { useRef, useEffect } from 'react';

interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
}

interface MessageListProps {
    messages: Message[];
    isTyping: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-black text-green-500 font-mono min-h-0">
            {/* Terminal Header Info */}
            <div className="text-xs text-green-800 mb-4 border-b border-green-900 pb-2">
                &gt; INITIALIZING ENCRYPTED UPLINK... <br />
                &gt; CONNECTION SECURE. <br />
                &gt; BEGIN TRANSMISSION.
            </div>

            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex flex-col mb-4 ${message.role === 'user' ? 'items-end' : 'items-start'
                        }`}
                >
                    <div className={`max-w-[85%] break-words ${message.role === 'user' ? 'text-right' : 'text-left'
                        }`}>
                        <span className="text-xs font-bold opacity-50 block mb-1">
                            [{message.role === 'user' ? 'OPERATOR' : 'SYSTEM_AI'}]_
                        </span>
                        <div className={`text-sm md:text-base leading-relaxed p-2 border-l-2 ${message.role === 'user'
                            ? 'border-green-500 bg-green-900/10'
                            : 'border-green-700 bg-black pl-3'
                            }`}>
                            <span className="mr-2 text-green-700">&gt;</span>
                            {message.content}
                        </div>
                    </div>
                </div>
            ))}

            {isTyping && (
                <div className="flex items-center gap-2 text-green-500 animate-pulse">
                    <span className="text-xs font-bold">[SYSTEM_AI]</span>
                    <span className="w-2 h-4 bg-green-500 block animate-blink"></span>
                    <span className="text-xs">PROCESSING DATA...</span>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;
