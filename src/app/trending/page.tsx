"use client"

import React from "react";
import SongNarrow from "@/app/ui/user/song-narrow";
import TrendingCoverImage from "@/app/ui/trending/trending-cover-image";
import {useQuery} from "@apollo/client";
import {GET_TRENDING} from "@/graphql/queries";

export default function Page() {
    const {data, loading, error} = useQuery(GET_TRENDING, {
        variables: {
            "limit": 20,
        }
    });

    console.log(data);
    console.log(error)
    console.log(loading)

    return (
        <>
            <TrendingCoverImage/>
            {data?.trendingTracks.map((song: any, index: any) => (
                <SongNarrow edit={0} hover={1} song={song} key={song.id}/>
            ))}
        </>
    );
}