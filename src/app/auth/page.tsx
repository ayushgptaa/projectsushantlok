'use client';

import { useState, useEffect } from 'react';

import Message from '@/components/message';
import MainForm from '@/components/MainForm';
import Loader from '@/components/Loader';
import withAuth from '@/hoc/withAuth';

import styles from './index.module.scss';

function Auth() {
    const [showMessage, setShowMessage] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    useEffect(() => {
        // Simulate loading progress
        if (!showMessage) {
            const interval = setInterval(() => {
                setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
            }, 500);

            return () => clearInterval(interval);
        }
    }, [showMessage]);

    return (
        <section suppressHydrationWarning>
            {showMessage && (
                <div className={styles.message}>
                    <Message text="Access granted" color="#00ff19" />
                </div>
            )}

            {!showMessage && progress !== 100 && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '80vh',
                        alignItems: 'center',
                    }}>
                    <Loader percentage={progress} />
                </div>
            )}

            {!showMessage && progress === 100 && <MainForm />}
        </section>
    );
}

export default withAuth(Auth);
