import { useState, useRef } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export function SendMessage() {

    const [content, setContent] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const textareaRef = useRef(null);

    const handleSubmit = () => {
        setIsDisabled(true);
        setContent('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="bg-black border-t border-green-900 p-4">
            <div className={`relative flex items-end gap-2 bg-black p-2 border border-green-800 transition-all duration-200 ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'focus-within:border-green-500 focus-within:shadow-[0_0_10px_rgba(0,255,0,0.2)]'}`}>

                {/* Prompt Symbol */}
                <div className="pb-3 text-green-500 animate-pulse">
                    <ChevronRight size={18} />
                </div>

                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="ENTER_COMMAND..."
                    className="w-full bg-transparent border-none focus:ring-0 resize-none py-3 px-1 text-green-500 placeholder-green-900 font-mono text-sm leading-relaxed max-h-[120px] outline-none"
                    rows={1}
                    disabled={isDisabled}
                />

                <button
                    onClick={handleSubmit}
                    disabled={isDisabled || content.length == 0}
                    className="p-3 bg-green-900/20 text-green-500 hover:bg-green-500 hover:text-black disabled:opacity-30 disabled:hover:bg-green-900/20 disabled:hover:text-green-500 transition-all duration-200 border border-green-500/50 hover:border-green-500"
                >
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};
