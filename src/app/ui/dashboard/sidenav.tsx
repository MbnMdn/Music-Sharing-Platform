import NavLinks from '@/app/ui/dashboard/nav-links';
import React from "react";
import GlassPlayer from "@/app/ui/dashboard/glass-player";


export default function SideNav() {
    return (
        <div>
            <div className="">

                <div className="flex h-screen flex-col px-3 py-4 md:px-4 justify-between md:pb-11 ">
                    <div className="flex h-screen flex-col justify-between">

                        <div className="flex w-full ">
                            <div className=" flex w-full avatar  space-x-2">
                                <div className="w-14 h-14 rounded-xl">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                         alt="alt"/>
                                </div>
                                <div className="flex flex-col content-center">
                                    <p className="text-md">mbina</p>
                                    <p className="text-xs">@mbn_mdn</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex grow flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-1">
                            {/*<SearchBar/>*/}
                            <NavLinks/>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                        </div>
                        <div className="hidden h-auto w-full rounded-md md:block "><GlassPlayer/></div>

                    </div>

                </div>
            </div>
        </div>
    )
        ;
}
