import { useState } from 'react';
import { Shield, Key, Terminal } from 'lucide-react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="w-full max-w-md p-8 border border-green-500 bg-black shadow-[0_0_20px_rgba(0,255,0,0.2)] relative overflow-hidden">
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-green-500/50 pb-4">
                    <Shield className="w-8 h-8 text-green-500 animate-pulse" />
                    <div>
                        <h1 className="text-2xl font-bold text-green-500 tracking-wider uppercase font-mono">System Access</h1>
                        <p className="text-xs text-green-700 font-mono">SECURE CONNECTION ESTABLISHED</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-green-500 uppercase tracking-widest font-mono flex items-center gap-2">
                            <Key size={12} /> Access Code
                        </label>
                        <input
                            type="password"
                            placeholder="*************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black border border-green-800 text-green-500 px-4 py-3 focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all font-mono placeholder-green-900"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-green-900/20 border border-green-500 text-green-500 py-3 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] font-mono group"
                    >
                        [ AUTHENTICATE ]
                    </button>
                </form>

                <div className="flex justify-between text-[10px] text-green-800 font-mono border-t border-green-900 pt-3">
                    <span>ENCRYPTED</span>
                    <span className="animate-pulse">STATUS: ONLINE</span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
