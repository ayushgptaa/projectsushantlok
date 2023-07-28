// import type { Metadata } from 'next';
import './global.scss';
// import { Inter } from 'next/font/google';

// export const metadata: Metadata = {
//     title: 'Project Sushant Lok',
//     description: 'Welcome to Project Sushant Lok - Biggest event is Sushant lok',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Project Sushant Lok - The Biggest Party in Sushant Lok</title>
                <meta name="title" content="Project Sushant Lok - The Biggest Party in Sushant Lok" />
                <meta
                    name="description"
                    content="C318, Block C, Sushant Lok phase 1, near Fauji Market, Sector 43, Gurgaon."
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Project Sushant Lok - The Biggest Party in Sushant Lok" />
                <meta
                    property="og:description"
                    content="C318, Block C, Sushant Lok phase 1, near Fauji Market, Sector 43, Gurgaon."
                />
                <meta property="og:image" content="/janeesh.jpg" />

                <meta property="twitter:card" content="/janeesh.jpg" />
                <meta property="twitter:title" content="Project Sushant Lok - The Biggest Party in Sushant Lok" />
                <meta
                    property="twitter:description"
                    content="C318, Block C, Sushant Lok phase 1, near Fauji Market, Sector 43, Gurgaon."
                />
                <meta property="twitter:image" content="/janeesh.jpg" />
            </head>
            <body>{children}</body>
        </html>
    );
}
