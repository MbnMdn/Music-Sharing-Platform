"use client"

import React from "react";
import SongNarrow from "@/app/ui/user/song-narrow";
import {useQuery} from "@apollo/client";
import {GET_ME, GET_USER} from "@/graphql/queries";
import UserCoverImage from "@/app/ui/user/user-cover-image";
import {UploadDrawer} from "@/app/ui/user/upload-form";

export default function Page({params}: { params: { id: number } }) {

    const {data, loading, error} = useQuery(GET_USER, {
        variables: {
            "user_id": params.id,
        }
    });

    const {data: dataMe, loading: loadingMe, error: errorMe} = useQuery(GET_ME, {});

    const placeholderArray = new Array(5).fill(null);

    return (
        <div>
            {loading ?
                <div data-theme="halloween" className="skeleton rounded-md h-52 md:h-72 lg:h-96 w-full my-6 "></div>
                :
                <UserCoverImage artist={data?.user}/>
            }
            {dataMe?.me.id === params.id ? <UploadDrawer/> : console.log("not equal")}
            {loading ? (
                    placeholderArray.map((_, index) => (
                        <div data-theme="halloween" key={index} className="p-4 my-2 bg-transparent">
                            <div className="flex gap-8 bg-neutral-900 ">
                                <div className="skeleton  h-12 w-28 "></div>
                                <div className="flex flex-row  w-full justify-between content-between gap-7">
                                    <div className="flex flex-col gap-3 mt-2">
                                        <div className="skeleton rounded-md h-3 w-40"></div>
                                        <div className="skeleton rounded-md h-3 w-28"></div>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="skeleton rounded-md h-3 w-16"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
                :
                data?.user.tracks.map((song: any, index: number) => (
                    <SongNarrow edit={0} song={song} key={song.name} index={index} song_id={song.id}/>
                ))}
        </div>
    );
}