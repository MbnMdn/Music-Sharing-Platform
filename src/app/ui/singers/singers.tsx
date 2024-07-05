import React from 'react'
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
            <div
                className="grid grid-cols-2 max-[600px]:grid-cols-2 max-[768px]:grid-cols-3 min-[900px]:grid-cols-3  lg:grid-cols-4 gap-2">
                {singers.map((singer, index) => (
                    <SingerCard song={singer} key={index}/>
                ))}
            </div>
        </div>
    );
}


