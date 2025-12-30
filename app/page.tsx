"use client";

import ChatInterface from "./components/ChatInterface";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="flex relative h-screen overflow-hidden bg-black text-green-500 font-mono">
      {/* Scanline Overlay */}
      <div className="scanline" />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Login Form (Main Section) */}
        <div className="flex items-center justify-center bg-black relative z-10 w-[60%] border-r border-green-900">
          <LoginForm />
        </div>

        {/* Right Panel - Chat Interface */}
        <div className="bg-black z-20 flex flex-col w-[40%]">
          <div className="w-full h-full flex flex-col border-l border-green-900">
            {/* Inner container */}
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
}
