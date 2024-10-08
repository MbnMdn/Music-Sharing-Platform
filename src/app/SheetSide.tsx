"use client"
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
import {TbNotification} from "react-icons/tb";
import {useSession} from "next-auth/react";
import {useQuery} from "@apollo/client";
import {GET_ME, GET_RECENTLY_PLAYED} from "@/graphql/queries";
import {getMediaPath} from "@/app/utilities/getMediaPath";
import avatar from "@/app/ui/assets/avatar.png"

export function SheetSide() {
    const {data, loading, error} = useQuery(GET_ME, {
    });

    return (
        <Sheet>
            <SheetTrigger asChild>
                {
                    loading ? <div data-theme="halloween" className="bg-transparent w-full ml-5 mb-3 ">
                            <div className="flex gap-4 bg-neutral-900 ">
                                <div className="skeleton  h-14 w-16 md:w-24 rounded-full  "></div>
                                <div className="flex flex-row  w-full justify-between content-between gap-7">
                                    <div className="flex flex-col gap-3 mt-5">
                                        <div className="skeleton rounded-md h-2 w-28"></div>
                                        <div className="skeleton rounded-md h-2 w-20"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex w-full ml-5 ">
                            <div className=" flex w-full avatar  space-x-2">
                                {/*<SheetSide/>*/}
                                <div className="w-14 h-14 rounded-xl">
                                    <img src={avatar.src}
                                         alt="user avatar"/>
                                </div>
                                <div className="flex flex-col content-center">
                                    <p className="text-md flex gap-2">
                                        {data?.me.name}
                                        {/*<TbNotification className="self-center"/>*/}
                                        <svg className="self-center" width="12" height="15" viewBox="0 0 20 23"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 21C8.5 22.3333 11.5 22.3333 13 21" stroke="#fff" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M10.9987 1.05208C10.9996 1.03483 11 1.01747 11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1C9 1.01748 9.00045 1.03486 9.00134 1.05212C5.65368 1.53463 2.50369 5.29948 3.00005 9.5C3.25713 10.7854 2.44768 11.4664 1.60517 12.1752C0.809054 12.845 -0.0165819 13.5396 0.000253188 14.7925C0.000253188 16.5484 1.00001 17.5 2.4683 17.9719C2.4683 17.9719 5.15739 19 10.0001 19C14.8429 19 17.5319 17.9719 17.5319 17.9719C19.0002 17.5 20.0002 16.5 20 14.7925C19.9998 13.5288 19.1747 12.8339 18.383 12.1672C17.5442 11.4609 16.743 10.7861 17.0002 9.5C17.0894 8.74479 17.0608 8.00366 16.9344 7.29316C16.416 7.73083 15.7473 7.99597 15.0167 7.99995C15.0611 8.39404 15.0643 8.7967 15.0211 9.2027C14.8228 10.3108 15.0604 11.2779 15.5647 12.0801C16.0023 12.7762 16.6175 13.2948 16.9944 13.6125L17.0229 13.6365C17.97 14.4354 18 14.5596 18 14.7927C18.0001 15.2288 17.8833 15.4409 17.7775 15.5684C17.6501 15.722 17.3987 15.914 16.92 16.0679L16.8684 16.0844L16.8252 16.1009L16.822 16.1021C16.8132 16.1053 16.7943 16.112 16.7653 16.1218C16.7073 16.1415 16.6091 16.1734 16.4719 16.2138C16.1974 16.2945 15.7666 16.4088 15.1876 16.5252C14.0301 16.7581 12.2794 17 10.0001 17C7.72086 17 5.97019 16.7581 4.81263 16.5252C4.23369 16.4088 3.80287 16.2945 3.52836 16.2138C3.39111 16.1734 3.29297 16.1415 3.23497 16.1218C3.20598 16.112 3.18702 16.1053 3.17823 16.1021L3.17509 16.101L3.13188 16.0844L3.08028 16.0678C2.57899 15.9067 2.33382 15.7188 2.21549 15.5778C2.12294 15.4676 2.00025 15.2637 2.00025 14.7925V14.779L2.00007 14.7656C1.9974 14.5665 2.00237 14.4559 2.96343 13.6461L2.9923 13.6218L2.99231 13.6218C3.3711 13.3028 3.98794 12.7834 4.42771 12.088C4.93433 11.287 5.17843 10.317 4.97921 9.20278C4.80686 7.5846 5.3713 6.0193 6.35016 4.83963C7.36228 3.61987 8.6503 3 9.71912 3H10.2811C10.9172 3 11.6309 3.21955 12.3179 3.65443C12.6321 3.02945 13.1583 2.52941 13.8021 2.24871C12.9423 1.61603 11.979 1.19333 10.9987 1.05208Z"
                                                  fill="#fff"/>
                                            <circle cx="15" cy="5" r="2" fill="#fff"/>
                                        </svg>
                                    </p>
                                    <p className="text-xs text-neutral-500">@{data?.me.name}</p>
                                </div>
                            </div>
                        </div>
                }


            </SheetTrigger>

            <SheetContent className="w-[400px] sm:w-[540px]  bg-neutral-800 border-none">
                <SheetHeader>
                    <SheetTitle className="mb-5 flex gap-2 text-white align-bottom">Notifications
                        <PiNotificationBold
                            className="text-white content-center justify-center self-center"/>
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
