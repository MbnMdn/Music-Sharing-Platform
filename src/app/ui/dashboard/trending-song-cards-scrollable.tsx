'use client'

import React from "react";
import SongCard from "@/app/ui/dashboard/song-card";
import { useQuery } from "@apollo/client";
import { GET_TRENDING } from "@/graphql/queries";
import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"


export default function TrendingSongCardsScrollable() {
    const { data, loading, error } = useQuery(GET_TRENDING, {
        variables: {
            "limit": 10,
        }
    });

    const placeholderArray = new Array(10).fill(null);

    return (
        <div className="scrollable-container">
            <div className="flex overflow-x-auto scrollbar-hide">
                {loading ? (
                    placeholderArray.map((_, index) => (
                        <div key={index} >
                            <div data-theme="halloween" className="flex w-40 flex-col gap-4 bg-neutral-900  mr-4 md:mr-8 lg:mr-12 ">
                                <div className="skeleton rounded-md h-40 w-full"></div>
                                <div className="skeleton  h-4 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    data?.trendingTracks.map((song: any) => (
                        <Link
                            href={{
                                pathname: `song/${song.id}`,
                            }}
                            key={song.id}
                        >
                            <SongCard song={song} key={song.id} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
