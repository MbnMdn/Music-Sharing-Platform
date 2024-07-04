import CommentNarrow from "@/app/ui/song/comment-narrow";

export default function CommentsSection() {
    return(
        <div className=" mt-10">
            <p className="text-lg font-semibold">Comments</p>
            <div className="m-5 space-y-5">
                <CommentNarrow/>
                <CommentNarrow/>
                <CommentNarrow/>
                <CommentNarrow/>
                <CommentNarrow/>
                <CommentNarrow/>
                <CommentNarrow/>
                <CommentNarrow/>
            </div>

        </div>
    );
}
