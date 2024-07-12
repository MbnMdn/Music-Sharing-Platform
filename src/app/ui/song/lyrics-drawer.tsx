import * as React from "react"
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
// import {useMediaQuery} from "@react-hook/media-query";
import {MdOutlineLyrics} from "react-icons/md";
import MusicPic from "@/app/ui/assets/music-pic.jpg";


// const song = {
//     id: 1,
//     cover: {MusicPic},
//     name: 'Mockingbird',
//     singer: 'Eminem',
//     album: 'blah',
//     lyrics: 'Oops, lyrics are not available for this song :(',
//     release_year: '2002',
//     genre: 'genre'
// };

export default function LyricsDrawer({data}: { data: any }) {
    const [open, setOpen] = React.useState(false)
    // const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <p className="text-sm lg:text-sm font-semibold flex gap-1">Lyrics <MdOutlineLyrics
                    className="md:self-center"/></p>
            </DrawerTrigger>
            <DrawerContent className="flex align-middle items-center text-gray-100 h-2/3  bg-neutral-800 border-none focus-visible:border-none focus-visible:bg-neutral-800 focus-visible:outline-none">
                <DrawerHeader className="text-left">
                    <DrawerTitle>{data?.track.title}</DrawerTitle>
                    <DrawerDescription>
                    </DrawerDescription>
                </DrawerHeader>
                <div className="items-start gap-4 w-2/3 text-justify overflow-y-auto">
                    {/*{song.lyrics}*/}
                </div>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline" className="block bg-transparent hover:bg-neutral-700 hover:text-white mt-5">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}



