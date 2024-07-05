'use client'

import React from 'react';
import MusicPic from '../dashboard/assets/music-pic.jpg'
import {ClockCircleLinearIcon, EditIcon} from "@nextui-org/shared-icons";
import {Image} from "@nextui-org/react";
import {motion} from "framer-motion"
import {IoHeartOutline} from "react-icons/io5";
import {Separator} from "@/components/ui/separator";


const songNarrow = {
    id: 1,
    singerName: 'Taylor Swift',
    name: 'Cruel Summer',
    plays: '111,340',
    duration: '3:48',
    likes: '345',
    // image: {MusicPic},
};
export default function SongNarrow({edit = 1, singer = 1, view = 0, time = 1, like = 0,  divider = 0}) {
    const [hovered, setHovered] = React.useState(false);

    return (

        <div>
            <div className=" text-white flex rounded-md justify-between p-1 "
                 onMouseEnter={() => setHovered((v) => true)}
                 onMouseLeave={() => setHovered((v) => false)}>
                <div className="flex items-center w-full  p-4">
                    <div className="text-lg font-bold mr-6">{String(songNarrow.id).padStart(2, '0')}</div>
                    <Image
                        alt={songNarrow.name}
                        className="w-12 h-12 rounded-md mr-6 "
                        height="100%"
                        src={MusicPic.src}
                        width="100%"
                    />
                    <div className="flex-grow">
                        <div className="text-lg font-semibold">{songNarrow.name}</div>
                        {singer === 1 && (
                            <span className="flex items-center gap-1">{songNarrow.singerName}</span>)}
                    </div>
                    <div className="flex items-center space-x-20">
                        {/*{(view === 1 || hovered) && (*/}
                        {/*    <span className="flex items-center gap-1">{songNarrow.plays}<EyeIcon/> </span>)}*/}
                        {/*"items-center gap-1" +*/}
                        {/*<motion.div/>*/}

                        {/*<motion.span*/}
                        {/*    animate={'show'} initial="hide"*/}
                        {/*>{songNarrow.plays}<EyeIcon/></motion.span>*/}

                        {(like === 1 || hovered) && (
                            <span className="flex items-center gap-1 transition delay-150">{songNarrow.likes}
                                <IoHeartOutline/></span>)}
                        {time === 1 && (
                            <span
                                className="flex items-center gap-1">{songNarrow.duration}<ClockCircleLinearIcon/></span>)}
                        {edit === 1 && (<span className="flex items-center gap-1"> Edit <EditIcon/></span>)}
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
//                         {singer === 1 && (
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