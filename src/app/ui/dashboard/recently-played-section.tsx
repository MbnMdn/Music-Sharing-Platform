import SongNarrow from "@/app/ui/user/song-narrow";
import React from "react";

export default function RecentlyPlayedSection(){
    return (
        <div className="lg:w-4/6 ">
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
    );
}