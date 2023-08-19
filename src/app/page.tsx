'use client';
import React from 'react';

import TypingElement from '@/components/TypingElement';

export default function Home() {
    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '80vh',
                alignItems: 'center',
            }}>
            <TypingElement message="Noo upcoming events..." />
        </main>
    );
}
