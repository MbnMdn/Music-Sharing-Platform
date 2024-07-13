"use client"

import React from "react";
import SongInfoCover from "@/app/ui/song/song-info-cover";
import CommentsSection from "@/app/ui/song/comments-section";
import {CommentDrawer} from "@/app/ui/song/comment-drawer";
import {EditSongDrawer} from "@/app/ui/song/edit-song-drawer";
import {useQuery} from "@apollo/client";
import {GET_MY_ID, GET_SONG_UPLOADER} from "@/graphql/queries";

export default function Page({params}: { params: { id: number } }) {

    const {data, loading, error} = useQuery(GET_SONG_UPLOADER, {
        variables: {
            "song_id": params.id,
        }
    });


    const {data: dataMe, loading: loadingMe, error: errorMe} = useQuery(GET_MY_ID, {});

    return (
        <div>
            <SongInfoCover id={params.id}/>
            <CommentsSection trackId={params.id}/>
            <CommentDrawer trackId={params.id}/>
            {loadingMe ? <div></div> : dataMe?.me.id === data?.track.uploader.id ?
                <EditSongDrawer trackId={params.id}/> : <div></div>}
        </div>
    )


    // if(data?.track.id){
    //     return (
    //         <div>
    //             <SongInfoCover id={params.id}/>
    //             <CommentsSection trackId={params.id}/>
    //             <CommentDrawer trackId={params.id}/>
    //             {loadingMe ? <div></div> : dataMe?.me.id === data?.track.uploader.id ?
    //                 <EditSongDrawer trackId={params.id}/> : <div></div>}
    //         </div>
    //     )
    // }else{
    //     return (
    //         <div className="self-center">Track Not Found</div>
    //     )
    // }
}

