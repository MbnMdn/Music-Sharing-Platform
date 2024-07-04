"use client"

import React from "react";
import SongCard from "@/app/ui/dashboard/song-card";
import MostlyPlayed from "@/app/ui/dashboard/mostly-played";
import SongNarrow from "@/app/ui/user/song-narrow";
import TrendingSection from "@/app/ui/dashboard/trending-section";

export default function Page() {
    return (
        <div>
            <div className="flex-col space-y-16">
                <TrendingSection/>
                <div className="flex space-x-20">
                    <div className="lg:w-4/6 md:w-1/2 ">
                        <h1 className="text-4xl font-bold mb-11">Recently Played</h1>
                        <div className="h-96 overflow-y-auto scrollbar-hide">
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
                            <SongNarrow edit={0} view={0} time={0} divider={1}/>
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