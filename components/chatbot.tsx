"use client"
import { useState, useRef } from 'react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from './ui/input-group';
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export default function Chatbot() {
    const [response, setResponse] = useState('Alpha Insecure Assistant is ready to help');
    const [loading, setLoading] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    async function generate(e: any) {
        e.preventDefault();
        setLoading(true);
        const prompt = e.target.prompt.value;
        const res = await fetch('/api/gemini', {
            method: 'POST',
            body: JSON.stringify({ prompt }),
        });
        const data = await res.json();
        setResponse(data.message);
        setLoading(false);
    }

    return (
        <div className="fixed w-full max-w-sm">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-center p-8" >
                        <Image src="/ai-assistant.png" alt="Logo" width={100} height={100} />
                    </div>
                    <CardTitle>Alpha Insecure Assistant</CardTitle>
                    <CardDescription>AI that manage Alpha Insecure 1.0</CardDescription>
                </CardHeader>
                <CardContent>
                    <Card className='bg-gray-200'>
                        <CardContent>
                            <blockquote className="border-l-2 italic">
                                {response}
                            </blockquote>
                        </CardContent>
                    </Card>
                </CardContent>
                <CardFooter>
                    <form onSubmit={generate} className="w-full">
                        <InputGroup>
                            <InputGroupTextarea placeholder="Ask Somethings..." id="prompt" name="prompt" />
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton
                                    variant="default"
                                    className="rounded-full"
                                    size="icon-xs"
                                    type="submit"
                                    disabled={loading}
                                >
                                    <ArrowRightIcon />
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
}