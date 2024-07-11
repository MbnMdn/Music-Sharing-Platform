"use client"

import React from "react";
import SongNarrow from "@/app/ui/user/song-narrow";
import {useQuery} from "@apollo/client";
import {GET_ARTIST, GET_ME, GET_USER} from "@/graphql/queries";
import UserCoverImage from "@/app/ui/user/user-cover-image";
import {UploadDrawer} from "@/app/ui/user/upload-form";

export default function Page({params}: { params: { id: number } }) {

    const {data, loading, error} = useQuery(GET_USER, {
        variables: {
            "user_id": params.id,
        }
    });


    const {data : dataMe, loading: loadingMe, error: errorMe} = useQuery(GET_ME, {
    });


    return (
        <div>
            <UserCoverImage artist={data?.user}/>
            {dataMe?.me.id === params.id ? <UploadDrawer/> : console.log("not equal")}
            {data?.user.tracks.map((song: any, index: number) => (
                <SongNarrow edit={0} song={song} key={song.name} index={index} song_id={song.id}/>
            ))}
        </div>
    );
}