'use client'

import React, {useState} from 'react';
import {EditIcon} from "@nextui-org/shared-icons";
import {motion} from "framer-motion"
import HeartIcon from "@/app/ui/icons/heart-icon";
import EyeIcon from "@/app/ui/icons/eye-icon";
import clsx from 'clsx';
import {usePlayerContext} from "@/context/glass-player-provider";
import {useLazyQuery} from "@apollo/client";
import {GET_SONG, GET_SONG_TO_PLAY} from "@/graphql/queries";
import {FaPlay} from "react-icons/fa";
import Link from "next/link";
import SingerCard from "@/app/ui/artists/singer-card";
import {getMediaPath} from "@/app/utilities/getMediaPath";
import {removeFeat} from "@/app/utilities/remove-feat"


type SongNarrowProps = {
    song: any,
    song_id: number,
    edit?: number,
    singer?: number,
    view?: number,
    time?: number,
    like?: number,
    divider?: number,
    hover?: number,
    index?: number
};

export default function SongNarrow({
                                       song,
                                       song_id,
                                       edit = 1,
                                       singer = 1,
                                       view = 0,
                                       time = 1,
                                       like = 0,
                                       divider = 0,
                                       hover = 0,
                                       index = 0
                                   }: SongNarrowProps) {
    const [hovered, setHovered] = useState(false);
    const [getSong, {loading, data}] = useLazyQuery(GET_SONG_TO_PLAY);

    // @ts-ignore
    const [providerTrackId, setNewTrack, isPlaying, setIsPlaying] = usePlayerContext();

    return (
        <div>
            <div
                className={clsx(
                    ' text-white flex rounded-xl justify-between p-1',
                    {
                        'hover:bg-neutral-800 ': hover === 1,
                    },
                )}

                onMouseEnter={() => setHovered((v) => true)}
                onMouseLeave={() => setHovered((v) => false)}
            >
                <div className="flex items-center w-full  p-0 pb-4 md:p-4">
                    {/*<div className="text-lg font-bold mr-2 md:mr-6">{String(songNarrow.id).padStart(2, '0')}</div>*/}
                    <div className="text-lg font-bold mr-2 md:mr-6">
                        <button onClick={() => getSong({
                            variables: {song_id: song_id}, onCompleted: (data) => {
                                setNewTrack(data.track)
                            }
                        })}>{hovered ? <FaPlay className="mr-2  p-0 self-center"
                                               size={14}/> : String(index + 1).padStart(2, '0')}
                        </button>
                    </div>

                    <img src={getMediaPath(song?.cover)} alt={song?.title} className="w-12 h-12 rounded-md mr-2 md:mr-6"/>
                    <div className="flex-grow">
                        <div className="text-lg font-semibold">
                            <Link href={{
                                pathname: `/song/${song.id}`,
                            }}>
                                {removeFeat(song?.title)}
                            </Link>

                        </div>
                        {singer === 1 && (
                            <Link
                                href={{
                                    pathname: `artists/${song?.artist.id}`,
                                }}
                                key={song?.artist.id}
                            >
                                <span className="flex items-center text-neutral-500">{song?.artist.name}</span>
                            </Link>
                            )}


                    </div>
                    <div className=" flex items-center space-x-5 md:space-x-10 lg:space-x-12">
                        {(view === 1 || hovered) &&
                            <span className="desktop-only flex items-center gap-1">{song.viewCount}
                                <EyeIcon/>
                            </span>}

                        {(like === 1 || hovered) && (
                            <span
                                className="desktop-only flex items-center gap-0.5 transition delay-150">{song.likeCount}
                                <HeartIcon/>
                            </span>)}
                        {time === 1 && (
                            <span
                                className="flex items-center gap-1">{formatDuration(song.duration)}</span>)}
                        {edit === 1 && (<span className="flex items-center gap-0.5"><EditIcon/></span>)}
                    </div>
                </div>
            </div>
            {divider == 1 && <div className="divider m-0 p-0"></div>}
        </div>
    );
};


export const variants = {
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.5
        }
    },
    hide: {
        opacity: 0
    }
};


export const MyComponent = () => (
    <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
    />
)


const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};


//<motion.div
//             // style={{
//             //     backgroundColor: "transparent",
//             //     // opacity: 1// Initial background color
//             // }}
//             // whileHover={{
//             //     // backgroundColor: "red",
//             //
//             //     opacity: 0.5 // Background color on hover
//             // }}
//             // transition={{duration: 0.5}}
//             initial={{opacity: 0, scale: 0.5, backgroundColor: "transparent"}}
//             whileHover={{
//                 backgroundColor: "red",
//                 // opacity: 0.5 // Background color on hover
//             }}
//             animate={{opacity: 1, scale: 1}}
//             transition={{duration: 0.2}}
//         >
//
//             <div className=" text-white flex rounded-md justify-between p-1 "
//                  onMouseEnter={() => setHovered((v) => true)}
//                  onMouseLeave={() => setHovered((v) => false)}>
//                 <div className="flex items-center w-full  p-4">
//                     <div className="text-lg font-bold mr-6">{String(songNarrow.id).padStart(2, '0')}</div>
//                     <Image
//                         alt={songNarrow.name}
//                         className="w-12 h-12 rounded-md mr-6 "
//                         height="100%"
//                         src={MusicPic.src}
//                         width="100%"
//                     />
//                     <div className="flex-grow">
//                         <div className="text-lg font-semibold">{songNarrow.name}</div>
//                         {artists === 1 && (
//                             <span className="flex items-center gap-1">{songNarrow.singerName}</span>)}
//                     </div>
//                     <div className="flex items-center space-x-20">
//                         {/*{(view === 1 || hovered) && (*/}
//                         {/*    <span className="flex items-center gap-1">{songNarrow.plays}<EyeIcon/> </span>)}*/}
//                         {/*"items-center gap-1" +*/}
//                         {/*<motion.div/>*/}
//
//                         {/*<motion.span*/}
//                         {/*    animate={'show'} initial="hide"*/}
//                         {/*>{songNarrow.plays}<EyeIcon/></motion.span>*/}
//
//                         {(like === 1 || hovered) && (
//                             <span className="flex items-center gap-1 transition delay-150">{songNarrow.likes}
//                                 <IoHeartOutline/></span>)}
//                         {time === 1 && (
//                             <span
//                                 className="flex items-center gap-1">{songNarrow.duration}<ClockCircleLinearIcon/></span>)}
//                         {edit === 1 && (<span className="flex items-center gap-1"> Edit <EditIcon/></span>)}
//                     </div>
//                 </div>
//             </div>
//             {divider == 1 && <div className="divider m-0 p-0"></div>}
//         </motion.div>