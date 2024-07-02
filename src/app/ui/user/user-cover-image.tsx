import SingerPic from "@/app/ui/dashboard/assets/singer.png";
import React from "react";

export default function UserCoverImage() {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text*/}
            {/*<Image*/}
            {/*    className="w-200 h-80 object-cover rounded-md mr-6 mt-10"*/}
            {/*    height="100%"*/}
            {/*    shadow="md"*/}
            {/*    src={SingerPic.src}*/}
            {/*    width="100%"*/}
            {/*/>*/}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SingerPic.src} width="100%" alt={SingerPic.src} height="100%" className="mt-10 rounded-none" />
            <p className="relative top-[-100px] left-10 m-4 text-6xl text-white font-bold">Taylor Swift</p>
        </div>
    );
}
