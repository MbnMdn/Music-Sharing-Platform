'use client'

import * as React from "react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useMediaQuery} from "@react-hook/media-query";
import {Textarea} from "@/components/ui/textarea"
import {IoIosAddCircleOutline} from "react-icons/io";


export function UploadDrawer() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    // if (isDesktop) {
    //     return (
    //         <Dialog open={open} onOpenChange={setOpen}>
    //             <DialogTrigger asChild>
    //                 <Button variant="outline">Edit Profile</Button>
    //             </DialogTrigger>
    //             <DialogContent className="sm:max-w-[425px]">
    //                 <DialogHeader>
    //                     <DialogTitle>Edit profile</DialogTitle>
    //                     <DialogDescription>
    //                         Make changes to your profile here. Click save when you are done.
    //                     </DialogDescription>
    //                 </DialogHeader>
    //                 <UploadForm/>
    //             </DialogContent>
    //         </Dialog>
    //     )
    // }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    className="fixed bottom-5 right-5  bg-violet-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-violet-700 flex gap-2">
                    <IoIosAddCircleOutline size={16}/>
                    Add new song
                </Button>
            </DrawerTrigger>
            <DrawerContent className="flex align-middle items-center">
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you are done.
                    </DrawerDescription>
                </DrawerHeader>
                <UploadForm className="px-4"/>
                <Button type="submit" className="block">Upload</Button>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline" className="block">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function UploadForm({className}: React.ComponentProps<"form">) {
    return (
        <form className={cn("grid items-start gap-4 w-1/2", className)}>
            <div className="flex justify-between">
                <div className="grid gap-2 w-5/12">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" placeholder="What is the name of this song?"/>
                </div>
                <div className="grid gap-2 w-5/12">
                    <Label htmlFor="singer">Singer</Label>
                    <Input type="text" id="singer" placeholder="Who is the singer of this song?"/>
                </div>
            </div>


            <div className="flex justify-between">
                <div className="grid gap-2 w-5/12">
                    <Label htmlFor="album">Album</Label>
                    <Input type="text" id="album" placeholder="What album does this song belong to?"/>
                </div>
                <div className="grid gap-2 w-5/12">
                    <Label htmlFor="year">Release year</Label>
                    <Input type="number" id="year" placeholder="What year was this song released?"/>
                </div>
            </div>


            <div className="flex justify-between">
                <div className="grid gap-2 w-5/12">
                    <Label htmlFor="genre">Genre</Label>
                    <Input type="text" id="genre" placeholder="What is the genre of this song?"/>
                </div>
                <div className="grid gap-2 items-end w-5/12">
                    <Input id="cover" type="file"/>
                </div>
            </div>


            <div className="grid gap-2">
                <Label htmlFor="lyrics">Lyrics</Label>
                <Textarea placeholder="Enter the lyrics"/>
            </div>
        </form>
    )
}



