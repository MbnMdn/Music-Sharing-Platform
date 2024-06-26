import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import SongNarrow from "@/app/ui/user/song-narrow";
import UserCoverImage from "@/app/ui/user/user-cover-image";


export default function Page() {
    return (
        <>
            <ScrollShadow hideScrollBar size={100}  className="w-full h-full">
                <UserCoverImage/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
                <SongNarrow/>
            </ScrollShadow>
        </>
    );
}