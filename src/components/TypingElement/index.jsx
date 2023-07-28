import React, { useState, useEffect } from 'react';

const TypingElement = ({ message }) => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const messageLength = message.length - 1;

        const typingInterval = setInterval(() => {
            setTypedText(prevTypedText => prevTypedText + message[currentIndex]);
            currentIndex++;

            if (currentIndex === messageLength) {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [message]);

    return <div style={{ fontSize: '48px', textAlign: 'center' }}>{typedText}</div>;
};

export default TypingElement;
