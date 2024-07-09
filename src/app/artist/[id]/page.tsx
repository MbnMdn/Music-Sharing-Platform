"use client"

import React from "react";
import SongNarrow from "@/app/ui/user/song-narrow";
import {useQuery} from "@apollo/client";
import {GET_ARTIST} from "@/graphql/queries";
import UserCoverImage from "@/app/ui/user/user-cover-image";


export default function Page({params}: { params: { id: number } }) {

    const {data, loading, error} = useQuery(GET_ARTIST, {
        variables: {
            "artist_id": params.id,
        }
    });

    // console.log(data?.artist.header_image)
    return (
        <div>
            <UserCoverImage artist={data?.artist}/>
            {/*<UploadDrawer/>*/}
            {data?.artist.tracks.map((song: any, index: number) => (
                <SongNarrow edit={0} song={song} key={song.name} index={index} song_id={song.id}/>
            ))}
        </div>
    );
}