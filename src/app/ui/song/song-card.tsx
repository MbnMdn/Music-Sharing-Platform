import {Image} from "@nextui-org/react";
import React from "react";
export default function SongCard({track}: { track: any }) {
    return (
        <div className=" px-5 py-3 " key={track.name}>
            <div className=" rounded-md zoom">
                <Image
                    alt={track.title}
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    className=" object-cover min-h-[150px] min-w-[150px] rounded-md"
                    src={track.cover}
                />
            </div>

            <div className="flex justify-between">
                <div className="p-1">
                    <h2 className="text-gray-100 text-lg font-bold ">{removeFeat(track.title)}</h2>
                    <h2 className="text-neutral-400 text-sm  ">{track.artist.name}</h2>
                </div>
            </div>
        </div>
    );
}