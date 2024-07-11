import {Image} from "@nextui-org/react";
import React from "react";

export default function SingerCard({artist}: { artist: any }) {
    return (
        <div className=" px-5 py-3 " key={artist.name}>
            <div className=" rounded-md zoom">
                <Image
                    alt={artist.name}
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    className=" object-cover min-h-[150px] min-w-[150px] rounded-md"
                    src={artist.picture}
                />
            </div>

            <div className="flex justify-between">
                <div className="p-1">
                    <h2 className="text-gray-100 text-lg font-bold ">{artist.name}</h2>
                </div>
            </div>
        </div>
    );
}