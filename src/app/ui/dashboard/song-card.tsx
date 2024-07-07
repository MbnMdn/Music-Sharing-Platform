import {Image} from "@nextui-org/react";
import MusicPic from "./assets/music-pic.jpg";
import React from "react";

export default function SongCard({song}: { song: any }) {
    return (
        <div className="rounded-md pr-4 md:pr-8 lg:pr-12  mb-5" key={song.id}>
            <div className="zoom rounded-md">
                <Image
                    alt={song.title}
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    className="w-full object-cover min-h-[150px] min-w-[150px] rounded-md"
                    src={song.cover}
                />
            </div>

            <div className="flex justify-between">
                <div className="p-1">
                    <h2 className="text-gray-100 text-lg font-bold ">{song.title}</h2>
                    <p className="text-gray-400 text-sm">{song.artist.name}</p>
                </div>
            </div>
        </div>
    );
}