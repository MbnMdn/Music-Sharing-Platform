import Image from 'next/image'
import MusicPic from "./assets/music-pic.jpg";
import React from "react";
import {removeFeat} from "@/app/utilities/remove-feat"


export default function SongCard({song}: { song: any }) {
    return (
        <div className="rounded-md pr-4 md:pr-8 lg:pr-12  mb-5" key={song.id}>
            <div className="zoom rounded-md">
                <Image
                    alt={song.title}
                    width={500}
                    height={500}
                    className="w-full object-cover min-h-[160px] min-w-[160px] rounded-md"
                    src={song.cover}
                />
            </div>

            <div className="flex justify-between">
                <div className="p-1">
                    <h2 className="text-gray-100 text-lg font-bold ">{removeFeat(song.title)}</h2>
                    <p className="text-gray-400 text-sm">{song.artist.name}</p>
                </div>
            </div>
        </div>
    );
}