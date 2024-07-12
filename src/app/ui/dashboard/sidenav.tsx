import NavLinks from '@/app/ui/dashboard/nav-links';
import React from "react";
import GlassPlayer from "@/app/ui/dashboard/glass-player";
import {SheetSide} from "@/app/SheetSide";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function SideNav() {
    return (
        <div>
            <div className="flex md:h-screen flex-col px-3 py-4 md:px-4 justify-between md:pb-11 ">
                <div className="flex md:h-screen flex-col justify-between">
                    <SheetSide/>
                    <div
                        className="md:ml-3 fixed rounded-md bg-violet-950 md:bg-neutral-900 bottom-0 right-0  left-0 lg:static md:static flex grow flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-1">
                        <NavLinks/>
                    </div>
                    <div className="hidden h-auto w-full rounded-md md:block "><GlassPlayer shadow={true}/></div>
                </div>
            </div>
        </div>
    );
}
