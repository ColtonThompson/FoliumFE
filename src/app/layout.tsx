import type {Metadata} from "next";
import {PrimeReactProvider} from 'primereact/api';
import localFont from "next/font/local";
import "@/app/style/globals.css";

const geistSans = localFont({
    src: "./style/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./style/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    keywords: "",
    description: "FoliumFE developed by Nightleaf",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <PrimeReactProvider>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
            </body>
        </PrimeReactProvider>
        </html>
    );
}
