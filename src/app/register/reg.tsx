"use client"

import React from "react";
import MusicPic from '../ui/dashboard/assets/dark.jpg'
import {Card, CardBody} from "@nextui-org/react";
import {FaGithub, FaGoogle} from "react-icons/fa";

export default function Reg() {
    const [liked, setLiked] = React.useState(false);
    return (


        <div>
            <img
                alt="Album cover"
                className="object-cover items-center absolute h-full"
                src={MusicPic.src}
                width="100%"
            />

            <div className="flex items-center justify-center h-screen">
                <Card
                    isBlurred
                    className="border-none bg-background/10 dark:bg-default-100/50 w-11/12 h-9/10 "
                    shadow="sm"
                >
                    <div className=" relative flex flex-col content-center items-center px-1 py-1 z-10 ">
                        <div className="space-y-2 items-center">
                            <CardBody>
                                <div
                                    className="flex gap-20 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                                    <div className="max-w-md w-full space-y-8">
                                        <div>
                                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                                Sign to <span className="text-orange-500">SoundBox</span>
                                            </h2>
                                            <p className="mt-2 text-center text-sm text-gray-600">
                                                New to SoundBox? <a href="#"
                                                                    className="font-medium text-orange-500 hover:text-orange-400">Sign
                                                Up now</a>
                                            </p>
                                        </div>
                                        <form className="mt-8 space-y-6" action="#" method="POST">
                                            <div className="rounded-md shadow-sm -space-y-px">
                                                <div className="mt-4">
                                                    <button type="button"
                                                            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                        <FaGoogle/>
                                                        <span className="ml-2">Sign In with Google</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="relative mt-4">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-gray-300"></div>
                                                </div>
                                                <div className="relative flex justify-center text-sm">
                                                    <span className="px-2 text-gray-500">Or</span>
                                                </div>
                                            </div>

                                            <div>
                                                {/*<label htmlFor="email-address" className="sr-only">Email address</label>*/}
                                                <input id="email-address" name="email" type="email" autoComplete="email"
                                                       required
                                                       className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                                       placeholder="Enter your email"/>
                                            </div>
                                            <div>
                                                {/*<label htmlFor="password" className="sr-only">Password</label>*/}
                                                <input id="password" name="password" type="password"
                                                       autoComplete="current-password" required
                                                       className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                                       placeholder="Password"/>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <input id="remember_me" name="remember_me" type="checkbox"
                                                           className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"/>
                                                    <label htmlFor="remember_me"
                                                           className="ml-2 block text-sm text-gray-900">Remember for 30
                                                        days</label>
                                                </div>

                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-orange-500 hover:text-orange-400">Forgot
                                                        Password?</a>
                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit"
                                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>
                                        <div className="flex justify-center space-x-4 mt-6">

                                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                                <FaGithub size={24}/>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center ">
                                        {/*<img*/}
                                        {/*    alt="Album cover"*/}
                                        {/*    className="object-cover rounded-lg h-full w-full"*/}
                                        {/*    src={MusicPic.src}*/}
                                        {/*    width="100%"*/}
                                        {/*/>*/}
                                        {/*<div className="text-white px-8">*/}
                                        {/*    <h2 className="text-3xl font-bold">Connect on SoundBox</h2>*/}
                                        {/*    <p className="mt-4 text-lg">Discover, stream, and share a constantly*/}
                                        {/*        expanding mix of music from*/}
                                        {/*        emerging and major artists around the world.</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                    </div>
                </Card>
            </div>
        </div>


    );
}


//"use client"
//
// import React from "react";
// import MusicPic from '../ui/dashboard/assets/back.webp'
// import {Button, Card, CardBody, Image, Slider} from "@nextui-org/react";
//
// export default function Reg() {
//     const [liked, setLiked] = React.useState(false);
//     return (
//
//
//         <div>
//             <img
//                 alt="Album cover"
//                 className="object-cover items-center absolute h-full"
//                 src={MusicPic.src}
//                 width="100%"
//             />
//
//             <div className="flex items-center justify-center h-screen">
//                 <Card
//                     isBlurred
//                     className="border-none bg-background/90 dark:bg-default-100/50 w-11/12 h-5/6 "
//                     shadow="sm"
//                 >
//                     <div className=" relative flex flex-col content-center items-center px-1 py-1 z-10 ">
//                         <div className="space-y-2 items-center">
//                             <CardBody>
//                                 <div className="flex justify-center items-center w-full">
//                                     <div className=" max-w-[100%] ">
//                                         {/*<Image*/}
//                                         {/*    alt="Album cover"*/}
//                                         {/*    className="object-cover items-center "*/}
//                                         {/*    height="100%"*/}
//                                         {/*    shadow="md"*/}
//                                         {/*    src={MusicPic.src}*/}
//                                         {/*    width="100%"*/}
//                                         {/*/>*/}
//                                     </div>
//                                 </div>
//
//
//                                 <div className="grid grid-cols-6  gap-6 md:gap-4 items-center justify-center py-3">
//                                     <div className="flex flex-col col-span-6 md:col-span-8">
//                                         <div className="flex justify-between items-start">
//                                             <div className="flex flex-col gap-0">
//                                                 <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
//                                                 <p className="text-small text-foreground/80">12 Tracks</p>
//                                             </div>
//                                             <Button
//                                                 isIconOnly
//                                                 className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
//                                                 radius="full"
//                                                 variant="light"
//                                                 onPress={() => setLiked((v) => !v)}
//                                             >
//                                             </Button>
//                                         </div>
//
//                                         <div className="flex flex-col mt-3 gap-1">
//                                             <Slider
//                                                 aria-label="Music progress"
//                                                 classNames={{
//                                                     track: "bg-default-500/30",
//                                                     thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
//                                                 }}
//                                                 color="foreground"
//                                                 defaultValue={33}
//                                                 size="sm"
//                                             />
//                                             <div className="flex justify-between">
//                                                 <p className="text-small">1:23</p>
//                                                 <p className="text-small text-foreground/50">4:32</p>
//                                             </div>
//                                         </div>
//
//                                         <div className="flex w-full items-center justify-center">
//                                             <Button
//                                                 isIconOnly
//                                                 className="data-[hover]:bg-foreground/10"
//                                                 radius="full"
//                                                 variant="light"
//                                             >
//
//                                             </Button>
//                                             <Button
//                                                 isIconOnly
//                                                 className="data-[hover]:bg-foreground/10"
//                                                 radius="full"
//                                                 variant="light"
//                                             >
//                                             </Button>
//                                             <Button
//                                                 isIconOnly
//                                                 className="w-auto h-auto data-[hover]:bg-foreground/10"
//                                                 radius="full"
//                                                 variant="light"
//                                             >
//                                             </Button>
//                                             <Button
//                                                 isIconOnly
//                                                 className="data-[hover]:bg-foreground/10"
//                                                 radius="full"
//                                                 variant="light"
//                                             >
//                                             </Button>
//                                             <Button
//                                                 isIconOnly
//                                                 className="data-[hover]:bg-foreground/10"
//                                                 radius="full"
//                                                 variant="light"
//                                             >
//
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardBody>
//                         </div>
//                     </div>
//                 </Card>
//             </div>
//         </div>
//
//
//     );
// }