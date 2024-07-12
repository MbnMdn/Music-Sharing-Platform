"use client"

import React, {createContext, useContext, useRef, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_SONG} from "@/graphql/queries";
import {getClient, query} from "@/lib/apollo";
const Context = createContext();


type TrackInfo = {
    id: number,
    cover: string,
    title: string,
    artist: {
        name : string,
    },
    duration: number,
    file_link: string
}
export function GlassPlayerProvider({ children }: React.PropsWithChildren) {


    const [providerTrackId, setProviderTrackId] = useState({
        id: 1,
        cover: 'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/1000x1000-000000-80-0-0.jpg',
        title: 'Get Lucky',
        artist: {
            name : 'Daft Punk',
        },
        duration: 248,
        file_link: 'https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3'
    }); // Default song ID

    const [isPlaying, setIsPlaying] = useState(false);

    const setNewTrack = async (id : TrackInfo) => {
        setProviderTrackId(id);
        setIsPlaying(true);
    };

    return (
        <Context.Provider value={[providerTrackId,setNewTrack, isPlaying, setIsPlaying]}>{children}</Context.Provider>
    );
}
export function usePlayerContext() {
    return useContext(Context);
}