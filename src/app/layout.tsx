import type { Metadata } from 'next';
import './global.scss';
// import { Inter } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Project X',
    description: 'Welcome to Project X - Biggest event is Sushant lok',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
