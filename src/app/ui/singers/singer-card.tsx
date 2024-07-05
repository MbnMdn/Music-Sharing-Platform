import {Image} from "@nextui-org/react";
import MusicPic from "../dashboard/assets/music-pic.jpg";
import React from "react";

export default function SingerCard({song}: { song: any }) {
    return (
        <div className=" pr-14 mb-5 " key={song.song_name}>
            <div className=" rounded-md zoom">
                <Image
                    alt={song.singer}
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    className=" object-cover min-h-[150px] min-w-[150px] rounded-md"
                    src={MusicPic.src}
                />
            </div>

            <div className="flex justify-between">
                <div className="p-1">
                    <h2 className="text-gray-100 text-lg font-bold ">{song.singer}</h2>
                </div>
            </div>
        </div>
    );
}