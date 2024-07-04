import Image from "next/image";
import MusicPic from "@/app/ui/dashboard/assets/music-pic.jpg";
import { MdOutlineLyrics } from "react-icons/md";

import React from "react";
import LyricsDrawer from "@/app/ui/song/lyrics-drawer";


const song = {
    id: 1,
    cover: {MusicPic},
    name: 'Mockingbird',
    singer: 'Eminem',
    album: 'blah',
    lyrics: 'hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor',
    release_year: '2002',
    genre: 'genre'
};

export default function SongInfoCover() {
    return (

        <div>
            <div className="songCover relative card w-full max-h-96 glass">
                {/*<span*/}
                {/*    className="absolute bottom-[50%] right-[0%] h-44 w-44 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg blur-3xl"*/}
                {/*></span>*/}
                <div className="card-body">
                    <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center ">
                        <div className="flex flex-col col-span-6 md:col-span-8 ">
                            <div className="flex justify-between items-start ">
                                <div className="flex flex-col gap-0 ">
                                    <div className="rounded-md  ">
                                        <div className="flex">
                                            <Image
                                                alt={song.name}
                                                height={100}
                                                width={100}
                                                className="w-24 h-24 lg:w-60 lg:h-60 md:w-44 md:h-44 rounded-md "
                                                src={MusicPic.src}
                                            />
                                            <div className="flex flex-col ml-6 justify-end">
                                                <div className="mb-5">
                                                    <p className=" text-3xl lg:text-5xl font-bold">{song.name}</p>
                                                    <p className="text-2xl lg:text-3xl font-bold">{song.singer}</p>
                                                </div>

                                                <div
                                                    className="flex flex-col md:flex-row lg:flex-row gap-1 lg:gap-2 md:items-end lg:items-end">
                                                    <LyricsDrawer/>
                                                    <div className="hidden md:block lg:block">&bull;</div>
                                                    <p className="text-xs lg:text-base font-semibold">Album: {song.album}</p>
                                                    <div className="hidden md:block lg:block">&bull;</div>
                                                    <p className="text-xs lg:text-base font-semibold">Release
                                                        yea: {song.release_year}</p>
                                                    <div className="hidden md:block lg:block">&bull;</div>
                                                    <p className="text-xs lg:text-base font-semibold">Genre: {song.genre}</p>
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
        </div>
    );
}


/*
<div className="rounded-md bg-neutral-800 p-6">
        <div className="flex">
            <Image
                alt={song.name}
                height={100}
                width={100}
                className="w-24 h-24 lg:w-60 lg:h-60 md:w-44 md:h-44  rounded-md "
                src={MusicPic.src}
            />
            <div className="flex flex-col ml-6 justify-end">
                <div className="mb-5">
                    <p className=" text-4xl lg:text-5xl font-bold">{song.name}</p>
                    <p className="text-2xl lg:text-3xl font-bold">{song.singer}</p>
                </div>

                <div className="flex gap-1 lg:gap-2 items-end">
                <p className="text-xs lg:text-base font-semibold">Album: {song.album}</p>
                        <div>&bull;</div>
                        <p className="text-xs lg:text-base font-semibold">Release year: {song.release_year}</p>
                        <div>&bull;</div>
                        <p className="text-xs lg:text-base font-semibold">Genre: {song.genre}</p>
                    </div>
                </div>
            </div>
        </div>
 */