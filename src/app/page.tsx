'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Input from './components/Input';
import { authenticate } from '@/utils/auth';
// import  from './components/Button';

export default function Home() {
    const [password, setPassword] = useState('');

    const formHandler = e => {
        e.preventDefault();
        if (authenticate(password)) {
            router.push('/auth');
        } else {
            // handle login error
        }
    };

    const router = useRouter();

    return (
        <main>
            <Input password={password} inputHandler={e => setPassword(e?.target?.value)} formHandler={formHandler} />
        </main>
    );
}
