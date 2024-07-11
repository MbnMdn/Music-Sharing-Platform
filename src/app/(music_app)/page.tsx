"use client"

import React from "react";
import MostlyPlayed from "@/app/ui/dashboard/mostly-played";
import TrendingSection from "@/app/ui/dashboard/trending-section";
import RecentlyPlayedSection from "@/app/ui/dashboard/recently-played-section";

export default function Page() {
    return (
        <div>
            <div className="flex-col space-y-12">
                <TrendingSection/>
                <div className="flex flex-col  lg:flex-row  lg:space-x-20">
                    <RecentlyPlayedSection/>
                    <div className="w-full mt-16 mb-16 md:mb-2 lg:mb-0 lg:mt-0 lg:w-2/6  flex-none ">
                        <MostlyPlayed/>
                    </div>
                </div>
            </div>
        </div>
    );
}