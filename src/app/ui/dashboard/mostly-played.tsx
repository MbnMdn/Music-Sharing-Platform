import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {useQuery} from "@apollo/client";
import {GET_MOSTLY_PLAYED} from "@/graphql/queries";
import {getMediaPath} from "@/app/utilities/getMediaPath";

export default function MostlyPlayed() {
    const {data, loading, error} = useQuery(GET_MOSTLY_PLAYED, {});


    // const {data, loading, error} = useQuery(GET_MOSTLY_PLAYED, {
    //     variables: {
    //         "artist_id": params.id,
    //     }
    // });

    // const bands = [
    //     {
    //         id: 1,
    //         name: 'Ice Nine Kills',
    //         subscribers: '432k subscribers',
    //         image: 'url-to-ice-nine-kills-image',
    //     },
    //     {
    //         id: 2,
    //         name: 'Bloodywood',
    //         subscribers: '31k subscribers',
    //         image: 'url-to-bloodywood-image',
    //     },
    //     {
    //         id: 3,
    //         name: 'Bad Omens',
    //         subscribers: '183k subscribers',
    //         image: 'url-to-bad-omens-image',
    //     },
    //     {
    //         id: 4,
    //         name: 'Lorna Shore',
    //         subscribers: '108k subscribers',
    //         image: 'url-to-lorna-shore-image',
    //     },
    //     {
    //         id: 5,
    //         name: 'Annisokay',
    //         subscribers: '79k subscribers',
    //         image: 'url-to-annisokay-image',
    //     },
    // ];

    return (
        <div className="text-white grid  ">
            <h1 className="text-4xl font-bold mb-11">Mostly Played</h1>
            {data?.getMostlyPlayedSongs.map((song: any, index: number) => (
                <div
                    className="grid max-[600px]:grid-cols-[8%_25%_50%_5%] max-[768px]:grid-cols-[5%_25%_50%_5%] md:grid-cols-[2%_25%_50%_5%]  lg:grid-cols-[8%_25%_50%_5%] gap-0 mb-1 justify-around "
                    key={song.id}>
                    <div className={"text-7xl font-bold mr-4 "}>{index + 1}</div>
                    <div className="items-center">
                        <img src={getMediaPath(song.cover)} alt={song.title} className="w-16 h-16 object-cover rounded"/>
                    </div>
                    <div className="content-center">
                        <div className="text-lg font-semibold">{song.title}</div>
                        <div className="text-sm text-neutral-500">{song.artist.name}</div>
                    </div>
                    <div className="content-center"><IoIosArrowForward/></div>
                </div>
            ))}
        </div>
    );
}









