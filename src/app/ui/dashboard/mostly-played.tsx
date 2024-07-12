import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {useQuery} from "@apollo/client";
import {GET_MOSTLY_PLAYED} from "@/graphql/queries";
import {getMediaPath} from "@/app/utilities/getMediaPath";
import Link from "next/link";
import {removeFeat} from "@/app/utilities/remove-feat"


export default function MostlyPlayed() {

    const placeholderArray = new Array(5).fill(null);


    const {data, loading, error} = useQuery(GET_MOSTLY_PLAYED, {});

    return (
        <div className="text-white grid  ">
            <h1 className="text-4xl font-bold mb-11">Mostly Played</h1>
            {
                loading ? (
                        placeholderArray.map((_, index) => (
                            <div key={index} className="mb-4">
                                <div data-theme="halloween"  className="flex gap-7 bg-neutral-900 ">
                                    <div className="skeleton h-16 w-28 "></div>
                                    <div className="flex flex-col gap-3 mt-3">
                                        <div className="skeleton h-3 w-16"></div>
                                        <div className="skeleton h-3 w-32"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) :

                    (data?.getMostlyPlayedSongs.map((song: any, index: number) => (
                        <Link key={song.id} href={{
                            pathname: `/song/${song.id}`,
                        }}>
                        <div
                                className="grid max-[600px]:grid-cols-[8%_25%_50%_5%] max-[768px]:grid-cols-[5%_25%_50%_5%] md:grid-cols-[2%_25%_50%_5%]  lg:grid-cols-[8%_25%_50%_5%] gap-0 mb-2 justify-around "
                                key={song.id}>
                                <div className={"text-7xl font-bold mr-4 "}>{index + 1}</div>
                                <div className="items-center">
                                    <img src={getMediaPath(song.cover)} alt={song.title}
                                         className="w-16 h-16 object-cover rounded"/>
                                </div>
                                <div className="content-center">
                                    <div className="text-lg font-semibold">{removeFeat(song.title)}</div>
                                    <Link
                                        href={{
                                            pathname: `artists/${song?.artist.id}`,
                                        }}
                                        key={song?.artist.id}
                                    >
                                        <div className="text-sm text-neutral-500">{song.artist.name}</div>
                                    </Link>
                                </div>
                                <div className="content-center"><IoIosArrowForward/></div>
                            </div>
                        </Link>
                    )))}
        </div>
    );
}









