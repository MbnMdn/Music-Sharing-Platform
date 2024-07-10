import type {Metadata} from "next";
import {
    Bungee_Outline,
    Inter,
    Libre_Franklin,
    Montserrat,
    Nunito, Open_Sans,
    Poppins,
    Raleway,
    Rubik,
    Ubuntu
} from "next/font/google";
import "./globals.css";
import {Londrina_Outline} from '@next/font/google';
import React from "react";
import {Providers} from "@/components/Providers";
import {GlassPlayerProvider} from "@/context/glass-player-provider";


const inter = Inter({subsets: ["latin"]});
const nunito = Nunito({subsets: ["latin"]});
const montserrat = Ubuntu({subsets: ["latin"], weight:'400'});
const bungee = Bungee_Outline({subsets: ["latin"], weight: '400',});
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
        // <html lang="en" data-theme="dark">
        <html lang="en">
        <body className={`bg-neutral-900 text-gray-100 ${montserrat.className}`}>
        <Providers>
            <GlassPlayerProvider>
                {children}
            </GlassPlayerProvider>
        </Providers>
        </body>
        </html>
    );
}


