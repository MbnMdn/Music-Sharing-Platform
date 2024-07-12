import LyricsDrawer from "@/app/ui/song/lyrics-drawer";
import React from "react";


export default function SongDetails({data}: { data: any }) {
    const date = data?.track.created_at.split(' ')[0];

    return (
        <div
            className="flex flex-col md:flex-row lg:flex-row gap-1 lg:gap-2 md:items-end lg:items-start">
            <div className="desktop-only">
                <LyricsDrawer/>
            </div>
            <div className="hidden md:block lg:block">&bull;</div>
            <p className="text-xs lg:text-sm font-semibold">Released: {date}</p>
            <div className="hidden md:block lg:block">&bull;</div>
            {/*<p className="text-xs lg:text-sm font-semibold">Genre:  {data?.track.genres.name}</p>*/}
            {/*<div className="hidden md:block lg:block">&bull;</div>*/}
            <p className="text-xs lg:text-sm font-semibold">Upload: {data?.track.uploader.name}</p>
            <p className="mobile-only text-xs lg:text-sm font-semibold">Views: {data?.track.viewCount}</p>
            <p className="mobile-only text-xs lg:text-sm font-semibold">Likes: {data?.track.likeCount}</p>
            {/*<p className="mobile-only text-xs lg:text-sm font-semibold">Comments: {data?.track.comments}</p>*/}
        </div>
    );
}