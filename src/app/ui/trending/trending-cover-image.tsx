import SingerPic from "@/app/ui/dashboard/assets/singer.png";
import React from "react";

import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card"
import {FiInfo} from "react-icons/fi";

export default function TrendingCoverImage() {
    return (
        <div className="flex mt-10">
            <div className="">
                <img src={SingerPic.src} width="100%" alt={SingerPic.src}
                     className="w-screen rounded-none"/>
                <div className="flex relative block top-[-85px] left-10 gap-3">
                    <p className="  text-6xl text-white font-bold  ">Trending</p>
                    <div className="self-center">

                    </div>
                </div>
            </div>
        </div>
    );
}

/*
GLASS:
<div>
    <div className="relative card w-full max-h-96 glass hover:bg-base-100/25">
                <span
                    className="absolute bottom-[50%] right-[0%] h-44 w-44 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg blur-3xl"
                ></span>
        <div className="card-body py-1 ">
            <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center py-3">
                <div className="flex flex-col col-span-6 md:col-span-8">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0 ">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>*/
