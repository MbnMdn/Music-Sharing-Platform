import SongNarrow from "@/app/ui/user/song-narrow";
import React from "react";
import {useQuery} from "@apollo/client";
import {GET_RECENTLY_PLAYED, GET_TRENDING} from "@/graphql/queries";
import Link from "next/link";
import SongCard from "@/app/ui/dashboard/song-card";
import {useSession} from "next-auth/react";

export default function RecentlyPlayedSection(){
    const session = useSession();

    const {data, loading, error} = useQuery(GET_RECENTLY_PLAYED, {
    });

    return (
        <div className="lg:w-4/6 ">
            <h1 className="text-4xl font-bold mb-11">Recently Played</h1>
            <div className="h-96 overflow-y-auto scrollbar-hide">
                {data?.getRecentlyViewedSongs.map((song: any, index: number) => (
                    <SongNarrow edit={0} song={song} key={song.id} index={index} song_id={song.id}/>
                ))}
            </div>
        </div>
    );
}