'use client';

import { useState, useEffect } from 'react';

import Message from '@/components/message';
import MainForm from '@/components/MainForm';
import withAuth from '@/hoc/withAuth';

import styles from './index.module.scss';

function Auth() {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    return (
        <section suppressHydrationWarning>
            {showMessage && (
                <div className={styles.message}>
                    <Message text="Access granted" color="#00ff19" />
                </div>
            )}
            {!showMessage && <MainForm />}

            <MainForm />
        </section>
    );
}

export default withAuth(Auth);
