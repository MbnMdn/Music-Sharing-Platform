'use client'

import {GET_ARTIST, GET_SONG, GET_USER} from "@/graphql/queries";

import React, {Fragment} from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useQuery} from '@apollo/client';


export default function Breadcrumbs() {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);


    const songIdIndex = pathNames.findIndex(path => path.toLowerCase() === 'song');
    const songId = songIdIndex !== -1 ? pathNames[songIdIndex + 1] : null;

    const artistIdIndex = pathNames.findIndex(path => path.toLowerCase() === 'artists');
    const artistId = artistIdIndex !== -1 ? pathNames[artistIdIndex + 1] : null;

    const userIdIndex = pathNames.findIndex(path => path.toLowerCase() === 'users');
    const userId = userIdIndex !== -1 ? pathNames[userIdIndex + 1] : null;

    const {data: dataSong, loading: loadingSong, error: errorSong} = useQuery(GET_SONG, {
        variables: {song_id: songId},
        skip: !songId
    });

    const {data: dataArtist, loading: loadingArtist, error: errorArtist} = useQuery(GET_ARTIST, {
        variables: {artist_id: artistId},
        skip: !artistId
    });

    const {data: dataUser, loading: loadingUser, error: errorUser} = useQuery(GET_USER, {
        variables: {user_id: userId},
        skip: !userId
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator/>
                {
                    pathNames.map((link, index) => {
                        let linkName = link[0].toUpperCase() + link.slice(1);
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`;


                        const isSongSegment = link.toLowerCase() === 'song';
                        const isSongIdSegment = songId && link === songId;

                        const isArtistSegment = link.toLowerCase() === 'artists';
                        const isArtistIdSegment = artistId && link === artistId;

                        const isUserSegment = link.toLowerCase() === 'user';
                        const isUserIdSegment = userId && link === userId;

                        if (isSongIdSegment && dataSong?.track.title) {
                            linkName = dataSong.track.title;
                            href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        }

                        if (isArtistIdSegment && dataArtist?.artist.name) {
                            linkName = dataArtist.artist.name;
                            href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        }

                        if (isUserIdSegment && dataUser?.user.name) {
                            linkName = dataUser.user.name;
                            href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        }

                        const isLastPath = pathNames.length === index + 1 || (isSongIdSegment && index === songIdIndex + 1) || (isArtistIdSegment && index === artistIdIndex + 1) || (isUserIdSegment && index === userIdIndex + 1);

                        return (
                            <Fragment key={index}>
                                {/* Add "song" breadcrumb before the title */}
                                {isSongSegment && !isSongIdSegment && (
                                    <>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link href={`/${pathNames.slice(0, index + 1).join('/')}`}>Song</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator/>
                                    </>
                                )}
                                {/* Add "artists" breadcrumb before the artist name */}
                                {isArtistSegment && !isArtistIdSegment && (
                                    <>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link
                                                    href={`/${pathNames.slice(0, index + 1).join('/')}`}>Artists</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator/>
                                    </>
                                )}
                                {/* Add "users" breadcrumb before the users name */}
                                {isUserSegment && !isUserIdSegment && (
                                    <>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link href={`/${pathNames.slice(0, index + 1).join('/')}`}>Users</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator/>
                                    </>
                                )}
                                <BreadcrumbItem>
                                    {!isLastPath && !isSongSegment && !isArtistSegment && !isUserSegment && (
                                        <BreadcrumbLink asChild>
                                            <Link href={href}>{linkName}</Link>
                                        </BreadcrumbLink>
                                    )}
                                    {isLastPath && !isSongSegment && !isArtistSegment && !isUserSegment && (
                                        <BreadcrumbPage className="text-neutral-500">{linkName}</BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {pathNames.length !== index + 1 && !isSongSegment && !isArtistSegment && !isUserSegment &&
                                    <BreadcrumbSeparator/>}
                            </Fragment>
                        );
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
}
