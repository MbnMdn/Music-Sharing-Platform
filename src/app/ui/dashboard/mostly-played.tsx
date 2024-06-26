import React from 'react';
import MusicPic from './assets/music-pic.jpg'
import {IoIosArrowForward} from "react-icons/io";
import {Bungee_Outline} from "next/font/google";

export default function MostlyPlayed() {

    const bands = [
        {
            id: 1,
            name: 'Ice Nine Kills',
            subscribers: '432k subscribers',
            image: 'url-to-ice-nine-kills-image',
        },
        {
            id: 2,
            name: 'Bloodywood',
            subscribers: '31k subscribers',
            image: 'url-to-bloodywood-image',
        },
        {
            id: 3,
            name: 'Bad Omens',
            subscribers: '183k subscribers',
            image: 'url-to-bad-omens-image',
        },
        {
            id: 4,
            name: 'Lorna Shore',
            subscribers: '108k subscribers',
            image: 'url-to-lorna-shore-image',
        },
        {
            id: 5,
            name: 'Annisokay',
            subscribers: '79k subscribers',
            image: 'url-to-annisokay-image',
        },
    ];


    return (
        <div className="text-white grid">
            <h1 className="text-4xl font-bold mb-11">Mostly Played</h1>
            {bands.map((band) => (
                // eslint-disable-next-line react/jsx-key
                <div className="grid  grid-cols-[10%_25%_50%_5%] gap-0 mb-1 ">
                    <div className={"text-7xl font-bold mr-4 "}>{band.id}</div>
                    <div className="items-center">
                        <img src={MusicPic.src} alt={band.name} className="w-16 h-16 object-cover rounded"/>
                    </div>
                    <div className="content-center">
                        <div className="text-lg font-semibold">{band.name}</div>
                        <div className="text-sm">{band.subscribers}</div>
                    </div >
                    <div className="content-center"><IoIosArrowForward/></div>
                </div>
            ))}
        </div>
    );
}









