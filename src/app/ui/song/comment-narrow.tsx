'use client'

import React from 'react';
import MusicPic from '../dashboard/assets/music-pic.jpg'
import Image from 'next/image'


// const comment = {
//     id: 1,
//     name: 'Taylor Swift',
//     username: '@taylor_s',
//     comment: 'hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor hey im a comment from taylor',
//     profilePic: {MusicPic},
//     date: '20 May 2024',
//     time: '20:23'
// };




export default function CommentNarrow({comment} : {comment : any}) {

    const [date, time] = comment?.created_at.split(' ');
    const [hour, minute] = time.split(':');
    const formattedTime = `${hour}:${minute}`;



    console.log(comment);

    return (
        <div className="flex flex-col text-white   rounded-md justify-between ">
            <div className="flex w-full  p-4">
                <Image
                    alt={comment?.user.name}
                    height={100}
                    width={100}
                    className="w-12 h-12 rounded-md "
                    src={'http://192.168.158.179:8000' + comment?.user.avatar}
                />
                <div className="flex-grow ml-6">
                    <div className="flex justify-between">
                        <div className="text-accent font-semibold">{comment?.user.name}</div>
                        <div className="flex gap-2 md:gap-6">
                            <div className="text-xs  text-zinc-500">{date}</div>
                            <div className="text-xs  text-zinc-500">{formattedTime}</div>
                        </div>
                    </div>
                    <div className=" items-center  text-zinc-500">{comment?.user.email}</div>
                    <div className=" text-accent items-center mt-2 text-justify">{comment?.body}</div>
                </div>
            </div>
            <div className="divider m-0 p-0 "></div>
        </div>
    );
};