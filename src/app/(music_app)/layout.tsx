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
import "../globals.css";
import {Londrina_Outline} from '@next/font/google';
import React from "react";
import {Providers} from "@/components/Providers";
import {GlassPlayerProvider} from "@/context/glass-player-provider";
import SideNav from "@/app/ui/dashboard/sidenav";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import SearchBar from "@/app/ui/dashboard/search-bar";


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
                <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-60 mr-4 md:mt-5">
                        <SideNav/>
                    </div>
                    <div className="flex-grow p-6 overflow-y-auto md:p-11">
                        <div className="flex space-x-20 justify-between">
                            <Breadcrumbs/>
                            <SearchBar/>
                        </div>
                        {children}
                    </div>
                </div>
            </GlassPlayerProvider>
        </Providers>
        </body>
        </html>
    );
}


