"use client"

import React from "react";
import SongNarrow from "@/app/ui/user/song-narrow";
import {useQuery} from "@apollo/client";
import {GET_ARTIST, GET_ME, GET_USER} from "@/graphql/queries";
import UserCoverImage from "@/app/ui/user/user-cover-image";
import {UploadDrawer} from "@/app/ui/user/upload-form";
import Singers from "@/app/ui/artists/singers";
import Users from "@/app/ui/user/users";
import Songs from "@/app/ui/song/songs";

export default function Page() {
    return (
        <div className="flex-col gap-3 mt-2">
            <h1 className="text-5xl font-bold mb-12">Uploaded Songs</h1>
            <Songs/>
        </div>
    );
}