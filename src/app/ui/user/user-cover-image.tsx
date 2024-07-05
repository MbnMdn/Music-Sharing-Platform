import SingerPic from "@/app/ui/dashboard/assets/singer.png";
import React from "react";
import UserStatsHover from "@/app/ui/user/user-stats-hover";

export default function UserCoverImage() {
    return (
        <div className="flex my-6 md:my-10">
            {/* eslint-disable-next-line jsx-a11y/alt-text*/}
            {/*<Image*/}
            {/*    className="w-200 h-80 object-cover rounded-md mr-6 mt-10"*/}
            {/*    height="100%"*/}
            {/*    shadow="md"*/}
            {/*    src={SingerPic.src}*/}
            {/*    width="100%"*/}
            {/*/>*/}
            {/* eslint-disable-next-line @next/next/no-img-element */}

            {/*<div className="">*/}
            {/*    <img src={SingerPic.src} width="100%" alt={SingerPic.src}*/}
            {/*         className="w-screen rounded-none"/>*/}
            {/*    <div className="flex relative top-[-25%] left-10 gap-3">*/}
            {/*        <p className="text-5xl lg:text-6xl text-white font-bold  ">Taylor Swift</p>*/}
            {/*        <div className="self-center">*/}
            {/*            <UserStatsHover/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="relative ">
                <img src={SingerPic.src} width="100%" alt={SingerPic.src} className="w-screen rounded-none"/>
                <p className="absolute bottom-[10%] left-[5%] text-5xl lg:text-6xl text-white font-bold flex items-center gap-2">Taylor
                    Swift <UserStatsHover/></p>
            </div>
        </div>
    );
}

