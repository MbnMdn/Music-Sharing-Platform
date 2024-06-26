"use client"

import React from "react";
import SongCard from "@/app/ui/dashboard/song-card";
import MostlyPlayed from "@/app/ui/dashboard/mostly-played";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import MusicPic from '../ui/dashboard/assets/music-pic.jpg'
import {Button, Image, Slider} from "@nextui-org/react";
import {HeartIcon} from "@/app/ui/dashboard/MusicPlayer/HeartIcon";
import {RepeatOneIcon} from "@/app/ui/dashboard/MusicPlayer/RepeatOneIcon";
import {PreviousIcon} from "@/app/ui/dashboard/MusicPlayer/PreviousIcon";
import {PauseCircleIcon} from "@/app/ui/dashboard/MusicPlayer/PauseCircleIcon";
import {NextIcon} from "@/app/ui/dashboard/MusicPlayer/NextIcon";
import {ShuffleIcon} from "@/app/ui/dashboard/MusicPlayer/ShuffleIcon";


export default function Page() {
    const [liked, setLiked] = React.useState(false);

    return (
        <>



            <div className="card w-56 glass">
                <div className="flex justify-center items-center w-full  mt-7">
                    <div className=" max-w-[80%] ">
                        <Image
                            alt="Album cover"
                            className="object-cover items-center "
                            height="100%"
                            shadow="md"
                            src={MusicPic.src}
                            width="100%"
                        />
                    </div>
                </div>
                <div className="card-body">
                    <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center py-3">
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                                    <p className="text-small text-foreground/80">12 Tracks</p>
                                </div>
                                <Button
                                    isIconOnly
                                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                    radius="full"
                                    variant="light"
                                    onPress={() => setLiked((v) => !v)}
                                >
                                    <HeartIcon
                                        className={liked ? "[&>path]:stroke-transparent" : ""}
                                        fill={liked ? "currentColor" : "none"} width={undefined}
                                        height={undefined}/>
                                </Button>
                            </div>

                            <div className="flex flex-col mt-3 gap-1">
                                <Slider
                                    aria-label="Music progress"
                                    classNames={{
                                        track: "bg-default-500/30",
                                        thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                                    }}
                                    color="foreground"
                                    defaultValue={33}
                                    size="sm"
                                />
                                <div className="flex justify-between">
                                    <p className="text-small">1:23</p>
                                    <p className="text-small text-foreground/50">4:32</p>
                                </div>
                            </div>

                            <div className="flex w-full items-center justify-center">
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                >
                                    <RepeatOneIcon className="text-foreground/80" width={undefined}
                                                   height={undefined}/>
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                >
                                    <PreviousIcon width={undefined} height={undefined}/>
                                </Button>
                                <Button
                                    isIconOnly
                                    className="w-auto h-auto data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                >
                                    <PauseCircleIcon size={54} width={undefined} height={undefined}/>
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                >
                                    <NextIcon width={undefined} height={undefined}/>
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                >
                                    <ShuffleIcon className="text-foreground/80" width={undefined}
                                                 height={undefined}/>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<SongCard/>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<MostlyPlayed/>*/}

            {/*<SongCardSkeleton/>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}


        </>

    );
}