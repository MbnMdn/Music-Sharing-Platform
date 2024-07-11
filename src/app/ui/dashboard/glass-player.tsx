"use client"

import {Image} from "@nextui-org/react";
import {RepeatOneIcon} from "@/app/ui/dashboard/MusicPlayer/RepeatOneIcon";
import {PreviousIcon} from "@/app/ui/dashboard/MusicPlayer/PreviousIcon";
import {NextIcon} from "@/app/ui/dashboard/MusicPlayer/NextIcon";
import {ShuffleIcon} from "@/app/ui/dashboard/MusicPlayer/ShuffleIcon";
import {Button} from "@/components/ui/button";
import {FaCirclePause, FaCirclePlay} from "react-icons/fa6";
import {Slider} from "@/components/ui/slider";
import React, {useRef, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_SONG} from "@/graphql/queries";
import AverageColorSpan from "@/app/ui/dashboard/average-color-span";
import {removeFeat} from "@/app/utilities/remove-feat";
import {usePlayerContext} from "@/context/glass-player-provider";
import {getMediaPath} from "@/app/utilities/getMediaPath";


type SliderProps = React.ComponentProps<typeof Slider>;

export default function GlassPlayer() {
    const [songId, setSongId] = useState(1); // Default song ID
    // const {data, loading, error, refetch} = useQuery(GET_SONG, {
    //     variables: {
    //         "song_id": songId,
    //     }
    // });

    // @ts-ignore
    const [providerTrackId, setNewTrack, isPlaying, setIsPlaying] = usePlayerContext();

    const audioRef = useRef<HTMLAudioElement>(null);

    // const audioRef = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    // const [liked, setLiked] = React.useState(false);
    const [shuffle, setShuffle] = React.useState(false);
    const [repeat, setRepeat] = React.useState(false);
    const [musicCurrentTime, setMusicCurrentTime] = useState('0:00');


    const [songHistory, setSongHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);


    const [getSong, {loading, data}] = useLazyQuery(GET_SONG);

    console.log("test");
    const togglePlayPause = () => {
        // @ts-ignore
        if (audioRef.current.paused) {
            // @ts-ignore
            audioRef.current.play();
            setIsPlaying(true);

        } else {
            // @ts-ignore
            audioRef.current.pause();
            setIsPlaying(false);
        }
        // setIsPlaying(!isPlaying)
    };


    const handleTimeUpdate = () => {
        // @ts-ignore
        const currentProgress = ((audioRef.current.currentTime / audioRef.current.duration) * 100) < 100 ? ((audioRef.current.currentTime / audioRef.current.duration) * 100) : 0;
        // @ts-ignore
        console.log((audioRef.current.currentTime / audioRef.current.duration) * 100)
        setProgress(currentProgress);

        // @ts-ignore
        let currentMin = Math.floor(audioRef.current.currentTime / 60);
        // @ts-ignore
        let currentSec = Math.floor(audioRef.current.currentTime % 60);
        let musicCurrentT = `${currentMin}:${currentSec < 10 ? `0${currentSec}` : currentSec}`;
        setMusicCurrentTime(musicCurrentT);
    };

    // @ts-ignore
    const handleSeek = (event) => {
        // @ts-ignore
        const newTime = (event.target.value / 100) * audioRef.current.duration;
        // @ts-ignore
        audioRef.current.currentTime = newTime;
        setProgress(event.target.value);
    };


    // const setNewSong = async () => {
    //     setSongId(providerTrackId);
    //     // setSongHistory((prev) => [...prev.slice(0, historyIndex + 1), newSongId]);
    //     // setHistoryIndex((prev) => prev + 1);
    //     const {data} = await refetch({"song_id": providerTrackId});
    //
    //     if (data && audioRef.current) {
    //         audioRef.current.src = data.track.file_link;
    //         audioRef.current.currentTime = 0;
    //         audioRef.current.play();
    //         setIsPlaying(true);
    //     }
    // }
    const nextTrack = async () => {
        if (repeat) {
            // @ts-ignore
            audioRef.current.currentTime = 0;
            // @ts-ignore
            audioRef.current.play();
        } else {
            let newSongId;
            if (shuffle) {
                newSongId = Math.floor(Math.random() * 215) + 1;
            } else {
                newSongId = songId < 215 ? songId + 1 : 1;
            }
            setSongId(newSongId);
            getSong({
                variables: {song_id: newSongId}, onCompleted: (data) => {
                    setNewTrack(data.track)
                }
            });
        }
    };


    const previousTrack = async () => {
        if (repeat) {
            // @ts-ignore
            audioRef.current.currentTime = 0;
            audioRef.current?.play();
        } else {
            const newSongId = songId > 1 ? songId - 1 : 215;
            setSongId(newSongId);
            getSong({
                variables: {song_id: newSongId}, onCompleted: (data) => {
                    setNewTrack(data.track)
                }
            });
        }
    };

    const toggleRepeat = () => {
        setRepeat(!repeat);
        if (audioRef.current) {
            audioRef.current.loop = !repeat;
        }
    };

    const toggleShuffle = () => {
        setShuffle(!shuffle);
        setSongHistory([]);
        setHistoryIndex(-1);
    };

    return (
        <div>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadStart={() => { // @ts-ignore
                    audioRef.current.play();
                    setIsPlaying(true);
                }
                }
                src={getMediaPath(providerTrackId?.file_link)}
                onEnded={nextTrack}
            />
            <div className="relative card w-full max-h-96 glass hover:bg-base-100/5">
                <AverageColorSpan imageUrl={providerTrackId?.cover}/>
                <div className="flex justify-center items-center w-full mt-5">
                    <div className="max-w-[80%] image-container">
                        <Image
                            alt="Album cover"
                            className="object-cover items-center rounded-md"
                            height="100%"
                            shadow="md"
                            src={getMediaPath(providerTrackId?.cover)}
                            width="100%"
                        />
                    </div>
                </div>
                <div className="card-body py-1">
                    <div className="grid grid-cols-6 gap-6 md:gap-4 items-center justify-center py-3">
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-base text-foreground/90 text-white">{removeFeat(providerTrackId?.title)}</h3>
                                    <p className="text-xs text-foreground/80 text-white">{providerTrackId?.artist.name}</p>
                                </div>
                                {/*<Button*/}
                                {/*    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 bg-transparent hover:bg-transparent"*/}
                                {/*    onClick={() => setLiked((v) => !v)}*/}
                                {/*>*/}
                                {/*    <HeartIcon*/}
                                {/*        className={liked ? "[&>path]:stroke-transparent" : ""}*/}
                                {/*        fill={liked ? "currentColor" : "none"} width={undefined}*/}
                                {/*        height={undefined}/>*/}
                                {/*</Button>*/}
                            </div>

                            <div className="flex flex-col mt-3 gap-1">
                                <input type="range" min="0" max="100" value={progress} defaultValue="0"
                                       onChange={handleSeek}
                                       className="cursor-pointer"/>

                                <div className="flex justify-between">
                                    <p className="text-xs">{musicCurrentTime}</p>
                                    <p className="text-xs text-right">{formatDuration(providerTrackId?.duration)}</p>
                                </div>
                            </div>

                            <div className="flex w-full items-center justify-center">
                                <Button
                                    className="data-[hover]:bg-foreground/10 bg-transparent hover:bg-transparent m-0 p-1"
                                    onClick={toggleRepeat}
                                >
                                    <RepeatOneIcon className={repeat ? "text-purple-200" : "text-white"}
                                                   width={undefined}
                                                   height={undefined} size={20}/>
                                </Button>
                                <Button
                                    className="data-[hover]:bg-foreground/10 bg-transparent hover:bg-transparent m-0 p-1"
                                    onClick={previousTrack}
                                >
                                    <PreviousIcon width={undefined} height={undefined} size={20}/>
                                </Button>
                                <Button
                                    className="data-[hover]:bg-foreground/10 bg-transparent hover:bg-transparent m-0 p-1"
                                    onClick={togglePlayPause}
                                >
                                    {isPlaying ? <FaCirclePause size={38}/> :
                                        <FaCirclePlay size={38}/>
                                    }
                                </Button>
                                <Button
                                    className="data-[hover]:bg-foreground/10 bg-transparent hover:bg-transparent m-0 p-1"
                                    onClick={nextTrack}
                                >
                                    <NextIcon width={undefined} height={undefined} size={20}/>
                                </Button>
                                <Button
                                    className="data-[hover]:bg-foreground/10 bg-transparent hover:bg-transparent m-0 p-2"
                                    onClick={toggleShuffle}
                                >
                                    <ShuffleIcon className={shuffle ? "text-purple-200" : "text-white"}
                                                 width={undefined}
                                                 height={undefined} size={18}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
