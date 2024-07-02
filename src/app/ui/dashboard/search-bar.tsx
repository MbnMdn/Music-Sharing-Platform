import {Input} from "@nextui-org/react";
import {Search} from "@/app/ui/dashboard/search";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
    return (
        // <Input
        //     classNames={{
        //         base: "max-w-full sm:max-w-[20rem] lg:w-80 h-10",
        //         mainWrapper: "h-full",
        //         input: "text-small",
        //         inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        //     }}
        //
        //     placeholder="Type to search..."
        //     size="sm"
        //     startContent={<Search size={18} width={undefined} height={undefined}/>}
        //     type="search"
        // />

            <label className="input input-bordered flex items-center bg-transparent border-none hover:border-none gap-2">
                <input type="text" className="input w-full max-w-xs bg-transparent border-none hover:border-none sm:max-w-[20rem] lg:w-40 h-10 " placeholder="Search..."/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"/>
                </svg>
            </label>
    );
}


