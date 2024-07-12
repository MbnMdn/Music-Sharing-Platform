import Image from "next/image";

import React from "react";
import LyricsDrawer from "@/app/ui/song/lyrics-drawer";
import {useMediaQuery} from "@react-hook/media-query";
import SongDetails from "@/app/ui/song/song-details";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_SONG} from "@/graphql/queries";
import {getMediaPath} from "@/app/utilities/getMediaPath";
import Link from "next/link";
import {FaCirclePlay} from "react-icons/fa6";
import {removeFeat} from "@/app/utilities/remove-feat"
import UserStatsHover from "@/app/ui/user/user-stats-hover";
import {usePlayerContext} from "@/context/glass-player-provider";
import {FaPlay} from "react-icons/fa";


export default function SongInfoCover({id}: { id: number }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")


    const {data, loading, error} = useQuery(GET_SONG, {
        variables: {
            "song_id": id,
        },
    });

    // @ts-ignore
    const [providerTrackId, setNewTrack, isPlaying, setIsPlaying] = usePlayerContext();


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

                                        {loading ? (
                                                <div data-theme="halloween" className="desktop-only w-full  bg-transparent">
                                                    <div className="flex gap-5 ">
                                                        <div
                                                            className="skeleton rounded-md  h-40 w-56 lg:h-64 lg:w-96 "></div>
                                                        <div
                                                            className="flex flex-row  w-full justify-between content-between gap-8">
                                                            <div className="flex flex-col gap-3 mt-16 lg:mt-32">
                                                                <div className="skeleton  h-4 w-64 lg:h-6 lg:w-96"></div>
                                                                <div className="skeleton h-3 w-52"></div>
                                                                <div className="skeleton h-3 w-80 mt-5"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ) :
                                            (<div className="desktop-only flex flex-col md:flex-row">
                                                {/*<Image*/}
                                                {/*    alt={data?.track.title}*/}
                                                {/*    height={500}*/}
                                                {/*    width={500}*/}
                                                {/*    className="w-44 h-44 lg:w-60 lg:h-60 rounded-md self-center"*/}
                                                {/*    src={getMediaPath(data?.track.cover)}*/}
                                                {/*    priority={true}*/}
                                                {/*/>*/}

                                                <div className="relative ">
                                                    <img src={getMediaPath(data?.track.cover)} width="100%"
                                                         alt={data?.track.title}
                                                         className="w-44 h-44 lg:w-60 lg:h-60 rounded-md self-center"/>


                                                    <button onClick={() => setNewTrack(data.track)} className="absolute bottom-[5%] right-[5%]">
                                                        <p className=" text-5xl lg:text-7xl text-neutral-50 font-bold flex items-center gap-2">
                                                            <FaCirclePlay size={38} className="mt-1"/></p>
                                                    </button>


                                                </div>


                                                <div className="flex flex-col ml-6 justify-end">
                                                <div className="mb-5">
                                                        {/*<div className="flex  gap-3 ">*/}
                                                        {/*<FaCirclePlay size={38} className="mt-1"/>*/}

                                                        {/*<div className="flex flex-col">*/}
                                                        <p className=" text-3xl lg:text-5xl font-bold">{removeFeat(data?.track.title)}</p>
                                                        <Link
                                                            href={{
                                                                pathname: `/artists/${data?.track.artist.id}`,
                                                            }}
                                                            key={data?.track.artist.id}
                                                        >
                                                            <p className="text-2xl lg:text-2xl font-bold">{data?.track.artist.name}</p>
                                                        </Link>
                                                        {/*</div>*/}

                                                        {/*</div>*/}
                                                        {/*<p className=" text-3xl lg:text-5xl font-bold">{data?.track.title}</p>*/}
                                                        {/*<p className="text-2xl lg:text-2xl font-bold">{data?.track.artist.name}</p>*/}

                                                    </div>
                                                    <SongDetails data={data}/>

                                                </div>
                                            </div>)}

                                        {/*Mobile ------------------------------------------------------*/}
                                        {
                                            loading ? (
                                                    <div data-theme="halloween"
                                                         className="mobile-only  flex flex-col bg-transparent">
                                                    <div className="flex gap-4">
                                                            <div className="flex-col">
                                                                <div className="skeleton h-40 w-40 rounded-md "></div>
                                                            </div>
                                                            <div className="flex flex-col gap-5 mt-2">
                                                                <div className="skeleton h-3 w-36"></div>
                                                                <div className="skeleton h-3 w-28"></div>
                                                                <div className="skeleton h-3 w-28"></div>
                                                                <div className="skeleton h-3 w-28"></div>

                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col gap-4 mt-4">
                                                            <div className="skeleton h-4 w-80"></div>
                                                            <div className="skeleton h-3 w-52"></div>
                                                            <div className="skeleton h-3 w-16 mt-1"></div>
                                                        </div>
                                                    </div>

                                                ) :
                                                (<div className="mobile-only flex flex-col gap-3">
                                                    <div className="flex gap-7 ">
                                                        {/*<Image*/}
                                                        {/*    alt={data?.track.title}*/}
                                                        {/*    height={500}*/}
                                                        {/*    width={500}*/}
                                                        {/*    className="w-40 h-40 lg:w-60 lg:h-60 md:w-44 md:h-44 rounded-md self-center"*/}
                                                        {/*    src={getMediaPath(data?.track.cover)}*/}
                                                        {/*    priority={true}*/}
                                                        {/*/>*/}


                                                        <div className="relative ">
                                                            <img src={getMediaPath(data?.track.cover)} width="100%"
                                                                 alt={data?.track.title}
                                                                 className="w-40 h-40 lg:w-60 lg:h-60 md:w-44 md:h-44 rounded-md self-center"/>
                                                            <p className="absolute bottom-[5%] right-[5%] text-5xl lg:text-7xl text-neutral-50 font-bold flex items-center gap-2">
                                                                <FaCirclePlay size={38} className="mt-1"/></p>
                                                        </div>


                                                        <SongDetails data={data}/>
                                                    </div>
                                                    <div>
                                                        <p className="text-3xl lg:text-5xl font-black">{data?.track.title}</p>


                                                        <Link
                                                            href={{
                                                                pathname: `/artists/${data?.track.artist.id}`,
                                                            }}
                                                            key={data?.track.artist.id}
                                                        >
                                                            <p className="text-xl lg:text-3xl font-semibold mb-1">{data?.track.artist.name}</p>
                                                        </Link>

                                                        <LyricsDrawer/>
                                                    </div>
                                                </div>)}
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