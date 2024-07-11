import Image from "next/image";
import MusicPic from "@/app/ui/assets/music-pic.jpg";

import React from "react";
import LyricsDrawer from "@/app/ui/song/lyrics-drawer";
import {useMediaQuery} from "@react-hook/media-query";
import SongDetails from "@/app/ui/song/song-details";
import {useQuery} from "@apollo/client";
import {GET_SONG, GET_TRENDING} from "@/graphql/queries";
import {getMediaPath} from "@/app/utilities/getMediaPath";



const song = {
    id: 1,
    cover: {MusicPic},
    name: 'Mockingbird',
    singer: 'Eminem',
    // album: 'blah',
    lyrics: 'hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor',
    release_year: '2002',
    genre: 'genre',
    uploaded_by: 'Erfan',
    likes: 123,
    comments: 12,
    views: 140,
};

export default function SongInfoCover({id}: { id: number }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")


    const {data, loading, error} = useQuery(GET_SONG, {
        variables: {
            "song_id": id,
        },
    });


    const substring = "http";


    return (
        <div>
            <div className="songCover relative card w-full glass my-5">
                {/*<span*/}
                {/*    className="absolute bottom-[50%] left-[-5%] h-44 w-44 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg blur-3xl"*/}
                {/*></span>*/}
                <div className="card-body p-5  md:p-8">
                    <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center ">
                        <div className="flex flex-col col-span-6 md:col-span-8 ">
                            <div className="flex justify-between items-start ">
                                <div className="flex flex-col gap-0 ">
                                    <div className="rounded-md">


                                        {/*Desktop ------------------------------------------------------*/}
                                        <div className="desktop-only flex flex-col md:flex-row">
                                            {/*{(data?.track.cover.includes("http")) ? <Image*/}
                                            {/*    alt={data?.track.title}*/}
                                            {/*    height={500}*/}
                                            {/*    width={500}*/}
                                            {/*    className="w-44 h-44 lg:w-60 lg:h-60 rounded-md self-center"*/}
                                            {/*    src={data?.track.cover}*/}
                                            {/*    priority={true}*/}
                                            {/*/> :*/}
                                            {/*    <Image*/}
                                            {/*        alt={data?.track.title}*/}
                                            {/*        height={500}*/}
                                            {/*        width={500}*/}
                                            {/*        className="w-44 h-44 lg:w-60 lg:h-60 rounded-md self-center"*/}
                                            {/*        src={'http://192.168.158.179:8000/storage/' + data?.track.cover}*/}
                                            {/*        priority={true}*/}
                                            {/*    />*/}
                                            {/*}*/}


                                            <Image
                                                alt={data?.track.title}
                                                height={500}
                                                width={500}
                                                className="w-44 h-44 lg:w-60 lg:h-60 rounded-md self-center"
                                                src={getMediaPath(data?.track.cover)}
                                                priority={true}
                                            />

                                            <div className="flex flex-col ml-6 justify-end">
                                                <div className="mb-5">
                                                    <p className=" text-3xl lg:text-5xl font-bold">{data?.track.title}</p>
                                                    <p className="text-2xl lg:text-2xl font-bold">{data?.track.artist.name}</p>
                                                </div>
                                                <SongDetails song={song} data={data}/>
                                            </div>
                                        </div>

                                        {/*Mobile ------------------------------------------------------*/}
                                        <div className="mobile-only flex flex-col gap-3">
                                            <div className="flex gap-7 ">
                                                <Image
                                                    alt={song.name}
                                                    height={100}
                                                    width={100}
                                                    className="w-40 h-40 lg:w-60 lg:h-60 md:w-44 md:h-44 rounded-md self-center"
                                                    src={MusicPic.src}
                                                />
                                                <SongDetails song={song} data={data}/>
                                            </div>
                                            <div>
                                                <p className=" text-4xl lg:text-5xl font-bold">{song.name}</p>
                                                <p className="text-xl lg:text-3xl font-semibold mb-1">{song.singer}</p>
                                                <LyricsDrawer/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//
//
//
// import Image from "next/image";
// import MusicPic from "@/app/ui/dashboard/assets/music-pic.jpg";
//
// import React, { useEffect, useState } from "react";
// import LyricsDrawer from "@/app/ui/song/lyrics-drawer";
// import { useMediaQuery } from "react-responsive";
//
// const song = {
//     id: 1,
//     cover: { MusicPic },
//     name: 'Mockingbird',
//     artist: 'Eminem',
//     album: 'blah',
//     lyrics: 'hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor',
//     release_year: '2002',
//     genre: 'genre',
//     uploaded_by: 'Erfan'
// };
//
// export default function SongInfoCover() {
//     const [isClient, setIsClient] = useState(false);
//
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//
//     const isDesktop = useMediaQuery({ query: "(min-width: 768px)" }, undefined, (matches) => matches);
//
//     return (
//         <div>
//             <div className="songCover relative card w-full glass">
//                 <p className="desktop-only">hi</p>
//                 <p>hello</p>
//                 {/*{isClient && isDesktop && <p>hi</p>}*/}
//                 {/*{isClient && !isDesktop && <p>hello</p>}*/}
//             </div>
//         </div>
//     );
// }


//Mobile
//<div>
//                 <div className="songCover relative card w-full  glass ">
//                     {/*<span*/}
//                     {/*    className="absolute bottom-[50%] left-[-5%] h-44 w-44 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg blur-3xl"*/}
//                     {/*></span>*/}
//                     <div className="card-body p-5  md:p-8">
//                         <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center ">
//                             <div className="flex flex-col col-span-6 md:col-span-8 ">
//                                 <div className="flex justify-between items-start ">
//                                     <div className="flex flex-col gap-0 ">
//                                         <div className="rounded-md">
//                                             <div className="flex flex-col gap-3">
//                                                 <div className="flex gap-7 ">
//                                                     <Image
//                                                         alt={song.name}
//                                                         height={100}
//                                                         width={100}
//                                                         className="w-40 h-40 lg:w-60 lg:h-60 md:w-44 md:h-44 rounded-md self-center"
//                                                         src={MusicPic.src}
//                                                     />
//                                                     <div
//                                                         className="flex flex-col md:flex-row lg:flex-row gap-0 lg:gap-2 md:items-end lg:items-end">
//                                                         <LyricsDrawer/>
//                                                         <div className="hidden md:block lg:block">&bull;</div>
//                                                         <p className="text-sm lg:text-base font-semibold">Album: {song.album}</p>
//                                                         <div className="hidden md:block lg:block">&bull;</div>
//                                                         <p className="text-sm lg:text-base font-semibold">Released: {song.release_year}</p>
//                                                         <div className="hidden md:block lg:block">&bull;</div>
//                                                         <p className="text-sm lg:text-base font-semibold">Genre: {song.genre}</p>
//                                                         <div className="hidden md:block lg:block">&bull;</div>
//                                                         <p className="text-sm lg:text-base font-semibold">Upload: {song.uploaded_by}</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="mb-5">
//                                                     <p className=" text-3xl lg:text-5xl font-bold">{song.name}</p>
//                                                     <p className="text-2xl lg:text-3xl font-bold">{song.artist}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>