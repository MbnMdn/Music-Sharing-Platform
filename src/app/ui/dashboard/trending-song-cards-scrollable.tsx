'use client'

import React from "react";
import SongCard from "@/app/ui/dashboard/song-card";
import {useQuery} from "@apollo/client";
import {GET_TRENDING} from "@/graphql/queries";
import Link from 'next/link'


export default function TrendingSongCardsScrollable() {
    const {data, loading, error} = useQuery(GET_TRENDING, {
        variables: {
            "limit": 10,
        }
    });

    console.log(data);
    console.log(error)
    console.log(loading)


    // const songs = [
    //     {
    //         song_name : 'Red',
    //         artists: 'Taylor Swift',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'MockingBird',
    //         artists: 'Eminem',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'Champion',
    //         artists: 'PSY',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'Despacito',
    //         artists: 'Justin Bieber',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'Blinding Lights',
    //         artists: 'The weekend',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'Red',
    //         artists: 'Taylor Swift',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'MockingBird',
    //         artists: 'Eminem',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'Champion',
    //         artists: 'PSY',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'Despacito',
    //         artists: 'Justin Bieber',
    //         pic: {MusicPic},
    //     },
    //     {
    //         song_name : 'Blinding Lights',
    //         artists: 'The weekend',
    //         pic: {MusicPic},
    //     },
    //
    // ];

    return (
        <div className="scrollable-container">
            <div className="flex overflow-x-auto scrollbar-hide">
                {data?.trendingTracks.map((song: any, index: any) => (
                    <Link
                        href={{
                            pathname: `song/${song.id}`,
                        }}
                        key={song.id}
                    >
                        <SongCard song={song} key={song.id}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}
