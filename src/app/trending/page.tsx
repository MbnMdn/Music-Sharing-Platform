import React from "react";
import SongNarrow from "@/app/ui/user/song-narrow";
import TrendingCoverImage from "@/app/ui/trending/trending-cover-image";

export default function Page() {
    return (
        <>
            <TrendingCoverImage/>



            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
            <SongNarrow edit={0} hover={1}/>
        </>
    );
}