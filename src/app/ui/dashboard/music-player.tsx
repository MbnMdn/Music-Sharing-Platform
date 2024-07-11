import Image from 'next/image'
import MusicPic from '../assets/music-pic.jpg'

import { PiPlayCircleDuotone } from "react-icons/pi";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoPlayForwardOutline } from "react-icons/io5";



// import AcmeLogo from '@/app/ui/acme-logo';
// import { PowerIcon } from '@heroicons/react/24/outline';

export default function MusicPlayer() {
    return (
        <div
            className="flex h-full flex-col items-center justify-center px-3 py-4 md:px-4 relative  p-8 max-w-xl mx-auto bg-white bg-opacity-5 shadow-xl backdrop-blur-sm rounded-2xl"
        >
            <div className="relative  z-10 " >
                <div className="space-y-2">
                    <Image
                        src={MusicPic}
                        width={150}
                        height={150}
                        alt="Picture of the music"
                        className="rounded-xl"
                    />
                    <div className="  justify-center">
                        <p className="text-xl">Red</p>
                        <p className="text-xs">Taylor Swift</p>
                    </div>

                    <div className="flex flex-row gap-3 items-center justify-center">
                        <IoPlayBack />
                        <PiPlayCircleDuotone size={40}/>
                        <IoPlayForwardOutline/>
                    </div>
                </div>
            </div>
        </div>
    );
}
