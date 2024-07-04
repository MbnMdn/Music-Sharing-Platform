import React from "react";
import TrendingSongCards from "@/app/ui/dashboard/song-card";

export default function TrendingSection(){

    return(
        <div className="flex-col gap-3">
            <h1 className="text-5xl font-bold mb-10">Trending Songs</h1>
            <TrendingSongCards/>
        </div>

    );
}