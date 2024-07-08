import {Image} from "@nextui-org/react";
import {HeartIcon} from "@/app/ui/dashboard/MusicPlayer/HeartIcon";
import {RepeatOneIcon} from "@/app/ui/dashboard/MusicPlayer/RepeatOneIcon";
import {PreviousIcon} from "@/app/ui/dashboard/MusicPlayer/PreviousIcon";
import {NextIcon} from "@/app/ui/dashboard/MusicPlayer/NextIcon";
import {ShuffleIcon} from "@/app/ui/dashboard/MusicPlayer/ShuffleIcon";
import {Button} from "@/components/ui/button"

import {FaCirclePause, FaCirclePlay} from "react-icons/fa6";
import {Slider} from "@/components/ui/slider"
import React, {useRef, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_SONG} from "@/graphql/queries";

type SliderProps = React.ComponentProps<typeof Slider>

export default function GlassPlayer() {
    const {data, loading, error} = useQuery(GET_SONG, {
        variables: {
            "song_id": 1,
        }
    });


    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [liked, setLiked] = React.useState(false);
    const [shuffle, setShuffle] = React.useState(false);
    const [repeat, setRepeat] = React.useState(false);
    const [musicCurrentTime, setMusicCurrentTime] = useState('0:00');


    const togglePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(currentProgress);


        let currentMin = Math.floor(audioRef.current.currentTime / 60);
        let currentSec = Math.floor(audioRef.current.currentTime % 60);
        let musicCurrentT = `${currentMin}:${currentSec < 10 ? `0${currentSec}` : currentSec}`;
        setMusicCurrentTime(musicCurrentT);


    };

    const handleSeek = (event) => {
        const newTime = (event.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(event.target.value);
    };


    //         <div className="audio-player">
    //             <audio
    //                 ref={audioRef}
    //                 onTimeUpdate={handleTimeUpdate}
    //                 src="https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3"
    //             />
    //             <button onClick={togglePlayPause}>
    //                 {isPlaying ? 'Pause' : 'Play'}
    //             </button>
    //             <input
    //                 type="range"
    //                 value={progress}
    //                 onChange={handleSeek}
    //             />
    //         </div>


    return (
        <div>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                src="https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3"
            />
            <div className="relative card w-full max-h-96 glass hover:bg-base-100/5">
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
                            src={data?.track.cover}
                            width="100%"
                        />
                    </div>
                </div>
                <div className="card-body py-1 ">
                    <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center py-3">
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0 ">
                                    <h3 className="font-semibold text-base text-foreground/90 text-white">{data?.track.title}</h3>
                                    <p className="text-xs text-foreground/80 text-white">{data?.track.artist.name}</p>
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

                                <input type="range" min="0" max="100" value={progress} onChange={handleSeek}
                                       className=" cursor-pointer"/>

                                <div className="flex justify-between">
                                    <p className="text-xs">{musicCurrentTime}</p>
                                    <p className="text-xs text-right">{formatDuration(data?.track.duration)}</p>
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
                                    // onClick={() => setPaused((v) => !v)}
                                    onClick={togglePlayPause}
                                >
                                    {isPlaying ? <FaCirclePause size={38}/> :
                                        <FaCirclePlay size={38}/>
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
                                    <ShuffleIcon className={shuffle ? "text-purple-200" : " text-white"}
                                                 width={undefined}
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


const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

