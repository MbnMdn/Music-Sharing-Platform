import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

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

            <div className="flex overflow-x-auto ">
                {/*<div className="gap-2 grid grid-cols-2 sm:grid-cols-5 m-0 p-0">*/}
                {list.map((item, index) => (
                    // <Card shadow="sm" key={index} className="bg-transparent m-0 p-0">
                    //     <CardBody className="overflow-visible p-0  ">
                    //         <div className="flex justify-center items-center w-full overflow-hidden relative">
                    //             <div className=" max-w-[75%] ">
                    //                 <Image
                    //                     shadow="sm"
                    //                     radius="lg"
                    //                     width="100%"
                    //                     alt={item.title}
                    //                     className="w-full object-cover"
                    //                     src={MusicPic.src}
                    //
                    //                 />
                    //             </div>
                    //         </div>
                    //
                    //     </CardBody>
                    //     <CardFooter className="flex-col justify-items-start text-small text-amber-50">
                    //         <b>{item.title}</b>
                    //         <p className="text-default-500">{item.price}</p>
                    //     </CardFooter>
                    // </Card>
                    // eslint-disable-next-line react/jsx-key
                    <div className="rounded-lg pr-14 mb-5">
                        <Image
                            isZoomed
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            className="w-full object-cover min-h-[150px] min-w-[150px]"
                            src={MusicPic.src}

                        />
                        <div className="flex justify-between">
                            <div className="p-1">
                                <h2 className="text-gray-100 text-lg font-bold ">Red</h2>
                                <p className="text-gray-400 text-sm">Taylor Swift</p>
                            </div>
                            <div className="flex items-center justify-between px-4 pb-4">
                                {/*<div className="text-gray-400 text-sm flex items-center">*/}
                                {/*    <svg className="w-4 h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg"*/}
                                {/*         viewBox="0 0 24 24">*/}
                                {/*        <path*/}
                                {/*            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>*/}
                                {/*    </svg>*/}
                                {/*    25*/}
                                {/*</div>*/}
                            </div>
                        </div>

                    </div>
                ))}
                {/*</div>*/}
            </div>
        </div>

    );
}
