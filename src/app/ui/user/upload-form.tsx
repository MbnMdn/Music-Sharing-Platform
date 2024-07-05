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
// import {useMediaQuery} from "@react-hook/media-query";
import {Textarea} from "@/components/ui/textarea"
import {IoIosAddCircleOutline} from "react-icons/io";


export function UploadDrawer() {
    const [open, setOpen] = React.useState(false)
    // const isDesktop = useMediaQuery("(min-width: 768px)")

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
                    className="fixed bottom-16 md:bottom-5 right-5  bg-violet-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-violet-700 flex gap-2">
                    <IoIosAddCircleOutline size={16}/>
                    Add new song
                </Button>
            </DrawerTrigger>
            <DrawerContent className="flex align-middle items-center bg-neutral-800 border-none">
                <DrawerHeader className="text-left">
                    <DrawerTitle>Upload new song</DrawerTitle>
                    <DrawerDescription>

                    </DrawerDescription>
                </DrawerHeader>
                <UploadForm className="px-4"/>
                <div className="flex gap-10">
                    <Button type="submit" variant="outline" className="block text-neutral-800 bg-neutral-300 hover:bg-neutral-50 mt-5">Upload</Button>
                    <DrawerClose asChild>
                        <Button variant="outline" className="block bg-transparent hover:bg-neutral-700 hover:text-white my-5">Cancel</Button>
                    </DrawerClose>
                </div>

            </DrawerContent>
        </Drawer>
    )
}

function UploadForm({className}: React.ComponentProps<"form">) {
    return (
        <form className={cn("grid items-start gap-0 w-4/5 md:w-5/6 lg:w-2/3 overflow-y-auto", className)}>

            <div className="flex flex-col md:flex-row justify-between mb-0 md:mb-3">
                <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                    <Label htmlFor="name">Name</Label>
                    <Input className="bg-neutral-800" type="text" id="name"
                           placeholder="What is the name of this song?"/>
                </div>
                <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                    <Label htmlFor="singer">Singer</Label>
                    <Input className="bg-neutral-800" type="text" id="singer"
                           placeholder="Who is the singer of this song?"/>
                </div>
            </div>


            <div className="flex  flex-col md:flex-row justify-between  mb-0 md:mb-3">
                <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                    <Label htmlFor="album">Album</Label>
                    <Input className="bg-neutral-800" type="text" id="album"
                           placeholder="What album does this song belong to?"/>
                </div>
                <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                    <Label htmlFor="year">Release year</Label>
                    <Input className="bg-neutral-800" type="number" id="year"
                           placeholder="What year was this song released?"/>
                </div>
            </div>


            <div className="flex  flex-col md:flex-row justify-between  mb-0 md:mb-3">
                <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                    <Label htmlFor="genre">Genre</Label>
                    <Input className="bg-neutral-800" type="text" id="genre"
                           placeholder="What is the genre of this song?"/>
                </div>
                <div className="grid gap-2  w-full md:w-5/12 items-end mb-3 ">
                    <Label htmlFor="genre">Cover image</Label>
                    <Input className="bg-neutral-800" id="cover" type="file"/>
                </div>
            </div>


            <div className="grid gap-2 mb-3">
                <Label htmlFor="lyrics">Lyrics</Label>
                <Textarea placeholder="Enter the lyrics"/>
            </div>
        </form>
    )
}



