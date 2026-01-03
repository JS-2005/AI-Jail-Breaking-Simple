"use client"
import Chatbot from '@/components/chatbot';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldGroup, Field } from "@/components/ui/field";
import { Bot } from 'lucide-react';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const [passkey, setPasskey] = useState('');
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true);
    if (passkey == 'helloworld2026') {
      router.push('protected');
    }
    else {
      alert('Invalid Passkey');
    }
    setLoading(false);
  }

  function configDisplay() {
    if (display == false) {
      setDisplay(true);
    }
    else if (display == true) {
      setDisplay(false);
    }
  }
  return (
    <div>
      <div className="flex flex-col h-screen p-4 items-center justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <div className="flex items-center justify-center">
                  <Image src="/ICON.png" alt="Logo" width={100} height={100} />
                </div>
              </Field>
              <Field>
                <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                  ALPHA INSECURE 1.0
                </h1>
              </Field>
              <Field>
                <Input type="text" placeholder="Enter Passkey" value={passkey} onChange={(e) => setPasskey(e.target.value)} />
                <Button type="submit" disabled={loading}>AUTHORIZE</Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
        {display && <Chatbot />}
      </div>
      <div className="fixed z-100 bottom-8 right-8 border border-gray-200 p-4 rounded-full bg-white hover:bg-gray-200 cursor-pointer" onClick={() => configDisplay()}>
        <Bot />
      </div>
    </div>
  );
}