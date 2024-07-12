'use client'

import DefaultCover from "@/app/ui/assets/default-cover.jpeg";

import React from "react";
import UserStatsHover from "@/app/ui/user/user-stats-hover";
import {useQuery} from "@apollo/client";
import {GET_ARTIST} from "@/graphql/queries";

export default function UserCoverImage({artist} : {artist : any}) {
    const imageHeader = artist?.header_image ?? DefaultCover.src;
    return (
        <div className="flex  ">
            <div className="relative ">
                <img src={imageHeader} width="100%" alt={artist?.name} className="w-screen rounded-lg"/>
                <p className=" drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black  absolute bottom-[10%] left-[5%] text-5xl lg:text-7xl text-neutral-50 font-bold flex items-center gap-2">{artist?.name}
                    <UserStatsHover artist={artist}/></p>
            </div>
        </div>
    );
}

