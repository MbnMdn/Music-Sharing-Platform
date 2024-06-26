'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import React from "react";
import MusicPlayer from "@/app/ui/dashboard/music-player";
import Play from "@/app/ui/dashboard/play";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-11">{children}</div>
        </div>
    );
}