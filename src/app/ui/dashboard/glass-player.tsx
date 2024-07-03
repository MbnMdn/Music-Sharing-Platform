import {Image} from "@nextui-org/react";
import MusicPic from "@/app/ui/dashboard/assets/music-pic.jpg";
import {HeartIcon} from "@/app/ui/dashboard/MusicPlayer/HeartIcon";
import {RepeatOneIcon} from "@/app/ui/dashboard/MusicPlayer/RepeatOneIcon";
import {PreviousIcon} from "@/app/ui/dashboard/MusicPlayer/PreviousIcon";
import {NextIcon} from "@/app/ui/dashboard/MusicPlayer/NextIcon";
import {ShuffleIcon} from "@/app/ui/dashboard/MusicPlayer/ShuffleIcon";
import {Button} from "@/components/ui/button"

import {FaCirclePause, FaCirclePlay} from "react-icons/fa6";


import {cn} from "@/lib/utils"
import {Slider} from "@/components/ui/slider"
import React from "react";
import {SheetSide} from "@/app/SheetSide";

type SliderProps = React.ComponentProps<typeof Slider>

export default function GlassPlayer() {
    const [liked, setLiked] = React.useState(false);
    const [paused, setPaused] = React.useState(false);
    const [shuffle, setShuffle] = React.useState(false);
    const [repeat, setRepeat] = React.useState(false);


    // @ts-ignore
    return (
        <div>
            {/*<SheetSide/>*/}
            {/*<div className="relative border border-white/0 rounded-2xl bg-white/5 w-52 max-h-96 hover:bg-base-100/5">*/}
            <div className="relative card w-full max-h-96 glass hover:bg-base-100/25">
                <span
                    className="absolute bottom-[50%] right-[0%] h-44 w-44 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg blur-3xl"
                ></span>
                <div className="flex justify-center items-center w-full  mt-5 ">
                    <div className=" max-w-[80%] ">
                        <Image
                            alt="Album cover"
                            className="object-cover items-center rounded-md "
                            height="100%"
                            shadow="md"
                            src={MusicPic.src}
                            width="100%"
                        />
                    </div>
                </div>
                <div className="card-body py-1 ">
                    <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center py-3">
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0 ">
                                    <h3 className="font-semibold text-base text-foreground/90 text-white">Daily Mix</h3>
                                    <p className="text-xs text-foreground/80 text-white">12 Tracks</p>
                                </div>
                                <Button
                                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 bg-transparent  hover:bg-transparent"
                                    onClick={() => setLiked((v) => !v)}
                                >
                                    <HeartIcon
                                        className={liked ? "[&>path]:stroke-transparent" : ""}
                                        fill={liked ? "currentColor" : "none"} width={undefined}
                                        height={undefined}/>
                                </Button>
                            </div>

                            <div className="flex flex-col mt-3 gap-1">
                                {/*<Slider*/}
                                {/*    aria-label="Music progress"*/}
                                {/*    classNames={{*/}
                                {/*        track: "bg-default-500/30",*/}
                                {/*        thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",*/}
                                {/*    }}*/}
                                {/*    color="foreground"*/}
                                {/*    defaultValue={33}*/}
                                {/*    size="sm"*/}
                                {/*/>*/}

                                <Slider
                                    defaultValue={[50]}
                                    max={100}
                                    step={1}
                                    className={cn("w-[100%] h-0.5 slider")}
                                />

                                <div className="flex justify-between">
                                    <p className="text-xs">1:23</p>
                                    <p className="text-xs text-right">4:32</p>
                                </div>
                            </div>

                            <div className="flex w-full items-center justify-center">
                                <Button
                                    className="data-[hover]:bg-foreground/10  bg-transparent hover:bg-transparent  m-0 p-1"
                                    onClick={() => setRepeat((v) => !v)}
                                >
                                    <RepeatOneIcon className={repeat ? "text-purple-200" : " text-white"}
                                                   width={undefined}
                                                   height={undefined} size={20}/>
                                </Button>
                                <Button
                                    className="data-[hover]:bg-foreground/10  bg-transparent hover:bg-transparent  m-0 p-1"
                                >
                                    <PreviousIcon width={undefined} height={undefined} size={20}/>
                                </Button>
                                <Button
                                    className="data-[hover]:bg-foreground/10  bg-transparent hover:bg-transparent  m-0 p-1"
                                    onClick={() => setPaused((v) => !v)}
                                >
                                    {paused ? <FaCirclePlay size={38}/> :
                                        <FaCirclePause size={38}/>
                                    }
                                </Button>
                                <Button
                                    className="data-[hover]:bg-foreground/10  bg-transparent hover:bg-transparent  m-0 p-1"
                                >
                                    <NextIcon width={undefined} height={undefined} size={20}/>
                                </Button>
                                {/*<FaCirclePlay />*/}
                                <Button
                                    className="data-[hover]:bg-foreground/10  bg-transparent hover:bg-transparent m-0 p-2"
                                    onClick={() => setShuffle((v) => !v)}

                                >
                                    <ShuffleIcon className={shuffle ? "text-purple-200" : " text-white"} width={undefined}
                                                 height={undefined} size={18}/>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}

