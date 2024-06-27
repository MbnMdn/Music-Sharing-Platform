"use client"

import React from "react";
import SongCard from "@/app/ui/dashboard/song-card";
import MostlyPlayed from "@/app/ui/dashboard/mostly-played";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs"
// import {AcmeLogo} from "./AcmeLogo.jsx";
import {Divider} from "@nextui-org/react";
import SongNarrow from "@/app/ui/user/song-narrow";
import SearchBar from "@/app/ui/dashboard/search-bar";


export default function Page() {

    return (
        <div>
            <div className="flex space-x-20 justify-between">
                <Breadcrumbs/>
                <SearchBar/>
            </div>
            <div className="flex-col space-y-16">
                <SongCard/>
                <div className="flex space-x-20">
                    <div className="lg:w-4/6 md:w-1/2 ">
                        <h1 className="text-4xl font-bold mb-11">Recently Played</h1>
                        <div className="h-96 overflow-y-auto scrollbar-hide">
                            <SongNarrow/>
                            <Divider className="my-0.5 dark"/>
                            <SongNarrow/>
                            <Divider className="my-0.5 dark"/>
                            <SongNarrow/>
                            <Divider className="my-0.5 dark"/>
                            <SongNarrow/>
                            <Divider className="my-0.5 dark"/>
                            <SongNarrow/>
                            <Divider className="my-0.5 dark"/>
                            <SongNarrow/>
                            <Divider className="my-0.5 dark"/>
                            <SongNarrow/>
                        </div>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 flex-none ">
                        <MostlyPlayed/>
                    </div>
                </div>
            </div>
        </div>
    );
}