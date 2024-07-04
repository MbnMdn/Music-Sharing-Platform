// import {Button} from "@nextui-org/react";
import React from "react";

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"

export default function Form() {
    return (
        <Tabs defaultValue="signin" className="w-[400px] justify-around ">
            <TabsList className="grid w-full grid-cols-2 bg-violet-50">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
                <Card className="bg-transparent border-none shadow-none">
                    <CardHeader>
                        <CardTitle>Welcome back</CardTitle>
                        <CardDescription className="text-justify">
                            We're thrilled to see you again. Log in to rediscover your favorite tunes and the latest music trends.
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
                            <Input id="password" placeholder="•••••••••"  type="password" className="text-neutral-500"/>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-around flex-col gap-4">
                        <Button className="w-full bg-violet-950 hover:bg-violet-800">Login</Button>

                        <div className="divider">OR</div>

                        <button
                            className="w-full btn  flex items-center gap-2 m-0 p-0 bg-transparent border-b-violet-200 hover:bg-violet-50">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                 viewBox="0 0 48 48">
                                <path fill="#FFC107"
                                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00"
                                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50"
                                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2"
                                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>

                            <span className="ml-2 ">Continue with Google</span>
                        </button>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value="signup">
                <Card className="bg-transparent border-none shadow-none">
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription className="text-justify">
                            Your musical journey starts here! Stay connected with your favorite artists and discover new tracks.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Email</Label>
                            <Input id="username" placeholder="Enter your email"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="username" placeholder="Enter your name"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="name">Username</Label>
                            <Input id="username" placeholder="Enter your username"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Password</Label>
                            <Input id="password" placeholder="•••••••••" type="password" className="text-neutral-500"/>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-around">
                        <Button className="w-full bg-violet-950 hover:bg-violet-800">Create Account</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
