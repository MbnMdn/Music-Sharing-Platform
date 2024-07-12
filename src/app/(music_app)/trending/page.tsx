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

    const placeholderArray = new Array(20).fill(null);

    return (
        <>
            <TrendingCoverImage/>
            {loading ? (
                    placeholderArray.map((_, index) => (
                        <div data-theme="halloween" key={index} className="p-4 my-2 bg-transparent">
                            <div className="flex gap-8 bg-neutral-900 ">
                                <div className="skeleton  h-12 w-28 "></div>
                                <div className="flex flex-row  w-full justify-between content-between gap-7">
                                    <div className="flex flex-col gap-3 mt-2">
                                        <div className="skeleton rounded-md h-3 w-40"></div>
                                        <div className="skeleton rounded-md h-3 w-28"></div>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="skeleton rounded-md h-3 w-16"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
                :
                data?.trendingTracks.map((song: any, index: any) => (
                    <SongNarrow edit={0} index={index} hover={1} song={song} key={song.id} song_id={song.id}/>
                ))}
        </>
    );
}