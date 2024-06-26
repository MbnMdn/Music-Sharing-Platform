import React from 'react';
import MusicPic from '../dashboard/assets/music-pic.jpg'
import {ClockCircleLinearIcon, EditIcon, EyeIcon} from "@nextui-org/shared-icons";
import {IoHeartOutline} from "react-icons/io5";
import {Image} from "@nextui-org/react";


const songNarrow = {
    id: 1,
    edit: 0,
    name: 'Cruel Summer',
    plays: '111,340',
    duration: '3:48',
    likes: '345',
    // image: {MusicPic},
};
export default function SongNarrow() {
    return (
        <div className=" text-white flex  justify-between p-1">
            <div className="flex items-center w-full  p-4">
                <div className="text-lg font-bold mr-6">{String(songNarrow.id).padStart(2, '0')}</div>
                <Image
                    alt={songNarrow.name}
                    className="w-12 h-12 object-cover rounded-md mr-6"
                    height="100%"
                    shadow="md"
                    src={MusicPic.src}
                    width="100%"
                />
                <div className="flex-grow">
                    <div className="text-lg font-semibold">{songNarrow.name}</div>
                </div>
                <div className="flex items-center space-x-20">
                    <span className="flex items-center gap-1">{songNarrow.plays}<EyeIcon/> </span>
                    <span className="flex items-center gap-1">{songNarrow.duration}<ClockCircleLinearIcon/></span>
                    <span className="flex items-center gap-1">{songNarrow.likes} <IoHeartOutline/></span>
                    {songNarrow.edit === 0 && (<span className="flex items-center gap-1"> Edit <EditIcon /></span>)}
                </div>
            </div>
        </div>
    );
}
