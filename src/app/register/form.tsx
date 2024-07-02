// import {Button} from "@nextui-org/react";
import {FaGoogle} from "react-icons/fa";
import React from "react";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
export default function Form() {
    return (
        // <div className="flex flex-col space-y-5 align-middle justify-center content-center items-center">
        //
        //     <label className="input  input-bordered flex items-center gap-2">
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             viewBox="0 0 16 16"
        //             fill="currentColor"
        //             className="h-4 w-4 opacity-70">
        //             <path
        //                 d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
        //         </svg>
        //         <input type="text" className="grow " placeholder="Username"/>
        //     </label>
        //     <label className="input input-bordered flex items-center gap-2">
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             viewBox="0 0 16 16"
        //             fill="currentColor"
        //             className="h-4 w-4 opacity-70">
        //             <path
        //                 fillRule="evenodd"
        //                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
        //                 clipRule="evenodd"/>
        //         </svg>
        //         <input type="password" className="grow" value="password"/>
        //     </label>
        //
        //
        //     <button className="btn btn-wide  btn-primary">Sign In</button>
        //     <div className="divider">OR</div>
        //
        //     <button className="btn btn-wide flex items-center gap-2">
        //         <FaGoogle/>
        //         <span className="ml-2">Sign In with Google</span>
        //     </button>
        // </div>
        <Tabs defaultValue="signin" className="w-[400px] justify-around ">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
                <Card className="bg-transparent border-none shadow-none">
                    <CardHeader>
                        <CardTitle>Welcome back</CardTitle>
                        <CardDescription>
                            lorem lkeofjbwfnwe cw ciwubc wi c w cviw cwe cw cwec wecfwefnwoe
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {/*<div className="flex flex-col mb-2">*/}
                        {/*    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>*/}
                        {/*    <div className="flex items-stretch">*/}
                        {/*        <div className="flex items-center px-3 bg-gray-200 border border-gray-300 rounded-l">*/}
                        {/*            @*/}
                        {/*        </div>*/}
                        {/*        <input type="text" className="form-control px-3 py-2 border border-gray-300 rounded-r"*/}
                        {/*               id="inlineFormInputGroup" placeholder="Username"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="space-y-1">
                            <Label htmlFor="name">Username</Label>
                            <Input id="username" placeholder="Enter your username"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Password</Label>
                            <Input id="password" defaultValue="Password" type="password" className="text-neutral-500"/>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-around">
                        <Button className="w-full">Login</Button>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value="signup">
                <Card className="bg-transparent border-none shadow-none">
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Email</Label>
                            <Input id="username" placeholder="Enter your email"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="name">Username</Label>
                            <Input id="username" placeholder="Enter your username"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Password</Label>
                            <Input id="password" defaultValue="Password" type="password" className="text-neutral-500"/>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-around">
                        <Button className="w-full">Create Account</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
