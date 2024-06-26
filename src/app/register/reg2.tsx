// import React from 'react';
// function Page() {

// }
//
import React from "react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Reg2() {

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign to <span className="text-orange-500">SoundBox</span>
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        New to SoundBox? <a href="#" className="font-medium text-orange-500 hover:text-orange-400">Sign
                        Up now</a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">

                        <div className="mt-4">
                            <button type="button"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg className="h-5 w-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9V9h2v5zm-1-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="ml-2">Sign In with Google</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative mt-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-black text-gray-500">Or</span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required
                               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                               placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                               placeholder="Password"/>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                   className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"/>
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember for 30
                                days</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-orange-500 hover:text-orange-400">Forgot
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
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12.004 2c-5.52 0-10 4.481-10 10 0 4.412 2.872 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.012-1.704-2.781.604-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.068-.608.068-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.911.832.091-.646.349-1.088.635-1.339-2.221-.252-4.556-1.111-4.556-4.945 0-1.091.39-1.984 1.029-2.683-.104-.253-.446-1.269.097-2.647 0 0 .84-.269 2.75 1.025a9.555 9.555 0 012.5-.336c.848.004 1.703.115 2.5.336 1.91-1.294 2.749-1.025 2.749-1.025.543 1.378.201 2.394.098 2.647.641.699 1.029 1.592 1.029 2.683 0 3.843-2.339 4.689-4.566 4.935.359.309.68.922.68 1.858 0 1.342-.012 2.422-.012 2.752 0 .268.18.578.688.48 3.964-1.325 6.833-5.077 6.833-9.489 0-5.519-4.48-10-10-10z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center"
                 style={{backgroundImage: "url('https://source.unsplash.com/random')"}}>
                <div className="flex items-center h-full w-full bg-black bg-opacity-50">
                    <div className="text-white px-8">
                        <h2 className="text-3xl font-bold">Connect on SoundBox</h2>
                        <p className="mt-4 text-lg">Discover, stream, and share a constantly expanding mix of music from
                            emerging and major artists around the world.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}