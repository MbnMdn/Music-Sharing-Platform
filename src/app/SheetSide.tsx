import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {PiNotificationBold} from "react-icons/pi";
import React from "react";

export function SheetSide() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex w-full">
                    <div className=" flex w-full avatar  space-x-2">
                        {/*<SheetSide/>*/}
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
            </SheetTrigger>

            <SheetContent className="w-[400px] sm:w-[540px]  bg-neutral-800 border-none">
                <SheetHeader>
                    <SheetTitle className="mb-5 flex gap-2 text-white align-bottom">Notifications <PiNotificationBold
                        className="text-white content-center justify-center"/>
                    </SheetTitle>
                    <SheetDescription>
                        <p>Erfan liked your song</p>
                        <div className="divider my-1 p-0"></div>

                        <p>Erfan liked your song</p>
                        <div className="divider my-1 p-0"></div>

                        <p>Erfan liked your song</p>
                        <div className="divider my-1 p-0"></div>

                        <p>Erfan liked your song</p>
                        <div className="divider my-1 p-0"></div>

                        <p>Erfan liked your song</p>
                        <div className="divider my-1 p-0"></div>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
