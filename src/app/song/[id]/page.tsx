"use client"

import React from "react";
import SongInfoCover from "@/app/ui/song/song-info-cover";
import CommentsSection from "@/app/ui/song/comments-section";

export default function Page({params}: { params: { id: number } }) {
    console.log(params.id)
    return (
        <div>
            <SongInfoCover id={params.id}/>
            <CommentsSection/>
        </div>
    );
}