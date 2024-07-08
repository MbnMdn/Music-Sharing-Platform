import React from 'react'
import SingerCard from "@/app/ui/artists/singer-card";

import MusicPic from "@/app/ui/dashboard/assets/music-pic.jpg";
import {useQuery} from "@apollo/client";
import {GET_ALL_ARTISTS, GET_ARTIST} from "@/graphql/queries";
import Link from "next/link";
import SongCard from "@/app/ui/dashboard/song-card";

// const artists = [
//     {
//         artist: 'Taylor Swift',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Eminem',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'PSY',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Justin Bieber',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'The weekend',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Taylor Swift',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Eminem',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'PSY',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Justin Bieber',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'The weekend',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Taylor Swift',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Eminem',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'PSY',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Justin Bieber',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'The weekend',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Taylor Swift',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Eminem',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'PSY',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'Justin Bieber',
//         pic: {MusicPic},
//     },
//     {
//         artist: 'The weekend',
//         pic: {MusicPic},
//     },
// ]

export default function Singers() {

    const {data, loading, error} = useQuery(GET_ALL_ARTISTS, {
    });

    return (
        <div className="scrollable-container">
            <div
                className="grid grid-cols-2 max-[600px]:grid-cols-2 max-[768px]:grid-cols-3 min-[900px]:grid-cols-3  lg:grid-cols-4 gap-2">
                {data?.artists.map((artist: any, index: React.Key | null | undefined) => (
                    <Link
                        href={{
                            pathname: `artist/${artist.id}`,
                        }}
                        key={artist.id}
                    >
                        <SingerCard artist={artist} key={index}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}


