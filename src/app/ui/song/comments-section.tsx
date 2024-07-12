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

    const placeholderArray = new Array(2).fill(null);

    return (
        <div className=" mt-10">
            <p className="text-lg font-semibold">Comments</p>
            <div className="m-0 md:m-5 space-y-5">
                {
                    loading ? (
                            placeholderArray.map((_, index) => (
                                <div key={index} data-theme="halloween" className="p-4 my-2 bg-transparent">
                                    <div className="flex gap-10 bg-neutral-900 ">
                                        <div className="skeleton  h-12 w-16 "></div>
                                        <div className="flex flex-row  w-full justify-between content-between gap-7">
                                            <div className="flex flex-col gap-3 mt-2">
                                                <div className="skeleton rounded-md h-3 w-28"></div>

                                                <div className="skeleton rounded-md h-3 w-40"></div>
                                            </div>
                                            <div className="flex flex-col gap-2 mt-2">
                                                <div className="skeleton rounded-md h-3 w-40"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-col ml-24 mt-5">
                                        <div className="skeleton rounded-md h-3  w-full"></div>
                                        <div className="skeleton rounded-md h-3  w-full"></div>
                                        <div className="skeleton rounded-md h-3  w-16"></div>
                                    </div>
                                </div>
                            ))
                        )
                        :
                        data?.track.comments.map((comment: any, index: React.Key | null | undefined) => (
                            <CommentNarrow key={comment.id} comment={comment}/>
                        ))}
            </div>
        </div>
    );
}
