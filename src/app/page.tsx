'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import PasswordForm from '@/components/PasswordForm';
import Message from '@/components/message';
import TypingElement from '@/components/TypingElement';

import { authenticate } from '@/utils/auth';

import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
    const router = useRouter();

    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const formHandler = (e: any) => {
        e.preventDefault();
        if (authenticate(password)) {
            router.push('/auth');
        } else {
            setShowError(true);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const status = localStorage.getItem('completed');
            if (status === 'true') {
                setShowMessage(true);
            }
        }
    }, []);

    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => {
                setShowError(false);
                setPassword('');
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [showError]);

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '80vh',
                alignItems: 'center',
            }}>
            {!showMessage && (
                <>
                    {!showError && (
                        <PasswordForm
                            password={password}
                            inputHandler={(e: any) => setPassword(e?.target?.value)}
                            formHandler={formHandler}
                        />
                    )}

                    {showError && <Message text="Access Denied" color="red" />}
                </>
            )}

            {showMessage && <TypingElement message="Seee you soon..." />}
        </main>
    );
}
