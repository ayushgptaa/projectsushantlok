import './global.scss';

import AudioComponent from '@/components/AudioComponent';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Project Sushant Lok - The Biggest Party in Sushant Lok</title>
                <meta name="title" content="Project Sushant Lok - Be a part of the greatness" />
                <meta
                    name="description"
                    content="C318, Block C, Sushant Lok phase 1, near Fauji Market, Sector 43, Gurgaon."
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Project Sushant Lok - Be a part of the greatness" />
                <meta
                    property="og:description"
                    content="C318, Block C, Sushant Lok phase 1, near Fauji Market, Sector 43, Gurgaon."
                />
                <meta property="og:image" content="https://projectsushantlok.site/metaImage.png" />

                <meta property="twitter:card" content="https://projectsushantlok.site/metaImage.png" />
                <meta property="twitter:title" content="Project Sushant Lok - Be a part of the greatness" />
                <meta
                    property="twitter:description"
                    content="C318, Block C, Sushant Lok phase 1, near Fauji Market, Sector 43, Gurgaon."
                />
                <meta property="twitter:image" content="https://projectsushantlok.site/metaImage.png" />
            </head>
            <body>
                {children}

                <AudioComponent />
            </body>
        </html>
    );
}
