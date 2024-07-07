"use client"

import React from "react";
import SongInfoCover from "@/app/ui/song/song-info-cover";
import CommentsSection from "@/app/ui/song/comments-section";
import {param} from "ts-interface-checker";

export default function Page({params}: {params : {id: number}}) {
    console.log(params.id)
    return (
        <div>
            <p>{params.id}</p>

            {/*<SongInfoCover/>*/}
            {/*<CommentsSection/>*/}
        </div>
    );
}