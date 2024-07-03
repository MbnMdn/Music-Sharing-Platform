import NavLinks from '@/app/ui/dashboard/nav-links';
import React from "react";
import GlassPlayer from "@/app/ui/dashboard/glass-player";
import {SheetSide} from "@/app/SheetSide";
import {PiNotificationBold} from "react-icons/pi";


export default function SideNav() {
    return (
        <div>
            <div className="flex h-screen flex-col px-3 py-4 md:px-4 justify-between md:pb-11 ">
                <div className="flex h-screen flex-col justify-between">
                    <SheetSide/>

                    <div
                        className="flex grow flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-1">
                        {/*<SearchBar/>*/}
                        <NavLinks/>
                    </div>
                    <div className="hidden h-auto w-full rounded-md md:block "><GlassPlayer/></div>
                </div>
            </div>
        </div>
    );
}


// <div className="indicator ">
//     <span className="indicator-item badge badge-secondary">99+</span>
//     <div className="w-14 h-14 ">
//         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//              alt="alt" className="rounded-xl"/>
//     </div>
// </div>