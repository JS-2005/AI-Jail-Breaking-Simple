"use client"
import { Terminal } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="flex items-center gap-3 px-6 py-4 bg-black border-b border-green-500/30 sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,255,0,0.05)]">
            <div className="p-1.5 border border-green-500 bg-green-900/10">
                <Terminal className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg text-green-500 tracking-widest font-mono uppercase leading-none">TERMINAL_LINK</span>
                <span className="text-[10px] text-green-800 font-mono tracking-[0.2em] uppercase">Encrypted Connection</span>
            </div>
        </div>
    );
};

export default Navbar;
