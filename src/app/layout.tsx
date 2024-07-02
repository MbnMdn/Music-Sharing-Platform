import type {Metadata} from "next";
import {Bungee_Outline, Inter, Nunito} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { Londrina_Outline } from '@next/font/google';
import React from "react";



const inter = Inter({subsets: ["latin"]});
const nunito = Nunito({subsets: ["latin"]});
const bungee = Bungee_Outline({subsets: ["latin"],weight: '400',});
const londrina = Londrina_Outline({
    subsets: ['latin'], // Specify the subsets you want to include
    weight: '400', // Specify the font weight if needed
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="dark">
        <body className={`bg-neutral-900 text-gray-100 ${inter.className}`}>
            {children}
        </body>
        </html>
    );
}


