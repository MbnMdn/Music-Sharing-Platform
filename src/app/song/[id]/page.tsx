"use client"

import React from "react";
import SongInfoCover from "@/app/ui/song/song-info-cover";
import CommentsSection from "@/app/ui/song/comments-section";
import {CommentDrawer} from "@/app/ui/song/comment-drawer";

export default function Page({params}: { params: { id: number } }) {
    console.log(params.id)
    return (
        <div>
            <SongInfoCover id={params.id}/>
            <CommentsSection trackId={params.id}/>
            <CommentDrawer/>
        </div>
    );
}