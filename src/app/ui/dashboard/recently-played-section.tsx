import SongNarrow from "@/app/ui/user/song-narrow";
import React from "react";
import {useQuery} from "@apollo/client";
import {GET_RECENTLY_PLAYED} from "@/graphql/queries";
import {useSession} from "next-auth/react";

export default function RecentlyPlayedSection() {
    const session = useSession();

    const {data, loading, error} = useQuery(GET_RECENTLY_PLAYED, {});

    const placeholderArray = new Array(10).fill(null);

    return (
        <div className="lg:w-4/6 ">
            <h1 className="text-4xl font-bold mb-11">Recently Played</h1>
            <div className="h-96 overflow-y-auto scrollbar-hide">
                {loading ? (
                    placeholderArray.map((_, index) => (
                        <div key={index} className="p-4">
                            <div data-theme="halloween" className="flex gap-7 bg-neutral-900 ">
                                <div className="skeleton  h-12 w-32 "></div>
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
                ) : (data?.getRecentlyViewedSongs.map((song: any, index: number) => (
                    <SongNarrow edit={0} song={song} key={song.id} index={index} song_id={song.id}/>
                )))}
            </div>
        </div>
    );
}