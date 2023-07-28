'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import PasswordForm from '@/components/PasswordForm';
import Message from '@/components/message';

import { authenticate } from '@/utils/auth';

export default function Home() {
    const router = useRouter();

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
            {!showError && (
                <PasswordForm
                    password={password}
                    inputHandler={(e: any) => setPassword(e?.target?.value)}
                    formHandler={formHandler}
                />
            )}

            {showError && <Message text="Access Denied" color="red" />}
        </main>
    );
}
