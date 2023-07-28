'use client';

import { useState, useRef } from 'react';

const AudioComponent = () => {
    const audioRef = useRef(null);
    const buttonRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlayPause = () => {
        console.log('called');
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <audio autoPlay ref={audioRef} src="/themeSong.mp3" />
            <button
                style={{ padding: '5px 10px', position: 'absolute', top: '20px', right: '20px' }}
                ref={buttonRef}
                onClick={() => handleTogglePlayPause()}>
                {isPlaying ? 'Pause Music' : 'Play music'}
            </button>
        </>
    );
};

export default AudioComponent;
