import {useQuery} from "@apollo/client";
import {GET_SONG} from "@/graphql/queries";
import React from "react";
import CommentNarrow from "@/app/ui/song/comment-narrow"

export default function CommentsSection({trackId}: { trackId: number }) {

    const {data, loading, error} = useQuery(GET_SONG, {
        variables: {
            "song_id": trackId,
        }
    });

    return (
        <div className=" mt-10">
            <p className="text-lg font-semibold">Comments</p>
            <div className="m-0 md:m-5 space-y-5">
                {data?.track.comments.map((comment: any, index: React.Key | null | undefined) => (
                    <CommentNarrow key={comment.id} comment={comment}/>
                    ))}
            </div>
        </div>
    );
}
