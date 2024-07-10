"use client"

import React from "react";
import SongNarrow from "@/app/ui/user/song-narrow";
import {useQuery} from "@apollo/client";
import {GET_ARTIST, GET_USER} from "@/graphql/queries";
import UserCoverImage from "@/app/ui/user/user-cover-image";
import {UploadDrawer} from "@/app/ui/user/upload-form";

export default function Page({params}: { params: { id: number } }) {

    const {data, loading, error} = useQuery(GET_USER, {
        variables: {
            "user_id": params.id,
        }
    });

    return (
        <div>
            <UserCoverImage artist={data?.user}/>
            <UploadDrawer/>
            {data?.user.tracks.map((song: any, index: number) => (
                <SongNarrow edit={0} song={song} key={song.name} index={index} song_id={song.id}/>
            ))}
        </div>
    );
}