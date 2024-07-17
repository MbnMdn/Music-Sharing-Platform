'use client'

import * as React from "react"
import {useRef} from "react"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Label} from "@/components/ui/label"
// import {useMediaQuery} from "@react-hook/media-query";
import {MdAddComment} from "react-icons/md";

import {Textarea} from "@/components/ui/textarea"
import {useMutation} from "@apollo/client";
import {CREATE_COMMENT} from "@/graphql/mutations";


export function CommentDrawer({trackId}: { trackId: number }) {
    const [open, setOpen] = React.useState(false)

    const comment = useRef<string>("");

    const [createComment, {data, loading, error}] = useMutation(CREATE_COMMENT);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    className="fixed bottom-16 md:bottom-5 right-5  bg-violet-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-violet-700 flex gap-2">
                    <MdAddComment size={16}/>
                    Add a comment
                </Button>
            </DrawerTrigger>
            <DrawerContent className="flex align-middle items-center bg-neutral-800 border-none">
                <DrawerHeader className="text-left">
                    <DrawerTitle>Write a comment</DrawerTitle>
                    <DrawerDescription>

                    </DrawerDescription>
                </DrawerHeader>

                {/*FORM*/}
                <form className={cn("grid items-start gap-0 w-4/5 md:w-5/6 lg:w-2/3 overflow-y-auto")}>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="lyrics">Comment</Label>
                        <Textarea
                            placeholder="Enter your comment"
                            onChange={(e) => comment.current = e.target.value}
                        />
                    </div>
                </form>

                {/*<CommentSection className="px-4" track_id={trackId}/>*/}

                <DrawerClose asChild>
                    <div className="flex gap-10">
                        <Button type="submit" variant="outline"
                                className="block text-neutral-800 bg-neutral-300 hover:bg-neutral-50 mt-5"
                                onClick={async () => {
                                    await createComment({
                                        variables: {
                                            body: comment.current,
                                            track_id: trackId
                                        }
                                    })
                                }}
                        >Comment</Button>

                        <Button variant="outline"
                                className="block bg-transparent hover:bg-neutral-700 hover:text-white my-5">Cancel</Button>
                    </div>

                </DrawerClose>
            </DrawerContent>
        </Drawer>
    )
}

