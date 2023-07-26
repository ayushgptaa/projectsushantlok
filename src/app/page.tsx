'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';
import Message from '@/components/message';

import { authenticate } from '@/utils/auth';

export default function Home() {
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const formHandler = (e: any) => {
        e.preventDefault();
        if (authenticate(password)) {
            router.push('/auth');
        } else {
            setShowError(true);
        }
    };

    useEffect(() => {
        if (showError) {
            setTimeout(() => {
                setShowError(false);
                setPassword('');
            }, 4000);
        }
    }, [showError]);

    const router = useRouter();

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100%',
                alignItems: 'center',
            }}>
            {!showError && (
                <Input
                    password={password}
                    inputHandler={(e: any) => setPassword(e?.target?.value)}
                    formHandler={formHandler}
                />
            )}

            {showError && <Message text="Access Denied" color="red" />}
        </main>
    );
}
