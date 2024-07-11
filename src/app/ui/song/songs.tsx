import React from 'react'
import SingerCard from "@/app/ui/artists/singer-card";

import {useQuery} from "@apollo/client";
import {GET_ALL_ARTISTS, GET_ALL_TRACKS, GET_ALL_USERS, GET_ARTIST} from "@/graphql/queries";
import Link from "next/link";
import SongCard from "@/app/ui/song/song-card";

export default function Songs() {

    const {data, loading, error} = useQuery(GET_ALL_TRACKS, {
    });

    return (
        <div className="scrollable-container">
            <div
                className="grid grid-cols-2 max-[600px]:grid-cols-2 max-[768px]:grid-cols-3 min-[900px]:grid-cols-3  lg:grid-cols-4 gap-2">
                {data?.tracks.map((track: any, index: React.Key | null | undefined) => (
                    <Link
                        href={{
                            pathname: `/song/${track.id}`,
                        }}
                        key={track.id}
                    >
                        <SongCard track={track} key={index}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}


