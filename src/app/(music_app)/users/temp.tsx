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
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
// import {useMediaQuery} from "@react-hook/media-query";
import {Textarea} from "@/components/ui/textarea"
import {useMutation, useQuery} from "@apollo/client";
import {UPLOAD_SONG} from "@/graphql/mutations";
import {GET_ALL_ARTISTS, GET_ALL_GENRES, GET_SONG} from "@/graphql/queries";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPen} from "react-icons/fa6";


export function EditSongDrawer({trackId}: { trackId: number }) {

    const {data: dataTrack, loading: loadingTrack, error: errorTrack} = useQuery(GET_SONG, {
        variables: {
            "song_id": trackId,
        }
    });

    console.log(dataTrack?.track.artist.name);

    const [open, setOpen] = React.useState(false)
    const [uploadSong, {data, loading, error}] = useMutation(UPLOAD_SONG);
    const {data: dataArtists, loading: loadingArtists, error: errorArtists} = useQuery(GET_ALL_ARTISTS, {});
    const {data: dataGenres, loading: loadingGenres, error: errorGenres} = useQuery(GET_ALL_GENRES, {});


    const name = useRef<string>("");
    // const singer = useRef<string>("");
    const selectedArtistRef = useRef(dataTrack?.track.artist.id);
    const duration = useRef<number>(0);
    const selectedGenre = useRef(null);
    const lyrics = useRef<string>("");
    const cover = useRef<any>(null);
    const songFile = useRef<any>(null);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    className="fixed bottom-28 md:bottom-20 right-5  bg-violet-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-violet-700 flex gap-2">
                    <FaPen size={16}/>
                    Edit
                </Button>
            </DrawerTrigger>
            <DrawerContent className="flex align-middle items-center bg-neutral-800 border-none">
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit your uploaded song</DrawerTitle>
                    <DrawerDescription>

                    </DrawerDescription>
                </DrawerHeader>
                {/*upload form:*/}
                <div className="px-4">
                    <form className={cn("grid items-center gap-0  overflow-y-auto")}>

                        <div className="flex flex-col md:flex-row justify-between mb-0 md:mb-3">
                            <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                                <Label htmlFor="name">Name</Label>
                                <Input className="bg-neutral-800" type="text" id="name"
                                       defaultValue={dataTrack?.track.title}
                                       onChange={(e) => name.current = e.target.value}
                                />
                            </div>
                            <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                                <Label htmlFor="singer">Singer</Label>
                                <Select onValueChange={(value) => {
                                    // @ts-ignore
                                    selectedArtistRef.current = value;
                                }}>
                                    <SelectTrigger>
                                        <SelectValue defaultValue={dataTrack?.track.artist.id}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {dataArtists?.artists.map((artist: any) => (
                                                <SelectItem key={artist.id} value={artist.id}>{artist.name}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>


                            </div>
                        </div>


                        <div className="flex  flex-col md:flex-row justify-between  mb-0 md:mb-3">

                            <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                                <Label htmlFor="year">duration</Label>
                                <Input className="bg-neutral-800" type="number" id="duration"
                                       defaultValue={dataTrack?.track.duration}
                                       placeholder="How long is the track? (seconds)"
                                       onChange={(e) => duration.current = Number(e.target.value)}
                                />
                            </div>

                            <div className="grid gap-2 w-full md:w-5/12 mb-3 ">
                                <Label htmlFor="genre">Genre</Label>

                                <Select onValueChange={(value) => {
                                    // @ts-ignore
                                    selectedGenre.current = value;
                                }}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select the genre"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {dataGenres?.genres.map((genre: any) => (
                                                <SelectItem key={genre.id} value={genre.id}>{genre.name}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>


                        <div className="flex  flex-col md:flex-row justify-between  mb-0 md:mb-3">

                            <div className="grid gap-2  w-full md:w-5/12 items-end mb-3 ">
                                <Label htmlFor="genre">Cover</Label>
                                <Input className="bg-neutral-800" id="cover" type="file"
                                       ref={cover}/>
                            </div>


                            <div className="grid gap-2  w-full md:w-5/12 items-end mb-3 ">
                                <Label htmlFor="genre">Song file</Label>
                                <Input className="bg-neutral-800" id="cover" type="file" ref={songFile}/>
                            </div>
                        </div>


                        <div className="grid gap-2 mb-3">
                            <Label htmlFor="lyrics">Lyrics</Label>
                            <Textarea placeholder="Enter the lyrics" id="lyrics"
                                      onChange={(e) => lyrics.current = e.target.value}
                            />
                        </div>

                    </form>
                </div>
                {/*<UploadForm className="px-4"/>*/}
                <div className="flex gap-10">
                    <Button type="submit" variant="outline"
                            className="block text-neutral-800 bg-neutral-300 hover:bg-neutral-50 mt-5"
                            onClick={() => uploadSong({
                                variables: {
                                    id: trackId,
                                    title: name.current,
                                    duration: duration.current,
                                    genre_id: selectedGenre.current,
                                    artist_id: selectedArtistRef.current,
                                    cover: cover.current.files[0],
                                    file: songFile.current.files[0],
                                    lyrics: lyrics.current,
                                },
                            })}
                    >Update</Button>
                    <DrawerClose asChild>
                        <Button variant="outline"
                                className="block bg-transparent hover:bg-neutral-700 hover:text-white my-5">Cancel</Button>
                    </DrawerClose>
                </div>

            </DrawerContent>
        </Drawer>
    )

}