import LyricsDrawer from "@/app/ui/song/lyrics-drawer";
import React from "react";
import EyeIcon from "@/app/ui/icons/eye-icon";


export default function SongDetails({song}: { song: any }) {
    return (
        <div
            className="flex flex-col md:flex-row lg:flex-row gap-1 lg:gap-2 md:items-end lg:items-end">
            <div className="desktop-only">
                <LyricsDrawer/>
            </div>
            <div className="hidden md:block lg:block">&bull;</div>
            <p className="text-xs lg:text-sm font-semibold">Album: {song.album}</p>
            <div className="hidden md:block lg:block">&bull;</div>
            <p className="text-xs lg:text-sm font-semibold">Released: {song.release_year}</p>
            <div className="hidden md:block lg:block">&bull;</div>
            <p className="text-xs lg:text-sm font-semibold">Genre: {song.genre}</p>
            <div className="hidden md:block lg:block">&bull;</div>
            <p className="text-xs lg:text-sm font-semibold">Upload: {song.uploaded_by}</p>
            <p className="mobile-only text-xs lg:text-sm font-semibold">Views: {song.views}</p>
            <p className="mobile-only text-xs lg:text-sm font-semibold">Likes: {song.likes}</p>
            <p className="mobile-only text-xs lg:text-sm font-semibold">Comments: {song.comments}</p>
        </div>
    );
}