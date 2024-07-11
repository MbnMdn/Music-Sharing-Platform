'use client'

import DefaultCover from "@/app/ui/assets/default-cover.jpeg";

import React from "react";
import UserStatsHover from "@/app/ui/user/user-stats-hover";
import {useQuery} from "@apollo/client";
import {GET_ARTIST} from "@/graphql/queries";

export default function UserCoverImage({artist} : {artist : any}) {
    const imageHeader = artist?.header_image ?? DefaultCover.src;
    return (
        <div className="flex my-6 ">
            {/* eslint-disable-next-line jsx-a11y/alt-text*/}
            {/*<Image*/}
            {/*    className="w-200 h-80 object-cover rounded-md mr-6 mt-10"*/}
            {/*    height="100%"*/}
            {/*    shadow="md"*/}
            {/*    src={SingerPic.src}*/}
            {/*    width="100%"*/}
            {/*/>*/}
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <div className="relative ">
                <img src={imageHeader} width="100%" alt={artist?.name} className="w-screen rounded-lg"/>
                <p className="absolute bottom-[10%] left-[5%] text-5xl lg:text-6xl text-white font-bold flex items-center gap-2">{artist?.name}</p>
                <UserStatsHover artist={artist}/>
            </div>
        </div>
    );
}

