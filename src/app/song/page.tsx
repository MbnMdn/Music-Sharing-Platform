"use client"

import React from "react";
import SongInfoCover from "@/app/ui/song/song-info-cover";
import CommentsSection from "@/app/ui/song/comments-section";

export default function Page() {
    return (
        <div>
            <SongInfoCover/>
            <CommentsSection/>
        </div>
    );
}