import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import MusicPlayer from "@/app/ui/dashboard/music-player";
import {Button} from '@nextui-org/button';
import Play from "@/app/ui/dashboard/play";
import {Input} from "@nextui-org/react";
import {Search} from "@/app/ui/dashboard/search";
import React from "react";
import SearchBar from "@/app/ui/dashboard/search-bar";

// import AcmeLogo from '@/app/ui/acme-logo';
// import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
    return (
        <div className="card w-56 glass">

        <div className="flex h-full flex-col px-3 py-4 md:px-4">
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1">
                <SearchBar/>
                <NavLinks />
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <div className="hidden h-auto w-full rounded-md md:block "><Play/></div>
            </div>
        </div>
        </div>

    );
}
