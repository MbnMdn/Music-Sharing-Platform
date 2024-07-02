import React from "react";
import {Image} from "@nextui-org/react";

import MusicPic from './assets/music-pic.jpg'


export default function SongCard() {
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },

    ];

    // @ts-ignore
    return (
        <div className="flex-col gap-3">
            <h1 className="text-5xl font-bold mb-11">Trending Songs</h1>
            <div className="flex overflow-x-auto scrollbar-hide">
                {/*<div className="gap-2 grid grid-cols-2 sm:grid-cols-5 m-0 p-0">*/}
                {list.map((item, index) => (
                    <div className="rounded-lg pr-14 mb-5" key={item.title}>
                        <Image
                            alt={item.title}
                            isZoomed
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            className="w-full object-cover min-h-[150px] min-w-[150px] rounded-md"
                            src={MusicPic.src}
                        />
                        <div className="flex justify-between">
                            <div className="p-1">
                                <h2 className="text-gray-100 text-lg font-bold ">Red</h2>
                                <p className="text-gray-400 text-sm">Taylor Swift</p>
                            </div>
                            <div className="flex items-center justify-between px-4 pb-4">
                            </div>
                        </div>

                    </div>
                ))}
                {/*</div>*/}
            </div>
        </div>

    );
}
