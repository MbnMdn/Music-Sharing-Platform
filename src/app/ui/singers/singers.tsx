
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import Image from "next/image";
import SingerCard from "@/app/ui/singers/singer-card";

import MusicPic from "@/app/ui/dashboard/assets/music-pic.jpg";


const singers = [
    {
        singer: 'Taylor Swift',
        pic: {MusicPic},
    },
    {
        singer: 'Eminem',
        pic: {MusicPic},
    },
    {
        singer: 'PSY',
        pic: {MusicPic},
    },
    {
        singer: 'Justin Bieber',
        pic: {MusicPic},
    },
    {
        singer: 'The weekend',
        pic: {MusicPic},
    },
    {
        singer: 'Taylor Swift',
        pic: {MusicPic},
    },
    {
        singer: 'Eminem',
        pic: {MusicPic},
    },
    {
        singer: 'PSY',
        pic: {MusicPic},
    },
    {
        singer: 'Justin Bieber',
        pic: {MusicPic},
    },
    {
        singer: 'The weekend',
        pic: {MusicPic},
    },
    {
        singer: 'Taylor Swift',
        pic: {MusicPic},
    },
    {
        singer: 'Eminem',
        pic: {MusicPic},
    },
    {
        singer: 'PSY',
        pic: {MusicPic},
    },
    {
        singer: 'Justin Bieber',
        pic: {MusicPic},
    },
    {
        singer: 'The weekend',
        pic: {MusicPic},
    },
    {
        singer: 'Taylor Swift',
        pic: {MusicPic},
    },
    {
        singer: 'Eminem',
        pic: {MusicPic},
    },
    {
        singer: 'PSY',
        pic: {MusicPic},
    },
    {
        singer: 'Justin Bieber',
        pic: {MusicPic},
    },
    {
        singer: 'The weekend',
        pic: {MusicPic},
    },
]

export default function Singers() {
    return (
        <div className="scrollable-container">
            <div className="grid grid-cols-5 gap-3">
                {singers.map((singer, index) => (
                    <SingerCard song={singer} key={index}/>
                ))}
            </div>
        </div>
    );
}


