import SingerPic from "@/app/ui/dashboard/assets/singer.png";
import React from "react";
import {Button} from "@/components/ui/button";

import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card"

export default function UserCoverImage() {
    return (
        <div className="flex mt-10">
            {/* eslint-disable-next-line jsx-a11y/alt-text*/}
            {/*<Image*/}
            {/*    className="w-200 h-80 object-cover rounded-md mr-6 mt-10"*/}
            {/*    height="100%"*/}
            {/*    shadow="md"*/}
            {/*    src={SingerPic.src}*/}
            {/*    width="100%"*/}
            {/*/>*/}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="">
                <img src={SingerPic.src} width="100%" alt={SingerPic.src} height="100%"
                     className="w-screen rounded-none"/>


                <HoverCard>
                    <HoverCardTrigger asChild>
                        <p className="relative top-[-100px] left-10 m-4 text-6xl text-white font-bold">Taylor Swift</p>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">User statistics:</h4>
                            <p className="text-sm">
                                Total listeners: 1324567
                            </p>
                            <p className="text-sm">
                                Total views: 1324567
                            </p>
                            <div className="flex items-center pt-2">
                                {/*<CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}*/}
                                <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
                            </div>
                        </div>
                    </div>
                    </HoverCardContent>
                </HoverCard>

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
