'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import React from "react";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import SearchBar from "@/app/ui/dashboard/search-bar";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-60 mr-4 md:mt-5">
                <SideNav/>
            </div>
            <div className="flex-grow p-6 overflow-y-auto md:p-11">
                <div className="flex space-x-20 justify-between relative bg-neutral-900 w-full">
                    <Breadcrumbs/>
                    <SearchBar/>
                </div>
                {children}
            </div>
        </div>
    );
}