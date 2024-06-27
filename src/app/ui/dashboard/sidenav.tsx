import NavLinks from '@/app/ui/dashboard/nav-links';
import React from "react";
import SearchBar from "@/app/ui/dashboard/search-bar";
import GlassPlayer from "@/app/ui/dashboard/glass-player";
import MusicPlayer from "@/app/ui/dashboard/music-player";
import Play from "@/app/ui/dashboard/play";


export default function SideNav() {
    return (
        <div>
            <div className="">

                <div className="flex h-full flex-col px-3 py-4 md:px-4">
                    <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1">
                        <SearchBar/>
                        <NavLinks/>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <div className="hidden h-auto w-full rounded-md md:block "><GlassPlayer/></div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
