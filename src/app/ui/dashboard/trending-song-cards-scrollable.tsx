import React from "react";
import SongCard from "@/app/ui/dashboard/song-card";
import MusicPic from './assets/music-pic.jpg'

export default function TrendingSongCardsScrollable() {
    const songs = [
        {
            song_name : 'Red',
            singer: 'Taylor Swift',
            pic: {MusicPic},
        },
        {
            song_name : 'MockingBird',
            singer: 'Eminem',
            pic: {MusicPic},
        },
        {
            song_name : 'Champion',
            singer: 'PSY',
            pic: {MusicPic},
        },
        {
            song_name : 'Despacito',
            singer: 'Justin Bieber',
            pic: {MusicPic},
        },
        {
            song_name : 'Blinding Lights',
            singer: 'The weekend',
            pic: {MusicPic},
        },
        {
            song_name : 'Red',
            singer: 'Taylor Swift',
            pic: {MusicPic},
        },
        {
            song_name : 'MockingBird',
            singer: 'Eminem',
            pic: {MusicPic},
        },
        {
            song_name : 'Champion',
            singer: 'PSY',
            pic: {MusicPic},
        },
        {
            song_name : 'Despacito',
            singer: 'Justin Bieber',
            pic: {MusicPic},
        },
        {
            song_name : 'Blinding Lights',
            singer: 'The weekend',
            pic: {MusicPic},
        },

    ];

    return (
        <div className="scrollable-container">
            <div className="flex overflow-x-auto scrollbar-hide">
                {songs.map((song, index) => (
                    <SongCard song={song} key={index}/>
                ))}
            </div>
        </div>
    );
}
