'use client'

import React, { useRef } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@apollo/client";
import { GET_ALL_ARTISTS } from "@/graphql/queries";

export default function Page() {
    const { data, loading, error } = useQuery(GET_ALL_ARTISTS, {});
    const selectedArtistRef = useRef(null);

    const handleSelectChange = (value: string) => {
        selectedArtistRef.current = value;
        console.log('Selected Artist ID:', value);
    };

    return (
        <div>
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select the artist"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {data?.artists.map((artist: any) => (
                            <SelectItem key={artist.id} value={artist.id}>{artist.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
