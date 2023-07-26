'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Input from '../components/Input';

import { authenticate } from '@/utils/auth';

export default function Home() {
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const formHandler = e => {
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
        <main>
            {!showError && (
                <Input
                    password={password}
                    inputHandler={e => setPassword(e?.target?.value)}
                    formHandler={formHandler}
                />
            )}
            {showError && <p>Access Denited</p>}
        </main>
    );
}
